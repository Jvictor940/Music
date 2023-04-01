const express = require('express'); 
const router = express.Router();
const {
    getSongs,
    postSong,
    deleteSongs,
    getSong,
    updateSong,
    deleteSong,
    getSongRatings,
    postSongRating,
    deleteSongRatings

} = require('../controllers/songController');

router.route('/')
.get(getSongs)
.post(postSong)
.delete(deleteSongs)

router.route('/:songId')
.get(getSong)
.put(updateSong)
.delete(deleteSong)

router.route('/:songId/ratings')
.get(getSongRatings)
.post(postSongRating)
.delete(deleteSongRatings)

module.exports = router; 