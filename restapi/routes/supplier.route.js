const express = require('express');

const supplierController = require('../controllers/supplierController');

const router = express.Router();

router.get('/suppliers/by-product/:productId', supplierController.getSupplierByProduct);

module.exports = router;
