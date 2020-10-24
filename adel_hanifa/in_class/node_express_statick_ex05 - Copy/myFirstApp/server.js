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
 const port = 3001
 const path= require('path');

 app.use(express.static(path.join(__dirname, 'public')));

 
// Route
app.get('/',(reg,res)=>{
  res.sendFile(__dirname+'/html/index.html')
}) 
app.get('/show_the_weather',(reg,res)=>{
  res.sendFile(__dirname+'/html/weather.html')
}) 
app.get('/show_fim_info',(reg,res)=>{
  res.sendFile(__dirname+'/html/film.html')
})
app.get('/gotohome',(reg,res)=>{
  res.redirect('/')
})


 app.listen(port, () => {
  console.log(`Server is Running at http://localhost:${port}`)
})