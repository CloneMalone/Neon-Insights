import { validateRegister } from "../../utils/validation/auth/registerValidation.js";

// Validate request body objects registration data
async function validateRegisterUserMiddleware(req, res, next) {
    const { error } = await validateRegister(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    // Pass control to next route
    next();
}

export default validateRegisterUserMiddleware;