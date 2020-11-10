const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const User = require('./models/User');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// connect mongoose
mongoose.connect(process.env.linkDB, { useNewUrlParser: true, useUnifiedTopology: true });

//Routes
app.get('/', (req, res) => {
    res.send('My first routes is ok');
});

app.get('/api/jsontest', (req, res) => {
    res.json({ id: 1, name: "Martin", age: "30" });
});

app.post('/api/test2', (req, res) => {
    res.json('ok its fine')
})

app.get('/api/login-form', (req, res) => {
    res.send('login form will show here');
})

// login email, password check
app.post('/api/login', (req, res) => {
    let userInput = req.body;
    console.log(req.body);
    // check that user with database/REST API
    let thisUser;
    User.find((err, users) => {
        if (err) throw err;
        for (user of users) {
            if (user.email == userInput.email) {
                thisUser = user;
                break;
            }
            else {
                thisUser = "No User found"
            }
        }
        res.json(thisUser);
    })
});

// api to sale
app.get('/api/ourUsers', (req, res) => {
    User.find((err, users) => {
        let userEmails = []
        users.map(user => {
            userEmails.push({ email: user.email, name: user.username });
        })
        console.log(userEmails);
        res.json(userEmails);
    })
})

app.listen(process.env.PORT, (req, res) => {
    console.log('Server is running on ' + process.env.PORT);
});