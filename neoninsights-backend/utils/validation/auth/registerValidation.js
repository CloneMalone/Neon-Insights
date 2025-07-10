

// Register validation
function validateRegister({ firstname, lastname, email, password }) {
    // Check if any fields are empty
    if (!firstname.trim() || !lastname.trim() || !email.trim() || !password.trim()) {
        return {error: { details: [{ message: "All fields are required." }] }};
    }

    // Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return {error: { details: [{ message: "Invalid email format." }] }};
    }

    // Password length check
    if (password.length < 6) {
        return {error: { details: [{ message: "Password must be at least 6 characters." }] }};
    }

    // No errors
    return { error: null };
}

export { validateRegister };