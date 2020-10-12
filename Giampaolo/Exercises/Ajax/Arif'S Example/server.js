const express = require('express');
const app = express();
const PORT = 5000;

// Static folder setup
app.use(express.static(__dirname + '/public'));
// View Engine setup
app.set('view engine', 'hbs');

// Routes: get, post, put, delete
app.get('/', (req, res) => {
    res.render('index');
});

// get the firstname from client and return back fullname 
app.get('/getFullName', (req, res) => {
    // assume lastname comes from DB/API
    let lastName = 'Khan';
    // firstName from client form
    let firstName = req.query.firstName;
    //console.log(firstName);
    let fullname = firstName + ' ' + lastName;
    res.json(fullname);
})

app.listen(PORT, () => {
    console.log('Server is running on ' + PORT);
});