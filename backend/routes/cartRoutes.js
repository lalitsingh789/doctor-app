// routes/cart.js
const express = require('express');
const router = express.Router();
const CartItem = require('../models/CartItem'); // You need this model created

// POST to add/update a cart item
router.post('/', async (req, res) => {
  try {
    const { _id, title, price, image, quantity } = req.body;

    let existingItem = await CartItem.findOne({ itemId: _id });

    if (existingItem) {
      existingItem.quantity += quantity;
      await existingItem.save();
      return res.json(existingItem);
    }

    const newItem = new CartItem({
      itemId: _id,
      title,
      price,
      image,
      quantity,
    });

    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ message: 'Cart server error' });
  }
});

module.exports = router;
