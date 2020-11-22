const express = require('express');
const flash = require('connect-flash');
const app = express();
require('dotenv').config();

const fs = require('fs');
const path = require('path');
const hbs = require('hbs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const multer = require('multer');
// const sgMail = require('@sendgrid/mail')
// sgMail.setApiKey(process.env.EmailAPI);


const User = require('./models/user');
const Userpost = require('./models/userpost');

let dataBaseLink = process.env.DBLink;
const port = process.env.PORT;


// connect DB
mongoose.connect(dataBaseLink, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => { console.log('DB connected.........') })
  .catch(err => console.log('DB not connected :' + err))


//hbs function helper
hbs.registerHelper('loud', function (aString) {// adel
  return aString.toUpperCase()//ADEL
})

hbs.registerHelper('web', function (aString) {
  return 'www.' + aString.split("@")[0] + '-' + aString.split("@")[1];
})

// setup body-parser
app.use(bodyParser.urlencoded({ extended: true }));

//setup a static Folder
app.use(express.static(path.join(__dirname, 'public')));

//setup a session
app.use(session({ secret: 'secret-key' }));

//setup a template engines
app.set('view engine', 'hbs');

//setup Partials folder && files
hbs.registerPartials(__dirname + '/views/partials/')
hbs.registerPartial('header', 'header.hbs')
hbs.registerPartial('footer', 'footer.hbs')

// setup Multer
var storage = multer.diskStorage({
  destination: function (req, file, cb) { cb(null, 'public/img') },
  filename: function (req, file, cb) { cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)) },
});

var upload = multer({
  storage: storage
})

//setup connect flash
app.use(flash());

//Routes

// Run Home page 
app.get('/', (req, res) => {
  res.render('index', { pageTitle: 'Developers Network' });
})

// Run get start page
app.get('/get-start', checkLogInUser, (req, res) => {
  res.render('getstart', { pageTitle: 'Developers Network', msg1: req.flash('signedUP'), msg2: req.flash('logIN') });
})

// Get sign up data and save new user in DB 
app.post('/sign-up', upload.single('myimg'), (req, res) => {
  const file = req.file;
  console.log('*********************saved file informaition*********************');
  console.log(req.file, req.body);
  req.body.photo = 'img/' + file.filename;
  console.log('*********************show inputs sign-up*********************');
  console.log(req.body);
  let newUser = new User(req.body);
  newUser.save(() => {
    console.log('Data is saved......')
    req.flash('signedUP', 'You have successfully registered. Log in now to your account.')
    res.redirect('/get-start')
  });
})

// Get log in data and go to profile page
app.post('/log-in', (req, res) => {
  console.log('*********************show info for log-in*********************');
  console.log(req.body);
  let userFound = false;
  User.find((err, data) => {
    if (err) { console.log(err); }
    data.map((item) => {
      if (item.email == req.body.email && item.password == req.body.password) {
        userFound = true;
        req.session.thisUser = item;
        console.log('*********************show session after log-in*********************');
        console.log(req.session);
      }
    })
    if (userFound) {
      res.redirect('/profile');
    }
    else {
      req.flash('logIN', 'The email or password do not match, please check your inputs again....!')
      res.redirect('/get-start')
    }
  })
})

// log out button 
app.get('/log-out', (req, res) => {
  delete req.session.thisUser;
  console.log('loged out done.....!');
  console.log(req.session);
  res.redirect('/');
})

//Run Profile Page
app.get('/profile', (req, res) => {
  res.render('profile', { pageTitle: req.session.thisUser.name + ' | Developers Network', user: req.session.thisUser });
})

//Run Posts Page
app.get('/posts', checkUserPosts, (req, res) => {
  res.render('post', { pageTitle: req.session.thisUser.name + ' | Developers Network', noIMG: 'Please try to upload one ....!' });
})

//Create new post 
app.post('/upload-post', upload.single('postimg'), (req, res) => {
  const file = req.file;
  console.log('*********************saved file informaition*********************');
  console.log(req.file);
  req.body.photo = 'img/' + file.filename;
  req.body.date = getTheDate();
  console.log('*********************show inputs new post*********************');
  console.log(req.body);
  let newUserpost = new Userpost(req.body);
  newUserpost.save((err, data) => {
    console.log('after save post', data);
    req.session.thisUser.posts.push(data._id)
    User.findByIdAndUpdate(req.session.thisUser._id, { posts: req.session.thisUser.posts }, (err, data) => {
      if (err) throw err
      res.redirect('/posts')
    })
  });
})

