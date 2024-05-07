import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;
    // Check if token is provided
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }

    // Check if the token format is correct
    if (!token.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Unauthorized: Invalid token format' });
    }

    // Remove 'Bearer ' prefix from the token
    const tokenValue = token.split(' ')[1];

    try {
        // Verify the token
        const decoded = jwt.verify(tokenValue, process.env.JWT_SECRET_KEY);
        // Attach the decoded user information to the request object
        req.user = decoded;
        next(); // Call the next middleware or route handler
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
};

