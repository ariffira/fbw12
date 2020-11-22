const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userpostSchema = new Schema({
    title: String,
    photo: String,
    text: String,
    date: String,
    comments: Array,
    likes:Array
});

const Userpost = mongoose.model('Userpost', userpostSchema)

module.exports = Userpost;