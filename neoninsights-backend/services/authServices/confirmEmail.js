import { confirmUserEmail, invalidateToken } from "../../models/user/userModel.js";

async function confirmEmail(token) {
    await confirmUserEmail(token);
    await invalidateToken(token);
    return true;
}

export default confirmEmail;