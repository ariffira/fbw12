const http = require('http');
const fs = require('fs');
const PORT = 8089;
const host = 'Localhost';
const readTheFile = require('./fileRead');
const get_date = require('./date');
const calculator = require('./calculator');
const fetch = require('node-fetch');

http.createServer((req, res) => {
    let apiLink = 'https://jsonplaceholder.typicode.com/users';

    fetch(apiLink)
    .then(res => res.json())
    .then(data => console.log(data))

    let pathUrl = req.url;
    console.log(pathUrl)

    switch (pathUrl) {
        case '/':
            readTheFile.fileRead('./html/index.html', res);
            break;

        default:
            readTheFile.fileRead('./html/404.html', res)
            break;
    }
}).listen(PORT, host, () => {
    console.log(`Server is running on ${host}:${PORT}`)
})