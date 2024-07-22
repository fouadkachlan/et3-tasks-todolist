import { Request, Response } from 'express';
import { hashPassword } from '../helpers/utitilty';
import userLibrary from '../Libraries/userLibrary';

export const createUser = async (req : Request , res : Response) : Promise<void> => {
    try {
        const { email_Address , Password , phone_Number ,user_Country} = req.body;
        const hashedPassword = await hashPassword(Password);
        await userLibrary.userCreateCall(email_Address , hashedPassword , phone_Number ,user_Country);
        res.status(200).json({message : "User Created Successfully"});
    } catch (error) {
        res.status(500).json({error : `Error Creating User, ${error}`});
    }
}


export const createAdmin = async (req : Request , res : Response) : Promise<void> => {
    try {
        const { email_Address , Password , phone_Number ,user_Country} = req.body;
        const hashedPassword = await hashPassword(Password);
        await userLibrary.adminCreateCall(email_Address , hashedPassword , phone_Number ,user_Country);
        res.status(200).json({message : "User Created Successfully"});
    } catch (error) {
        res.status(500).json({error : `Error Creating User, ${error}`});
    }
}


export const authenticateLoginAsUser = async (req: Request , res : Response) : Promise<void>=> {
    try {
        const {email_Address , Password} = req.body;
        const result = await userLibrary.userLoginCallAsUser(email_Address , Password);
        if ( result ) {
            res.status(200).json(result);
        }
        else {
            console.log("Sending error response: Invalid email or password");
            res.status(401).json({error : "Invalid email or password"})
        }
    } catch ( error ) {
        console.error("Error during login:", error);
        res.status(500).json({message : "Internal server error"});
    }
}

export const authenticateLoginAsAdmin = async (req: Request , res : Response) : Promise<void>=> {
    try {
        const {email_Address , Password} = req.body;
        const result = await userLibrary.userLoginCallAsAdmin(email_Address , Password);
        if ( result ) {
            res.status(200).json(result);
        }
        else {
            console.log("Sending error response: Invalid email or password");
            res.status(401).json({error : "Invalid email or password"})
        }
    } catch ( error ) {
        console.error("Error during login:", error);
        res.status(500).json({message : "Internal server error"});
    }
}


export const userProfileData = async (req : Request , res : Response) : Promise<void> => {
    try {
        const {email_Address} = req.body;

        if (!email_Address) {
            res.status(400).json({message : "Email Address is required"});
            return ;
        }
        const userData = await userLibrary.userDataCall(email_Address);
        if (userData) {
            res.status(200).json(userData);
        } else {
            res.status(404).json({ message : "User Not found or data unavailable"});
        }
    } catch ( error ) {
        res.status(500).json({message : "Failed fetching data"});
    }
}

