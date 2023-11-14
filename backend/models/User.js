const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userId:String,
  email: String,
  password: String,
  firstName: String,
  lastName: String,
  address: String,
  phone: String,
  image: String,
  aboutMe: String,
  location: String,
  linkedin: String,
  facebook: String,
  skills: [String],
  job: String,
  jobdescription: String,
  

});

const User = mongoose.model('User', userSchema);

module.exports = User;
