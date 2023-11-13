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

const upload = multer({ storage: storage });
router.post('/user', upload.single('image'), UserController.createUser);
router.get('/usersAll', UserController.getAllUsers);
router.get('/user', UserController.getUserByEmail);
router.put('/user/:id', UserController.updateUser);
router.delete('/user/:id', UserController.deleteUser);

module.exports = router;
