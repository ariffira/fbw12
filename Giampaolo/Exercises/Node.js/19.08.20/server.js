const http = require('http');
const PORT = 8085;
const host = 'localHost';
const fs = require('fs');

let server = http.createServer((request, response) => {
    fs.readFile('index.html', (err, data) => {
        if (err) {throw err} 
        else {
            response.writeHead(200, { 'Content-type': 'text/html' });
            response.write(data);
            response.end('Requested succesfully');
        }
    })
});

server.listen(PORT, host, () => {
    console.log(`The server is running on ${host}:${PORT}`)
})