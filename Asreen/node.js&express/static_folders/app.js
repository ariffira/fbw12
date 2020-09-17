const express=require('express');
const PORT= process.env.PORT || 5500;
const path= require('path');
// init express
const app = express();
// set static folder
app.use(express.static(path.join(__dirname,'publicFolders')))
app.get('/',function(req,res){
   res.send('index.html')
});
 app.get('/profile',function(req,res){
   res.sendFile(__dirname + '/country.html');
});
app.get('/about',(req,res)=>{
   res.sendFile(__dirname+'/animation.html');
});
app.get('/gohome',(req,res)=>{
   res.redirect('/app');
});

app.listen(PORT,()=>{console.log(`Server started on port:${PORT}`)});