//Run single post find post  find auter
let postInfo
app.get('/post/:id', (req, res) => {
  Userpost.findById(req.params.id, (err, data) => {
    if (err) throw err;
    console.log('postInfo:',data);
    postInfo = data;
    res.redirect('/show-post');
  })
})

app.get('/show-post', (req, res) => {
  User.find((err, datas) => {
    if (err) { console.log(err); }
    datas.map((item) => {
      item.posts.map((info) => {
       
        if (info == postInfo.id) {
          console.log('after if:',item);
          res.render('postShow', {
            pageTitle: req.session.thisUser.name + ' | Developers Network',
            user: item,
            post: postInfo,
            msg: req.flash('commentDone')
          });
        }
      })
    })
  })
})

//write post comment
app.post('/write-comment', (req, res) => {
  postInfo.comments.push({
    comment: req.body.comment,
    name: req.session.thisUser.name,
    photo:  req.session.thisUser.photo,
    date: getTheDate()
  })
  Userpost.findOneAndUpdate({_id: postInfo.id}, postInfo, (err, data) => {
    if (err) throw err;
    console.log('after comment:',data);
    req.flash('commentDone', 'Your comment is online now.')
    res.redirect('/show-post');
  })
})

//Run friends page
app.get('/friends', (req, res) => {
  console.log(req.session.thisUser.follows.length)
  if (req.session.thisUser.follows.length == 0) {
    res.render('friends', { 
      pageTitle: req.session.thisUser.name + ' | Developers Network', 
      msg: 'Try to search one and add it to your frineds list' 
    });
  } else {
    res.render('friends', { 
      pageTitle: req.session.thisUser.name + ' | Developers Network', 
      friends: req.session.thisUser.follows 
    });
  }
})

//Add friend to list 
app.get('/add-friend-to-list/:id', (req, res) => {
  req.session.thisUser.follows.push(req.params.id)
  User.findByIdAndUpdate(req.session.thisUser._id, { follows: req.session.thisUser.follows }, (err, data) => {
    if (err) throw err
    res.redirect('/friends')
  })
})

//open friend page 
let friendtInfo
app.get('/show-friend/:id', (req, res) => {
  User.findById(req.params.id, (err, data) => {
    if (err) throw err
    friendtInfo = data
    res.redirect('/friend-page')
  })
})

app.get('/friend-page', (req, res) => {
  if (friendtInfo.posts.length == 0){
    res.render('friendPage', { 
      pageTitle: req.session.thisUser.name + ' | Developers Network', 
      user: friendtInfo,
      msg: 'please come back again later .... '
    });
  }
  else{
    res.render('friendPage', { 
      pageTitle: req.session.thisUser.name + ' | Developers Network', 
      user: friendtInfo,
      posts: friendtInfo.posts
    });
  }
  
})


//listen
app.listen(port, () => {
  console.log(`********************* Server is Running at http://localhost:${port} *********************`);
})

// check if user loged in 
function checkLogInUser(req, res, next) {
  if (req.session.thisUser) {
    res.redirect('/profile');
  }
  else {
    next()
  }
}

//check if user have posts 
function checkUserPosts(req, res, next) {
  if (req.session.thisUser.posts.length == 0) {
    next()
  } else {
    res.render('post', { 
      pageTitle: req.session.thisUser.name + ' | Developers Network', 
      posts: req.session.thisUser.posts });
  }
}

// get Date
function getTheDate() {
  let date = new Date()
  let dateFormat = date.getFullYear() + "-" + ("0" + (date.getMonth() + 1)).slice(-2) + "-" + ("0" + date.getDate()).slice(-2) + " " + ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2);
  return dateFormat
}

//ajax
app.get('/selectPostAndShow', (req, res) => {
  Userpost.findById(req.query.id, (err, data) => {
    if (err) throw err;
    res.json(data);
  })
})

app.get('/search-a-friend', (req, res) => {
  User.find({name: req.query.name}, (err, data) => {
    if (err) throw err;
    console.log(data);
    res.json(data);
  })
})

app.get('/get-all-friends', (req, res) => {
  User.findById(req.query.id , (err, data) => {
    if (err) throw err;
    console.log(data);
    res.json(data);
  })
})

app.get('/get-current-user', (req, res) => {
  res.json(req.session.thisUser._id)
})

