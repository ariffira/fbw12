// Modules
const nodeFetch = require('node-fetch');
const express = require('express');
const app = express();

// Paths
const indexRoute = require('./routes/index.js');
const userRoute = require('./routes/user.js')

// URL Setting
const PORT = 8000;
const host = 'localhost';

// Static Folder - Settings
app.use(express.static(__dirname + '/public'));

// Settings View Engine
app.set('view engine', 'hbs');

// Routes
app.use('/', indexRoute);
app.use('/user', userRoute);

// Launching Server
app.listen(PORT, host, () => {
    console.log(`Server is running on ${host}:${PORT}`)
})