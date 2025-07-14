import bcrypt from "bcryptjs";
import crypto from "crypto";
import { addUser } from "../../models/user/userModel.js";
import { sendConfirmationEmail } from "./sendConfirmationEmail.js";

// Register user
async function registerUser({ firstname, lastname, email, password }) {
    
    // Hash password, create token, add user, send email
    const hashedPassword = await bcrypt.hash(password, 10);
    const token = crypto.randomBytes(32).toString('hex');
    await addUser({ firstname, lastname, email, hashedPassword, token });
    sendConfirmationEmail(email, token);

}

export default registerUser;