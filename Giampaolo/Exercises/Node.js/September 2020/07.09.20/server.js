// Modules
const express = require('express');
const app = express();
const indexRouter = require('./routes/index');

// Porting Infos
const PORT = 8080;
const host = 'LocalHost';

// Static Folder
app.use(express.static('public'));

// Engiene view Settings
app.set('view engine', 'hbs');

// Modules Calling
app.use('/', indexRouter);

// Server Calling
app.listen(PORT, host, () => {
    console.log(`Server is running on ${host}:${PORT}`);
})