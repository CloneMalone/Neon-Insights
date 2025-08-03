import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

function Dashboard() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch(`${BASE_URL}/api/auth/dashboard`, {
                    method: 'GET',
                    credentials: 'include'
                });

                if (!response.ok) {
                    navigate('/login');
                    return;
                }

                const data = await response.json();
                console.log(`Response message: ${data.message}`);
                console.log(`Response user First Name: ${data.user.firstName}`);

                setUser(data.user);

            } catch (error) {
                console.error(`Error: ${error}`);
                navigate('/login');
            }
        }

        fetchUserData();
    }, [navigate]);

    if (!user) return <p>Loading...</p>;

    return (
        <>
            <h2>Welcome to your dashboard, {user.firstName} {user.lastName}!</h2>
        </>
    )

}

export default Dashboard;