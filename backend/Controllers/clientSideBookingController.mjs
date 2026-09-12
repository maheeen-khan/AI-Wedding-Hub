// Controllers/clientBookingController.mjs
import { createBooking, getBookingsByUserId } from "../Models/booking.model.mjs";

// POST /api/bookings
export async function bookVendor(req, res) {
  try {
    const userId = req.user.id;
    const { vendor_id, couple_name, event_type, event_date, guests, note } = req.body;

    if (!vendor_id || !couple_name) {
      return res.status(400).json({ message: "vendor_id and couple_name are required" });
    }

    const bookingId = await createBooking(userId, vendor_id, {
      couple_name,
      event_type,
      event_date,
      guests,
      note,
    });

    res.status(201).json({ message: "Booking request sent", bookingId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to create booking" });
  }
}

// GET /api/bookings/my-bookings
export async function getMyBookings(req, res) {
  try {
    const userId = req.user.id;
    const bookings = await getBookingsByUserId(userId);
    res.json(bookings);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to load bookings" });
  }
}