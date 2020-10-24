const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const flash = require('connect-flash');
const dotenv = require('dotenv').config();
const hbs = require('hbs');
const Toy = require('./model/toys')
const User = require('./model/users');
const ContactInfo = require('./model/contact');
const sendEmail = require('./utils/sendEmail')
const output = require('./public/outputEmail')
const Email = require('./model/emailModel')
const Comment = require('./model/comments')
const contactEmail = require('./model/contactEmail')
const fs = require('fs');
const crypto = require('crypto')
const PORT = process.env.PORT || 4000;
var session = require('express-session');
const url = require('url')
const path = require('path');
var multer = require('multer');
const { strict } = require("assert");
// function check the image type
const storage = multer.diskStorage({
  destination: function (req, file, cb) { cb(null, 'public/uploads') },
  filename: function (req, file, cb) { cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)) },
});
let fileFilter = function (req, file, cb) {
  let allowedMimes = ['image/jpeg', 'image/jpg', 'image/png'];
  if (allowedMimes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    return cb(
      message = 'Invalid file type. Only jpg,jpeg png image files are allowed.'
      , false);
  }
};
let obj = {
  storage: storage,
  limits: {
    fileSize: 200 * 1024 * 1024
  },
  fileFilter: fileFilter
};
const uploadPic = multer(obj);
let msg = false;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.text())
app.use(flash())
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false, maxAge: 1000 * 24 * 60 * 60 }
}));
// setup Multer
// connect to Database
let mongoDbUrl = process.env.mongoURL;
mongoose.connect(mongoDbUrl, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => { console.log('MongoDB is connected ...') })
  .catch((err) => { console.log(err) })
