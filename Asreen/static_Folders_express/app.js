const express=require('express');
const PORT= process.env.PORT || 5500;
const path= require('path');
// init express
const app = express();
// set static folder
app.use(express.static(path.join(__dirname,'publicFolders')))
app.get('/',function(req,res){
   res.sendFile(__dirname + '/home.html');
});
 app.get('/page1',function(req,res){
   res.sendFile(__dirname + '/country.html');
});
app.get('/page2',(req,res)=>{
   res.sendFile(__dirname+'/animation.html');
});
app.get('/home',(req,res)=>{
   res.redirect('/');
});
app.put('/', (req, res) => { 
   res.send(`<img src="images/spring.jpg">`) 
 }) 

app.listen(PORT,()=>{console.log(`Server started on port:${PORT}`)});