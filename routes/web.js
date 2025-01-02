import express from 'express';
import { homeController } from '../controllers/homeController.js';
import { aboutController } from '../controllers/aboutController.js';

import StudentController
 from '../controllers/stuController.js';
const router = express.Router();

router.get('/setcookie', StudentController.set_cookie);
router.get('/getcookie', StudentController.get_cookie);
router.get('/deletecookie', StudentController.delete_cookie);

router.get('/', homeController);
router.get('/about', aboutController);
router.get('/about/12', aboutController);


export default router;