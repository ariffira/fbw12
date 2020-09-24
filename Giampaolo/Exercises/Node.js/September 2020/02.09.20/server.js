// Modules
const express = require('express');
const app = express();
const path = require('path');
const index = require('./public/routes/main');
const admin = require('./public/routes/admin');
const customer = require('./public/routes/customer');

// Variables
const host = 'LocalHost';
const PORT = process.env.port || 8081;

// Setting static folder
app.use(express.static(path.join(__dirname + '/public')));

// Setting pages
app.use('/', index)
app.use('/admin', admin)
app.use('/customer', customer)
/*
*app.use('/guest', guest)
*app.use('/gallery', gallery)
*app.use('/about', about)
*app.use('/database', database)
*app.use('/product', product)
*/

// Call the server
app.listen(PORT, host, () => {
    console.log(`Server is running on ${host}:${PORT}`)
})