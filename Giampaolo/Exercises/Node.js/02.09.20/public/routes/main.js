const express = require('express');
const routerMain = express.Router();

routerMain.get('/', (req, res) => {
    res.sendFile('/index.html', {root: 'html'})
})

module.exports = routerMain