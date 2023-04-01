const User = require('../models/User');
const { options } = require('../routes/user')

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