mongoose.set('useCreateIndex', true)
//set up a static folder
app.use(express.static(`${__dirname}/public`));
//set up template engine
app.set("view engine", "hbs");
//Routes
app.get("/", (req, res) => {
  console.log(req.session);
  // console.log(req.sessionID)
  if (!req.session.viewsCount) {
    req.session.viewsCount = 1;
    console.log("Welcome to this page for the first time!");
  } else {
    req.session.viewsCount += 1;
    console.log("You visited this page " + req.session.viewsCount + " times");
  }
  res.render("index", { title: 'Teddy Bear App' });
});
app.get("/checkout", (req, res) => {
  res.render('checkout', { title: 'checkout-page' })
})
app.get("/product", (req, res) => {
  res.render('product', { title: 'product-page' })
})
app.get("/about", (req, res) => {
  res.render('about', { title: 'about-page' })
})
app.get("/contact", (req, res) => {
  res.render('contact', { title: 'contact-page',msg:req.flash('msg') })
})
app.get("/payment", (req, res) => {
  res.render('payment', { title: 'payment-page' })
})
app.get("/shop", (req, res) => {
  let buyItems = [];
  let saleItems = [];
  Toy.find((err, data) => {
    if (err) console.log(err)
    else {
      data.map(item => {
        if (item.saleBuy == 'buy') { buyItems.push(item) }
        else saleItems.push(item)
      })
      // console.log('products',data)
      res.render('shop', { title: 'shop-page', toySale: saleItems, toyBuy: buyItems })
    }
  })
})
app.get('/seeMoreInfo/:id', (req, res) => {
  let id = req.params.id;
  // console.log('id',id);
  Toy.findById(id, (err, data) => {
    if (err) console.log(err)
    else {
      // console.log('products',data)
      res.render('single', { title: 'single-page', toy: data })
    }
  })
})
app.get("/updateUser/:id", (req, res) => {
  userId = req.params.id;
  console.log(userId)
  User.findById(userId, (err, doc) => {
    if (err) throw err;
    userData = doc;
    console.log('data updated', "userData :" + userData);
    res.render('userInfo', { userData, msg, userId });
  })
});
app.post('/updateUser/:id', uploadPic.single('file'), (req, res) => {
  userId = req.params.id;
  let file = req.file;
  console.log(userId)
  console.log('file', file)
  console.log('req.body', req.body);
  let userInfo = req.body;
  let user = {
    imagePath: 'uploads/' + file.filename,
    ...userInfo
  }
  User.findByIdAndUpdate(userId, user, (err, doc) => {
    if (err) throw err;
    userData = doc;
    console.log('data updated', "userData :" + userData);
    res.render('account', { user, msg: 'Your Account is updated successfully' });
  })
})
app.get("/service", (req, res) => {
  res.render('service', { title: 'Service-page' })
})
app.get("/single", (req, res) => {
  res.render('single', { title: 'single-page' })
})
app.get("/login", (req, res) => {
  if (!req.session.userLogin)
    res.render('login', { title: 'login-page', msg: req.flash('msg') })
  else res.redirect('account')
})
app.post("/login", checkUser);
app.get("/logout", (req, res) => {
  req.session.destroy();
  console.log('req.session', req.session)// remove session and go to login page
  res.redirect("/login")
})
app.get("/account", (req, res) => {
  if (req.session.userLogin) {
    console.log('req.session', req.session.userLogin)
    User.findOne({ email: req.session.userLogin.email }, (err, data) => {
      if (err) throw err;
      console.log("data", data)
      res.render('account', { user: data, title: 'Account page' })
    })
  }
  else {
    req.flash('msg', 'please try to login first')
    res.redirect('login')
  }
})
app.post("/signup", uploadPic.single('avatar'), function (req, res) {
  console.log(req.body);
  const file = req.file;
  console.log('*save file info*')
  // console.log(file)
  //console.log(req.body);
  let userInfo = req.body;
  let userObject = {
    imagePath: 'uploads/' + file.filename,
    ...userInfo
  }
  let newUser = new User(userObject);
  newUser.save(() => { console.log('Data is saved in DB') })
  res.render("Login", { title: 'login-page', name: req.body.uname });
});
app.post("/newItem", uploadPic.single('newItem'), function (req, res) {
  console.log(req.body);
  const file = req.file;
  console.log('*save file info*')
  console.log('file', file)
  console.log('req.body', req.body);
  let itemInfo = req.body;
  let item = {
    imagePath: 'uploads/' + file.filename,
    ...itemInfo
  }
  console.log(item)
  let newItem = new Toy(item);
  newItem.save(() => { console.log('Data is saved in DB') })
  res.redirect("/shop");
});
app.get('/sendMsgProvider', (req, res) => {
  res.render('sendEmail', { title: 'send message', msgEmail: req.flash('msg') })
})
app.get('/verify_email', function (req, res) {
  let hexNum = req.query.token;
  Email.findOne({ authToken: hexNum }, function (err, doc) {
    if (err) { return console.error(err); }
    var userEmail = doc.email;
    console.log('userEmail', userEmail)
    doc.save(function (err) {
      if (err) return console.error(err);
      console.log('the provider sent replay succesfully');
    });
  });
  res.redirect('/');
});
app.post('/sendMsgProvider', (req, res) => {
  const { name, email, message } = req.body;
  console.log('user email:', req.body.email);
  //generate authentication token
  var seed = crypto.randomBytes(20);
  var authToken = crypto.createHash('sha1').update(seed + req.body.email).digest('hex');
  console.log('autToken', authToken)
  var newEmail = new Email({
    name,
    email,
    message,
    authToken,
  });
  newEmail.save(function (err, newEmail) {
    if (err) {
      return console.error(err);
    }
    console.log('new contact user', newEmail);
  });
  sendEmail(
    to = 'ilyasasreen@gmail.com',//newEmail.email
    from = 'ilyasasreen@gmail.com',
    subject = 'Offer a price',
    html = output(name, email, message)
  );
  let msgEmail = false;
  req.flash('msg', 'Thank you for your message. We will send your Email to the provider.')
  res.redirect('/sendMsgProvider')
  msgEmail = false;
})
app.post('/searchItem', (req, res) => {
  let items = []
  let item = req.body.search;
  console.log('item', item)
  Toy.find((err, data) => {
    if (err) throw err;
    data.map(toy => {
      if (toy.category == item || toy.proName == item) {
        console.log(toy.category, toy.proName, item)
        items.push(toy)
      }
    })
    if (items !== []) {
      console.log('array items', items)
      let itemsBuy=[], itemsSale=[];
      for(let item of items){
        if (item.saleBuy=='buy') itemsBuy.push(item);
        else itemsSale.push(item)
      }
      res.render('shop', { toyBuy: itemsBuy,toySale:itemsSale});
    }
    else console.log('no such item')
  })
})
app.post('/sendContactEmail', (req, res) => {
  let email = req.body.email;
  let newEmail = new contactEmail({ email })
  newEmail.save((err, data) => {
    if (err) throw err;
    console.log('email saved in DB', data)
    res.redirect('/contact')
  })
})
app.post('/addComment/:id/:proName', function (req, res) {
  let newComment = new Comment({ comment: req.body.comment, product_name: req.params.proName });
  newComment.save(function (err, data) {
    if (err) throw err
    console.log('comment saved in DB')
    res.redirect('/shop');
  });
});
app.post('/contact', (req, res) => {
  let { name, email, phone, message } = req.body;
  let newContact = new ContactInfo({ name, email, phone, message });
  newContact.save((err, data) => {
    if (err) throw err;
    console.log('Contact Information saved in DB')
    req.flash('msg', 'Thank you , we will contact with you soon...')
    res.redirect('/contact')
  })
})
// listen to the PORT 4000
app.listen(PORT, () => {
  console.log('The server listining to port ', PORT)
})
// Partials
hbs.registerPartials(__dirname + '/views/partials/')
hbs.registerPartial('carousel', 'carousel.hbs')
hbs.registerPartial('contactSection', 'contactSection.hbs')
// middleware
function checkUser(req, res) {
  console.log('req.body', req.body);
  let userFound = false;
  User.find((err, data) => {
    if (err) console.log(err)
    // console.log('data',data)
    data.map((item) => {
      if (item.email == req.body.email && item.pswd == req.body.pswd) {
        userFound = true;
        req.session.userLogin = item;
        console.log('req.session', req.session)
        req.session.save();
      }
    });
    if (userFound) {
      res.redirect('/shop')
    }
    else {
      console.log('userFound', userFound);
      req.flash('msg', 'Email or password is invalid ')
      res.redirect('login')
    }
  })

}
