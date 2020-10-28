const express = require('express');
//make an application from express() top-level function
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const PORT = 5000;
const HOST = 'localhost';
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const session = require('express-session');
const indexRouter = require('./routes/index');
const productRouter = require('./routes/product');

// body parser use
app.use(bodyParser.urlencoded({extended: true}));
const hbs = require('hbs');

// helper settings
hbs.registerHelper('dateFormat', (data)=> {
    if(!data) {
        return 'Not updated yet';
    }
    return data.toLocaleDateString();
})
hbs.registerHelper('timeFormat', (data)=> {
    if(!data) {
        return 'Not updated yet';
    }
    return data.toLocaleTimeString();
})

// static folder use
app.use(express.static(__dirname+'/public'));

// connect-flash use
app.use(session({
    secret: process.env.SECRET,
    cookie: {
        maxAge: 60000*60*24 // 1 day
    }
}));
app.use(flash());

// connect DB
mongoose.connect(process.env.DB_LINK+process.env.DB_NAME, { 
    useUnifiedTopology: true, 
    useNewUrlParser: true,
    useFindAndModify: false
})
.then(()=> {
    console.log('MongoDB database is connected........');
})
.catch((error)=> {
    console.log('Database is not connected because:' + error.message)
});

// View engine setup
app.set('view engine', 'hbs');

// Routes
app.use('/', indexRouter);
app.use('/product', productRouter);

app.listen(PORT, HOST, ()=> {
    console.log(' The Server is running on ' + HOST + ':' + PORT )
})