const User = require('../models/User');
// const { options } = require('../routes/user')

const getUsers = async (req, res, next) => {
    const filter = {};
    const options = {};

    if(Object.keys(req.query).length){
        const {
            sortByAge, 
            userName,
            gender,
            limit, 
            age
        } = req.query

        if(userName) filter.userName = true;
        if(gender) filter.gender = true;
        if (age) filter.age = true;

        if (limit) options.limit = limit;
        if (sortByAge) options.sort = {
            age: sortByAge
        }
        console.log(filter, options)
    }

    try {
        const users = await User.find({}, filter, options)
        res 
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(users)
    } catch (err) {
        next(err)
    }
}

const createUser = async (req, res, next) => {
    try {
        const createdUser = await User.create(req.body)
        sendTokenResponse(createdUser, 201, res)
    } catch (err) {
        next(err)
    }
}
const deleteUsers = async (req, res, next) => {
    try {
        const deletedUsers = await User.deleteMany()
        res 
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(deletedUsers)
    } catch (err) {
       next(err) 
    }
}

// For 'user/:userId'
const getUser = async (req, res, next) => {
  
    try {
        const user = await User.findById(req.params.userId)
        res 
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(user)
    } catch (err) {
       next(err) 
    }
}

const updateUser = async (req, res, next) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.userId, req.body, {new: true})
        res 
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(updatedUser)
    } catch (err) {
       next(err) 
    }
}

const deleteUser = async (req, res, next) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.userId)
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json()
    } catch (err) {
       next(err) 
    }
}

const login = async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) throw new Error('Please provide a email and password')

    const user = await User.findOne({ email }).select('+password')

    if(!user) throw new Error('Invalid Credentials')

    const isMatch = await user.matchPassword(password)

    if(!isMatch) throw new Error('Invalid Credentials')
    sendTokenResponse(user, 200, res)
}

const sendTokenResponse = (user, statuscode, res) => {
    const token = user.getSignedJwtToken();

    const options = {
        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000), 
        httpOnly: true
    }

    res
    .status(statuscode)
    .cookie('token', token, options)
    .json(token)
}
module.exports = {
    getUsers,
    createUser,
    deleteUsers,
    getUser,
    updateUser,
    deleteUser, 
    login
}