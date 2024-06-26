// import { Request , Response } from 'express';
// import { db } from '../utils/database';

// export const getAllGrades = async (req: Request , res : Response) => {
//     try {
//         const [grades] : any = await db.query('SELECT * FROM `Takes-Course`');
//         res.status(200).json(grades);
//     } catch (error) {
//         res.status(500).json({error : "Failed to fetch grades"});
//     }
// }//Test on Postman : Done

// export const getGradeById = async (req : Request ,res: Response ) => {
//     try {
//         const [grades] : any = await db.query('SELECT * FROM `Takes-Course` WHERE GradeID=?' , [req.params.id]);
//         if (grades.length > 0)
//         {
//             res.status(200).json(grades[0]);
//         } else {
//             res.status(404).json({error : "Grade not found"});
//         }
//     } catch (error) {
//         res.status(500).json({error : "Failed to fetch Grades"});
//     }
// }//Test on Postman : Done


// export const createGrade = async (req: Request, res: Response) => {
//     try {
//         const { stId, courseId, Semester, Grade } = req.body;
//         const [result]: any = await db.query('INSERT INTO `Takes-Course` (stId, courseId, Semester, Grade) VALUES (?,?,?,?)', [stId, courseId, Semester, Grade]);
//         const [newGrade]: any = await db.query('SELECT * FROM `Takes-Course` WHERE GradeId=?', [result.insertId]);
//         res.status(201).json(newGrade[0]);
//     } catch (error) {
//         console.error("Error creating grade:", error);
//         res.status(400).json({ error: "Failed to create grade" });
//     }
// }//Test on Postman : Done


// export const updateGrade = async (req: Request, res: Response) => {
//     try {
//         const { stId, courseId, Semester, Grade } = req.body;
//         const [result]: any = await db.query('UPDATE `Takes-Course` SET stId = ?, courseId = ?, Semester = ?, Grade = ? WHERE GradeId = ?', [stId, courseId, Semester, Grade, req.params.id]);
        
//         if (result.affectedRows > 0) {
//             const [updatedGrade]: any = await db.query('SELECT * FROM `Takes-Course` WHERE GradeId = ?', [req.params.id]);
//             if (updatedGrade.length > 0) {
//                 res.status(200).json(updatedGrade[0]);
//             } else {
//                 res.status(404).json({ error: 'Grade not found after update' });
//             }
//         } else {
//             res.status(404).json({ error: 'Grade not found' });
//         }
//     } catch (error) {
//         console.error("Error updating grade:", error);
//         res.status(400).json({ error: 'Failed to update grade' });
//     }
// };//Test on Postman : Done


// export const deleteGrade = async (req: Request, res: Response) => {
//     try {
//         const [result] : any = await db.query('DELETE FROM `Takes-Course` WHERE GradeId=?', [req.params.id]);
//         if (result.affectedRows > 0) {
//             res.status(200).json({ message: 'Grade deleted successfully' });
//         } else {
//             res.status(404).json({ error: 'Grade not found' });
//         }
//     } catch (error) {
//         res.status(500).json({ error: 'Failed to delete grade' });
//     }
// };//Test on Postman : Done