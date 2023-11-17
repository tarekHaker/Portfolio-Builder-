const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");
const multer = require("multer");
const crypto = require("crypto");

const generateFileName = (bytes = 32) =>
  crypto.randomBytes(bytes).toString("hex");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "routes/uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = generateFileName();
    cb(null, uniqueSuffix + ".jpg");
  },
});

const upload = multer({ storage: storage });
const PortfolioController = require("../controllers/PortfolioController");
router.get(
  "/portfolios/count/:id",
  PortfolioController.countPortfoliosByUserId
);

router.get("/portfoliosAll", PortfolioController.getAllPortfolios);
router.post(
  "/portfolios",
  upload.single("image"),
  PortfolioController.createPortfolio
);
router.get("/portfolios/:_id", PortfolioController.getPortfolioById);
router.put("/portfolios/:_id", PortfolioController.updatePortfolio);
router.delete("/portfolios/:_id", PortfolioController.deletePortfolio);
router.get(
  "/portfolios/user/:userId",
  PortfolioController.getPortfolioByUserId
);

module.exports = router;
