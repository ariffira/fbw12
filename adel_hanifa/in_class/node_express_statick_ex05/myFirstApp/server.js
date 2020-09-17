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

 app.use(express.static(path.join(__dirname, 'public')));

 
// Route
app.get('/',(reg,res)=>{
  res.sendFile(__dirname+'/html/index.html')
}) 
app.get('/aboutme',(reg,res)=>{
  res.sendFile(__dirname+'/html/about.html')
}) 
app.get('/myportfolio',(reg,res)=>{
  res.sendFile(__dirname+'/html/portfolio.html')
})
app.get('/contactme',(reg,res)=>{
  res.sendFile(__dirname+'/html/contact.html')
})
app.get('/gotohome',(reg,res)=>{
  res.redirect('/')
})


 app.listen(port, () => {
  console.log(`Server is Running at http://localhost:${port}`)
})