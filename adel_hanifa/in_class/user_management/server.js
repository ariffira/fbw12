const express = require('express');
const flash  = require('connect-flash');
const app = express();
require('dotenv').config();

const fs = require('fs');
const path = require('path');
const mustache = require('mustache');
const hbs = require('hbs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const multer = require('multer');
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.EmailAPI);


const User = require('./models/user');
const Class = require('./models/class');

let dataBaseLink = process.env.DBLink;
const port = process.env.PORT;
let logInMSG = '';

// connect DB
mongoose.connect(dataBaseLink, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => { console.log('DB connected.........') })
  .catch(err => console.log('DB not connected :' + err))



//hbs function helper
hbs.registerHelper('loud', function (aString) {// adel
  return aString.toUpperCase()//ADEL
})

hbs.registerHelper('addOne', function (aString) {
  return aString + 1;
})

// setup body-parser
app.use(bodyParser.urlencoded({ extended: true }));

//setup a static Folder
app.use(express.static(path.join(__dirname, 'public')));

//setup a session
app.use(session({ secret: 'secret-key'}));

//setup a template engines
app.set('view engine', 'hbs');

//setup Partials folder && files
hbs.registerPartials(__dirname + '/views/partials/')
hbs.registerPartial('header', 'header.hbs')
hbs.registerPartial('footer', 'footer.hbs')
hbs.registerPartial('tableOfUsers', 'tableOfUsers.hbs')

// setup Multer
var storage = multer.diskStorage({
  destination: function (req, file, res) { res(null, 'public/uploads') },
  filename: function (req, file, res) { res(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)) },
});

var upload = multer({
  storage: storage
})

//setup connect flash
app.use(flash());


//Routes

// Run Home page 
app.get('/', (req, res) => {
  let msg;
  if (!req.session.viewCount) {
    req.session.viewCount = 1;
    msg = 'Welcome to this page for the first time!';
  }
  else {
    req.session.viewCount += 1;
    msg = 'you visited this page ' + req.session.viewCount + ' times';
  }
  console.log('*********************home page test*********************');
  console.log(req.session, msg);
  res.render('index', { pageTitle: 'Home Page', count: msg });
})

// Run about-us page 
app.get('/about-us', (req, res) => {
  res.render('about', { pageTitle: 'About us' });
})

// Run our-courses page 
app.get('/our-courses', (req, res) => {
  res.render('courses', { pageTitle: 'Courses Page' });
})

// Run contact-us page 
app.get('/contact-us', (req, res) => {
  res.render('contact', { pageTitle: 'Contact Us' });
})

// Run log-in page 
app.get('/log-in', (req, res) => {
  res.render('login', {
    pageTitle: 'Log in page',
    msg: logInMSG
  });
  logInMSG = '';
})

// log out button 
app.get('/log-out', (req, res) => {
  //req.session.thisUser.destroy();
  delete req.session.thisUser;
  console.log('*********************check session after log-out*********************');
  console.log(req.session);
  res.redirect('/');
})

// Run sign-up page 
app.get('/sign-up', (req, res) => {
  res.render('signup', { pageTitle: 'Sign up page' });
})

// Show user informaiton page 
app.get('/user-page', checkLogIN, (req, res) => {
  console.log('*********************check user in user-page*********************');
  console.log(req.session.thisUser);
  res.render('user', {
    pageTitle: req.session.thisUser.userGroup + ' page - ' + req.session.thisUser.firstName + ' ' + req.session.thisUser.lastName,
    myUser: req.session.thisUser,
  });
})

// Show list of classes page 
app.get('/classes-page', checkAdmin, (req, res) => {
  Class.find((err, data) => {
    if (err) { console.log(err) }
    res.render('classes', { pageTitle: 'Classes', clsses: data });
  })
})

// Show one class information page 
let classID = '';
app.get('/class-page/:id', (req, res) => {
  classID = req.params.id;
  res.redirect('/class-info')
})

app.get('/class-info', (req, res) => {
  Class.find({ _id: classID }, (err, data) => {
    if (err) throw err;
    console.log('*********************find a class in class-info*********************');
    console.log(data);
    let studentsName = [];
    data[0].students.map((item) => {
      User.find({ _id: item }, (err, infoS) => {
        if (err) throw err;
        studentsName.push(infoS[0].firstName + ' ' + infoS[0].lastName);
      })
    })
    User.find({ _id: data[0].teacher }, (err, infoT) => {
      if (err) throw err;
      res.render('classInfo', {
        pageTitle: req.session.thisUser.userGroup + ' page - ' + req.session.thisUser.firstName + ' ' + req.session.thisUser.lastName,
        class: data[0],
        teacher: infoT[0].firstName + ' ' + infoT[0].lastName,
        students: studentsName
      });
    })
  });
})

