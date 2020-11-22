const express = require('express');
const app = express();
require('dotenv').config();
const PORT = 5000;
const HOST = 'localhost';
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const hbs = require('hbs');
const flash = require('connect-flash');
const session = require('express-session');

const mainRoutes = require('./routes/mainRoutes');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const ajaxRoutes = require('./routes/ajaxRoutes');

  

// body parser use
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// connect-flash use
app.use(session({
    secret: process.env.SECRET,
    cookie: {
        maxAge: 60000*60*24 // 1 day
    }
}));
app.use(flash());

// connect DB
mongoose.connect(process.env.DBLink, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true})
.then(()=> {
    console.log('MongoDB database is connected........');
})
.catch((error)=> {
    console.log('Database is not connected because:' + error.message)
});

// View engine setup
app.set('view engine', 'hbs');

//hbs function helper
hbs.registerHelper('getDate', function (aString) {
    return aString.toLocaleString()
  })

hbs.registerHelper('getGender', function (aString) {
    if (aString == true) return 'Male'
    else return 'Female'
  })

hbs.registerHelper('checkUpdate', function (aString) {
    if (!aString) return 'not updated yet'
    else return aString.toLocaleString("en-GB")
  })

hbs.registerHelper("xif", function (x, options) {
    return x==0 ? options.fn(this) : options.inverse(this);
});

// access Token Secret 
const accessTokenSecret = process.env.TOKEN_SECRET;

//setup a static Folder
app.use(express.static(path.join(__dirname, 'public')));


// Routes
app.use('/',mainRoutes)
app.use('/product',productRoutes)
app.use('/user',userRoutes)
app.use('/ajax',ajaxRoutes)


app.listen(PORT, HOST, ()=> {
    console.log(' The Server is running on: http://' + HOST + ':' + PORT )
})