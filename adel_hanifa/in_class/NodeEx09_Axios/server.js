const express = require('express');
const app = express();
const port = 3000;

const fs = require('fs');
const path = require('path');
const hbs = require('hbs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const multer = require('multer');
const axios = require('axios');


// setup body-parser
app.use(bodyParser.urlencoded({ extended: true }));

//setup a static Folder
app.use(express.static(path.join(__dirname, 'public')));

//setup a session
app.use(session({ secret: 'secret-key' }));

//setup a template engines
app.set('view engine', 'hbs');


//Routes
app.get('/', (req, res)=>{
  res.render('index');
});


// edit picture ajax call
app.get('/search-user', (req, res)=> {
    let email = req.query.email;
   
    let apiLink = 'https://jsonplaceholder.typicode.com/users';
    
    axios.get(apiLink)
    .then(function(apiResponse) {
        console.log(apiResponse.data);
        let users = apiResponse.data;
        let userFound  = false;
        users.map(function(user) {
            if(email==user.email) {
              userFound = true
                res.json(user);
            }
        })
        if (userFound == false){
          res.send('User Not Found!')
        }
    })
    .catch(function(error) {
        console.log(error);
    });
})

app.post('/test-req-body', (req, res)=> {
  console.log(req.body)
  res.send(req.body)
})

//listen
app.listen(port, () => {
  console.log(`********************* Server is Running at http://localhost:${port} *********************`);
})