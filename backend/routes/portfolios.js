const express = require('express');
const router = express.Router();
const PortfolioController = require('../controllers/PortfolioController');

router.get('/portfoliosAll', PortfolioController.getAllPortfolios);
router.post('/portfolios', PortfolioController.createPortfolio);
router.get('/portfolios/:id', PortfolioController.getPortfolioById);
router.put('/portfolios/:id', PortfolioController.updatePortfolio);
router.delete('/portfolios/:id', PortfolioController.deletePortfolio);

module.exports = router;
