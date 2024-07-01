import { Router } from 'express';
import { createStudent, getAllStudents, loginStudent, registerStudent } from './studentController';
import gatekeeper from '../../middleware/gatekeeper';
import {
    studentRateLimiter,
    loginRateLimiter,
    createStudentRateLimiter,
    registerRateLimiter
} from '../../middleware/rateLimiter';

const router = Router();

router.post('/createStudent', createStudentRateLimiter, gatekeeper(['admin']), createStudent);
router.get('/students', studentRateLimiter, getAllStudents);
router.post('/register', registerRateLimiter, gatekeeper(), registerStudent);
router.post('/login', loginRateLimiter, gatekeeper(), loginStudent);

export default router;
