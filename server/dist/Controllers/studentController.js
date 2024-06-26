"use strict";
// import { Request , Response} from 'express';
// import { db } from '../utils/database';
// export const getAllStudents = async (req : Request , res : Response) => {
//   try {
//     const [students] : any = await db.query(
//       'SELECT * FROM `Student`');
//     res.status(200).json(students);
//   } catch (error) {
//     res.status(500).json({error : "Failed to fetch students"});
//   }
// }; //Test on Postman : Done
// export const getStudentById = async (req: Request , res : Response) => {
//   try {
//     const [students] : any = await db.query(
//       'SELECT * FROM `Student` WHERE StudentId=? ' , [req.params.id]
//     );
//     if (students.length > 0){
//       res.status(200).json(students[0]);
//     } else {
//       res.status(500).json({error: "Student not found"});
//     }
//   } catch (error) {
//     res.status(500).json({error : "Failed to fetch student"});
//   }
// };//Test on Postman : Done
// export const createStudent = async (req : Request , res : Response) => {
//   try {
//     const {StudentFname , StudentLname , StudentDoB , StudentMajor } = req.body;
//     const result = await db.query('INSERT INTO `Student`(StudentFname , StudentLname , StudentDoB , StudentMajor) VALUES (?,?,?,?)');
//     const [newStudent] : any = await db.query('SELECT * FROM `Student` WHERE StudentId=?');
//     res.status(201).json(newStudent[0]);
//   } catch (error) {
//     res.status(400).json({error : "Failed to create the student"});
//   }
// };//Test on Postman : Done
// export const updateStudent = async (req: Request, res: Response) => {
//   try {
//     const { StudentId, StudentFname, StudentLname, StudentDoB, StudentMajor } = req.body;
//     const { id } = req.params;
//     // Format the date correctly for MySQL
//     const formattedDate = new Date(StudentDoB).toISOString().split('T')[0];
//     const [result]: any = await db.query(
//       'UPDATE `Student` SET StudentId=?, StudentFname=?, StudentLname=?, StudentDoB=?, StudentMajor=? WHERE StudentId=?',
//       [StudentId, StudentFname, StudentLname, formattedDate, StudentMajor, id]
//     );
//     if (result.affectedRows > 0) {
//       const [updatedStudent]: any = await db.query('SELECT * FROM `Student` WHERE StudentId=?', [id]);
//       if (updatedStudent.length > 0) {
//         res.status(200).json(updatedStudent[0]);
//       } else {
//         res.status(404).json({ error: 'Student not found after update' });
//       }
//     } else {
//       res.status(404).json({ error: 'Student not found' });
//     }
//   } catch (error) {
//     console.error('Error updating student:', error);
//     res.status(400).json({ error: 'Failed to update student' });
//   }
// }; //Test on Postman: Done
// export const deleteStudent = async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params;
//     if (!id) {
//       return res.status(400).json({ error: "Student ID is required" });
//     }
//     const [result]: any = await db.query('DELETE FROM Student WHERE StudentId = ?', [id]);
//     if (result.affectedRows > 0) {
//       res.status(200).json({ message: "Student deleted successfully" });
//     } else {
//       res.status(404).json({ error: "Student not found" });
//     }
//   } catch (error) {
//     console.error('Error deleting student:', error);
//     res.status(500).json({ error: "Failed to delete student" });
//   }
// };//Test on Postman : Done
