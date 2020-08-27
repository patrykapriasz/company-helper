const express = require('express');

const routes = express.Router();

const deliveryController = require('../controllers/deliveryController');

const router = require('./admin.route');

router.post('/deliveries/add', deliveryController.addDelivery);

module.exports = router;
