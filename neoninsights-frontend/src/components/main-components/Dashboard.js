import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../../styles/Dashboard.css';
import TotalCustomersInsight from "../user-components/TotalCustomersInsight.js";
import TotalSalesRevenueInsight from "../user-components/TotalSalesRevenueInsight.js";
import TotalProductsInsight from "../user-components/TotalProductsInsight.js";

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
        <main className="dashboard-main">
            <h2 className="dashboard-welcome-text fade-in-slide-up">Welcome to Your Dashboard, {user.firstName} {user.lastName}!</h2>

            <div className="key-insights-container fade-in-slide-up">
                <h2>Key Insights</h2>
                
                <div className="insight-cards-container">
                    <TotalCustomersInsight />
                    <TotalSalesRevenueInsight />
                    <TotalProductsInsight />
                </div>
            </div>
        </main>
    )

}

export default Dashboard;