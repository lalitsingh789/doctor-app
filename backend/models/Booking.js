// models/Booking.js
const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  fullName: String,
  age: Number,
  gender: String,
  relation: String
});

const bookingSchema = new mongoose.Schema({
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor',
    required: true
  },
  date: { type: String, required: true },
  time: { type: String, required: true },
  type: { type: String, enum: ['Online', 'At Clinic'], required: true },
  problem: { type: String, required: true },
  patient: patientSchema,
  isCancelled: { type: Boolean, default: false },
  isCompleted: { type: Boolean, default: false },

  // ✅ Add user field
  user: {
    email: { type: String, required: true },
    name: { type: String }
  }

}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);
