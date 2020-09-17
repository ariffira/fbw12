
const express = require("express");
const app = express();
const port = 5000;
const main = require('./routes/main');
const router = express.Router();
const customers = require('./routes/customers')
const hbs=require('hbs');
app.use(express.static(__dirname + '/shoppingPage'));
app.use('/', main);
app.use('/customers', customers);
//Application Level Middleware
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