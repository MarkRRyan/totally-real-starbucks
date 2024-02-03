const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: String, required: true },
    img: { type: String },
    isLto: { type: Boolean, default: false }
})

const Menu = mongoose.model('Menu', menuSchema)
module.exports = Menu