import { Router } from 'express';
import { createStudent , getAllStudents} from '../Functionalities/studentController';

const router = Router();

export const studentCreateRoute = router.post('/', createStudent);
export const studentGetRoute = router.post('/students' , getAllStudents);


export default router;
