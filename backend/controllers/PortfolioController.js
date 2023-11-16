const Portfolio = require('../models/Portfolio');

const PortfolioController = {
    createPortfolio: async (req, res) => {
        try {
           const { user, skills, job, jobdescription, _id } = req.body;
          // const { userId, skills, job, jobdescription } = req.body;

          // console.log("userId",req.body)
          //  console.log("userId",userId)
     // console.log("id",_id)
            if (!_id) {
              return res.status(400).json({ error: "'_id' is required in the request body" });
            }
      
           
            const portfolio = new Portfolio({
                user: _id, 
                skills,
                job,
                jobdescription,
                   });
            await portfolio.save();
                  res.status(201).json(portfolio);
        } catch (error) {
          console.error('Error creating portfolio:', error);
          res.status(500).send('Error creating portfolio');
        }
      },


    getPortfolioById: async (req, res) => {
        try {
            const portfolioId = req.params.id;
            const portfolio = await Portfolio.findById(portfolioId);

            if (!portfolio) {
                return res.status(404).send('Portfolio not found');
            }

            res.json(portfolio);
        } catch (error) {
            console.error('Error getting portfolio:', error);
            res.status(500).send('Error getting portfolio');
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
                return res.status(404).send('Portfolio not found');
            }

            res.json(portfolio);
        } catch (error) {
            console.error('Error updating portfolio:', error);
            res.status(500).send('Error updating portfolio');
        }
    },

    deletePortfolio: async (req, res) => {
        try {
            const portfolioId = req.params.id;
            const portfolio = await Portfolio.findByIdAndRemove(portfolioId);

            if (!portfolio) {
                return res.status(404).send('Portfolio not found');
            }

            res.json(portfolio);
        } catch (error) {
            console.error('Error deleting portfolio:', error);
            res.status(500).send('Error deleting portfolio');
        }
    },
    getAllPortfolios: async (req, res) => {
        try {
            const portfolios = await Portfolio.find();
            res.json(portfolios);
        } catch (error) {
            console.error('Error getting all portfolios:', error);
            res.status(500).send('Error getting all portfolios');
        }
    },
};

module.exports = PortfolioController;
