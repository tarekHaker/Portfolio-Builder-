const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    skills: String,
    job: String,
    jobdescription: String,
    bibliography: String,
    image: { data: Buffer, contentType: String }, 

});

const Portfolio = mongoose.model('Portfolio', portfolioSchema);

module.exports = Portfolio;
