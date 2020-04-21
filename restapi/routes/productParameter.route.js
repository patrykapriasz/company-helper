const express = require('express');

const router = express.Router();

const productParameterController = require('../controllers/productParameterController');

router.get('/products/parameters/:productId', productParameterController.getParametersByProductId);

module.exports = router;
