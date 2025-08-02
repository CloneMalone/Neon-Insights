import loginUser from "../../services/authServices/loginUser.js";

async function loginRequest(req, res) {
    // Grab request body
    const { email, password } = req.body;

    
    try {
        // JWT token signing/creation
        const token = await loginUser({ email, password });
        console.log(token.token);

        // Set cookie
        res.cookie('token', token.token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: "Strict",
            maxAge: 60 * 60 * 1000
        });


        // Respond with data
        console.log(token.user);
        res.status(200).json({ 
            message: `Login Successful for ${token.user.email}!`,
            user: token.user,
        });
    } catch (error) {
        res.status(401).json({
            message: "Login failed",
            error: error.message || "An error occurred"
        });
    }

}

export default loginRequest;