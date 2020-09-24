const http = require('http');
const fs = require('fs');
const PORT = 8086;
const host = 'LocalHost';
const express = require('express');
const app = express();
const path = require('path');

//app.use(express.static(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    // res.send('ok');
    res.sendFile(__dirname + '/html/index.html');
});

app.listen(PORT, host, () => {
    console.log(`Server is running on ${host}:${PORT}`)
})