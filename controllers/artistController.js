const Artist = require('../models/Artist');

const getArtists = async (req, res, next) => {
    if (Object.keys(req.query).length){
        const {
            firstName, 
            lastName,
            genre
        } = req.query

        const filter = [];
        if (firstName) filter.push(firstName)
        if (lastName) filter.push(lastName)
        if (genre) filter.push(genre)

        for (const query of filter){
            console.log(`Searching artist by: ${query}`)
        }
    }
    try {
        const artists = await Artist.find()
        res 
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(artists)
    } catch (err) {
        next(err)
    }
}

const createArtist = async (req, res, next) => {
    try {
        const createdArtist = await Artist.create(req.body)
        res 
        .status(201)
        .setHeader('Content-Type', 'application/json')
        .json()
    } catch (err) {
        
    }
}
const deleteArtists = async (req, res, next) => {
    try {
        
    } catch (err) {
        
    }
    res 
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: "You've succesfully deleted artist"})
}

//For 'artist/:artistId'
const getArtist = async (req, res, next) => {
    try {
        
    } catch (err) {
        
    }
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Searching for artist with the artistId of ${req.params.artistId}`})
}

const updateArtist = async (req, res, next) => {
    try {
        
    } catch (err) {
        
    }
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Updated the artist with the artistId of ${req.params.artistId}`})
}

const deleteArtist = async (req, res, next) => {
    try {
        
    } catch (err) {
        
    }
    res 
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Deleted artist with the artistId of ${req.params.artistId}`})
}

module.exports = {
    getArtists, 
    createArtist, 
    deleteArtists,
    getArtist,
    updateArtist,
    deleteArtist
}