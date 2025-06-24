// routes/doctorRoutes.js
const express = require('express');
const router = express.Router();
const Doctor = require('../models/Doctor');

router.get('/', async (req, res) => {
  try {
    const { department } = req.query;
    const filter = department ? { department } : {};
    const doctors = await Doctor.find(filter);
    res.json(doctors);
  } catch (err) {
    console.error("Failed to fetch doctors:", err);
    res.status(500).json({ error: 'Server error', message: err.message });
  }
});


module.exports = router;
