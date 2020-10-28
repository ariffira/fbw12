// Modules
const http = require('http');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bcrypt = require('bcrypt');
const multer = require('multer');
const sgMail = require('@sendgrid/mail');
const dotenv = require('dotenv').config();
const session = require('express-session');
const Joi = require('@hapi/joi');
const axios = require('axios');
const fs = require('fs');
const flash = require('connect-flash');
const app = express();

// Server Settings
app.use(express.static(`${__dirname}/public`));             // Static Folder
app.set('view engine', 'hbs');                              // View Engine
app.use(cookieParser());                                    // CookieParser
app.use(bodyParser.urlencoded({extended: true}));           // BodyParser
app.use(express.json());                                    // Use Json files
app.use(flash());                                           // Flash
app.use(session({
    secret: process.env.SECRET,
    cookie: {maxAge: 6000},
    resave: true,
    saveUninitialized: true
}));                                                        // Session
sgMail.setApiKey(process.env.SENDGRID_API_KEY);             // SendGrid

// URL Setting
const PORT = process.env.PORT;
const host = 'localhost';

// Connect to DB
mongoose.connect(process.env.linkDB, { useUnifiedTopology: true , useNewUrlParser: true }, () => console.log('MongoDB is connected into server.js'));

// Routes Modules
const index = require('./routes/index');
const user = require('./routes/user');
const profile = require('./routes/profile');

// Server Routes
app.use('/', index);
app.use('/user', user);
app.use('/profile', profile);

// Server Listening
app.listen(PORT, host, () => {
    console.log(`Server is running on ${host}:${PORT}`);
});