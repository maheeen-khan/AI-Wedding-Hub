import express from "express";
import {
  getStats,
  getRequests,
  getConfirmed,
  setBookingStatus,
} from "../Controllers/vendorSideBookingController.mjs";
import { verifyToken } from "../Middlewares/tokenVerification.mjs";

const router = express.Router();

router.get("/stats", verifyToken, getStats);
router.get("/requests", verifyToken, getRequests);
router.get("/confirmed", verifyToken, getConfirmed);
router.patch("/bookings/:id/status", verifyToken, setBookingStatus);

export default router;