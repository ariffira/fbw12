const express = require('express');
const router = express.Router();
router.get('/add-username', (req, res,next)=>{
   res.send('<form action="/post-username" method="POST"> <input type="text" name="username"> <button  type="submit"> Send </button> </form>');
next();
});
router.post('/post-username', (req, res, next)=>{
   console.log('data: ', req.body.username);

});
module.exports = router;