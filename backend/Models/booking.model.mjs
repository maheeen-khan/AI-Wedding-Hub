import pool from "../DB/dbConnection.mjs";

export async function getDashboardStats(vendorId) {
  const [[totals]] = await pool.query(
    `SELECT
       COUNT(*) AS total_bookings,
       SUM(CASE WHEN status = 'pending' THEN 1 ELSE 0 END) AS pending_requests,
       SUM(CASE WHEN status IN ('confirmed','completed') THEN 1 ELSE 0 END) AS confirmed_events,
       COALESCE(SUM(CASE WHEN status IN ('confirmed','completed') THEN price ELSE 0 END), 0) AS total_earnings
     FROM bookings
     WHERE vendor_id = ?`,
    [vendorId]
  );
  return totals;
}

export async function getPendingRequests(vendorId) {
  const [rows] = await pool.query(
    `SELECT id, couple_name, event_type, event_date, guests, note, status
     FROM bookings
     WHERE vendor_id = ? AND status = 'pending'
     ORDER BY created_at DESC`,
    [vendorId]
  );
  return rows;
}

export async function getConfirmedBookings(vendorId) {
  const [rows] = await pool.query(
    `SELECT id, couple_name, event_type, event_date, guests, status
     FROM bookings
     WHERE vendor_id = ? AND status IN ('confirmed', 'completed')
     ORDER BY event_date ASC`,
    [vendorId]
  );
  return rows;
}

export async function updateBookingStatus(bookingId, vendorId, status) {
  const [result] = await pool.query(
    `UPDATE bookings SET status = ? WHERE id = ? AND vendor_id = ?`,
    [status, bookingId, vendorId]
  );
  return result.affectedRows > 0;
}

export async function createBooking(userId, vendorId, data) {
  const [result] = await pool.query(
    `INSERT INTO bookings (vendor_id, user_id, couple_name, event_type, event_date, guests, note, status)
     VALUES (?, ?, ?, ?, ?, ?, ?, 'pending')`,
    [
      vendorId,
      userId,
      data.couple_name,
      data.event_type || null,
      data.event_date || null,
      data.guests || null,
      data.note || null,
    ]
  );
  return result.insertId;
}

// client views their own booking history
export async function getBookingsByUserId(userId) {
  const [rows] = await pool.query(
    `SELECT b.*, v.name AS vendor_name, v.category
     FROM bookings b
     JOIN vendors v ON v.id = b.vendor_id
     WHERE b.user_id = ?
     ORDER BY b.created_at DESC`,
    [userId]
  );
  return rows;
}