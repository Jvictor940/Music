const express = require('express'); 
const router = express.Router();
const {
    getSongs,
    postSong,
    deleteSongs,
    getSong,
    updateSong,
    deleteSong
} = require('../controllers/songController');

router.route('/')
.get(getSongs)
.post(postSong)
.delete(deleteSongs)

router.route('/:songId')
.get(getSong)
.put(updateSong)
.delete(deleteSong)

module.exports = router; 