import express from 'express';
import dotenv from 'dotenv';
import query from '../database/db.js';
import authRoutes from './routes/authRoutes.js';

// Config .env use
dotenv.config();

// Create express server
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());

// Mount routes
app.use('/api/auth', authRoutes);

// Listen
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});