 // using express js
 const express = require('express');
 const app = express();
 const port = 3000;
 const path= require('path');
 const localStorage = require('localStorage')
 let user = 'admin';

 app.use(express.static(path.join(__dirname, 'public')));

 function getAdminPage (req, res, next){
  let users = JSON.parse(localStorage.getItem('sendLoginUser'));
  console.log(users)
  if(user == 'admin') {
    next();
 }
 else {
    res.send('You dont have permission to use my page!')
 }
}

function getUserPage (req, res, next){
  let user = JSON.parse(localStorage.getItem('sendLoginUser'));
  console.log(user)
  if(user == 'user') {
    next();
 }
 else {
    res.send('You dont have permission to use my page!')
 }
}

// Route

app.get('/',(reg,res)=>{
  res.sendFile(__dirname+'/html/index.html')
}) 
app.get('/login',(reg,res)=>{
  res.sendFile(__dirname+'/html/login.html')
}) 
app.get('/signup',(reg,res)=>{
  res.sendFile(__dirname+'/html/signup.html')
})
app.get('/admin',getAdminPage, (reg,res)=>{
  res.sendFile(__dirname+'/html/admin.html')
})
app.get('/user',getUserPage, (reg,res)=>{
  res.sendFile(__dirname+'/html/user.html')
})
app.get('/gotohome',(reg,res)=>{
  res.redirect('/')
})


//listen
 app.listen(port, () => {
  console.log(`Server is Running at http://localhost:${port}`)
})