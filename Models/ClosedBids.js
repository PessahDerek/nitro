const mongoose = require('mongoose')

const ClosedBids = mongoose.Schema({
    closingPrice: {type: Number, required: true},
    askingPrice: {type: Number, required: true},
    bidOwner: {type: String, required: true},
    bidWinner: {type: String, required: true},
    product: {type: String, required: true}
})

module.exports = mongoose.model('ClosedBids', ClosedBids)
