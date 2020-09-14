const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();

router.get('/', (req, res) => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
        res.render('index', {user: data});
        console.log(data)
    })
})

module.exports = router;