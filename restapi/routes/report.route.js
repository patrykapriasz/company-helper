const express = require('express');

const reportController = require('../controllers/reportController');

const router = express.Router();

router.post('/reports',reportController.addReport);

module.exports = router;
