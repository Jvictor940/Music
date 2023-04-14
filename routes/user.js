const express = require('express');
const router = express.Router();
const {
    getUsers,
    createUser, 
    deleteUsers,
    getUser,
    updateUser,
    deleteUser, 
    login
} = require('../controllers/userController');
const adminValidator = require('../middlewares/utils/validators')
const protectedRoute = require('../middlewares/auth')

router.route('/')
.get(protectedRoute, adminValidator, getUsers)
.post(createUser)
.delete(protectedRoute, deleteUsers)

router.route('/login')
.post(login)

router.route('/:userId')
.get(getUser)
.put(protectedRoute, updateUser)
.delete(protectedRoute, deleteUser)

module.exports = router; 
