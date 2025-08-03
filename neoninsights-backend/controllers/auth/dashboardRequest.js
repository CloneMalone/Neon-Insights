import { getUserById } from "../../models/user/userModel.js";

async function dashboardRequest(req, res) {

    console.log("Dashboard request controller reached!");

    const userId = req.user.userId;
    const userData = await getUserById({ userId });

    if (userData.rows.length > 0) {
        const dbUser = userData.rows[0];
        const user = {
            userId: dbUser.userid,
            firstName: dbUser.firstname,
            lastName: dbUser.lastname,
            email: dbUser.email,
            twoFactorEnabled: dbUser.twofactorenabled,
            isConfirmed: dbUser.isconfirmed,
            createdAt: dbUser.createdat,
        };
        res.json({
            message: "Reached end of dashboardRequest! Returned user data!",
            user
        });
    } else {
        res.status(400).json({ message: 'Something went wrong. Please try again or contact support' });
    }


}

export default dashboardRequest;