import { Router } from 'express';
import { authenticateLoginAsAdmin, createAdmin, createUser } from './userController';
import { authenticateLoginAsUser } from './userController';
import { userProfileData } from './userController';
import { addNews, getAllNews } from './newsController';
import { userSignUpRateLimiter } from '../Middlewares/rateLimiter';
import { defaultRateLimiter } from '../Middlewares/rateLimiter';
import gateKeeper from '../Middlewares/gatekeeper';


const router = Router();

router.post('/createUser', userSignUpRateLimiter  , createUser );
router.post('/createAdmin' , userSignUpRateLimiter ,  createAdmin)
router.post('/loginUser' , defaultRateLimiter , authenticateLoginAsUser);
router.post('/getUserProfileData'  , userProfileData); //here user profile data route being protected
router.post('/addNews', defaultRateLimiter , addNews);
router.post('/news' , defaultRateLimiter , getAllNews );
// gateKeeper(['user' , 'admin']), , authenticateLoginAsAdmin
export default router;