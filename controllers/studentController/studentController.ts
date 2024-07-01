import {Request , Response} from "express";

import studentInsert from "../../models/studentModels/insert";
import studentSelect from "../../models/studentModels/select";

// So here only dealing with clients


export const createStudent = async (req : Request , res : Response ) : Promise<void> => {
    try { 
        const { studentFirstname , studentLastname , studentDoB , studentMajor, password} = req.body;
        await studentInsert.insert(studentFirstname , studentLastname , studentDoB , studentMajor, password);
        res.status(200).json({message : "Student Created Successfully"});
    }   catch (error) {
        res.status(500).json({error : `Error creating Student , ${error}`});
    }
};

export const getAllStudents = async (req : Request , res: Response) : Promise<void> => {
    try {
        const students = await studentSelect.select();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({error : `Error fetching students, ${error}`})
    }
}