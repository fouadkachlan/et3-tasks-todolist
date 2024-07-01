import { Request, Response, NextFunction } from "express";
import rateLimit from "express-rate-limit";


const rateLimitOptions = {
    maxRequests: 100,
    windowMS : 60 * 60 * 1000 // time window ib milliseconds for conting requests, so here we are setting 1 hour window
}



const limiter = rateLimit({
    windowMs: rateLimitOptions.windowMS,
    max: rateLimitOptions.maxRequests,
    message: "Too many requests, please try again later.",
    keyGenerator: (req: Request) => {
        //here we are generating a unique key for rate limiting based on IP and userID
        const userId = (req.user && req.user.id) || 'anonymous';
        return `${req.ip}_${userId}`;
    }
});

const rateLimiter = () => {
    return (req: Request , res: Response , next: NextFunction) => {
        limiter(req,res,(err : any) => {
            if (err) {
                return res.status(429).json({message: "Rate limit exceeded , please try again later"})
            }
            next();
        })
    }
}

export default rateLimiter;