const express = require('express');

const userController = require('../controllers/userController');

const router = express.Router();

router.get("/users", userController.getAllUsers);

router.get("/users/sample-takers", userController.getSampleTakers);

router.get("/users/:id",userController.getUser);

module.exports = router;
