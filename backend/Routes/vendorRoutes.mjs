import express from 'express';
import {
  getVendors,
  getVendorProfile,
  getMyProfile,
  registerBusiness,
} from '../Controllers/vendorController.mjs';
import { verifyToken } from "../Middlewares/tokenVerification.mjs";
import { upload } from "../Middlewares/upload.mjs";

const router = express.Router();

router.get('/profile', verifyToken, getMyProfile);

router.post(
  "/register-business",
  verifyToken,
  upload.fields([
    { name: "cover_image", maxCount: 1 },
    { name: "gallery_images", maxCount: 6 },
  ]),
  registerBusiness
);

// GET all vendors by category — must stay AFTER the routes above
router.get('/:category', getVendors);

// GET single vendor full profile
router.get('/:category/:id', getVendorProfile);

export default router;