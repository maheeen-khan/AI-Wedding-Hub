import express from "express";
import {
  getStats,
  getRequests,
  getConfirmed,
  setBookingStatus,
} from "../Controllers/vendorSideBookingController.mjs";
import { verifyToken } from "../Middlewares/tokenVerification.mjs";
import { requireRole } from "../Middlewares/requireRole.mjs";

const router = express.Router();

router.get("/stats", verifyToken, requireRole('vendor'), getStats);
router.get("/requests", verifyToken, requireRole('vendor'), getRequests);
router.get("/confirmed", verifyToken, requireRole('vendor'), getConfirmed);
router.patch("/bookings/:id/status", verifyToken, requireRole('vendor'), setBookingStatus);

export default router;