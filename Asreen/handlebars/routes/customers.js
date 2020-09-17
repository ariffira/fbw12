const express = require('express');
const router = express.Router();

router.get('/cart', (req, res) => {
    res.render( 'cart');
})
router.get('/signin',(req,res)=>{
    res.render('loginpage')
})
router.get('/signup', (req, res)=>{
    res.render('signup');
});
module.exports = router;