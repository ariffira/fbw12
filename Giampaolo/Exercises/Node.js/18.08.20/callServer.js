let http = require('http');

let run = () => {
    console.log('Server is running...')
}

let myMessage = 'Hello, my Name is Paolo and i\'m writing my first Node.js code';

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(`<h1>${myMessage}</h1>`);
    res.end('<u><b>This is an end message ;)</b></u>');
}).listen(8001, run); 