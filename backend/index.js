import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import db from './DB/dbConnection.mjs';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Simple test query
app.use('/api/vendors', vendorRoutes);

// Test route
app.get('/', (req, res) => {
  res.json({ message: '✅ WeddingWala API running' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});