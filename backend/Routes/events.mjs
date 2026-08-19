import { Router } from 'express';
import { verifyToken } from '../Middlewares/tokenVerification.mjs';
import { createEvents, getEvents, removeEvent } from '../Controllers/eventController.mjs';

const router = Router();
router.use(verifyToken);

router.post('/', createEvents);
router.get('/', getEvents);
router.delete('/:id', removeEvent);

export default router;