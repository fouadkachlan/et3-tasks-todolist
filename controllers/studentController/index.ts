import { Router } from 'express';
import { createStudent , getAllStudents , loginStudent , registerStudent} from './studentController';
import gatekeeper from '../../middleware/gatekeeper';
import rateLimiter from '../../middleware/rateLimiter';

const router = Router();

router.post('/createStudent', gatekeeper(['admin']), createStudent);
router.post('/students' , rateLimiter() ,getAllStudents);
router.post('/register' , gatekeeper() , registerStudent);
router.post('/login', gatekeeper() ,loginStudent );

export default router;
