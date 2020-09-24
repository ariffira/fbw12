const http = require('http');
const fs = require('fs');
const PORT = 8090;
const host = 'LocalHost';
const url = require('url');
const read = require('./read');
const fetch = require('node-fetch');
const calculator = require('./calculator')

let myServer = http.createServer((req, res) => {
    let path = req.url;

    console.log(path);
    
    switch (path) {
        case '/':
            read('.html/index.html');
            break;

        default:
            fs.readFile('./404.html', (err, data) => {
                if (err) throw err;
                res.writeHead(404, { 'Content-type' : 'text/html' });
                res.write(data);
                res.end;
            })
    }
})

myServer.listen(PORT, host, () => { console.log( `Server is running on ${host}:${PORT}` )})