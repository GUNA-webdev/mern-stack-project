import { Reservation } from '../models/reservationSchema.js';

export const sendReservation = async (req, res, next) => {
  // Safely destructure with default empty object
  const { 
    name, 
    email, 
    phone, 
    date, 
    time, 
    guests 
  } = req.body || {}; // Fallback if req.body is undefined

  // Check required fields directly
  if (!name || !email || !phone || !date || !time || !guests) {
    return res.status(400).json({
      success: false,
      message: 'Please fill all required fields'
    });
  }

  try {
    await Reservation.create({ name, email, phone, date, time, guests });
    return res.status(201).json({
      success: true,
      message: 'Reservation created successfully'
    });
  } catch (err) {
    next(err); // Forward to error middleware
  }
};