import express from "express";
import { bookVendor, getMyBookings } from "../Controllers/clientSideBookingController.mjs";
import { verifyToken } from "../Middlewares/tokenVerification.mjs";
import { requireRole } from "../Middlewares/requireRole.mjs";

const router = express.Router();

router.post("/", verifyToken, requireRole('client'), bookVendor);
router.get("/my-bookings", verifyToken, requireRole('client'), getMyBookings);

export default router;