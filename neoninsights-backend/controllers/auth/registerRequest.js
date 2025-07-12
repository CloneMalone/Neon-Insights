import registerUser from '../../services/authServices/registerUser.js';

async function registerRequest(req, res) {
    // Grab request body
    const { firstname, lastname, email, password, confirmPassword } = req.body;

    // Add user to the database
    try {
        await registerUser({ firstname, lastname, email, password, confirmPassword });

        res.status(200).json({
            message: "Registration successful! You may not log in!"
        });
    } catch (error) {
        res.status(500).json({
            message: `Server Error: Error adding registered user to database. Please try again or contact support.`
        });
        
    }
}

export default registerRequest;

