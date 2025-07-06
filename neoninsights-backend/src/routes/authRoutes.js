import express from 'express';
import registerUser from '../controllers/auth/register.js';
// import loginUser from '../controllers/auth/login.js';
// import confirmEmail from '../controllers/auth/confirmEmail.js';

// Set up a router
const router = express.Router();

// Set up routes
router.post('/register', registerUser);
// router.post('/login', loginUser);
// router.post('/confirmEmail/token:', confirmEmail);

export default router;