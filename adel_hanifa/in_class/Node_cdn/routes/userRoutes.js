const express = require('express');
const router = express.Router();
const path = require('path');
const userController = require('../controllers/userController');
const User = require('../models/User');
const multer = require('multer');

// setup Multer
var storage = multer.diskStorage({
    destination: function (req, file, cb) { cb(null, 'public/img') },
    filename: function (req, file, cb) { cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)) },
  });
  
  var upload = multer({
    storage: storage
  })

//passport
const passport = require('passport');
//facebook
const faceBookStrategy = require('passport-facebook').Strategy;
//google 
const googleStrategy = require('passport-google-oauth20').Strategy;

// Configure Passport authenticated session persistence.
passport.serializeUser(function(user, cb) {
    cb(null, user);
});
passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
});

// Configure the Facebook strategy for use by Passport.
passport.use(new faceBookStrategy({
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL: '/user/auth/facebook/return',
    profile: ['id', 'displayName']
},
function(accessToken, refreshToken, profile, done) {
    // console.log('accessToken', accessToken)
    // console.log('refreshToken', refreshToken)
    console.log(profile)
    //See if a User already exists with the Facebook ID
    User.findOne({ facebookID: profile.id }, function (err, user) {
        if (err) {
            console.log(err);
        }
        if (user) {
            //If User already exists login / return UserDB._id
            done(null, user._id); 
        } else { 
            //create a new User and login / return UserDB._id
            user = new User({
                facebookID: profile.id, 
                name: {
                    firstName: profile.displayName.split(' ')[0],
                    lastName: profile.displayName.split(' ')[1],
                },
                email: profile.id+'@changeThis.Email'
            });
            user.save(function (err, data) { 
                if (err) {
                    console.log(err);  
                } else {
                    console.log("saving user ...", data);
                    done(null, data._id);
                }
            });
        }
    });
 }
))

// Configure the Google strategy for use by Passport.
passport.use(new googleStrategy({
    clientID: process.env.GOOGLE_CONSUMER_KEY,
    clientSecret: process.env.GOOGLE_CONSUMER_SECRET,
    callbackURL: '/user/auth/google/return'
  },
  function(accessToken, refreshToken, profile, done) {
    console.log(profile)
    //See if a User already exists with the google ID
    User.findOne({ googleID: profile.id }, function (err, user) {
        if (err) {
            console.log(err);
        }
        if (user) {
            //If User already exists login / return UserDB._id
            done(null, user._id); 
        } else { 
            //create a new User and login / return UserDB._id
            user = new User({
                googleID: profile.id, 
                name: {
                    firstName: profile.displayName.split(' ')[0],
                    lastName: profile.displayName.split(' ')[1],
                },
                email: profile.id+'@changeThis.Email'
            });
            user.save(function (err, data) { 
                if (err) {
                    console.log(err);  
                } else {
                    console.log("saving user ...", data);
                    done(null, data._id);
                }
            });
        }
    });
 }
))

router.use(passport.initialize());
router.use(passport.session());

router.get('/logIn',userController.checkUserToLogInPage, userController.loginPage);
router.get('/signUp', userController.signup);
router.post('/sign-up', upload.single('profile_pic'),  userController.createUser);
router.post('/log-in', userController.logInUser);
router.get('/profilePage', userController.checkUserToProfilePage, userController.profilePage);
router.get('/logOut',userController.checkUserToLogOutPage, userController.logoutUser);

router.get('/fake/signup', userController.createFakeUser);

//This endpoint connects the User to Facebook
router.get('/auth/facebook', passport.authenticate('facebook'));
router.get('/auth/facebook/return', passport.authenticate('facebook', { 
    failureRedirect: '/user/login' 
}), (req, res) => {
    User.findOne({ _id: req.user }, (err, data) => {
        if (err) {
            throw err
        }
        else {
            if (data == null) {
                req.flash('addUser', 'Your inputs are wrong, Email not found....!')
                res.redirect('/user/logIn');
            }
            else {
                console.log('*********************************')
                console.log('data from DB', { data })
                // req.session.thisUser = data;

                userController.getToken(req, res, data)

                req.flash('wellcome', 'Wellcome ' + data.name.firstName + ' '+ data.name.lastName + ' to your home Page')
                res.redirect('/user/profilePage');
                    
            }
        }
    })
});


//This endpoint connects the User to google
router.get('/auth/google', passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }))
router.get('/auth/google/return', passport.authenticate('google', { failureRedirect: '/login' }),
function(req, res) {
    User.findOne({ _id: req.user }, (err, data) => {
        if (err) {
            throw err
        }
        else {
            if (data == null) {
                req.flash('addUser', 'Your inputs are wrong, Email not found....!')
                res.redirect('/user/logIn');
            }
            else {
                console.log('*********************************')
                console.log('data from DB', { data })
                // req.session.thisUser = data;

                userController.getToken(req, res, data)

                req.flash('wellcome', 'Wellcome ' + data.name.firstName + ' '+ data.name.lastName + ' to your home Page')
                res.redirect('/user/profilePage');
                    
            }
        }
    })
});

module.exports = router;