const express = require('express');

const adminController = require('../controllers/adminController');

const router = express.Router();

router.post('/admin/create-role', adminController.AddRole);
router.post('/admin/create-user', adminController.addUser);

router.get('/admin/check', adminController.checkStatus)

module.exports = router;
