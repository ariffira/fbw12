const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const imgSchema = new Schema({
    fieldname: String,
    originalname: String,
    mimetype: String,
    destination: String,
    filename: String,
    path: String,
    size: Number,
    date: String
});

const Img = mongoose.model('Img', imgSchema)

module.exports = Img;