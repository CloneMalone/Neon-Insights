import EmailConfirmed from "../components/auth-components/EmailConfirmed";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

function EmailConfirmedPage() {
    const { token } = useParams();
    const [loading, setLoading] = useState(true);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        const confirmEmail = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/auth/confirm-email/${token}`);
                const data = await response.json();

                if (response.ok) {
                    setSuccess(true);
                    toast.success(data.message);
                } else {
                    toast.error(data.message);
                }

            } catch (error) {
                toast.error('Something went wrong. Please try again later.');
            } finally {
                setLoading(false);
            }
        }

        confirmEmail();
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