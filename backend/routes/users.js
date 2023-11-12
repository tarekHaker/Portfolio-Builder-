const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const multer = require('multer');
const crypto = require('crypto');

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
router.post('/users', upload.single('image'), UserController.createUser);

// Other user routes
router.get('/usersAll', UserController.getAllUsers);
router.get('/users/:id', UserController.getUserById);
router.put('/users/:id', UserController.updateUser);
router.delete('/users/:id', UserController.deleteUser);

module.exports = router;
