const getArtist = (req, res, next) => {
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
const deleteArtist = (req, res, next) => {
    res 
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: "You've succesfully deleted artist"})
}

module.exports = {
    getArtist, 
    createArtist, 
    deleteArtist
}