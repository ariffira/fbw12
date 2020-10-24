// Modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// Models
const toDo = require('./models/toDo');

// Paths
const indexRoute = require('./routes/index');
const userRoute = require('./routes/user');
const signUpRoute = require('./routes/signup');

// URL Setting
const PORT = 8000;
const host = 'localhost';

// MongoDB Database
const database = 'mongodb+srv://Arthos:qXV92J5cFaucVX8@cluster0.yurbd.mongodb.net/test';

// Static Folder - Settings
app.use(express.static(__dirname + '/public'));

// Body-Parser - Settings
app.use(bodyParser.urlencoded({extended: true}))

// View Engine - Settings
app.set('view engine', 'hbs');

// MongoDB - Settings
mongoose.connect(database, { useUnifiedTopology: true, useNewUrlParser: true })
.then(() => console.log('MongoDB linked'))
.catch(err => console.log(err))

// Routes
app.use('/', indexRoute);
app.use('/user', userRoute);
app.use('/signup', signUpRoute);
// app.use('/todo', todoRoute);

// Launching Server
app.listen(PORT, host, () => {
    console.log(`Server is running on ${host}:${PORT}`)
})