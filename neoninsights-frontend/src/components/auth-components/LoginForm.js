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
            navigate('/dashboard');
        }
        else {
            toast.error(data.message);
        }



    }


    return (
        <main>
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
                    autoComplete="off"
                    aria-autocomplete="none"
                    required
                />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password || ""}
                    onChange={handleChange}
                    autoComplete="off"
                    aria-autocomplete="none"
                    required
                />
                <button className="main-button" type="submit">Log In</button>
            </form>
        </main>
    );

}

export default LoginForm;