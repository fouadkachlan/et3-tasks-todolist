import { Router } from 'express';
import { createUser } from './userController';
import { authenticateLoginUser } from './userController';
import { userProfileData } from './userController';
import { addNews, getAllNews } from './newsController';
const router = Router();

router.post('/createUser' , createUser);
router.post('/loginUser', authenticateLoginUser);
router.post('/getUserProfileData' , userProfileData);
router.post('/addNews' , addNews);
router.post('/news' , getAllNews );


export default router;