import query from "../../../database/db.js";

// Delete user
async function deleteUser(req, res) {
    const { email } = req.body;

    try {
        // Delete user
        await query(`DELETE FROM users
                 WHERE email = $1`, [email]);

        // Respond with success message
        res.status(200).json({
            message: `${email} deleted successfully`
        });

    } catch (error) {

        //  Respond with error message 
        res.status(400).json({
            message: `Unable to delete user: ${error}`
        });
    }


}

export default deleteUser;