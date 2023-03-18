const getSongs = (req, res, next) => {
    if (Object.keys(req.query).length){
       const {
        songTitle,
        artist,
        genre
       } = req.query 

       const filter = [];
       if(songTitle) filter.push(songTitle)
       if(artist) filter.push(artist)
       if(genre) filter.push(genre)

       for(const query of filter){
        console.log(`Searching song by: ${query}`)
       }
    }

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