const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const classSchema = new Schema({
    title: String,
    start: String,
    end: String,
    teacher: Object,
    students: Array
});

const Class = mongoose.model('Class', classSchema)

module.exports = Class;