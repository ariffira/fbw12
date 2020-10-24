// Modules
const express = require('express');
const app = express();
const session = require('express-session');
const cookieParser = require('cookie-parser');

// Routes
const index = require('./route/index')

// Port Settings
const PORT = 8088;
const host = 'localhost';

app.use(cookieParser());
app.use(session({secret: "Nothing"}));

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