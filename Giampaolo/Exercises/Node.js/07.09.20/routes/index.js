const express = require('express');
const router = express.Router();

let myExample = {page_title: 'Login', cssFile: 'sigin.css'};

router.get('/', (req, res) => {
    res.render('', {page_title: 'Homepage', homeActive: 'active'})
});

router.get('/login', (req, res) => {
    res.render('login', myExample)
});

module.exports = router;