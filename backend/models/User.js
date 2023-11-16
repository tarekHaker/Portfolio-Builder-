const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userId:String,
  email: String,
  password: String,
  firstName: String,
  lastName: String,
  address: String,
  phone: String,
  location: String,
  linkedin: String,
  facebook: String,
  image: { data: Buffer, contentType: String }, 
  aboutMe: String,
  Education1: String,
  Education2: String, 

});

const User = mongoose.model('User', userSchema);

module.exports = User;
