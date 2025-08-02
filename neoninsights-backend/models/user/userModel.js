import query from '../../database/db.js';


// ------------ VALIDATION TASKS ------------- // 

// Check if user email exists
async function userEmailExists({ email }) {
    const result = await query("SELECT email FROM users WHERE email = $1", [email]);

    return result.rows.length > 0;
}

// Check if user email confirmed
async function userEmailConfirmed({ email }) {
    const result = await query("SELECT email FROM users WHERE email = $1 AND isconfirmed = true", [email]);

    return result.rows.length > 0;
}

// Retrieve user password (for making sure the password is correct)
async function getUserPasswordHash({ email }) {
    const result = await query("SELECT password FROM users WHERE email = $1", [email]);

    if (result.rows.length > 0) {
        return result.rows[0].password;
    }

    // No user found
    return null;
}



// ----------- CRUD TASKS --------------- // 

// Add user to the database
async function addUser({ firstname, lastname, email, hashedPassword, token }) {
    await query(
        `INSERT INTO users (firstname, lastname, email, password, confirmationtoken)
         VALUES ($1, $2, $3, $4, $5)`,
        [firstname, lastname, email, hashedPassword, token]
    );
}

// Get user from the database
async function getUserByEmail({ email }) {
    const result = await query("SELECT * FROM users WHERE email = $1", [email]);

    if (result.rows.length > 0) {
        return result;
    }

    // No user found
    return null;
}

// Delete user from the database
async function deleteUser({ email }) {
    await query(`DELETE FROM users
                 WHERE email = $1`, [email]);
}

// Get user by token
async function getUserByToken(token) {
    const userByToken = await query(`SELECT * FROM users WHERE confirmationtoken = $1`, [token]);

    return userByToken;
}

// Confirm users email. Set confirmed to true
async function confirmUserEmail(token) {
    await query(`UPDATE users SET isconfirmed = true WHERE confirmationtoken = $1`, [token]);

}


// Confirm the token by invalidating it
async function invalidateToken(token) {
    await query(`UPDATE users SET confirmationtoken = NULL WHERE confirmationtoken = $1`, [token]);
} 

export { addUser, userEmailExists, deleteUser, getUserByEmail, getUserByToken, getUserPasswordHash, userEmailConfirmed, confirmUserEmail, invalidateToken };