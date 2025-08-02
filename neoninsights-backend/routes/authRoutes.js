import express from 'express';
import validateRegisterUserMiddleware from '../middleware/validation/validateRegisterUser.js';
import validateDeleteUserMiddleware from '../middleware/validation/validateDeleteUser.js';
import validateLoginUserMiddleware from '../middleware/validation/validateLoginUser.js';
import registerRequest from '../controllers/auth/registerRequest.js';
import deleteRequest from '../controllers/auth/deleteRequest.js';
import loginRequest from '../controllers/auth/loginRequest.js';
import confirmEmailRequest from '../controllers/auth/confirmEmailRequest.js';

// Set up a router
const router = express.Router();

// Set up routes
router.post('/register', validateRegisterUserMiddleware, registerRequest);
router.post('/login', validateLoginUserMiddleware, loginRequest);
router.post('/delete', validateDeleteUserMiddleware, deleteRequest);
router.get('/confirm-email/:token', confirmEmailRequest);

export default router;