const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true }, 
  title: String, 
  qualifications: [String], 
  department: String, 
  specializations: [String], 
  experience_years: Number,
  about: String, 
  services: [String], 
  expertise: [String], 
  languages: [String], 
  rating: { type: Number, default: 0 },
  review_count: { type: Number, default: 0 }, 
  happy_patients: { type: Number, default: 0 }, 
  contact_number: String, 
  email: { type: String, unique: true, sparse: true }, 
  consultation_fee: Number,
  location: String, 
  address: String, 
  profile_image: String, 
  awards: [String], 
  availability: String, 
  featured: { type: Boolean, default: false }, 
  details:[String], 
  education: [String],
  experience: [String], 
  reviews: [
    {
      patient: String,
      rating: Number,
      comment: String,
      date: Date
    }
  ]
});

module.exports = mongoose.model('Doctor', doctorSchema);
