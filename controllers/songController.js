const Song = require('../models/Song');

const getSongs = async (req, res, next) => {
    const filter = {};
    const options = {};

    if (Object.keys(req.query).length){
       const {
        songTitle,
        artist,
        genre, 
        limit, 
        sortByArtist
       } = req.query 

       if(songTitle) filter.songTitle = true;
       if(artist) filter.artist = true;
       if(genre) filter.genre = true;

       if (limit) options.limit = limit;
       if (sortByArtist) options.sort = {
        artist: sortByArtist
       }
    }
    try {
        const songs = await Song.find({}, filter, options)
        res 
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(songs)
    } catch (err) {
        next(err)
    }

}

const postSong = async (req, res, next) => {
    try {
        const createdSong = await Song.create(req.body)
        res 
        .status(201)
        .setHeader('Content-Type', 'application/json')
        .json(createdSong)
    } catch (err) {
        next(err)
    }
}
const deleteSongs = async (req, res, next) => {
    try {
        const deletedSongs = await Song.deleteMany()
        res 
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(deletedSongs)
    } catch (err) {
        next(err)
    }
}

// For 'song/:songId'
const getSong = async (req, res, next) => {
    try {
        const song = await Song.findById(req.params.songId)
        res 
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(song)
    } catch (err) {
        next(err)
    }
}

const updateSong = async (req, res, next) => {
    try {
        const updatedSong = await Song.findByIdAndUpdate(req.params.songId, req.body, {new: true})
        res 
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(updateSong)
    } catch (err) {
        next(err)
    }
}

const deleteSong = async (req, res, next) => {
    try {
        const deletedSong = await Song.findByIdAndDelete(req.params.songId)
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(deletedSong)
    } catch (err) {
        next(err)
    }
}

// For '/:songId/ratings' endpoint
const getSongRatings = async (req, res, next) => {
    try {
        const result = await Song.findById(req.params.songId)

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(result.ratings)
    } catch (err) {
        next(err)
    }
}

const postSongRating = async (req, res, next) => {
    try {
        const result = await Song.findById(req.params.songId)
        result.ratings.push(req.body)
        await result.save()

        res 
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(result.ratings)
    } catch (err) {
        next(err)
    }
}

const deleteSongRatings = async (req, res, next) => {
    try {
        const result = await Item.findById(req.params.itemId)
        
        result.ratings = [];

        await result.save()
        res 
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json({message: `Deleted all the ratings for item id of ${req.params.itemId}`})
    } catch (err) {
        next(err)
    }
}
module.exports = {
    getSongs,
    postSong,
    deleteSongs,
    getSong, 
    updateSong,
    deleteSong,
    getSongRatings,
    postSongRating, 
    deleteSongRatings
}