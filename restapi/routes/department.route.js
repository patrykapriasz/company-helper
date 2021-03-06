const express = require('express');

const departmentController = require('../controllers/departmentController');

const router = express.Router();

router.get("/departments", departmentController.getAllDepartments);

module.exports = router;
