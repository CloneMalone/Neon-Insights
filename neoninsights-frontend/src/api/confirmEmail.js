const BASE_URL = process.env.REACT_APP_API_BASE_URL;

async function confirmEmail(token) {
    try {
        const response = await fetch(`${BASE_URL}/api/auth/confirm-email/${token}`);
        const data = await response.json();
        return {
            success: response.ok,
            message: data.message
        };
    } catch (error) {
        return {
            success: false,
            message: 'Something went wrong. Please try again later.'
        };
    }
}

export default confirmEmail;