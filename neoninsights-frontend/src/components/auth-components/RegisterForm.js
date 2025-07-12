import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

import submitRegisterUser from "../../api/submitRegisterUser";

function RegisterForm() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({});

    // Handle input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Register User to database
    const handleSubmit = async (e) => {
        e.preventDefault();

        const { ok, data } = await submitRegisterUser(formData);

        if (ok) {
            toast.success(data.message);
            navigate("/register-complete");
        } 
        else {
            toast.error(data.message);
        }
    }


    return (
        <form onSubmit={handleSubmit} className="auth-form fade-in-slide-up">
            <h2>Sign Up</h2>

            <label htmlFor="firstname">First Name:</label>
            <input
                type="text"
                id="firstname"
                name="firstname"
                placeholder="Enter your first name"
                value={formData.firstname || ""}
                onChange={handleChange}
                required
            />

            <label htmlFor="lastname">Last Name:</label>
            <input
                type="text"
                id="lastname"
                name="lastname"
                placeholder="Enter your last name"
                value={formData.lastname || ""}
                onChange={handleChange}
                required
            />

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

            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Retype password"
                value={formData.confirmPassword || ""}
                onChange={handleChange}
                required
            />

            <button className="main-button" type="submit">Create Account</button>

        </form>
    );

}

export default RegisterForm;