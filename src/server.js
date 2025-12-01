// Load environment variables
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

const connectDB = require('./config/db');
const { port, clientUrl } = require('./config/env');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors({ origin: clientUrl }));
app.use(express.json());
app.use(morgan('dev'));

// Serve uploaded profile pictures
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// Health check route
app.get('/health', (req, res) => {
  res.json({ status: 'Backend is running' });
});

// Base API route placeholder
app.use('/api', (req, res, next) => next()); // future routes will mount here
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/employees', require('./routes/employeeRoutes'));

// Start server
app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
});
