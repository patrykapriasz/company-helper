const express = require('express');

const userController = require('../controllers/userController');

const router = express.Router();

router.get("/users", userController.getAllUsers);

router.get("/users/sample-takers", userController.getSampleTakers);

module.exports = router;
