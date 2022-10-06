const mongoose = require ('mongoose')

const contactSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    phoneNumber: Number,
    birthdate: Number
})

module.exports = mongoose.model('contact',contactSchema)