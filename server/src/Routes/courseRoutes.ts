import { Router } from 'express';
import {getAllCourses, getCourseById , createCourse } from '../Controllers/courseController';//, getCourseById , createCourse , updateCourse , deleteCourse} 

const router = Router();

router.get('/', getAllCourses);
router.get('/:id' , getCourseById);
router.post('/' , createCourse);
// router.put('/:id' , updateCourse);
// router.delete('/:id' , deleteCourse);

export default router;