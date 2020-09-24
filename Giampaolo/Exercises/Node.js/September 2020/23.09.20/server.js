// Modules
const express = require('express');
const app = express();
const session = require('express-session');

// Routes
const index = require('./route/index')

// Port Settings
const PORT = 8088;
const host = 'localhost';

// View Settings
app.set('view engine', 'hbs')

// Static Folder - Settings
app.use(express.static(`${__dirname}/public`));

// Routes
app.use('/', index)

// Server Starts
app.listen(PORT, host, () => {
    console.log(`Server is running on ${host}:${PORT}`)
})