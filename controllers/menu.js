const express = require('express')
const router = express.Router()

router.get('/new', (req, res) => {
    res.send('New :)')
})

module.exports = router