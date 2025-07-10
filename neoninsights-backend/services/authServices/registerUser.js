import bcrypt from "bcryptjs";
import crypto from "crypto";
import { addUser, userEmailExists } from "../../models/user/userModel.js";
import { sendConfirmationEmail } from "./emailConfirmation.js";

// Register user
async function registerUser({ firstname, lastname, email, password }) {
    // If email already exists, return error code
    const emailExists = await userEmailExists({ email });
    if (emailExists.rows.length > 0) throw new Error("Email already exists");

    // Hash password, create token, add user, send email
    const hashedPassword = await bcrypt.hash(password, 10);
    const token = crypto.randomBytes(32).toString('hex');
    await addUser({ firstname, lastname, email, hashedPassword, token });
    sendConfirmationEmail(email, token);

}

export default registerUser;