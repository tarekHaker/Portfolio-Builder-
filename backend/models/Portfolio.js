const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    skills: String,
    job: String,
    jobdescription: String,
    bibliography: String,
    image: { data: Buffer, contentType: String }, 
    experience1: String,
    experiencedescription1: String,
    experience2: String,
    experiencedescription2: String,
    education1: String,
    education2: String,
    descriptioneducation1: String,
    descriptioneducation2: String,
});

const Portfolio = mongoose.model('Portfolio', portfolioSchema);

module.exports = Portfolio;
