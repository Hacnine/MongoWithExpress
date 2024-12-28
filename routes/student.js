import express from 'express';
import { studentController } from '../controllers/studentController.js';
import myLogger from '../middlewares/logger.middleware.js';
const router = express.Router();
router.use(myLogger)
router.get('/student', studentController);
router.get('/event', (req, res)=>{
    res.send('Events')
})
export default router;