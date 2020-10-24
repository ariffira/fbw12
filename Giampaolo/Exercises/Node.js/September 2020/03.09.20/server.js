const PORT = 8089;
const host = 'LocalHost'
const express = require('express');
const app = express();

function myMiddelWare (req, res, next) {
    console.log('Show the middleware process');
    if (req.url == '/admin') {
        res.send('<h1>Welcome to the admin Page</h1>')
    } else {
        next();
    }
};

// app.get('/', myMiddelWare, (req, res) => {

// })

app.get('/user/:id/profile/:name', (req, res) => {
    console.log(req.params)
    res.send('id: ' + req.params.id)
})

app.listen(PORT, host, () => {
    console.log(`Server is running ob ${host}:${PORT}`)
})