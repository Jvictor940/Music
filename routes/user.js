const express = require('express');
const router = express.Router();
const {
    getUsers,
    createUser, 
    deleteUsers
} = require('../controllers/userController');

router.route('/')
.get(getUsers)
.post(createUser)
.delete(deleteUsers)

module.exports = router; 
