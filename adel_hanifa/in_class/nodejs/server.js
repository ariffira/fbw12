let http = require('http');// call http nodejs file/modules
const myFunctions = require('./testmodule')


// function callbackServer() {
//     console.log('Server is Running.....')
// }
// function requestResponse(req, res) {
//     console.log('For browser test')
//     res.write('<h1>Hello Nodejs</h1>')
//     res.write('<h2>I am Adel Hanifa</h2>')
//     res.write('<h3>I am learning node js </h3>')
//     res.end('<p>here is the last line of code</p>');
// }

// http.createServer(requestResponse).listen(8080, callbackServer); // port = 8080

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req.url);
    res.write('<h1>Hello Nodejs</h1>'); 
    res.write('<h2>I am Adel Hanifa</h2>');
    res.write('<h3>I am learning node js </h3>');

    console.log(myFunctions.devide(2 , 1), myFunctions.multiply(2 , 1), myFunctions.subtract(2 , 1), myFunctions.addition(2 , 1));

    res.end('<p>here is the last line of code</p>'); 
  }).listen(4000, ()=> {
      console.log('Server is Running.....on localhost:4000')
 });