// Show list of teachers page 
app.get('/teachers-list', checkAdmin, (req, res) => {
  User.find({ userGroup: 'Teacher' }, (err, data) => {
    if (err) { console.log(err); }
    // console.log(data);
    res.render('teachersList', {
      pageTitle: req.session.thisUser.userGroup + ' page - ' + req.session.thisUser.firstName + ' ' + req.session.thisUser.lastName,
      dataUSERS: data
    });
  })
})

// Show list of students page 
app.get('/students-list', checkAdmin, (req, res) => {
  User.find({ userGroup: 'Student' }, (err, data) => {
    if (err) { console.log(err); }
    //console.log(data);
    res.render('studentsList', {
      pageTitle: req.session.thisUser.userGroup + ' page - ' + req.session.thisUser.firstName + ' ' + req.session.thisUser.lastName,
      dataUSERS: data
    });
  })
})

// Delete user from DB when the ADMIN do it
app.get('/delete-user-by-admin/:id', (req, res) => {
  User.deleteOne({ _id: req.params.id }, (err, result) => {
    res.redirect('back');
  })
})

// redirect to teachers list when the ADMIN edit one of them
app.get('/teacher-list-find', (req, res) => {
  res.redirect('/teachers-list')
})

// redirect to students list when the ADMIN edit one of them
app.get('/student-list-find', (req, res) => {
  res.redirect('/students-list')
})

// Check data to log in 
app.post('/log-in', checkuser, (req, res) => {
  res.render('login', {
    pageTitle: 'Log in page',
    msg2: logInMSG
  });
  logInMSG = '';
})

// Get sign up data and save new user in DB and send email to confirm 
app.post('/sign-up', upload.single('myfile'), (req, res) => {
  const file = req.file;
  console.log('*********************saved file informaition*********************');
  console.log(file);
  req.body.photo = 'uploads/' + file.filename;
  req.body.activ = false;
  console.log('*********************show inputs sign-up*********************');
  console.log(req.body);
  let newUser = new User(req.body);
  newUser.save(() => {
    console.log('Data is saved......')
    User.findOne(req.body, (err, data) => {
      console.log('data from db :', data);
      let date = new Date()
      let dateFormat = date.getFullYear() + "-" + ("0" + (date.getMonth() + 1)).slice(-2) + "-" + ("0" + date.getDate()).slice(-2) + " " + ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2);

      var content = fs.readFileSync("confirm.html", "utf-8");
      var view = {
        data: {
          id: ` http://localhost:5000/confirm/${data._id} `,
          date: dateFormat
        }
      };

      const msg = {
        to: 'adelhanifh@gmail.com',
        from: 'adelhanifh@gmail.com',
        subject: data.firstName + ' ' + data.lastName + ' | confirm email address',
        html: mustache.render(content, view)
      }
      console.log('msg', msg);
      sgMail.send(msg, (err, info) => {
        // console.log(info);
        if (err) {
          //throw err
          console.log('Email not Sent')
          res.send('Email not Sent')
        } else {
          console.log('Your message has been sent. Thank you!')
          // res.send('Your message has been sent. Thank you!')
          logInMSG = 'Please go to your email and confirm the registration'
          res.redirect('/log-in');
        }
      })
    })
  });
})

// confirm email address
app.get('/confirm/:id', (req, res) => {
  User.updateOne({ _id: req.params.id }, { activ: true }, (err, data) => {
    if (err) { console.log(err) }
    logInMSG = 'Your account is successfully activated. Log in now to go to your account'
    res.redirect('/log-in');
  })
})

// Get add class data and save new class in DB 
app.post('/add-class', (req, res) => {
  console.log('*********************check inputs for add-class*********************');
  console.log(req.body);
  let newClass = new Class(req.body);
  newClass.save(() => {
    console.log('Data is saved......')
    res.redirect('/classes-page');
  });
})

