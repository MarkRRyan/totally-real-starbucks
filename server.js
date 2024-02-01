require('dotenv').config();
// dependencies
const express = require('express');
const mongoose = require('mongoose')
const mongoURI = process.env.MONGO_URI
const PORT = process.env.PORT;
const menuController = require('./controllers/menu.js')

// mongo connection
mongoose.connect(mongoURI);

const db = mongoose.connection
db.on('error', (err) => console.log(err.message + 'error with mongo connection'))
db.on('connected', () => console.log('mongoDB is petting some mongoose!'))
db.on('disconnected', () => console.log('mongo disconnected'))

const app = express();
app.use('/menu', menuController)

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.get('/menu', (req, res) => {
    res.render('menu.ejs')
})

app.listen(PORT, () => {
    console.log(`Strrbucks is really running on ${PORT}`)
})