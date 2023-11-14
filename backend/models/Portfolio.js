const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    bibliography: String,
    skills: [String],
    dateEducation1: String,
    titleEducation1: String,
    descriptionEducation1: String,
    dateEducation2: String,
    titleEducation2: String,
    descriptionEducation2: String,
    job1: String,
    jobdescription1: String,
    job2: String,
    jobdescription2: String,
});

const Portfolio = mongoose.model('Portfolio', portfolioSchema);

module.exports = Portfolio;