// find one user from list of students page 
app.post('/student-list-find', checkAdmin, (req, res) => {
  let msg = 'Student not found or this is not a student';
  let string = capitalizeFirstLetter(req.body.firstName); //ADEL  //adel  // aDEl
  console.log('*********************what to search student-list-find*********************');
  console.log(string);
  User.find({ userGroup: 'Student', firstName: string }, (err, data) => {
    if (err) { console.log(err) }
    console.log(data, data.length);
    if (data.length == 0) {
      User.find({ userGroup: 'Student', lastName: string }, (err, data) => {
        if (err) { console.log(err) }
        console.log(data, data.length);
        if (data.length == 0) {
          res.render('studentsList', {
            pageTitle: req.session.thisUser.userGroup + ' page - ' + req.session.thisUser.firstName + ' ' + req.session.thisUser.lastName,
            dataUSERS: data,
            msg: msg
          });
        }
        else {
          res.render('studentsList', {
            pageTitle: req.session.thisUser.userGroup + ' page - ' + req.session.thisUser.firstName + ' ' + req.session.thisUser.lastName,
            dataUSERS: data
          });
        }
      })
    }
    else {
      res.render('studentsList', {
        pageTitle: req.session.thisUser.userGroup + ' page - ' + req.session.thisUser.firstName + ' ' + req.session.thisUser.lastName,
        dataUSERS: data
      });
    }
  })
})

// find one user from list of teachers page
app.post('/teacher-list-find', checkAdmin, (req, res) => {
  let msg = 'teacher not found or this is not a teacher';
  let string = capitalizeFirstLetter(req.body.firstName); //ADEL  //adel  // aDEl
  console.log('*********************what to search teacher-list-find*********************');
  console.log(string);
  User.find({ userGroup: 'Teacher', firstName: string }, (err, data) => {
    if (err) { console.log(err) }
    console.log(data, data.length);
    if (data.length == 0) {
      User.find({ userGroup: 'Teacher', lastName: string }, (err, data) => {
        if (err) { console.log(err) }
        console.log(data, data.length);
        if (data.length == 0) {
          res.render('teachersList', {
            pageTitle: req.session.thisUser.userGroup + ' page - ' + req.session.thisUser.firstName + ' ' + req.session.thisUser.lastName,
            dataUSERS: data,
            msg: msg
          });
        }
        else {
          res.render('teachersList', {
            pageTitle: req.session.thisUser.userGroup + ' page - ' + req.session.thisUser.firstName + ' ' + req.session.thisUser.lastName,
            dataUSERS: data
          });
        }
      })
    }
    else {
      res.render('teachersList', {
        pageTitle: req.session.thisUser.userGroup + ' page - ' + req.session.thisUser.firstName + ' ' + req.session.thisUser.lastName,
        dataUSERS: data
      });
    }
  })
})

// save changes in DB when the user edit his informations
app.post('/save-changes', (req, res) => {
  User.updateOne({ _id: req.body._id }, req.body, (err, data) => {
    if (err) { console.log(err) }
    User.find({ _id: req.body._id }, (err, data) => {
      if (err) { console.log(err) }
      req.session.thisUser = data[0];
      res.redirect('/user-page');
    })
  })
})

// save changes in DB when the ADMIN edit some user's informations
app.post('/edit-user-by-admin', (req, res) => {
  User.updateOne({ _id: req.body._id }, req.body, (err, data) => {
    if (err) { console.log(err); }
    res.redirect('back');
  })
})

// Send Email Contact form
app.post('/contact/send-email', (req, res) => {
  let date = new Date()
  req.body.dateFormat = date.getFullYear() + "-" + ("0" + (date.getMonth() + 1)).slice(-2) + "-" + ("0" + date.getDate()).slice(-2) + " " + ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2);
  console.log('req.body', req.body);

  var content = fs.readFileSync("file.html", "utf-8");
  var view = { data: req.body };

  const msg = {
    to: 'adelhanifh@gmail.com',
    from: 'adelhanifh@gmail.com',
    subject: req.body.subject + ' | ' + req.body.name,
    html: mustache.render(content, view)
  }
  console.log('msg', msg);
  sgMail.send(msg, (err, info) => {
    // console.log(info);
    if (err) {
      // throw err
      console.log('Email not Sent')
      res.send('Email not Sent')
    } else {
      console.log('Your message has been sent. Thank you!')
      res.send('Your message has been sent. Thank you!')
    }
  })
})

