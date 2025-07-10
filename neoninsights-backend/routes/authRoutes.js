import express from 'express';
import validateRegisterMiddleware from '../middleware/validation/validateRegister.js';
import registerRequest from '../controllers/auth/registerRequest.js';
import deleteRequest from '../controllers/auth/deleteRequest.js';

// Set up a router
const router = express.Router();

// Set up routes
router.post('/register', validateRegisterMiddleware, registerRequest);
router.post('/delete', deleteRequest);

export default router;