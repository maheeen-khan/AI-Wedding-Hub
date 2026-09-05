import db from '../DB/dbConnection.mjs';

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