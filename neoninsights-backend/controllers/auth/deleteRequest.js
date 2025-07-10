import { deleteUser } from "../../models/user/userModel.js";

// Delete user
async function deleteRequest(req, res) {
    const { email } = req.body;

    try {
        // Delete user
        await deleteUser({ email });

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

export default deleteRequest;