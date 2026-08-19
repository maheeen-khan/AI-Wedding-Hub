import { Router } from 'express';
import { verifyToken } from '../Middlewares/tokenVerification.mjs';
import {
  createWeddingProfile,
  getWeddingProfile,
  updateWeddingProfile,
} from '../Controllers/profileController.mjs';

const router = Router();
router.use(verifyToken);

router.post('/', createWeddingProfile);
router.get('/', getWeddingProfile);
router.put('/', updateWeddingProfile);

export default router;