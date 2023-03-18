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

const getSong = (req, res, next) => {
    res 
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Show me the song with songId of ${req.params.songId}`})
}

const updateSong = (req, res, next) => {
    res 
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Updated the song with songId of ${req.params.songId}`})
}

const deleteSong = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Deleted song with songId of ${req.params.songId}`})
}

module.exports = {
    getSongs,
    postSong,
    deleteSongs,
    getSong, 
    updateSong,
    deleteSong
}