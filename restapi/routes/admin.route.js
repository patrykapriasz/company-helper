const express = require('express');
const authChecker = require('../auth-checker');

const adminController = require('../controllers/adminController');

const router = express.Router();

router.post('/admin/create-role', authChecker, adminController.AddRole);
router.post('/admin/create-user', authChecker, adminController.addUser);

router.get('/admin/check', adminController.checkStatus)

module.exports = router;
