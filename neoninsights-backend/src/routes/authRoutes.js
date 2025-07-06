import express from 'express';
import registerUser from '../controllers/auth/register.js';
import deleteUser from '../controllers/auth/delete.js';
// import loginUser from '../controllers/auth/login.js';
// import confirmEmail from '../controllers/auth/email.js';

// Set up a router
const router = express.Router();

// Set up routes
router.post('/register', registerUser);
// router.post('/login', loginUser);
// router.post('/confirm-email/token/:token', confirmEmail);
router.post('/delete', deleteUser);

export default router;