const express = require('express');
const cors = require('cors');
const port = 5000;
const app = express();

const mongoose = require('mongoose'); 

mongoose.connect('mongodb://127.0.0.1:27017/Portfolio-Builder-', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to the database');
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

var createError = require('http-errors');
var path = require('path');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var portfolioRouter = require('./routes/portfolios');
var projectRouter = require('./routes/projects');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/portfolios', portfolioRouter);
app.use('/projects', projectRouter);


module.exports = app;
