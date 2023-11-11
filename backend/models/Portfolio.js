const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    bibliography: String,
    skills: [String],
});

const Portfolio = mongoose.model('Portfolio', portfolioSchema);

module.exports = Portfolio;
