var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {    
  console.log('server is running on : localhost:3000');
  fs.readFile('index.html', function(err, data) {
    if (err) throw err;
    res.write(data);
    res.end();
  });
  
}).listen(3000, ['DESKTOP-2L914ME']);


// fs.appendFile('new.txt', 'This is new file!', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });

// fs.appendFile('ufile.txt', ' This file is updated.', function (err) {
//   if (err) throw err;
//   console.log('Updated!');
// });

// fs.writeFile('rfile.txt', 'This file is Replaced.', function (err) {
//   if (err) throw err;
//   console.log('Replaced!');
// }); 

// fs.unlink('old.txt', function (err) {
//   if (err) throw err;
//   console.log('Deleted!');
// });