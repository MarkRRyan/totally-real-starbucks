const express = require('express')
const router = express.Router()
const Menu = require('../models/menu')

router.get('/', async (req, res) => {
    const menuItems = await Menu.find({})
    res.render('menu.ejs', {menu: menuItems})})

router.get('/new', (req, res) => {
    res.render('newMenu.ejs')
})

router.post('/', async (req, res)=> {
    console.log(req.body)
    req.body.isLto = req.body.isLto === 'on' ? true : false
    try {
        const newMenu = await Menu.create(req.body)
        res.redirect('/menu')
    } catch (err) {
        console.log(err)
        res.send(err)
    }
})


module.exports = router
