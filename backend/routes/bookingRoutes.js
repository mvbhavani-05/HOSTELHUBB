// Routes for booking creation and retrieval by user.
const express = require('express');
const { createBooking, getBookingsByUser } = require('../controllers/bookingController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, createBooking);
router.get('/:userId', authMiddleware, getBookingsByUser);

module.exports = router;

