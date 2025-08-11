import LoginForm from "../components/auth-components/LoginForm.js";
import PublicPage from "../components/layouts/PublicPage.js";

function LoginPage() {
    return (

        <PublicPage>
            <LoginForm />
        </PublicPage>
    )
}

export default LoginPage;