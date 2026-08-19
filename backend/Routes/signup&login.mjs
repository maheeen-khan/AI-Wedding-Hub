import { Router } from 'express';
import { signup, login, getMe } from '../Controllers/authController.mjs';
import { verifyToken } from '../Middlewares/tokenVerification.mjs';

const router = Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/me', verifyToken, getMe);

export default router;