// Modules
const mongoose = require('mongoose');
const { Schema } = require('mongoose');

// Setting a Schema
const userSchema = new Schema ({
    userName: {
        type: String,
        required: true,
        min: 2,
        max: 255
    },
    firstName: {
        type: String,
        required: true,
        min: 2,
        max: 255
    },
    lastName: {
        type: String,
        required: true,
        min: 2,
        max: 255
    },
    email: {
        type: String,
        required: true,
        min: 2,
        max: 255
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 1024
    },
    creationDate: {
        type: Date,
        default: Date.now()
    },
    confirmed: {
        type: Boolean,
        default: false
    }
});

// Converting Schema as a Module
const User = mongoose.model('User', userSchema);

// Export Module
module.exports = User;