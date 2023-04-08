const express = require('express');
const router = express.Router();
const {
    getArtists,
    createArtist,
    deleteArtists,
    getArtist,
    updateArtist,
    deleteArtist, 
    postArtistImage
} = require('../controllers/artistController');

router.route('/')
.get(getArtists)
.post(createArtist)
.delete(deleteArtists)

router.route('/:artistId')
.get(getArtist)
.put(updateArtist)
.delete(deleteArtist)

router.route('/:artistId/image')
.post(postArtistImage)
module.exports = router; 
