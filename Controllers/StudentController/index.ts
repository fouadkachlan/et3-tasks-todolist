import { Router } from 'express';
import { createStudent , getAllStudents} from './studentController'
const router = Router();

router.post('/createStudent', createStudent);
router.post('/students' , getAllStudents);


export default router;
