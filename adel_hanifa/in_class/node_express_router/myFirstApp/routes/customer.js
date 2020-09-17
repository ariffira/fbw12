const express = require('express')
const router = express.Router();
let pagesLinks = `<div>
<a href="/">Home page</a>
<a href="/customer/login">Log in</a>
<a href="/customer/signup">Sign up</a>
<a href="/customer/order">Order</a>
<a href="/customer/wishlist">Wishlist</a>
<a href="/customer/cart">Cart</a>
<a href="/customer/details">Account</a>

</div>`;

router.get('/login', (req, res)=>{
    res.send(`<center><h1>Customer log in page</h1>${pagesLinks}</center>`);
 });

 router.get('/signup', (req, res)=>{
    res.send(`<center><h1>Customer sign up page</h1>${pagesLinks}</center>`);
 });

 router.get('/order', (req, res)=>{
    res.send(`<center><h1>Customer order page</h1>${pagesLinks}</center>`);
 });

 router.get('/wishlist', (req, res)=>{
    res.send(`<center><h1>Customer wishlist page</h1>${pagesLinks}</center>`);
 });

 router.get('/details', (req, res)=>{
    res.send(`<center><h1>Customer details page</h1>${pagesLinks}</center>`);
 });

 router.get('/cart', (req, res)=>{
    res.send(`<center><h1>Customer cart page</h1>${pagesLinks}</center>`);
 });


module.exports = router;