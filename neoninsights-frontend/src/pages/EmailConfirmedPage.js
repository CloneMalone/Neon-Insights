import EmailConfirmed from "../components/auth-components/EmailConfirmed";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import confirmEmail from "../api/confirmEmail.js";

function EmailConfirmedPage() {
    const { token } = useParams();
    const [loading, setLoading] = useState(true);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        const handleConfirmEmail = async () => {
            const result = await confirmEmail(token);
            setSuccess(result.success);
            if (result.success) {
                toast.success(result.message);
            } else {
                toast.error(result.message);
            }
            setLoading(false);
        };

        handleConfirmEmail();
    }, [token]);

    if (loading) return <p>Confirming email...</p>;


    return (
        <main className="email-confirmed-main">
            {success ? (
                <EmailConfirmed />
            ) : (
                <h2>Failed to confirm email. Please try again or contact support.</h2>
            )}
        </main>
    );
}

export default EmailConfirmedPage;