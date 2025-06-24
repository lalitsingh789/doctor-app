const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  itemId: String,
  title: String,
  price: Number,
  image: String,
  quantity: Number,
});

module.exports = mongoose.model('CartItem', cartItemSchema);
