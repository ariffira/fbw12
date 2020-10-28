// Modules
const mongoose = require('mongoose');
const sgMail = require('@sendgrid/mail');
const Joi = require('@hapi/joi');
const dotenv = require('dotenv').config();
const router = require('express').Router();

// Models
const User = require('../model/User');
const { send } = require('@sendgrid/mail');
const { registerValidation } = require('../validation');

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Mongo DB - Settings
mongoose.connect(process.env.linkDB,
    { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        console.log('MongoDB is connected into user.js')
    })
    .catch(err => console.log(err));

// Middleware Functions
let checkData = (User, email, password, done, req) => {
    User.findOne();
    next();
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// GET Method
router.get('/signUp', (req, res) => {
    res.render('signUp');
});

router.get('/signIn', (req, res) => {
    res.render('signIn', {
        error: req.flash('error')
    });
});

////////////////////////////////////////////////
// POST Method
////////////////////////////////////////////////

// Sign Up / Register
router.post('/signUp', async (req, res) => {

    const { error} = registerValidation(req.body);

    if (error) return res.status(400).send(error.details[0].message);

    const newUser = new User({
        userName: req.body.userName,
        lastName: req.body.lastName,
        firstName: req.body.firstName,
        email: req.body.email,
        password: req.body.password
    });

    try {
        newUser.save(() => {
            res.render('signUp')
        });

        sgMail.setApiKey(process.env.SENDGRID_API_KEY);

        const msg = {
            to: `${req.body.email}`,
            from: "giampaololocascio@gmail.com",
            subject: "Sending e-mail with node.js",
            text: "just a sample text with no reason XD",
            html: "<strong>Signore</strong>"
        };

        sgMail.send(msg);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Login
router.post('/login', (req, res) => {
    let login = true;
    if (login) {
        req.flash('info', 'Log in Succesful');
        res.redirect('/profile');
    }
    else {
        req.flash('error', 'Log in Error');
        res.redirect('signIn');
    }
});

// Test
router.post('/test/api', (req, res) => {
    User.find((err, data) => {
        res.json(data);
    });
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Export
module.exports = router