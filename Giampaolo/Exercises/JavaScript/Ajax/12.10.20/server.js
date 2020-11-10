// Modules
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const app = express();

// Routes Modules
const index = require('./routes/index');
const indexGetFullName = require('./routes/getFullName');
const indexApi = require('./routes/api');

// Server URL
const PORT = process.env.PORT || 5000;
const host = 'localhost';
const DBLink = process.env.DBLink;

// Server Settings
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

// Routes
app.use('/', index);
app.use('/getFullName', indexGetFullName);
app.use('/getRestApi', indexApi);

// Calling Server
app.listen(PORT, host, () => {
    console.log(`Server is running on ${host}:${PORT}`)
});