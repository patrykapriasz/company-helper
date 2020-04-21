const express = require('express');

const warehouseController = require('../controllers/warehouseController');

const router = express.Router();

router.get('/warehouses', warehouseController.getAllWarehouses);

module.exports = router;
