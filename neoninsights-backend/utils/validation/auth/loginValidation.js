import { userEmailExists, userEmailConfirmed, getUserPasswordHash  } from "../../../models/user/userModel.js";
import bcrypt from "bcryptjs";

// Register validation
async function validateLogin({ email, password }) {
    // Check if any fields are empty
    if (
        !email.trim() ||
        !password.trim()
    ) {
        return {
            error: {
                details: [
                    { message: "All fields are required." }
                ]
            }
        };
    }

    // Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return {error: { details: [{ message: "Invalid email format." }] }};
    }

    // If email does not exist, return error code
    const emailExists = await userEmailExists({ email });
    if (!emailExists) {
        return {error: { details: [{ message: "The email provided does not have an account associated with it." }] }};
    }

    // Confirmed email check
    const userConfirmed = await userEmailConfirmed({ email });
    if (!userConfirmed) {
        return {error: { details: [{ message: "This email has not been confirmed." }]}};
    }

    // Check if password is correct
    const hashedPassword = await getUserPasswordHash({ email });
    if (!hashedPassword) {
        return {error: { details: [{ message: "Password retrieval error. Please contact support." }]}};
    }

    const isMatch = await bcrypt.compare(password, hashedPassword);
    if (!isMatch) {
        return {error: { details: [{ message: "Incorrect password. Please try again or reset password." }]}};
    }



    // No errors
    return { error: null };
}

export { validateLogin };