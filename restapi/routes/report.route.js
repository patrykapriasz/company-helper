const express = require('express');
const checkAuth = require('../auth-checker');

const reportController = require('../controllers/reportController');

const router = express.Router();

router.post('/reports',checkAuth,reportController.addReport);

router.get('/reports/:id',reportController.getReport);

router.get('/reports/last/:limitPerSite/:siteIndex', reportController.getPaginatedReports);

router.patch('/reports/edit/:reportId',checkAuth, reportController.editReport);

module.exports = router;
