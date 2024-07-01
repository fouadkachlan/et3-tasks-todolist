import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import rateLimiter from './rateLimiter';

const gatekeeper = (roles: string[] = []) => {
    return [
        rateLimiter(), // Apply rate limiting middleware first
        (req: Request, res: Response, next: NextFunction) => {
            const token = req.headers.authorization?.split(' ')[1];

            if (!token) {
                return res.status(401).json({ message: 'Unauthorized' });
            }

            try {
                const decoded = jwt.verify(token, 'your_jwt_secret') as JwtPayload;

                if (roles.length && !roles.includes(decoded.role)) {
                    return res.status(403).json({ message: 'Forbidden' });
                }

                // If everything is okay, proceed to the next middleware
                next();
            } catch (error) {
                console.error(error);
                return res.status(500).json({ message: 'Internal Server Error' });
            }
        },
    ];
};

export default gatekeeper;
