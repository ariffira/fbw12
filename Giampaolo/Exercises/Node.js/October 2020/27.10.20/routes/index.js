const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

router.get('/', indexController.landingPage);
router.get('/contactus', indexController.contactus);
router.get('/aboutus', indexController.aboutus);

module.exports = router;