import { userEmailExists } from "../../models/user/userModel.js";

// Make sure user can be deleted
async function validateDeleteUserMiddleware(req, res, next) {
    const { email } = req.body;

    // Check if email exists
    const emailExists = await userEmailExists({ email });
    if (!emailExists) {
        return res.status(400).json({ message: "Unable to delete account. Email does not exist." });
    }

    // Safely move to delete route
    next();

}

export default validateDeleteUserMiddleware;