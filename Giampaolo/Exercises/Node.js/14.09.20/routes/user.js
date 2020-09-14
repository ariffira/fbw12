const express = require('express');
const fetch = require('node-fetch');
const routerUser = express.Router();

routerUser.get('/:id', (req, res) => {
    console.log(req.params.id)
    let myUserId = req.params.id
    fetch(`https://jsonplaceholder.typicode.com/users/${myUserId}`)
    .then(res => res.json())
    .then(data => {
        res.render('user', {user: data});
        console.log(data)
    })
})

module.exports = routerUser;