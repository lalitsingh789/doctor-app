const mongoose = require('mongoose');

const pharmacyItemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true }
});

module.exports = mongoose.model('PharmacyItem', pharmacyItemSchema);
