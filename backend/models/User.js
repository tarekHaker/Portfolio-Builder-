const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userId:String,
  email: String,
  password: String,
  firstName: String,
  lastName: String,
  image: String,
  aboutMe: String,
  dateEducation1: String,
  titleEducation1: String,
  descriptionEducation1: String,
  dateEducation2: String,
  titleEducation2: String,
  descriptionEducation2: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
