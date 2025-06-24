const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: { type: String, unique: true },
  address: String,
  phone: String,
  password: String,
  gender: String,
  blood_group: String
});

module.exports = mongoose.model('User', userSchema);
