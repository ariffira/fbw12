// Modules
const express = require('express');
const router = express.Router();

// Route
router.get('/', (req, res) => {
    res.render('index');
});

// Exporting Route Module
module.exports = router;






// main page
router.get('/mainpage', (req, res)=> {
    res.render('index')
})
// login form
router.get('/testlogin', checklogin, (req, res)=> {
    res.render('login')
});
// check if the user is login or not
function checklogin(req, res, next) {
    if(req.session.user) {
        res.redirect('/profile');
    }
    next();
}
// login process to see data
router.post('/testlogin', (req, res)=> {
    // lets login
    let email1= req.body.email; // input
    User.findOne({email: email1}, (err, data)=> {
        // create a session variable and put data here
        req.session.user = data;
        // save user inside session for some time
        req.session.save();
        res.redirect('/profile');
    })
})
// profile page
router.get('/profile', (req, res)=> {
    let userData = req.session.user; //  req.sessionID
    res.render('profile', { user: userData })
})
// logout user
router.get('/logout', (req, res)=> {
    req.session.destroy(); // remove session data
    res.redirect('/testlogin');
})