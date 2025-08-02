import { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginUser from "../../api/loginUser.js";
import { toast } from 'react-toastify';

function LoginForm() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({});

    // Handle input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Login User
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { ok, data } = await loginUser(formData);

        if (ok) {
            toast.success(`Welcome, ${data.user.firstName} ${data.user.lastName}!`);
        }
        else {
            toast.error(data.message);
        }



    }


    return (
        <form onSubmit={handleSubmit} className="auth-form fade-in-slide-up">
            <h2>Log In</h2>

            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email || ""}
                onChange={handleChange}
                required
            />

            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                name="password"
                placeholder="8 or more characters"
                value={formData.password || ""}
                onChange={handleChange}
                required
            />

            <button className="main-button" type="submit">Log In</button>

        </form>
    );

}

export default LoginForm;