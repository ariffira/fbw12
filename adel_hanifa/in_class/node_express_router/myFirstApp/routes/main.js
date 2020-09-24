const express = require('express')
const router = express.Router();
let pagesLinks = `<div>
<a href="/">Home page</a>
<a href="/admin/login">Admin page</a>
<a href="/customer/login">customer page</a>
<a href="/about">About us</a>
<a href="/contact">Contact</a>
</div>`;

router.get('/', (req, res)=>{
    res.send(`<center><h1>This is the home page</h1>${pagesLinks}</center>`);
 });

 router.get('/about', (req, res)=>{
    res.send(`<center><h1>About us page</h1>${pagesLinks}</center>`);
 });

 router.get('/contact', (req, res)=>{
    res.send(`<center><h1>If you need to contact us please follow:</h1>${pagesLinks}</center>`);
 });


module.exports = router;