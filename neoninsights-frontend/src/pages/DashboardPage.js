import Dashboard from "../components/main-components/Dashboard.js";
import AuthedPage from "../components/layouts/AuthedPage.js";

function DashboardPage() {
    return (
        <AuthedPage>
            <Dashboard />
        </AuthedPage>
    );
}

export default DashboardPage;