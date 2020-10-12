// Modules
const express = require('express');
const app = express();

// Routes Modules
const index = require('./routes/index');
const indexGetFullName = require('./routes/indexGetFullName');

// Server URL
const PORT = 8082;
const host = 'localhost';

// Server Settings
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

// Routes
app.use('/', index);
app.use('/getFullName', indexGetFullName)

// Calling Server
app.listen(PORT, host, () => {
    console.log(`Server is running on ${host}:${PORT}`)
});