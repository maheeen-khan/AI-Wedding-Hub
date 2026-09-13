import express from 'express';
import {
  getVendors,
  getVendorProfile,
  getMyProfile,
  registerBusiness,
} from '../Controllers/vendorController.mjs';
import { verifyToken } from "../Middlewares/tokenVerification.mjs";
import { requireRole } from "../Middlewares/requireRole.mjs";
import { upload } from "../Middlewares/upload.mjs";

const router = express.Router();

router.get('/profile', verifyToken, requireRole('vendor'), getMyProfile);

router.post(
  "/register-business",
  verifyToken,
  requireRole('vendor'),
  upload.fields([
    { name: "cover_image", maxCount: 1 },
    { name: "gallery_images", maxCount: 6 },
  ]),
  registerBusiness
);

// public routes — no auth needed, unchanged
router.get('/:category', getVendors);
router.get('/:category/:id', getVendorProfile);

export default router;