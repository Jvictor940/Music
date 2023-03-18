const getArtists = (req, res, next) => {
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

    res 
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: "You've succesfully got your artist"})
}

const createArtist = (req, res, next) => {
    res 
    .status(201)
    .setHeader('Content-Type', 'application/json')
    .json({ message: "You've succesfully created an artist"})
}
const deleteArtists = (req, res, next) => {
    res 
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: "You've succesfully deleted artist"})
}

const getArtist = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Searching for artist with the artistId of ${req.params.artistId}`})
}

const updateArtist = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Updated the artist with the artistId of ${req.params.artistId}`})
}

const deleteArtist = (req, res, next) => {
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