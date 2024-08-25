const path = require('path');
const fs = require('fs');
const { analyzeResume } = require('../services/watsonService'); // Import the Watson service

const handleResumeUpload = async (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  try {
    // Process the uploaded file with IBM Watson
    const filePath = path.join(__dirname, '..', 'uploads', req.file.filename);
    const analysisResults = await analyzeResume(filePath);

    // Clean up (optional)
    fs.unlink(filePath, (err) => {
      if (err) console.error('Error deleting file:', err);
    });

    res.json(analysisResults);
  } catch (error) {
    console.error('Error processing resume:', error);
    res.status(500).send('Error processing resume.');
  }
};

module.exports = {
  handleResumeUpload,
};
