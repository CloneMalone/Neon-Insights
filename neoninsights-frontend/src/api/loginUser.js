const BASE_URL = process.env.REACT_APP_API_BASE_URL;

async function loginUser(formData) {
    try {
        const response = await fetch(`${BASE_URL}/api/auth/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
            credentials: 'include',
        });

        const data = await response.json();

        return {
            ok: response.ok,
            data: data || {
                message: 'Something went wrong'
            }
        };
    } catch (error) {
        return {
            ok: false,
            data: {
                message: 'Server error. Please try again'
            }
        }
    }
}

export default loginUser;
