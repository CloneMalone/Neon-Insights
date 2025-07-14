import { getUserByToken } from "../../models/user/userModel.js";
import confirmEmail from "../../services/authServices/confirmEmail.js";

async function confirmEmailRequest(req, res) {
    const { token } = req.params;

    try {
        const result = await getUserByToken(token);

        if (!result || result.rows.length === 0) {
            return res.status(400).json({ message: 'Invalid or expired token' });
        }

        if (result.rows[0].isconfirmed) {
            return res.status(200).json({ message: 'Email already confirmed!' });
        }

        await confirmEmail(token);
        return res.status(200).json({ message: 'Email successfully confirmed!' });
    } catch (error) {
        console.error('Error confirming email:', error);
        return res.status(500).json({ message: 'Server error. Try again later' });
    }
}

export default confirmEmailRequest;