// models
const User = require('../models/User');
const Picture = require('../models/Picture');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
var faker = require('faker');


// access Token Secret 
const accessTokenSecret = process.env.TOKEN_SECRET;



// user login form
exports.loginPage = (req, res) => {
    res.render('logIn', {
        msg: req.flash('addUser')
    });
}

// MIDDLEWARE check User Login befor go log in
exports.checkUserToLogInPage = (req, res, next) => {
    if (!req.session.token) {
        next()
    }
    else {
        req.flash('wellcome', 'You are allredy loged in')
        res.redirect('/user/profilePage');
    }
}

// user sign-UP form
exports.signup = (req, res) => {
    res.render('signUp', {
        msg: req.flash('emailWrong')
    });
}

// save/create a user account
exports.createUser = (req, res) => {
    console.log('req after sign up', { file: req.file, body: req.body })
    let newPicture = new Picture(req.file);
    newPicture.save((err, imgData) => {
        if (err) {
            console.log(err)
        }
        else {

            bcrypt.hash(req.body.password, 10, function (err, hash) {
                if (err) throw err
                console.log('hash Pass:', hash)
                let newUserObj = {
                    name: {
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        middleName: req.body.middleName
                    },
                    age: req.body.age,
                    gender: req.body.gender,
                    email: req.body.email,
                    password: hash,
                    profile_pic: imgData._id,
                    adress: {
                        street: req.body.street,
                        house_no: req.body.house_no,
                        zip: req.body.zip,
                        city: req.body.city
                    },
                    country: req.body.country,
                    country_code: req.body.country_code,
                    role: req.body.role,
                }
                
                console.log('user Obj to save: ', newUserObj)
                let newUser = new User(newUserObj);
                newUser.save(err => {
                    if (err) {
                        console.log(err)
                        req.flash('emailWrong', 'this email address is already exist')
                        res.redirect('/user/signUp');
                    }
                    else {
                        req.flash('addUser', 'your Account been created! log in now to your Account')
                        res.redirect('/user/logIn');
                    }
                })
            });
        }
    })
}

// user login find
exports.logInUser = (req, res) => {
    User.findOne({ email: req.body.email }, (err, data) => {
        if (err) {
            throw err
        }
        else {
            if (data == null) {
                req.flash('addUser', 'Your inputs are wrong, Email not found....!')
                res.redirect('/user/logIn');
            }
            else {
                bcrypt.compare(req.body.password, data.password, function (err, result) {
                    if (result == true) {
                        console.log('*********************************')
                        console.log('data from DB', { data })
                        // req.session.thisUser = data;

                        getToken(req, res, data)

                        req.flash('wellcome', 'Wellcome ' + data.fullName + ' to your home Page')
                        res.redirect('/user/profilePage');
                    }
                    else {
                        req.flash('addUser', 'Password is wrong! Please check the password again...!')
                        res.redirect('/user/logIn');
                    }
                })
            }
        }
    })
}

// User Profile page 
exports.profilePage = (req, res) => {
    User.findById(req.userId, (err, data) => {
        if (err) throw err;
        console.log('User data with his pic using populate', data);
        res.render('userProfile', {
            msg: req.flash('wellcome'),
            user: data
        });
    }).populate('profile_pic')
}

// MIDDLEWARE check User Login befor go profile
exports.checkUserToProfilePage = (req, res, next) => {
    let token = req.session.token
    if (token) {

        jwt.verify(token, accessTokenSecret, (err, payload) => {
            if (err) throw err.message;
            req.userId = payload.id;
            console.log('*********************************')
            console.log('user id from token', { user_id: req.userId })
        })
        next();
    }
    else {
        req.flash('addUser', 'You cant go to Profile Page before LogIn')
        res.redirect('/user/logIn');
    }
}

// logout user data
exports.logoutUser = (req, res) => {
    delete req.session.token
    req.flash('addUser', 'You loged out scussesfuly')
    res.redirect('/user/logIn');
}

// MIDDLEWARE check User Login befor go log out
exports.checkUserToLogOutPage = (req, res, next) => {
    if (req.session.token) {
        next()
    }
    else {
        req.flash('addUser', 'You cant log out before log in')
        res.redirect('/user/logIn');
    }
}

///create a fake user account
exports.createFakeUser = (req, res) => {
    let newUserObj = {
        name: {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            middleName: ''
        },
        age: 25,
        email: faker.internet.email(),
        password: '0000',
        profile_url: faker.image.avatar(),
        adress: {
            street: faker.address.streetName(),
            house_no: faker.address.streetAddress().slice(0, 3),
            zip: faker.address.zipCode().slice(0, 5),
            city: faker.address.city()
        },
        country: faker.address.country(),
        country_code: faker.address.countryCode(),
    }

    bcrypt.hash(newUserObj.password, 10, function (err, hash) {
        if (err) throw err
        console.log('hash Pass:', hash)
        newUserObj.password = hash;
        console.log('user Obj to save: ', newUserObj)
        let newUser = new User(newUserObj);
        newUser.save(err => {
            if (err) {
                console.log(err)
                req.flash('emailWrong', 'this email address is already exist')
                res.redirect('/user/signUp');
            }
            else {
                req.flash('addUser', 'your Account been created! log in now to your Account')
                res.redirect('/user/logIn');
                // res.json(newUserObj)
            }
        })
    });

}

module.exports.getToken = getToken
function getToken(req, res, data) {
    const payload = {
        id: data._id
    };
    const token = jwt.sign(payload, accessTokenSecret, { expiresIn: '1h' });
    req.session.token = token;
    console.log('*********************************')
    console.log('token', { token });
}
