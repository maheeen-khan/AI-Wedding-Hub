import db from '../DB/dbConnection.mjs';
//----------------------------------------------get api -------------------------------------------------//
// Get all vendors by category
export const getVendorsByCategory = async (category) => {
  const [rows] = await db.query(
    `SELECT * FROM vendors 
     WHERE category = ? AND is_active = TRUE`,
    [category]
  );
  return rows;
};
// Get photography details
export const getPhotographyDetails = async (vendorId) => {
  const [rows] = await db.query(
    `SELECT * FROM photography_details WHERE vendor_id = ?`,
    [vendorId]
  );
  return rows[0];
};

// Get decor details
export const getDecorDetails = async (vendorId) => {
  const [rows] = await db.query(
    `SELECT * FROM decor_details WHERE vendor_id = ?`,
    [vendorId]
  );
  return rows[0];
};

// Get makeup details
export const getMakeupDetails = async (vendorId) => {
  const [rows] = await db.query(
    `SELECT * FROM makeup_details WHERE vendor_id = ?`,
    [vendorId]
  );
  return rows[0];
};

// Get car rental details
export const getCarRentalDetails = async (vendorId) => {
  const [rows] = await db.query(
    `SELECT * FROM car_rental_details WHERE vendor_id = ?`,
    [vendorId]
  );
  return rows[0];
};

// Get recommended vendors by category
export const getRecommendedVendors = async (category) => {
  const [rows] = await db.query(
    `SELECT * FROM vendors 
     WHERE category = ? 
     AND is_recommended = TRUE 
     AND is_active = TRUE`,
    [category]
  );
  return rows;
};

// Get single vendor by id
export const getVendorById = async (id) => {
  const [rows] = await db.query(
    `SELECT * FROM vendors WHERE id = ?`,
    [id]
  );
  return rows[0];
};

// Get vendor images
export const getVendorImages = async (vendorId) => {
  const [rows] = await db.query(
    `SELECT * FROM vendor_images 
     WHERE vendor_id = ? 
     ORDER BY sort_order ASC`,
    [vendorId]
  );
  return rows;
};

// Get vendor tags
export const getVendorTags = async (vendorId) => {
  const [rows] = await db.query(
    `SELECT tag FROM vendor_tags 
     WHERE vendor_id = ?`,
    [vendorId]
  );
  return rows.map(r => r.tag);
};

// Get vendor amenities
export const getVendorAmenities = async (vendorId) => {
  const [rows] = await db.query(
    `SELECT amenity FROM vendor_amenities 
     WHERE vendor_id = ?`,
    [vendorId]
  );
  return rows.map(r => r.amenity);
};

// Get venue details
export const getVenueDetails = async (vendorId) => {
  const [rows] = await db.query(
    `SELECT * FROM venue_details 
     WHERE vendor_id = ?`,
    [vendorId]
  );
  return rows[0];
};

// Get catering details
export const getCateringDetails = async (vendorId) => {
  const [rows] = await db.query(
    `SELECT * FROM catering_details 
     WHERE vendor_id = ?`,
    [vendorId]
  );
  return rows[0];
};

// Get menu packages
export const getMenuPackages = async (vendorId) => {
  const [rows] = await db.query(
    `SELECT * FROM menu_packages 
     WHERE vendor_id = ? 
     ORDER BY sort_order ASC`,
    [vendorId]
  );
  return rows;
};

// Get event addons
export const getEventAddons = async (vendorId) => {
  const [rows] = await db.query(
    `SELECT * FROM event_addons 
     WHERE vendor_id = ?`,
    [vendorId]
  );
  return rows;
};

// Get reviews
export const getVendorReviews = async (vendorId) => {
  const [rows] = await db.query(
    `SELECT * FROM reviews 
     WHERE vendor_id = ? 
     ORDER BY created_at DESC`,
    [vendorId]
  );
  return rows;
};

// Get FAQs
export const getVendorFaqs = async (vendorId) => {
  const [rows] = await db.query(
    `SELECT * FROM faqs 
     WHERE vendor_id = ? 
     ORDER BY sort_order ASC`,
    [vendorId]
  );
  return rows;
};


//-------------------------------------------post vendor api------------------------------------------------------------------------
import pool from "../DB/dbConnection.mjs";

/* ---------- core vendor ---------- */

export async function findVendorByUserId(userId) {
  const [rows] = await pool.query(
    "SELECT * FROM vendors WHERE user_id = ? LIMIT 1",
    [userId]
  );
  return rows[0] || null;
}

