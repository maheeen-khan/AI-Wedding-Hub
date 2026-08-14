import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import db from './DB/dbConnection.mjs';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Simple test query
app.get('/api/test', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM test_users');
    res.json({ 
      success: true, 
      data: rows 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});