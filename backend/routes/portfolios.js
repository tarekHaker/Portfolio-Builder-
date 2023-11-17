const express = require('express');
const router = express.Router();
const multer = require('multer');
const crypto = require('crypto');
const PortfolioController = require('../controllers/PortfolioController');
const Portfolio = require('../models/Portfolio');

const generateFileName = (bytes = 32) =>
  crypto.randomBytes(bytes).toString('hex');
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../uploads/'));
    },
    filename: function (req, file, cb) {
      const originalExtension = path.extname(file.originalname);
      const uniqueSuffix = generateFileName();
      cb(null, uniqueSuffix + originalExtension);
    },
  });
  
 

const upload = multer({ storage: storage });
router.get('/portfolios/:id', PortfolioController.getPortfolioByUserId);

router.get('/portfolios/count/:id', PortfolioController.countPortfoliosByUserId);
router.get('/portfoliosAll', PortfolioController.getAllPortfolios);
router.post('/portfolios', upload.single('image'), PortfolioController.createPortfolio);
router.get('/portfolios/:id', PortfolioController.getPortfolioById);
router.put('/portfolios/:id', PortfolioController.updatePortfolio);
router.delete('/portfolios/:id', PortfolioController.deletePortfolio);

module.exports = router;
