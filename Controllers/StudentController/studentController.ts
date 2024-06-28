import {Request , Response} from "express";
import { studentInsert } from "../../Models/studentModels/insert";
import { studentSelect } from "../../Models/studentModels/select";

// So here only dealing with clients


export const createStudent = async (req : Request , res : Response ) : Promise<void> => {
    try { 
        const { StudentFname , StudentLname , StudentDoB , StudentMajor, password} = req.body;
        await studentInsert(StudentFname , StudentLname , StudentDoB , StudentMajor, password);
        res.status(200).json({message : "Student Created Successfully"});
    }   catch (error) {
        res.status(500).json({error : `Error creating Student , ${error}`});
    }
};

export const getAllStudents = async (req : Request , res: Response) : Promise<void> => {
    try {
        const students = await studentSelect();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({error : `Error fetching students, ${error}`})
    }
}