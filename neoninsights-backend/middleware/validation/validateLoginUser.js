import { validateLogin } from "../../utils/validation/auth/loginValidation.js";

async function validateLoginUserMiddleware(req, res, next) {
    const { error } = await validateLogin(req.body);

    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    // Pass control to the next route
    next();

}

export default validateLoginUserMiddleware;