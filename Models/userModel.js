
const mongoose = require('mongoose');

const user = mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    phone: {type: String, required: true, unique: true},
    idNumber: {type: String, required: true, unique: true},
    passwd: {type: String, required: true},
    confPasswd: {type: String, required: true}
})

module.exports = mongoose.model('users', user)
