import { NextFunction, Request , Response } from "express";
import jwt , {JwtPayload} from "jsonwebtoken";


const gateKeeper = (roles :  string[] = []) => {
    return (req : Request , res : Response , next : NextFunction) => {
        const authHeader = req.get("Authorization");
        
        if (!authHeader)
        {
            return res.status(401).json({message: "Authorization header missing"});
        }
        const token = authHeader.startsWith("Bearer") ? authHeader.split(" ")[1] : authHeader;
        
        if (!token)
        {
            return res.status(401).json({message : "Token Missing"});
        }
        try 
        {
            const secret = "fouadjwt"
            const token = jwt.sign({ role: 'user' }, secret, { expiresIn: '1h' });
            console.log(token);
            if (!secret) {
                console.error("JWT secret is not defined");
            }
            const decoded = jwt.verify(token , secret) as JwtPayload;
            if (roles.length &&  !roles.includes(decoded.role)) {
                return res.status(403).json({message : "Forbidden: You don't have the required role"});
            }
            req.user = decoded;
            next();
        } catch (error) {
            if (error instanceof jwt.JsonWebTokenError) {
                return res.status(401).json({ message: "Invalid token" });
            } else if (error instanceof jwt.TokenExpiredError) {
                return res.status(401).json({ message: "Token expired" });
            } else {
                console.error(error);
                return res.status(500).json({ message: "Internal Server Error" });
            }
        }
    };
};
export default gateKeeper
