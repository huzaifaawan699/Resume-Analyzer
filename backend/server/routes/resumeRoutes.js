const express = require('express');
const router = express.Router();
const resumeController = require('../controllers/resumeController');

// Route for uploading a resume and getting analysis
router.post('/upload', resumeController.uploadResume);

module.exports = router;
