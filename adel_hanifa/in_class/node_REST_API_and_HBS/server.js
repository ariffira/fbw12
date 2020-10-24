const express = require('express');
const app = express();
const fetch = require('node-fetch');
const path= require('path');
const hbs= require('hbs');
const port = 3000;

//hbs function
hbs.registerHelper('loud', function (aString) {
  return aString.toUpperCase()
});

hbs.registerHelper('ifEquals', function(arg1, arg2, options) {
  return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
});

hbs.registerHelper('default', function(value, options) {
   if (this.switch_break == false) {
     return value;
   }
});

//setup a static Folder
app.use(express.static(path.join(__dirname, 'public')));

//setup a template engines
app.set('view engine', 'hbs')

//Routes
app.get('/',(reg,res)=>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(json => {
    console.log(json);
    res.render('index',{users: json});
  })
}) 


app.get('/user/:id', function(req, res) {  // user/1
  var id = req.params.id;
  console.log(id)
  fetch('https://jsonplaceholder.typicode.com/users/'+id)
  .then(res => res.json())
  .then(json => {
    console.log(json);
    res.render('user',{info: json});
  })
});

//listen
app.listen(port, () => {
    console.log(`Server is Running at http://localhost:${port}`)
  })