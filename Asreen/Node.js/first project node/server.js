
// const http = require('http');// call http nodejs file/modules
// const port = 8000;
// const hostname='127.0.0.1';

//const hostname = 'http://127.0.0.1/'
// const server = http.createServer((req, res) => {
//     console.log('This is the req url '+ req.url)
//     res.writeHead(200, { 'content-type': 'text/html' }); // 200 Status Code
//     res.write('<h1>Node.js</h1>');
//     res.write('Hallo from my server');
//     res.write('<h1> I am Asreen</h1>');
//     res.end();
// })
// server.listen(port, function (error) {
//     if (error) console.log('something went wrong' + error)
//     else {
//         console.log('server is listening on port ' + port)
//         //console.log(`Server running at http://${hostname}:${port}/`)
//     }
// })

const http = require('http');
const hostname = '127.0.0.1';
const port = 8000;
const fs = require('fs'); // fs has all files
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    console.log('This is the req url ' + req.url)
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Node.js</h1>');
    res.write('Hallo from my server');
    res.write('<h1> I am Asreen</h1>');
    res.end('the end of the response');
});
server.listen(port, hostname, function (error) {
    if (error) console.log('something went wrong' + error)
    else {
        console.log('server is listening on port ' + port)
        console.log(`Server running at http://${hostname}:${port}/`)
    }
})






