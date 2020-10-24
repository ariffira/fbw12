 // using express js
 const express = require('express');
 const app = express();
 const port = 3000;
 const admin = require('./routes/admin');
 const customer = require('./routes/customer');
 const main = require('./routes/main');

 
// Route

//main
app.use('/',main)
//admin
app.use('/admin',admin)
//customer
app.use('/customer',customer)


//listen
 app.listen(port, () => {
  console.log(`Server is Running at http://localhost:${port}`)
})