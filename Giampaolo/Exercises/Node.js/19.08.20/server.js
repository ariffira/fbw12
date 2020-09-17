const http = require('http');
const PORT = 8085;
const host = 'localHost';
const fs = require('fs');

let server = http.createServer((request, response) => {
    fs.readFile('index.html', (err, data) => {
        if (err) throw err;
        response.writeHead(200, { 'Content-type': 'text/html' });
        response.write(data);
        response.end('Requested succesfully');
    })
});

fs.writeFile('textTest.txt', 'test', (err) => {
    if (err) throw err;
    console.log('New Text file');
})

fs.unlink('textTest.txt', (err) => {
    if (err) throw err;
    console.log('Text file Deleted')
})

fs.readFile('textTest.txt', (err, data) => {
    if (err) throw err;
    console.log(data)
})

server.listen(PORT, host, () => {
    console.log(`The server is running on ${host}:${PORT}`)
});