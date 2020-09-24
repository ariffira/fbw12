const express = require('express');
const routerCustomer = express.Router();

routerCustomer.get('/', (req, res) => {
    res.send('Customer page')
})

routerCustomer.get('/login', (req, res) => {
    res.send('Customer Login Page')
})

routerCustomer.get('/logout', (req, res) => {
    res.send('Customer Logout Page')
})

routerCustomer.get('/account', (req, res) => {
    res.send('Customer Account Page')
})

routerCustomer.get('/info', (req, res) => {
    res.send('Customer Info Page')
})

routerCustomer.get('/manage', (req, res) => {
    res.send('Customer Manage Page')
})

module.exports = routerCustomer