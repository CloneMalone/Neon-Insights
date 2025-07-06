import query from '../../../database/db.js';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';

async function registerUser(req, res) {
    const { firstname, lastname, email, password } = req.body;
    const emailExists = await query("SELECT email FROM users WHERE email = $1", [email]);

    // If email already exists, return error code
    if (emailExists.rows.length > 0) return res.status(400).json({
        message: "Email already exists"
    });

    // Create hashed password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create token
    const token = crypto.randomBytes(32).toString('hex');

    // Add user to the database
    await query(
        `INSERT INTO users (firstname, lastname, email, password, confirmationtoken)
         VALUES ($1, $2, $3, $4, $5)`,
         [firstname, lastname, email, hashedPassword, token]
    );

    // Final response
    res.status(200).json({
        message: "User added successfully!",
        firstName: firstname,
        lastname: lastname,
        email: email,
        password: hashedPassword,
        confirmationToken: token
    });
}

export default registerUser;

