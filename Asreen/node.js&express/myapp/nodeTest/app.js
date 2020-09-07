
// const http = require('http');

// const requestListener = function (req, res) {
//   res.writeHead(200);
//   res.end('Hello, World!');
// }

// const server = http.createServer(requestListener);
// server.listen(8080,()=> console.log('Server is running'));

 const express=require('express');
 //var router = express.Router()
 const PORT= process.env.PORT || 3300;
 const path= require('path');
// init express
const app = express();
// set static folder
app.use(express.static(path.join(__dirname,'public')));
app.get('/',function(req,res){
   res.send('<h1>Hello from Home page </h1>')
});
app.get('/app',function(req,res){
   //res.send('app');
   res.sendFile(__dirname + '/public/app.html');
});
app.get('/gallery',function(req,res){
   res.sendFile(__dirname + '/public/gallery.html');
});
app.get('/profile',function(req,res){
   res.sendFile(__dirname + '/public/profile.html');
});
app.get('/about',(req,res)=>{
   res.sendFile(__dirname+'/public/about.html');
});
app.get('/gohome',(req,res)=>{
   res.redirect('/app');
});
// middleware that is specific to this router
// router.use(function timeLog (req, res, next) {
//    console.log('Time: ', Date.now())
//    next()
//  })
app.all('/secret', function (req, res, next) {
   console.log('Accessing the secret section ...')
   next() // pass control to the next handler
 })
app.listen(PORT,()=>{console.log(`Server started on port:${PORT}`)});
