import express from 'express';
import { 
  getVendors, 
  getVendorProfile 
} from '../Controllers/vendorController.mjs';

const router = express.Router();

// GET all vendors by category
// Example: /api/vendors/venue
// Example: /api/vendors/catering
router.get('/:category', getVendors);

// GET single vendor full profile
// Example: /api/vendors/venue/1
// Example: /api/vendors/catering/1
router.get('/:category/:id', getVendorProfile);

export default router;