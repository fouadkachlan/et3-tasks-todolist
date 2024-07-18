import { NextFunction, Request , Response } from "express";
import jwt , {JwtPayload} from "jsonwebtoken";

const gateKeeper = (roles :  string[] = []) => {
    return (req : Request , res : Response , next : NextFunction) => {
        // const token = req.header["authorization"];
        const token = req.get("Authorization");
        // console.log(token)

        if (!token)
        {
            return res.status(401).json({message : "unauthorized"});
        }
        try 
        {
            const decoded = jwt.verify(token , "your_jwt_secret") as JwtPayload;

            if (roles.length && !roles.includes(decoded.role))
            {
                return res.status(403).json({message : "Forbidden"})
            }
            //if everything is okay we will go to the next middleware 

            next();
        } catch (error) {
            console.error(error);
            return res.status(500).json({message : "Internal Server Error"});
        }
    };
};
export default gateKeeper;
