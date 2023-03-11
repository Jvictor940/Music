const getSongs = (req, res, next) => {
    res 
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: "You've succesfully got your song"})
}

const postSong = (req, res, next) => {
    res 
    .status(201)
    .setHeader('Content-Type', 'application/json')
    .json({ message: "You've succesfully posted a song"})
}
const deleteSongs = (req, res, next) => {
    res 
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: "You've succesfully deleted a song"})
}

module.exports = {
    getSongs,
    postSong,
    deleteSongs
}