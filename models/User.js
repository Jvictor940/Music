const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator');


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
        maxLength: 10
    },
    lastName: {
        type: String,
        required: true, 
        maxLength: 10
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('User', UserSchema)