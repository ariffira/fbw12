const express = require('express')
const router = express.Router();
const productController = require('../controllers/productController');
const multer = require('multer');
const path = require('path');

// setup Multer
var storage = multer.diskStorage({
    destination: function (req, file, cb) { cb(null, 'public/img') },
    filename: function (req, file, cb) { cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)) },
  });
  
var upload = multer({
storage: storage
})


 router.get('/all',productController.runHome);
 router.post('/create',  upload.array('product_pic'), productController.addProduct)
 router.get('/delete/:id', productController.removeProduct)
 router.get('/selectOne', productController.ajaxSelectOneProduct)
 router.post('/saveChanges',productController.updateOneProduct)
 
 router.post('/search/name',productController.searchProductName)
 router.post('/search/price',productController.searchProductPrice)
 router.post('/search/seller',productController.searchProductSeller)
 
 router.post('/search',productController.searchProductNamePrice)

module.exports = router;