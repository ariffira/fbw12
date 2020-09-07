const express=require('express');
const PORT= process.env.PORT || 5500;
const path= require('path');
// init express
const app = express();
// set static folder
app.use(express.static(path.join(__dirname,'public')))
app.get('/',function(req,res){
   res.send('<h1>hello world</h1>')
})
app.all('/secret', function (req, res, next) {
   console.log('Accessing the secret section ...')
   next() // pass control to the next handler
 })
app.listen(PORT,()=>{console.log(`Server started on port:${PORT}`)});