const BASE_URL = process.env.REACT_APP_API_BASE_URL;

async function submitRegisterUser(formData) {

    try {
        const response = await fetch(`${BASE_URL}/api/auth/register`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();

        console.log(data.message);
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

export default submitRegisterUser;