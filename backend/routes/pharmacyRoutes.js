const express = require('express');
const router = express.Router();
const PharmacyItem = require('../models/PharmacyItem');

// Get all pharmacy items
router.get('/', async (req, res) => {
  try {
    const items = await PharmacyItem.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// Add a new item 
router.post('/', async (req, res) => {
  try {
    const { title, image, price, category } = req.body;
    const newItem = new PharmacyItem({ title, image, price, category });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ message: 'Invalid data' });
  }
});

module.exports = router;
