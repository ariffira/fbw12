const http = require('http');
const hostname = '127.0.0.1';
const port = 8080;
const fs=require('fs'); //  File System module: methods: fs.appendFile(), fs.open(), fs.writeFile()
const fileJs= require('./index'); // to drag the info from index.js
console.log(typeof(fileJs));
console.log(fileJs);
fileJs.test(); // test is function in index.js
let server=http.createServer(function (req, res) {
    fs.readFile('../jQuery/index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    });
    fs.readFile('../jQuery/js-pic.jpg', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    });
  });
  server.listen(port, hostname, function (error) {
    if (error) console.log('something went wrong' + error)
    else {
        console.log('server is listening on port ' + port)
        console.log(`Server running at http://${hostname}:${port}/`)
    }
})