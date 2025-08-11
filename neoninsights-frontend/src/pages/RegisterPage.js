import RegisterForm from "../components/auth-components/RegisterForm.js";
import PublicPage from "../components/layouts/PublicPage.js";

function RegisterPage() {
    return (
        <PublicPage>
            <RegisterForm />
        </PublicPage>
    );
}

export default RegisterPage;