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
    deleteSongRatings, 
    getSongRating, 
    updateSongRating, 
    deleteSongRating

} = require('../controllers/songController');
const protectedRoute = require('../middlewares/auth')

router.route('/')
.get(getSongs)
.post(protectedRoute, postSong)
.delete(protectedRoute, deleteSongs)

router.route('/:songId')
.get(getSong)
.put(protectedRoute, updateSong)
.delete(protectedRoute, deleteSong)

router.route('/:songId/ratings')
.get(getSongRatings)
.post(postSongRating)
.delete(deleteSongRatings)

router.route('/:songId/ratings/:ratingId')
.get(getSongRating)
.post(updateSongRating)
.delete(deleteSongRating)

module.exports = router; 