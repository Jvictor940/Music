const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


const UserSchema = new Schema({
    userName: {
        type: String, 
        unique: true, 
        required: true, 
        maxLength: 10
    }, 
    gender: {
        type: String, 
        required: true, 
        enum: [
            'Male',
            'Female',
            'male',
            'female',
        ]
    }, 
    age: {
        type: Number, 
        required: true,
    }, 
    email: {
        type: String, 
        required: true,
        unique: true, 
        validate: (email) => validator.isEmail(email)
    }, 
    password: {
        type: String, 
        required: true, 
        validate: (password) => validator.isStrongPassword(password)
    }, 
    firstName: {
        type: String,
        required: true, 
        maxLength: 15
    },
    lastName: {
        type: String,
        required: true, 
        maxLength: 15
    }, 
    admin: {
        type: Boolean, 
        default: false
    }
}, {
    timestamps: true
})

UserSchema.pre('save', async function(next){
    this.userName = this.userName.trim()
    this.firstName = this.firstName.trim()
    this.lastName = this.lastName.trim()
    if(!this.isModified('password')) next();

    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt);
    next()
})

UserSchema.post('save', function(next){
    this.gender = this.gender.toUpperCase()
})

UserSchema.methods.getSignedJwtToken = function() {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE
    })
}

UserSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

module.exports = mongoose.model('User', UserSchema)