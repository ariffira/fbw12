const express = require('express');
const router = express.Router();

router.get('/details', (req, res) => {
    res.send( 'Details');
})
router.get('/signin',(req,res)=>{
    res.send('<center><h1> Hello in our web-page </h1></center>')
})
router.get('/signup', (req, res)=>{
    res.send(`<div>
               <input type="text" name="username" placeholder="Enter your name"> 
               <input type="email" placeholder="Enter your email">
               <button  type="submit"> Send </button> 
               </div>`);
 
 });
module.exports = router;