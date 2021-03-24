const mongoose = require('mongoose')
const { Schema } = mongoose

const ulasanSchema = new Schema({
    name:  String, // String is shorthand for {type: String}
    isiUlasan: String
}, { timestamps: true })

const Ulasan = mongoose.model('Ulasan', ulasanSchema)
module.exports = Ulasan