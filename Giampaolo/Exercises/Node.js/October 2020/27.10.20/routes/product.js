const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/all', productController.getAllProduct);
router.post('/create', productController.createProduct);
router.get('/delete/:productid', productController.deleteProduct);
router.get('/detail/:productid', productController.getProduct);
router.get('/getDetail', productController.getProductAjax);
router.post('/edit', productController.editProduct);

module.exports = router;
