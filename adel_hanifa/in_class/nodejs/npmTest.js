var http = require('http');
var fs = require('fs');
const fetch = require('node-fetch')

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Hello Nodejs</h1>'); 
    
  }).listen(4000, ()=> {
      console.log('Server is Running.....')
 });