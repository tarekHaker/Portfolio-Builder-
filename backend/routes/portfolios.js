const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const multer = require('multer');
const crypto = require('crypto');

const generateFileName = (bytes = 32) =>
  crypto.randomBytes(bytes).toString('hex');

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
const PortfolioController = require('../controllers/PortfolioController');
router.get('/portfolios/count/:id', PortfolioController.countPortfoliosByUserId);

router.get('/portfoliosAll', PortfolioController.getAllPortfolios);
router.post('/portfolios', upload.single('image'),PortfolioController.createPortfolio);
router.get('/portfolios/:id', PortfolioController.getPortfolioById);
router.put('/portfolios/:id', PortfolioController.updatePortfolio);
router.delete('/portfolios/:id', PortfolioController.deletePortfolio);

module.exports = router;
