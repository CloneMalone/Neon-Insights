import { Link } from 'react-router-dom';

function EmailConfirmed() {
    return (
        <main className="email-confirmed-main">
            <h1>Email confirmed successfully!</h1>
            <p>You have successfully confirmed your email. You may now Log In!</p>

            <Link className="main-button" to="/login">Login</Link>
        </main>
    );
}

export default EmailConfirmed;