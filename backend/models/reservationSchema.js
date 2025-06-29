import mongoose from 'mongoose';

const reservationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    match: [/.+@.+\..+/, 'Please enter a valid email address'],
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true,
    match: [/^\d{10}$/, 'Phone number must be 10 digits'],
  },
  date: {
    type: String,
    required: [true, 'Date is required'],
    trim: true,
  },
  time: {
    type: String,
    required: [true, 'Time is required'],
    trim: true,
  },
  guests: {
    type: Number,
    required: [true, 'Guest count is required'],
    max: [15, 'Guest limit exceeded'],
  },
}, {
  timestamps: true,
});

export const Reservation = mongoose.model('Reservation', reservationSchema);
