const mongoose = require('mongoose');
const { Schema } = require('mongoose') // const Schema = mongoose.Schema;

const toDoSchema = new Schema ({
    task: String,
    time: String,
    created: Date
})

const toDo = mongoose.model('toDo', toDoSchema);

module.exports = toDo;