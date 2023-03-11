const express = require('express');
const router = express.Router();
const {
    getArtist,
    createArtist,
    deleteArtist
} = require('../controllers/artistController');

router.route('/')
.get(getArtist)
.post(createArtist)
.delete(deleteArtist)

module.exports = router; 
