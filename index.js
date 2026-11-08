const express = require('express');
const cors = require('cors');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Main Route (Website open karte hi yeh dikhega)
app.get('/', (req, res) => {
  res.send('🎮 Esports Tournament Backend is Running Successfully!');
});

// API Route (Agar aap /api open karenge toh yeh dikhega)
app.get('/api', (req, res) => {
  res.json({ status: 'Success', message: 'API is working fine' });
});

// Vercel ke liye server export karna zaroori hai
module.exports = app;
