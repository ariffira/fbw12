const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const User = require('../models/User');


router.post('/check/firstname',[
    body('firstname').notEmpty().withMessage('First Name is Empty').isLength({min: 3}).withMessage('First Name must be at least 3 characters long'),
], (req, res)=> {
   const result = validationResult(req);
   let errors = result.array()
//    console.log(errors);
   if (errors.length == 0) res.send(errors);
   else res.send(errors[0].msg)
})

router.post('/check/lastname',[
    body('lastname').notEmpty().withMessage('Last Name is Empty').isLength({min: 3}).withMessage('Last Name must be at least 3 characters long'),
], (req, res)=> {
   const result = validationResult(req);
   let errors = result.array()
//    console.log(errors);
   if (errors.length == 0) res.send(errors);
   else res.send(errors[0].msg)
})

router.post('/check/age',[
    body('age').isInt({gt: 18, lt: 99}).withMessage('Age will be bettwen 18 - 99'),
], (req, res)=> {
   const result = validationResult(req);
   let errors = result.array()
//    console.log(errors);
   if (errors.length == 0) res.send(errors);
   else res.send(errors[0].msg)
})

router.post('/check/password',[
    
    body('password').isLength({min: 4, max: 10}).withMessage('Should be from 4 to 10 characters'),
], (req, res)=> {
   const result = validationResult(req);
   let errors = result.array()
//    console.log(errors);
   if (errors.length == 0) res.send(errors);
   else res.send(errors[0].msg)
})

router.post('/check/email',[
    body('email').isEmail().withMessage('Please enter a correct Email'),
], (req, res)=> {
   const result = validationResult(req);
   let errors = result.array()
//    console.log(errors);
   if (errors.length == 0) res.send(errors);
   else res.send(errors[0].msg)
})


router.get('/check/email/found', (req, res)=> {
    // console.log('line 60', req.query.email)
    User.findOne({email: req.query.email}, (err, data) => {
        if (err) {
            throw err
        }
        else {
            // console.log(data)
            res.send(data)
        }
    })
})

module.exports = router;