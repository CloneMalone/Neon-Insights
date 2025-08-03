import loginUser from "../../services/authServices/loginUser.js";

async function loginRequest(req, res) {
    // Grab request body
    const { email } = req.body;

    
    try {
        // JWT token signing/creation
        const { token, user } = await loginUser({ email });
        console.log(token);

        // Set cookie
        res.cookie('token', token, {
            httpOnly: true,
            secure: false,
            sameSite: "Lax",
            maxAge: 60 * 60 * 1000
        });


        // Respond with data
        res.status(200).json({ 
            message: `Login Successful for ${user.email}!`,
            user: user,
        });
    } catch (error) {
        res.status(401).json({
            message: "Login failed",
            error: error.message || "An error occurred"
        });
    }

}

export default loginRequest;