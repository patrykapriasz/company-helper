const express = require('express');

const roleController = require('../controllers/roleController');

const router = express.Router();

router.get("/roles",roleController.getAllRoles);
router.get("/roles/:id", roleController.getRoleById);

module.exports = router;
