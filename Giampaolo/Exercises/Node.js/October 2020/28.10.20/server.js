const express = require('express');
const app = express();
const PORT = 8090;
const host = 'localhost';
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const dotenv = require('dotenv').config();

const secret = crypto.randomBytes(32).toString('hex');

console.log({secret});

app.get('/', (req, res) => {
    res.sendStatus(200);
});

app.get('/token', (req, res) => {
    const payload = { userId: 1, admin: true };
    const options = {
        expiresIn : '1min'
    }
    const token = jwt.sign(payload, secret, options);
    res.send(token);
});

app.listen(PORT, host, () => {
    console.log(`Server is running on ${host}:${PORT}`)
});