// POST /reset-password
app.post('/reset-password', (req, res) => {
  let date = new Date()
  let dateFormat = date.getFullYear() + "-" + ("0" + (date.getMonth() + 1)).slice(-2) + "-" + ("0" + date.getDate()).slice(-2) + " " + ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2);
  console.log('req.body', req.body);

  User.findOne({ email: req.body.email }, (err, data) => {
    if (data == null) {
      logInMSG = 'No account matches this email: ' + req.body.email
      res.redirect('/log-in');
    }
    else {
      var content = fs.readFileSync("reset.html", "utf-8");
      var view = {
        data: {
          date: dateFormat,
          email: data.email,
          password: data.password,
          firstName: data.firstName,
          lastName: data.lastName
        }
      };

      const msg = {
        to: 'adelhanifh@gmail.com',
        from: 'adelhanifh@gmail.com',
        subject: 'Reset your Password | ' + data.firstName + ' ' + data.lastName,
        html: mustache.render(content, view)
      }
      console.log('msg', msg);
      sgMail.send(msg, (err, info) => {
        // console.log(info);
        if (err) {
          //throw err
          console.log('Email not Sent')
        } else {
          console.log('Your message has been sent. Thank you!')
          logInMSG = 'New Pasword has been sent to you ber Email'
          res.redirect('/log-in');
        }
      })
    }


  })
})

//listen
app.listen(port, () => {
  console.log(`********************* Server is Running at http://localhost:${port} *********************`);
})

//functions
function checkuser(req, res, next) {
  console.log('*********************show info for log-in*********************');
  console.log(req.body);
  let userFound = false, userActive = false;
  User.find((err, data) => {
    if (err) { console.log(err); }
    data.map((item) => {
      if (item.email == req.body.email && item.password == req.body.password) {
        userFound = true;
        if (item.activ) {
          userActive = true;
          //console.log(item);
          req.session.thisUser = item;
          console.log('*********************show session after log-in*********************');
          console.log(req.session);
        }
      }
    })
    if (userFound) {
      if (userActive) {
        res.redirect('/user-page');
      }
      else {
        req.flash('notConfirm', 'Please go to your email and confirm the registration')
        logInMSG = req.flash('notConfirm')
        res.redirect('/log-in');
      }
    }
    else {
      req.flash('notMatch', 'The email or password do not match, please check your inputs again....!')
      logInMSG = req.flash('notMatch')
      next();
    }
  })
}

function checkLogIN(req, res, next) {
  if (req.session.thisUser) {
    if (req.session.thisUser.userGroup == "Admin") {
      //console.log('this is an admin')
      res.render('user', {
        pageTitle: req.session.thisUser.userGroup + ' page - ' + req.session.thisUser.firstName + ' ' + req.session.thisUser.lastName,
        myUser: req.session.thisUser,
        adminsButton: 'admin',
      });

    } else {
      next()
    }
  }
  else {
    console.log('*********************no user is loged in redirect to log-in*********************');
    console.log(req.session);
    res.redirect('/log-in');
  }
}

function capitalizeFirstLetter(x) {
  x = x.toLowerCase(); //adel
  return x.charAt(0).toUpperCase() + x.slice(1);//Adel
}

function checkAdmin(req, res, next) {
  if (req.session.thisUser.userGroup == 'Admin') {
    next()
  }
  else {
    res.redirect('/user-page');
  }
}

//  ajax call

// Send list of teachers when ADMIN adding new class 
app.get('/selectOptions-teacher', (req, res) => {
  User.find({ userGroup: 'Teacher' }, (err, data) => {
    if (err) { console.log(err) }
    //console.log(data);
    res.json(data)
  })
})

// Send list of students when ADMIN adding new class 
app.get('/selectOptions-students', (req, res) => {
  User.find({ userGroup: 'Student' }, (err, data) => {
    if (err) { console.log(err) }
    //console.log(data);
    res.json(data);
  })
})

// Send user informaition when ADMIN need to edit it
app.get('/select-user-id', (req, res) => {
  let id = req.query.id;
  User.findById(id, (err, data) => {
    if (err) throw err;
    res.json(data);
  })
})

// api to sale
app.get('/api/ourUsers', (req, res)=> {-
  User.find((err, users)=> {
      let usersAPI = []
      users.map(user => {
        usersAPI.push({
          userID : user._id,
          info: {
            name: user.firstName+' '+user.lastName,
            birthday: user.birthday,
            gender: user.gender,
          },
          address: {
            street: user.addressStreet,
            hauseNR: user.addressNr,
            city: user.addressCity,
            zipCODE: user.addressPlz,
            country: user.country
          },
          contact: {
            phone: user.phoneNumber,
            email: user.email,
          }
        });
      })
      console.log(usersAPI);
      res.json(usersAPI);
  })
})