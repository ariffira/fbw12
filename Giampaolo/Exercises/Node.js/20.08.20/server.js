const http = require('http');
const PORT = 8082;
const fs = require('fs');
const url = require('url');
const host = 'Localhost';

http.createServer((req, res) => {
    let pathUrl = req.url;
    console.log(pathUrl);
    
    switch(pathUrl) {
        case '/':
            fs.readFile('html/index.html', (err, data) => {
                if (err) throw err;
                res.writeHead(200, { 'Content-type': 'text/html' });
                res.write(data);
                res.end();
            })
        break;

        case '/aboutme':
            fs.readFile('html/aboutme.html', (err, data) => {
                if (err) throw err;
                res.writeHead(200, { 'Content-type': 'text/html' });
                res.write(data);
                res.end();
            })
        break;

        case '/gallery':
            fs.readFile('html/gallery.html', (err, data) => {
                if (err) throw err;
                res.writeHead(200, { 'Content-type': 'text/html' });
                res.write(data);
                res.end();
            })
        break;

        default:
            fs.readFile('html/404.html', (err, data) => {
                if (err) throw err;
                res.writeHead(404, { 'Content-type': 'text/html' });
                res.write(data);
                res.end();
            })
        break;
    }

}).listen(PORT, host, () => {
    console.log(`The server is running on ${host}:${PORT}`);
});