const express = require('express');
const app = express();
const port = 5000;

const fs = require('fs');
const path = require('path');
const hbs = require('hbs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const multer = require('multer');

const Img = require('./models/img');

let dbLink = 'mongodb+srv://admin:adeladmin@adeldci.mmdjq.mongodb.net/instagramEX8';

// connect DB
mongoose.connect(dbLink, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => { console.log('DB connected.........') })
  .catch(err => console.log('DB not connected :' + err))

//hbs function
hbs.registerHelper('round', function (aString) {
  return (aString/1024).toFixed(2)+ ' KB'
})

hbs.registerHelper('split', function (aString) {
  return aString.split(".")[0];  
})

hbs.registerHelper('split2', function (aString) {
  return aString.split("/")[1];  
})

// setup body-parser
app.use(bodyParser.urlencoded({ extended: true }));

//setup a static Folder
app.use(express.static(path.join(__dirname, 'public')));

//setup a session
app.use(session({ secret: 'secret-key' }));

//setup a template engines
app.set('view engine', 'hbs');

// setup Multer
var storage = multer.diskStorage({
  destination: function (req, file, res) { res(null, 'public/uploads') },
  filename: function (req, file, res) { res(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)) },
});

var upload = multer({
  storage: storage
})

let allImagesInfoArray = [];

//Routes
let msg = null
app.get('/', (req, res) => {
  Img.find((err, data) => {
    if (err) { console.log(err) }
    //console.log(data);
    if (data.length == 0) {
      let noIMG = `Please try to upload one from the form above.  `
      res.render('index', {
        noIMG,
        msg
      })
      msg = null;
    }
    else {
      res.render('index', {
        data,
        msg
      })
      msg = null;
    }
  })
})

app.post('/upload-img', upload.array('myimg', 4), onlyImages, (req, res) => {
  //console.log('*********************saved file informaition*********************')   
  allImagesInfoArray.map((item) => {
    let date = new Date()
    let dateFormat = date.getFullYear() + "-" + ("0" + (date.getMonth() + 1)).slice(-2) + "-" + ("0" + date.getDate()).slice(-2) + " " + ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2);
    item.date = dateFormat

    let newImg = new Img(item)
    newImg.save(() => {
      //console.log('Data is saved......')
    })
  })
  res.redirect('/');
})

function onlyImages(req, res, next) {
  allImagesInfoArray = [];
  //console.log(req.files);
  let counter = req.files.length
  req.files.map((item) => {
    //console.log(item.mimetype.slice(0,6));
    if (item.mimetype.slice(0, 6) == "image/") {
      allImagesInfoArray.push(item)
    }
    else {
      //console.log('*********************file not an image*********************')
      //console.log(item)
      fs.unlink(item.path, () => {

      })
      counter--;
    }
  })
  if (counter == 0) {
    msg = 'All your files are not Images. you can only upload images';
    res.redirect('/');
  }
  else if (counter == req.files.length) {
    msg = 'All your Images are successfully upload';
    next()
  }
  else {
    msg = 'Some of your files are successfully upload and ' + (req.files.length - counter) + ' is deleted';
    next()
  }
}

app.get('/delete/:id', (req, res) => {
  let id = req.params.id;
  Img.findByIdAndDelete(id, (err, data) => {
    //console.log('*********************data deleted*********************')
    //console.log(data)
    fs.unlink(data.path, () => {
      msg = 'Your image has been deleted!'
      res.redirect('/')
    })
  })
})

let oldPic = '';
app.get('/edit/:id', (req, res) => {
  let id = req.params.id;
  console.log(id)
  Img.findById(id, (err, data) => {
    oldPic = data;
    res.redirect('/edit-post');
  })
})

app.get('/edit-post', (req, res) => {
  console.log(oldPic)
  res.render('update', { data: oldPic })
})

app.post('/save-update', upload.array('myimg', 4), onlyImages, (req, res) => {
  fs.unlinkSync(oldPic.path);
  let date = new Date()
  let dateFormat = date.getFullYear() + "-" + ("0" + (date.getMonth() + 1)).slice(-2) + "-" + ("0" + date.getDate()).slice(-2) + " " + ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2);
  allImagesInfoArray[0].date = dateFormat
  Img.findByIdAndUpdate(oldPic._id, allImagesInfoArray[0], (err) => {
    msg = 'Your img is updated ...'
    res.redirect('/');
  })
})

app.post('/update-info', (req, res) => {
  let date = new Date()
  let dateFormat = date.getFullYear() + "-" + ("0" + (date.getMonth() + 1)).slice(-2) + "-" + ("0" + date.getDate()).slice(-2) + " " + ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2);
  req.body.date = dateFormat
  req.body.originalname = req.body.originalname +'.'+ oldPic.mimetype.split("/")[1]
  Img.findByIdAndUpdate(oldPic._id, req.body, (err) => {
    msg = 'Your image info is updated ...'
    res.redirect('/');
  })
})

// edit picture ajax call
app.get('/edit-picture', (req, res)=> {
  let id = req.query.id;
  console.log('id from ajax', req.query)
  Img.findById(id, (err, data)=> {
      if(err) throw err;
      console.log(data);
      oldPic = data
      res.json(oldPic);
  })
})

app.post('/test-req-body', (req, res)=> {
  console.log(req.body)
  res.send(req.body)
})

//listen
app.listen(port, () => {
  console.log(`********************* Server is Running at http://localhost:${port} *********************`);
})