import {Request , Response} from "express";
import bcrypt from "bcryptjs";
import studentInsert from "../../models/studentModels/insert";
import studentSelect from "../../models/studentModels/select";
import { studentProps } from "../../interfaces/studentinterface";
import jwt from "jsonwebtoken";


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

export const registerStudent = async (req : Request , res : Response ) : Promise<void> => {
   try {
    const { studentFirstname , studentLastname , password , role} = req.body;
    await studentInsert.register(studentFirstname , studentLastname , password , role);
    res.status(200).json({message : "Student created successfully"});
   } catch ( error ) { 
    res.status(500).json({error : `Couldn't register because ${error}`});
   }
}

export const loginStudent = async (req: Request, res: Response): Promise<void> => {
    const { studentFirstname, studentLastname, password } = req.body;

    try {
        const students : studentProps[] = await studentSelect.studentSelectOnLogin(studentFirstname, studentLastname , password);

        if (students.length === 0) {
             res.status(401).json({ message: 'Invalid credentials' });
        }

        const user = students[0];
        const isMatch = await bcrypt.compare(password, user.hashedPassword);

        if (!isMatch) {
             res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: user.studentId, role: user.role }, 'your_jwt_secret', { expiresIn: '1h' });
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error });
    }
};