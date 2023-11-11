const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    portfolio: { type: mongoose.Schema.Types.ObjectId, ref: 'Portfolio' },
    title: String,
    date: Date,
    description: String,
    URL: String,
    image: String, 
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
