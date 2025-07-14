import { Link } from 'react-router-dom';

function EmailConfirmed() {
    return (
        <>
            <h1>Email confirmed successfully!</h1>
            <p>You have successfully confirmed your email. You may now Log In!</p>

            <Link className="main-button" to="/login">Login</Link>
        </>
    );
}

export default EmailConfirmed;