export async function createVendor(userId, data) {
  const [result] = await pool.query(
    `INSERT INTO vendors
      (user_id, name, category, location, city, about, price_min, price_max, price_label)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      userId,
      data.name,
      data.category,
      data.location || null,
      data.city || "Karachi",
      data.about || null,
      data.price_min || null,
      data.price_max || null,
      data.price_label || null,
    ]
  );
  return result.insertId;
}

export async function updateVendor(vendorId, data) {
  await pool.query(
    `UPDATE vendors SET
      name = ?, category = ?, location = ?, city = ?, about = ?,
      price_min = ?, price_max = ?, price_label = ?
     WHERE id = ?`,
    [
      data.name,
      data.category,
      data.location || null,
      data.city || "Karachi",
      data.about || null,
      data.price_min || null,
      data.price_max || null,
      data.price_label || null,
      vendorId,
    ]
  );
}

/* ---------- category detail upserts ---------- */

export async function upsertVenueDetails(vendorId, data) {
  await pool.query(
    `INSERT INTO venue_details (vendor_id, venue_type, capacity_min, capacity_max, parking_slots, catering_policy)
     VALUES (?, ?, ?, ?, ?, ?)
     ON DUPLICATE KEY UPDATE
       venue_type = VALUES(venue_type),
       capacity_min = VALUES(capacity_min),
       capacity_max = VALUES(capacity_max),
       parking_slots = VALUES(parking_slots),
       catering_policy = VALUES(catering_policy)`,
    [
      vendorId,
      data.venue_type || null,
      data.capacity_min || null,
      data.capacity_max || null,
      data.parking_slots || null,
      data.catering_policy || null,
    ]
  );
}

export async function upsertCateringDetails(vendorId, data) {
  await pool.query(
    `INSERT INTO catering_details (vendor_id, min_pax, service_type, buffet_live, staffing_notice)
     VALUES (?, ?, ?, ?, ?)
     ON DUPLICATE KEY UPDATE
       min_pax = VALUES(min_pax),
       service_type = VALUES(service_type),
       buffet_live = VALUES(buffet_live),
       staffing_notice = VALUES(staffing_notice)`,
    [
      vendorId,
      data.min_pax || null,
      data.service_type || null,
      data.buffet_live || null,
      data.staffing_notice || null,
    ]
  );
}

export async function upsertPhotographyDetails(vendorId, data) {
  await pool.query(
    `INSERT INTO photography_details (vendor_id, coverage_type, delivery_days, team_size, equipment)
     VALUES (?, ?, ?, ?, ?)
     ON DUPLICATE KEY UPDATE
       coverage_type = VALUES(coverage_type),
       delivery_days = VALUES(delivery_days),
       team_size = VALUES(team_size),
       equipment = VALUES(equipment)`,
    [
      vendorId,
      data.coverage_type || null,
      data.delivery_days || null,
      data.team_size || null,
      data.equipment || null,
    ]
  );
}

export async function upsertDecorDetails(vendorId, data) {
  await pool.query(
    `INSERT INTO decor_details (vendor_id, decor_type, theme)
     VALUES (?, ?, ?)
     ON DUPLICATE KEY UPDATE
       decor_type = VALUES(decor_type),
       theme = VALUES(theme)`,
    [vendorId, data.decor_type || null, data.theme || null]
  );
}

export async function upsertMakeupDetails(vendorId, data) {
  await pool.query(
    `INSERT INTO makeup_details (vendor_id, artist_type, experience_years)
     VALUES (?, ?, ?)
     ON DUPLICATE KEY UPDATE
       artist_type = VALUES(artist_type),
       experience_years = VALUES(experience_years)`,
    [vendorId, data.artist_type || null, data.experience_years || null]
  );
}

export async function upsertCarRentalDetails(vendorId, data) {
  await pool.query(
    `INSERT INTO car_rental_details (vendor_id, car_model, car_type, fuel_type, with_driver)
     VALUES (?, ?, ?, ?, ?)
     ON DUPLICATE KEY UPDATE
       car_model = VALUES(car_model),
       car_type = VALUES(car_type),
       fuel_type = VALUES(fuel_type),
       with_driver = VALUES(with_driver)`,
    [
      vendorId,
      data.car_model || null,
      data.car_type || null,
      data.fuel_type || null,
      data.with_driver === "1" || data.with_driver === true,
    ]
  );
}

/* ---------- amenities / packages / addons (replace-all pattern) ---------- */

export async function replaceAmenities(vendorId, amenities = []) {
  await pool.query("DELETE FROM vendor_amenities WHERE vendor_id = ?", [vendorId]);
  if (amenities.length === 0) return;

  const values = amenities.map((a) => [vendorId, a]);
  await pool.query("INSERT INTO vendor_amenities (vendor_id, amenity) VALUES ?", [values]);
}

export async function replaceMenuPackages(vendorId, packages = []) {
  await pool.query("DELETE FROM menu_packages WHERE vendor_id = ?", [vendorId]);
  if (packages.length === 0) return;

  const values = packages.map((p, i) => [
    vendorId,
    p.name,
    p.profile || null,
    p.price || null,
    !!p.is_highlighted,
    i,
  ]);
  await pool.query(
    "INSERT INTO menu_packages (vendor_id, name, profile, price, is_highlighted, sort_order) VALUES ?",
    [values]
  );
}

export async function replaceEventAddons(vendorId, addons = []) {
  await pool.query("DELETE FROM event_addons WHERE vendor_id = ?", [vendorId]);
  if (addons.length === 0) return;

  const values = addons.map((a) => [vendorId, a.addon_name, a.price || null]);
  await pool.query("INSERT INTO event_addons (vendor_id, addon_name, price) VALUES ?", [values]);
}

/* ---------- images ---------- */

export async function replaceVendorImages(vendorId, coverPath, galleryPaths = []) {
  await pool.query("DELETE FROM vendor_images WHERE vendor_id = ?", [vendorId]);

  const rows = [];
  if (coverPath) rows.push([vendorId, coverPath, true, 0]);
  galleryPaths.forEach((p, i) => rows.push([vendorId, p, false, i + 1]));

  if (rows.length === 0) return;

  await pool.query(
    "INSERT INTO vendor_images (vendor_id, image_url, is_main, sort_order) VALUES ?",
    [rows]
  );
}

/* ---------- combined fetch for profile preview ---------- */

const detailJoins = {
  venue: { table: "venue_details", alias: "d", cols: "d.venue_type, d.capacity_min, d.capacity_max, d.parking_slots, d.catering_policy" },
  catering: { table: "catering_details", alias: "d", cols: "d.min_pax, d.service_type, d.buffet_live, d.staffing_notice" },
  photography: { table: "photography_details", alias: "d", cols: "d.coverage_type, d.delivery_days, d.team_size, d.equipment" },
  decor: { table: "decor_details", alias: "d", cols: "d.decor_type, d.theme" },
  makeup: { table: "makeup_details", alias: "d", cols: "d.artist_type, d.experience_years" },
  "car-rental": { table: "car_rental_details", alias: "d", cols: "d.car_model, d.car_type, d.fuel_type, d.with_driver" },
};

export async function getFullProfile(userId) {
  const [vendorRows] = await pool.query(
    "SELECT * FROM vendors WHERE user_id = ? LIMIT 1",
    [userId]
  );
  const vendor = vendorRows[0];
  if (!vendor) return null;

  const join = detailJoins[vendor.category];
  let fullVendor = vendor;

  if (join) {
    const [rows] = await pool.query(
      `SELECT v.*, ${join.cols}
       FROM vendors v
       LEFT JOIN ${join.table} ${join.alias} ON ${join.alias}.vendor_id = v.id
       WHERE v.id = ?
       LIMIT 1`,
      [vendor.id]
    );
    fullVendor = rows[0] || vendor;
  }

  const [images] = await pool.query(
    "SELECT image_url, is_main FROM vendor_images WHERE vendor_id = ? ORDER BY sort_order ASC",
    [vendor.id]
  );
  const [amenities] = await pool.query(
    "SELECT amenity FROM vendor_amenities WHERE vendor_id = ?",
    [vendor.id]
  );
  const [packages] = await pool.query(
    "SELECT name, profile, price, is_highlighted FROM menu_packages WHERE vendor_id = ? ORDER BY sort_order ASC",
    [vendor.id]
  );
  const [addons] = await pool.query(
    "SELECT addon_name, price FROM event_addons WHERE vendor_id = ?",
    [vendor.id]
  );

  return {
    ...fullVendor,
    cover_image_url: images.find((img) => img.is_main)?.image_url || null,
    gallery_images: images.filter((img) => !img.is_main).map((img) => img.image_url),
    amenities: amenities.map((a) => a.amenity),
    menu_packages: packages,
    event_addons: addons,
  };
}