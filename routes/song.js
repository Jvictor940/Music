const express = require('express'); 
const router = express.Router();
const {
    getSongs,
    postSong,
    deleteSongs
} = require('../controllers/songController');

router.route('/')
.get(getSongs)
.post(postSong)
.delete(deleteSongs)

module.exports = router; 