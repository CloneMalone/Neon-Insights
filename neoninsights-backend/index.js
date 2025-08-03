import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/authRoutes.js';

// Config .env use
dotenv.config();

// Create express server
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: [
    'http://localhost:3000',
    'http://192.168.40.64:3000'
  ],
  credentials: true
}));


// Mount routes
app.use('/api/auth', authRoutes);

// Listen
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});