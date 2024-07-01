import { Request, Response, NextFunction } from "express";
import rateLimit from "express-rate-limit";


const rateLimitOptions = {
    default: {
        maxRequests: 100,
        windowMS: 60 * 60 * 1000, // 1 hour window
    },
    routes : {
        "/students" : {maxRequests : 5 , windowMS : 60 * 1000},
        "/login" : {maxRequests : 2 , windowMS : 60 * 1000}
    }
};

const getRateLimitOptions = (req :Request) => {
    const routName = req.route.path || req.originalUrl;
    return rateLimitOptions.routes["/students"] || rateLimitOptions.default; //here students for example
}

const createRateLimiter = () => {
    return (req: Request, res: Response, next: NextFunction) => {
        const limiterOptions = getRateLimitOptions(req);
        const { windowMS, maxRequests } = limiterOptions;

        const limiter = rateLimit({
            windowMs: windowMS,
            max: maxRequests,
            message: "Too many requests, please try again later.",
            keyGenerator: (req: Request) => {
                const userId = (req.user && req.user.id) || 'anonymous';
                return `${req.ip}_${userId}`;
            }
        });

        limiter(req, res, (err: any) => {
            if (err) {
                return res.status(429).json({ message: "Rate limit exceeded, please try again later." });
            }
            next();
        });
    };
};

// Middleware function to apply rate limiting
const rateLimiter = () => {
    const limiter = createRateLimiter();
    return limiter;
};

export default rateLimiter;