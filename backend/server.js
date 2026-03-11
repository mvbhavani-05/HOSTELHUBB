// Entry point for the HostelHub backend API server.
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load environment variables from .env file.
dotenv.config();

// Connect to MongoDB Atlas.
connectDB();

const app = express();

// Enable CORS so the frontend can access backend APIs.
app.use(cors());

// Parse incoming JSON request bodies.
app.use(express.json());

// Basic health check route.
app.get('/', (req, res) => {
  res.json({ message: 'HostelHub backend is running' });
});

// Route modules.
const authRoutes = require('./routes/authRoutes');
const hostelRoutes = require('./routes/hostelRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const userRoutes = require('./routes/userRoutes');

// Mount API routes.
// Auth endpoints: /api/auth/signup, /api/auth/login
app.use('/api/auth', authRoutes);

// Other domain endpoints
app.use('/api/hostels', hostelRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/users', userRoutes);

// Global error handler fallback.
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ message: 'Unexpected server error' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`HostelHub backend server running on port ${PORT}`);
});

