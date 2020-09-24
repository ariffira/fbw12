const express = require('express');
const fetch = require('node-fetch');
const routerSignUp = express.Router();

routerSignUp.get('/', (req, res) => {
    res.render('signup');
});

module.exports = routerSignUp;