const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Route to get all products
router.get('/', productController.getAllProducts);

// Route to get a specific product by ProductID
router.get('/:id', productController.getProductById);

// Route to create a new product
router.post('/', productController.createProduct);

// Route to update a product by ProductID
router.put('/:id', productController.updateProductById);

// Route to delete a product by ProductID
router.delete('/:id', productController.deleteProductById);

module.exports = router;
