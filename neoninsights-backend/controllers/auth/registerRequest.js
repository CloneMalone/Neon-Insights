import registerUser from '../../services/authServices/registerUser.js';

async function registerRequest(req, res) {
    // Grab request body
    const { firstname, lastname, email, password } = req.body;

    // Add user to the database
    try {
        await registerUser({ firstname, lastname, email, password });

        res.status(200).json({
        message: "User added successfully!",
        firstName: firstname,
        lastname: lastname,
        email: email
    });
    } catch (error) {
        res.status(500).json({
            message: `Error adding registered user to database: ${error}`
        })
        
    }
}

export default registerRequest;

