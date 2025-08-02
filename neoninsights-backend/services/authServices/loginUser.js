import jwt from 'jsonwebtoken';
import { getUserByEmail } from '../../models/user/userModel.js';

async function loginUser({ email, password }) {
    const user = await getUserByEmail({ email });
    const row = user.rows[0];

    // Object with user data
    const payload = {
        userId: row.userid,
        firstName: row.firstname,
        lastName: row.lastname,
        email: row.email,
        twoFactorEnabled: row.twoFactorEnabled,
    };

    // Sign JWT 
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: '1h',
    });

    // Return the token
    return {
        token,
        user: {
            userId: row.userid,
            firstName: row.firstname,
            lastName: row.lastname,
            email: row.email,
            twoFactorEnabled: row.twoFactorEnabled,
        }
    }

}

export default loginUser;