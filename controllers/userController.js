const User = require('../models/User');

const getUsers = async (req, res, next) => {
    try {
        const users = await User.find()
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
        res 
        .status(201)
        .setHeader('Content-Type', 'application/json')
        .json(createUser)
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

    if(Object.keys(req.query).length){
        const {
            userName,
            gender
        } = req.query

        const filter = [];
        if(userName) filter.push(userName)
        if(gender) filter.push(gender)

        for (const query of filter){
            console.log(`Searching user by: ${query}`)
        }
    }
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

module.exports = {
    getUsers,
    createUser,
    deleteUsers,
    getUser,
    updateUser,
    deleteUser
}