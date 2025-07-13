import { Link } from 'react-router-dom';

function RegisterComplete() {
    return (
        <>
            <h1>Registration Complete</h1>
            <p>Welcome aboard! Your account has been successfully created.</p>
            <p>We’ve sent a confirmation link to your email. Please check your inbox (and your spam folder just in case!) to verify your account.</p>
            <p>Once confirmed, you’ll be able to log in and start using the app!</p>

            <Link className="main-button" to="/login">Login</Link>
        </>
    );
}

export default RegisterComplete;