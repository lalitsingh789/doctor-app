// routes/bookingRoutes.js
const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// ✅ Create Booking
router.post('/', async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json({ message: 'Booking successful', booking });
  } catch (error) {
    res.status(500).json({ message: 'Booking failed', error });
  }
});

// ✅ Get Bookings by user email (e.g., /api/bookings?email=user@example.com)
router.get('/', async (req, res) => {
  try {
    const { email } = req.query;

    if (!email) {
      return res.status(400).json({ error: 'Email query parameter is required' });
    }

    const bookings = await Booking.find({ 'user.email': email })
      .populate('doctorId')
      .lean();

    res.json(bookings);
  } catch (err) {
    console.error('Error fetching bookings:', err);
    res.status(500).json({ error: 'Could not retrieve bookings' });
  }
});

// ✅ Cancel Booking
router.put('/:id/cancel', async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { isCancelled: true },
      { new: true }
    );
    if (!booking) return res.status(404).json({ error: 'Booking not found' });

    res.json({ message: 'Booking cancelled successfully', booking });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Cancellation failed' });
  }
});

module.exports = router;
