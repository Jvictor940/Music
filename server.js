const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const artist = require('./routes/artist')
const song = require('./routes/song')
const user = require('./routes/user')
const logger = require('./middlewares/logger')
const errorHandler = require('./middlewares/error')

dotenv.config({ path: './config/config.env' });

const app = express();

app.use(bodyParser.json());

app.use(logger)
app.use(errorHandler)
app.use('/artist', artist);
app.use('/song', song);
app.use('/user', user);

const PORT = process.env.PORT || 5001 

const server = app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`)
})

process.on('unhandledRejection', (err) => {
    console.log(`Error: ${err.message}`)
    server.close(() => process.exit(1))
})

