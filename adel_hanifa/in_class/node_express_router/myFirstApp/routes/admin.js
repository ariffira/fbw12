const express = require('express')
const router = express.Router();
let pagesLinks = `<div>
<a href="/">Home page</a>
<a href="/admin/login">Log in</a>
<a href="/admin/signup">Sign up</a>
<a href="/admin/control">Control</a>
</div>`;

router.get('/login', (req, res)=>{
    res.send(`<center><h1>Admin log in page</h1>${pagesLinks}</center>`);
 });

 router.get('/signup', (req, res)=>{
    res.send(`<center><h1>Admin sign up page</h1>${pagesLinks}</center>`);
 });

 router.get('/control', (req, res)=>{
    res.send(`<center><h1>Admin control panel page</h1>${pagesLinks}</center>`);
 });

module.exports = router;
