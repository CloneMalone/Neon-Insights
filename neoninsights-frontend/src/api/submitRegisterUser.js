const BASE_URL = process.env.REACT_APP_BASE_URL;

async function submitRegisterUser(formData) {
    const response = await fetch(`${BASE_URL}/api/auth/register`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    });

    const data = await response.json();
    return { ok: response.ok, data };
}

export default submitRegisterUser;