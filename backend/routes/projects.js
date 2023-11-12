const express = require('express');
const router = express.Router();
const ProjectController = require('../controllers/ProjectController');
const multer = require('multer');
const crypto = require('crypto');

// Generate a random file name
const generateFileName = (bytes = 32) =>
  crypto.randomBytes(bytes).toString('hex');

// Set up multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'routes/uploads/'); 
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = generateFileName();
    cb(null, uniqueSuffix + '.jpg'); 
  },
});

// Set up multer middleware
const upload = multer({ storage: storage });

router.post('/projects', upload.single('image'), ProjectController.createProject);
router.get('/projects/:id', ProjectController.getProjectById);
router.put('/projects/:id', upload.single('image'), ProjectController.updateProject);
router.delete('/projects/:id', ProjectController.deleteProject);

module.exports = router;
