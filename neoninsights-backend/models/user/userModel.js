import query from '../../database/db.js';

// Check if user email exists
async function userEmailExists({ email }) {
    const emailExists = await query("SELECT email FROM users WHERE email = $1", [email]);

    return emailExists;
}

// Add user to the database
async function addUser({ firstname, lastname, email, hashedPassword, token }) {
    await query(
        `INSERT INTO users (firstname, lastname, email, password, confirmationtoken)
         VALUES ($1, $2, $3, $4, $5)`,
        [firstname, lastname, email, hashedPassword, token]
    );
}

// Delete user from the database
async function deleteUser({ email }) {
    const emailExists = await userEmailExists({ email });

    if (emailExists.rowCount > 0) {
        
    }
    

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

export { addUser, userEmailExists, deleteUser, getUserByToken, confirmUserEmail, invalidateToken };