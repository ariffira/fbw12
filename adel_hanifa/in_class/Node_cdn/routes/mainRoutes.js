const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get('/', mainController.landingPage);
router.get('/contactus', mainController.contactus);
router.get('/aboutus', mainController.aboutus);

module.exports = router;