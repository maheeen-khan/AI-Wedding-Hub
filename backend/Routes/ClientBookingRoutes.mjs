import express from "express";
import { bookVendor, getMyBookings } from "../Controllers/clientSideBookingController.mjs";
import { verifyToken } from "../Middlewares/tokenVerification.mjs";

const router = express.Router();

router.post("/", verifyToken, bookVendor);
router.get("/my-bookings", verifyToken, getMyBookings);

export default router;