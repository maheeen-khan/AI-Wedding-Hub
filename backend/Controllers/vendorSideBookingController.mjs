// Controllers/vendorSideBookingController.mjs
import { findVendorByUserId } from "../Models/vendor.model.mjs";
import {
  getDashboardStats,
  getPendingRequests,
  getConfirmedBookings,
  updateBookingStatus,
} from "../Models/booking.model.mjs";

async function resolveVendorId(req, res) {
  const vendor = await findVendorByUserId(req.user.id);
  if (!vendor) {
    res.status(404).json({ message: "No business profile found for this account" });
    return null;
  }
  return vendor.id;
}

// GET /api/vendors/dashboard/stats
export async function getStats(req, res) {
  try {
    const vendorId = await resolveVendorId(req, res);
    if (!vendorId) return;

    const stats = await getDashboardStats(vendorId);
    res.json({
      totalBookings: Number(stats.total_bookings) || 0,
      pendingRequests: Number(stats.pending_requests) || 0,
      confirmedEvents: Number(stats.confirmed_events) || 0,
      totalEarnings: Number(stats.total_earnings) || 0,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to load dashboard stats" });
  }
}

// GET /api/vendors/dashboard/requests
export async function getRequests(req, res) {
  try {
    const vendorId = await resolveVendorId(req, res);
    if (!vendorId) return;

    const rows = await getPendingRequests(vendorId);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to load requests" });
  }
}

// GET /api/vendors/dashboard/confirmed
export async function getConfirmed(req, res) {
  try {
    const vendorId = await resolveVendorId(req, res);
    if (!vendorId) return;

    const rows = await getConfirmedBookings(vendorId);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to load confirmed bookings" });
  }
}

// PATCH /api/vendors/dashboard/bookings/:id/status
export async function setBookingStatus(req, res) {
  try {
    const vendorId = await resolveVendorId(req, res);
    if (!vendorId) return;

    const { id } = req.params;
    const { status } = req.body;

    if (!["confirmed", "declined"].includes(status)) {
      return res.status(400).json({ message: "Status must be 'confirmed' or 'declined'" });
    }

    const updated = await updateBookingStatus(id, vendorId, status);
    if (!updated) {
      return res.status(404).json({ message: "Booking not found" });
    }

    res.json({ message: `Booking ${status}` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to update booking" });
  }
}