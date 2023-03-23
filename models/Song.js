const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const SongSchema = new Schema ({
    songTitle: {
        type: String, 
        reuired: true, 
        maxLength: 20
    }, 
    artist: {
        type: String, 
        unique: true, 
        required: true
    }, 
    genre: {
        type: String, 
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Song', SongSchema)