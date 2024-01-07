const express = require('express')

// Invoking the Router Here:
const router = express.Router();

// Importing the controllers:
const {getAllProducts, getAllProductsStatic} = require('../controllers/products');

router.route('/products').get(getAllProducts)
router.route('/static').get(getAllProductsStatic)

module.exports = router