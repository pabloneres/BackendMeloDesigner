const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    template: String,
    plan: String,
    name: String,
    ddd: String,
    tel: String,
    email: String,
    message: String
}) 

module.exports = mongoose.model('User', UserSchema)