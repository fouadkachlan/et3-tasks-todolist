import { Request , Response } from "express";
import { StudentProps } from "../Interfaces/studentinterface";
import { executeQuery } from "../utils/database";
import { hashPassword } from "../Helpers/utility";
import { SELECTSTUDENTQUERY } from "./SELECT";


export const creationOfStudent = async (req: Request , res: Response) : Promise<void> => {
    try {
        const INSERTSTUDENTQUERY = "INSERT INTO `Student` (StudentFname , StudentLname , StudentDoB  , StudentMajor) VALUES (?,?,?,?)" ;
        const userPassInput = req.params.password;
        const hashedPassword = await hashPassword(userPassInput);
        const {StudentFname , StudentLname , StudentDoB , StudentMajor} = req.body;
        const result : StudentProps[] = await executeQuery<StudentProps>(INSERTSTUDENTQUERY ,[StudentFname,StudentLname,StudentDoB,StudentMajor , hashedPassword]);
        const newStudent : StudentProps[] = await executeQuery<StudentProps>(SELECTSTUDENTQUERY , []);
        res.status(200).json(newStudent[0]);
    } catch (error) {
        res.status(500).json({error: `Error Creating new Student ${error}`})
    }
}