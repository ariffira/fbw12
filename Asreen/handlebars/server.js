
const express = require("express");
const app = express();
const port = 5000;
//const main = require('./routes/main');
const router = express.Router();
const customers = require('./routes/customers')
const hbs=require('hbs');
app.use(express.static(__dirname + '/public'));
app.set('view engine','hbs');
app.get('/',(req,res)=>{
  res.render('main',{
    page_title:'Main Page',
    contact_url:'http://127.0.0.1:5000/contact',
    cssfile:'shop-homepage',
    scriptfile:'/index.js'
  
  }  )
});
app.get('/contact',(req,res)=>{
  res.render('contact',{page_title:'contact'})
})
app.get('/cart',(req,res)=>{
  res.render('cart',{
    page_title:'cart',
    cssfile:'cart',
    scriptfile:'cart.js'
  })
});
let arr=['My name is:Asreen','My job is:Web-development.']
app.get('/showdata',(req,res)=>{
  res.render('sendData',{
    name:arr[0],
    job:arr[1]
  })
})
app.use('/customer',customers);

function middelware1(req, res, next) {
  if (req.url == '/admin') next()
  else res.send('you hane no permission to access my page')
}
app.get('/admin', middelware1, (req, res) => {
  res.send('<h1>I am the admin </h1>')
})

app.get('/user', middelware1, (req, res) => {
  res.send('I am a user');
})

app.get('/user/:id',(req, res, next) => {
  console.log("Time:", new Date())
  next()
})
let getReq = (req, res, next) => {
  console.log('Request URL:', req.originalUrl)
  next()
}
let getMethod = (req, res, next) => {
  console.log('Request Type:', req.method);
  console.log(req.params);
  next()
};
let getJson = (req, res,next) => {
  res.json({
    status: true,
    id: req.params.id
  })
  next();
};
  let allMiddleware=[getReq,getMethod,getJson]
  app.use("/user/:id",allMiddleware);
//app.use('/', router)

  app.listen(port, err => {
    if (err) {
      return console.log("ERROR", err);
    }
    console.log(`Listening on port ${port}`);
  });