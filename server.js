require('dotenv').config();

const express = require('express');
const PORT = process.env.PORT;

const app = express();

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.listen(PORT, () => {
    console.log(`Strrbucks is really running on ${PORT}`)
})