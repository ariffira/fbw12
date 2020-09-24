// using node js 
// const http = require('http');
// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.end(); 
//   }).listen(4000, ()=> {
//       console.log('Server is Running.....on localhost:4000')
//  });

 // using express js
 const express = require('express')
 const app = express()
 const port = 3000
 const path= require('path');

 app.use(express.static(path.join(__dirname, 'portfolio')));
 
// Route
app.get('/',(reg,res)=>{
  res.sendFile(__dirname+'/index.html')
}) 
app.get('/profile',(reg,res)=>{
  res.sendFile(__dirname+'/profile.html')
}) 
app.get('/works',(reg,res)=>{
  res.sendFile(__dirname+'/works.html')
})
app.get('/code',(reg,res)=>{
  res.sendFile(__dirname+'/code.html')
})
app.get('/gotohome',(reg,res)=>{
  res.redirect('/')
})


 app.listen(port, () => {
  console.log(`Server is Running at http://localhost:${port}`)
})