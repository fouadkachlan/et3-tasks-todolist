import { Request, Response } from 'express';
import { db } from '../utils/database';
import { executeQuery } from '../utils/database';
import { CourseProps } from '../Interfaces/CourseProps';

interface DeleteResult  {
    affetedRows : number;
}
interface UpdateResult {
    affectedRows: number;
}
export const getAllCourses = async (req: Request, res: Response) : Promise<void> => {
    try {
        const courses : CourseProps[] = await executeQuery<CourseProps>('SELECT * FROM `Course`',[]);
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch courses' });
    }
};

export const getCourseById = async (req: Request, res: Response) : Promise<void> => {
    try {
        const courses : CourseProps[] = await executeQuery<CourseProps>('SELECT * FROM `Course` WHERE CourseId = ?', [req.params.id]);
        if (courses.length > 0) {
            res.status(200).json(courses[0]);
        } else {
            res.status(404).json({ error: 'Course not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch course' });
    }
};

export const createCourse = async (req: Request, res: Response): Promise<void> => {
    try {
        const { CourseName, CourseDescription, CourseOpeningSemester } = req.body;

        const insertQuery = 'INSERT INTO `Course` (CourseName, CourseDescription, CourseOpeningSemester) VALUES (?, ?, ?)';
        const selectQuery = 'SELECT * FROM `Course` WHERE CourseId=?';
        const result = await executeQuery<CourseProps>(insertQuery, [CourseName, CourseDescription, CourseOpeningSemester]);
        const newCourse: CourseProps[] = await executeQuery<CourseProps>(selectQuery, []);

        res.status(201).json(newCourse[0]);
    } catch (error) {
        console.error('Failed to create course:', error);
        res.status(400).json({ error: 'Failed to create course' });
    }
};

export const updateCourse = async (req: Request, res: Response): Promise<void> => {
    try {
        const { CourseId, CourseName, CourseDescription, CourseOpeningSemester } = req.body;
        const updateQuery = 'UPDATE `Course` SET CourseName=?, CourseDescription=?, CourseOpeningSemester=? WHERE CourseId=?';

        // Execute the update query
        const result: UpdateResult[] = await executeQuery<UpdateResult>(updateQuery, [CourseName, CourseDescription, CourseOpeningSemester, CourseId]);

        // Check if the update was successful
        if (result.length > 0 && result[0].affectedRows > 0) {
            const selectQuery = 'SELECT * FROM `Course` WHERE CourseId=?';
            const updatedCourse: CourseProps[] = await executeQuery<CourseProps>(selectQuery, [CourseId]);
            if (updatedCourse.length > 0) {
                res.status(200).json(updatedCourse[0]);
            } else {
                res.status(404).json({ error: 'Course not found after update' });
            }
        } else {
            res.status(404).json({ error: 'Course not found or no changes made' });
        }
    } catch (error) {
        console.error('Failed to update course:', error);
        res.status(400).json({ error: 'Failed to update course' });
    }
};

export const deleteCourse = async (req: Request, res: Response): Promise<void> => {
    try {
        const courseId: number = parseInt(req.params.id, 10);
        const deleteQuery = 'DELETE FROM `Course` WHERE CourseId=?';

        const result: DeleteResult[] = await executeQuery<DeleteResult>(deleteQuery, [courseId]);

        if (result.length > 0) {
            res.status(200).json({ message: 'Course deleted successfully' });
        } else {
            res.status(404).json({ error: 'Course not found' });
        }
    } catch (error) {
        console.error('Failed to delete course:', error);
        res.status(500).json({ error: 'Failed to delete course' });
    }
};