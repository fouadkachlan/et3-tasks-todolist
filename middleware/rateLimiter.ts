import rateLimit from "express-rate-limit";
import { Request } from "express";

const rateLimitOptions = {
    default: {
        max: 100,
        windowMs: 60 * 60 * 1000, // 1 hour window
    },
    routes: {
        "/students": { max: 2, windowMs: 60 * 1000 },
        "/login": { max: 2, windowMs: 60 * 1000 },
        "/createStudent": { max: 2, windowMs: 60 * 1000 },
        "/register": { max: 2, windowMs: 60 * 1000 },
    },
};

const createRateLimiter = (options: { windowMs: number; max: number }) => {
    return rateLimit({
        windowMs: options.windowMs,
        max: options.max,
        message: "Too many requests, please try again later.",
        keyGenerator: (req: Request) => {
            return req.ip || "unknown_IP";
        }
    });
};

export const studentRateLimiter = createRateLimiter(rateLimitOptions.routes["/students"]);
export const loginRateLimiter = createRateLimiter(rateLimitOptions.routes["/login"]);
export const createStudentRateLimiter = createRateLimiter(rateLimitOptions.routes["/createStudent"]);
export const registerRateLimiter = createRateLimiter(rateLimitOptions.routes["/register"]);
export const defaultRateLimiter = createRateLimiter(rateLimitOptions.default);
