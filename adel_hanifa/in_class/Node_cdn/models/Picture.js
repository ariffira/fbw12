const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pictureSchema = new Schema({
    fieldname: String,
    originalname: String,
    mimetype: String,
    destination: String,
    filename: String,
    path: String,
    size: Number,
});

const Picture = mongoose.model('Picture', pictureSchema);
module.exports = Picture;