const express = require('express');
const router = express.Router();
const {
    getUsers,
    createUser, 
    deleteUsers,
    getUser,
    updateUser,
    deleteUser
} = require('../controllers/userController');

router.route('/')
.get(getUsers)
.post(createUser)
.delete(deleteUsers)

router.route('/:userId')
.get(getUser)
.put(updateUser)
.delete(deleteUser)

module.exports = router; 
