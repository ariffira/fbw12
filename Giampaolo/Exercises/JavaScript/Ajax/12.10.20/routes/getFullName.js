// Modules
const express = require('express');
const router = express.Router();

// get the firstname from client and return back fullname 
router.get('/', (req, res) => {
    // assume lastname comes from DB/API
    let lastName = 'Khan';

    // firstName from client form
    let firstName = req.query.firstName;
    //console.log(firstName);
    
    let fullname = firstName + ' ' + lastName;
    res.json(fullname);
});

// Export Router
module.exports = router