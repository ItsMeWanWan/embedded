import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Medicine Box API is running' });
});

app.get('/api/medications', (req, res) => {
  // Example endpoint - replace with your actual logic
  res.json({
    medications: [
      { id: 1, name: 'Sample Med', dosage: '10mg', schedule: '08:00' }
    ]
  });
});

app.post('/api/medications', (req, res) => {
  // Handle adding new medication
  const medication = req.body;
  res.status(201).json({ success: true, medication });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
