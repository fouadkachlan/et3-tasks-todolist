"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCourse = exports.getCourseById = exports.getAllCourses = void 0;
const database_1 = require("../utils/database");
const getAllCourses = async (req, res) => {
    try {
        const courses = await (0, database_1.executeQuery)('SELECT * FROM `Course`', []);
        res.status(200).json(courses);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch courses' });
    }
};
exports.getAllCourses = getAllCourses;
const getCourseById = async (req, res) => {
    try {
        const courses = await (0, database_1.executeQuery)('SELECT * FROM `Course` WHERE CourseId = ?', [req.params.id]);
        if (courses.length > 0) {
            res.status(200).json(courses[0]);
        }
        else {
            res.status(404).json({ error: 'Course not found' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch course' });
    }
};
exports.getCourseById = getCourseById;
const createCourse = async (req, res) => {
    try {
        const { CourseName, CourseDescription, CourseOpeningSemester } = req.body;
        const insertQuery = 'INSERT INTO `Course` (CourseName, CourseDescription, CourseOpeningSemester) VALUES (?, ?, ?)';
        const selectQuery = 'SELECT * FROM `Course` WHERE CourseId=?';
        const result = await (0, database_1.executeQuery)(insertQuery, [CourseName, CourseDescription, CourseOpeningSemester]);
        const newCourse = await (0, database_1.executeQuery)(selectQuery, []);
        res.status(201).json(newCourse[0]);
    }
    catch (error) {
        console.error('Failed to create course:', error);
        res.status(400).json({ error: 'Failed to create course' });
    }
};
exports.createCourse = createCourse;
// export const updateCourse = async (req: Request, res: Response) => {
//     try {
//         const { CourseId , CourseName , CourseDescription , CourseOpeningSemester } = req.body;
//         const [result] : any = await db.query('UPDATE `Course` SET   CourseName=?  CourseDescription=?  CourseOpeningSemester=? WHERE CourseId =?', [CourseId , CourseName , CourseDescription , CourseOpeningSemester, req.params.id]);
//         if (result.affectedRows > 0) {
//             const [updatedCourse] : any = await db.query('SELECT * FROM `Course` WHERE CourseId =?', [req.params.id]);
//             res.status(200).json(updatedCourse[0]);
//         } else {
//             res.status(404).json({ error: 'Course not found' });
//         }
//     } catch (error) {
//         res.status(400).json({ error: 'Failed to update course' });
//     }
// };
// export const deleteCourse = async (req: Request, res: Response): Promise<void> => {
//     try {
//         const courseId: number = parseInt(req.params.id, 10); // Convert id to number (if necessary)
//         const deleteQuery = 'DELETE FROM `Course` WHERE CourseId=?';
//         // Delete the course from the database
//         const result  = await executeQuery<CourseProps>(deleteQuery, [courseId]);
//         // Check if the deletion was successful
//         if (result.affectedRows > 0) {
//             res.status(200).json({ message: 'Course deleted successfully' });
//         } else {
//             res.status(404).json({ error: 'Course not found' });
//         }
//     } catch (error) {
//         console.error('Failed to delete course:', error);
//         res.status(500).json({ error: 'Failed to delete course' });
//     }
//};
