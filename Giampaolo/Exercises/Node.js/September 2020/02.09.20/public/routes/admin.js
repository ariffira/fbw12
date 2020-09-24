const express = require('express');
const routerAdmin = express.Router();

routerAdmin.get('/', (req, res) => {
    res.send('Admin page')
})

routerAdmin.get('/login', (req, res) => {
    res.send('Admin Login Page')
})

routerAdmin.get('/logout', (req, res) => {
    res.send('Admin Logout Page')
})

routerAdmin.get('/account', (req, res) => {
    res.send('Admin Account Page')
})

routerAdmin.get('/info', (req, res) => {
    res.send('Admin Info Page')
})

routerAdmin.get('/manage', (req, res) => {
    res.send('Admin Manage Page')
})

module.exports = routerAdmin