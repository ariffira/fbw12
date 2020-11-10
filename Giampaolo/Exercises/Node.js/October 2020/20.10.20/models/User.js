const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: String,
    password: String,
    username: String,
    role: String
});

const UserApi = mongoose.model('UserApi', userSchema);
module.exports = UserApi;