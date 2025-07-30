const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Import routes
// const userRoutes = require('./routes/users');
// app.use('/api/users', userRoutes);

app.get('/api/health', (req, res) => {
  res.json({ status: 'API is running!' });
});

module.exports = app;