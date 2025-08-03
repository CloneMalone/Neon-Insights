import jwt from 'jsonwebtoken';

function validateJWTTokenMiddleware(req, res, next) {

    console.log('Validate Token Middleware reached!');

    const token = req.cookies.token; 

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized - No token' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; 
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Unauthorized - Invalid token' });
    }
}

export default validateJWTTokenMiddleware;