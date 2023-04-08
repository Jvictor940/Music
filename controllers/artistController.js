const Artist = require('../models/Artist');
const { options } = require('../routes/artist');
const path = require('path');

const getArtists = async (req, res, next) => {
    const filter = {}; 
    const options = {}; 

    if (Object.keys(req.query).length){
        const {
            firstName, 
            lastName,
            genre, 
            limit, 
            sortByGenre
        } = req.query

        if (firstName) filter.firstName = true;
        if (lastName) filter.lastName = true;
        if (genre) filter.genre = true;

        if (limit) options.limit = limit;
        if (sortByGenre) options.sort= {
            genre: sortByGenre
        }
    }
    try {
        const artists = await Artist.find({}, filter, options)
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
        .json(createdArtist)
    } catch (err) {
        next(err)
    }
}
const deleteArtists = async (req, res, next) => {
    try {
        const deletedArtists = await Artist.deleteMany()
        res 
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(deletedArtists)
    } catch (err) {
        next(err)
    }
}

//For 'artist/:artistId'
const getArtist = async (req, res, next) => {
    try {
        const artist = await Artist.findById(req.params.artistId)
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(artist)
    } catch (err) {
        next(err)
    }
}

const updateArtist = async (req, res, next) => {
    try {
        const updatedArtist = await Artist.findByIdAndUpdate(req.params.artistId, req.body, {new: true})
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(updatedArtist)
    } catch (err) {
        next(err)
    }
}

const deleteArtist = async (req, res, next) => {
    try {
        const deletedArtist = await Artist.findByIdAndDelete(req.params.artistId)
        res 
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(deletedArtist)
    } catch (err) {
        next(err)
    }
}

const postArtistImage = async (req, res, next) => {
    try {
        const err = { message: 'Problem uploading photo'}
        const noImageErr = { message: `Missing Image!`}
        if(!req.files) next(noImageErr)

        const file = req.files.file
        
        const fileTypeErr = { message: 'Please upload image file type!'}
        if(!file.mimetype.startsWith('image')) next(fileTypeErr)

        const fileSizeErr = { message: `Image exceeds size of ${process.env.MAX_FILE_SIZE}` }
        if(file.size > process.env.MAX_FILE_SIZE) next(fileSizeErr)

        file.name = `photo_${req.params.itemId}${path.parse(file.name).ext}`
        const filePath = process.env.FILE_UPLOAD_PATH + file.name

        file.mv(filePath, async (err) => {
            await Artist.findByIdAndUpdate(req.params.artistId, { image: file.name })
        })

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json({ message: 'Image Uploaded' })
    } catch (err) {
        next(err)
    }
}

module.exports = {
    getArtists, 
    createArtist, 
    deleteArtists,
    getArtist,
    updateArtist,
    deleteArtist, 
    postArtistImage
}