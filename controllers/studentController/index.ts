import { Router } from 'express';
import { createStudent , getAllStudents , loginStudent , registerStudent} from './studentController';
import gatekeeper from '../../middleware/gatekeeper';

const router = Router();

router.post('/createStudent', gatekeeper(['admin']), createStudent);
router.post('/students' , gatekeeper() ,getAllStudents);
router.post('/register' , registerStudent);
router.post('/login', loginStudent )

export default router;
