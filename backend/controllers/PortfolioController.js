const Portfolio = require("../models/Portfolio");

const PortfolioController = {
  getPortfolioByUserId: async (req, res) => {
    try {
      const userId = req.params.id;
      console.log(userId);
      const portfolio = await Portfolio.findOne({ user: userId });
      console.log(portfolio);

      res.json(portfolio);
    } catch (error) {
      console.error("Error getting portfolio:", error);
      res.status(500).send("Error getting portfolio");
    }
  },

  countPortfoliosByUserId: async (req, res) => {
    try {
      const userId = req.params.id;
      const count = await Portfolio.countDocuments({ user: userId });
      console.log(count);
      res.json({ count });
    } catch (error) {
      console.error("Error counting portfolios:", error);
      res.status(500).json({ error: "Error counting portfolios" });
    }
  },

  createPortfolio: async (req, res) => {
    try {
      const {
        userId,
        skills,
        job,
        jobdescription,
        bibliography,
        experience1,
        experiencedescription1,
        experience2,
        experiencedescription2,
        education1,
        education2,
        descriptioneducation1,
        descriptioneducation2,
      } = req.body;
      let image = {};
      if (req.file) {
        image.data = req.file.buffer;
        image.contentType = req.file.mimetype;
      }

      const portfolio = new Portfolio({
        user: userId,
        skills,
        job,
        jobdescription,
        bibliography,
        experience1,
        experiencedescription1,
        experience2,
        experiencedescription2,
        education1,
        education2,
        descriptioneducation1,
        descriptioneducation2,
        image,
      });

      await portfolio.save();
      res.status(201).json(portfolio);
    } catch (error) {
      console.error("Error creating portfolio:", error);
      res.status(500).json({ error: "Error creating portfolio" });
    }
  },

  getPortfolioById: async (req, res) => {
    try {
      const portfolioId = req.params.id;
      const portfolio = await Portfolio.findById(portfolioId);

      if (!portfolio) {
        return res.status(404).send("Portfolio not found");
      }

      res.json(portfolio);
    } catch (error) {
      console.error("Error getting portfolio:", error);
      res.status(500).send("Error getting portfolio");
    }
  },

  updatePortfolio: async (req, res) => {
    try {
      const portfolioId = req.params.id;
      const { user, bibliography, skills } = req.body;

      const portfolio = await Portfolio.findByIdAndUpdate(
        portfolioId,
        {
          user,
          bibliography,
          skills,
        },
        { new: true }
      );

      if (!portfolio) {
        return res.status(404).send("Portfolio not found");
      }

      res.json(portfolio);
    } catch (error) {
      console.error("Error updating portfolio:", error);
      res.status(500).send("Error updating portfolio");
    }
  },

  deletePortfolio: async (req, res) => {
    try {
      const portfolioId = req.params.id;
      const portfolio = await Portfolio.findByIdAndRemove(portfolioId);

      if (!portfolio) {
        return res.status(404).send("Portfolio not found");
      }

      res.json(portfolio);
    } catch (error) {
      console.error("Error deleting portfolio:", error);
      res.status(500).send("Error deleting portfolio");
    }
  },
  getAllPortfolios: async (req, res) => {
    try {
      const portfolios = await Portfolio.find();
      res.json(portfolios);
    } catch (error) {
      console.error("Error getting all portfolios:", error);
      res.status(500).send("Error getting all portfolios");
    }
  },
};

module.exports = PortfolioController;
