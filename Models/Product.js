const mongoose = require('mongoose')

const newProduct = mongoose.Schema({
    product: {type: String, required: true},
    images: {type: [], required: true},
    bidOwner: {type: String, required: true},
    askingPrice: {type: Number, required: true},
    category: {type: []},
    description: {type: String, required: true},
    open: {type: Boolean, default: true },
    bids: {type: [], required: false}
})
newProduct.index({product: 'text', bidOwner: 'text', askingPrice: 'text',
    description: 'text', open: 'text'})

module.exports = mongoose.model('Products', newProduct)
