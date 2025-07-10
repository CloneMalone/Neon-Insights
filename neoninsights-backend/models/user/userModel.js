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
    await query(`DELETE FROM users
                 WHERE email = $1`, [email]);
}

export { addUser, userEmailExists, deleteUser };