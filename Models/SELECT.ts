import { Request , Response } from "express";
import { StudentProps } from "../Interfaces/studentinterface";
import { executeQuery } from "../utils/database";

// here in the models we execute all our queries, and return our data

export const SELECTSTUDENTQUERY = "SELECT * FROM Student WHERE StudentId=?";


export const fetchStudents = async (req: Request , res : Response) : Promise<void> => {
    try {
        const SELECTALLSTUDENTSQUERY = "SELECT * FROM `Student`";
        const students : StudentProps[] = await executeQuery<StudentProps>(SELECTALLSTUDENTSQUERY,[]);
        res.status(200).json({students});

    } catch (error) {
        res.status(500).json({error : `Error Fetching Students ${error}`});
    }
}

