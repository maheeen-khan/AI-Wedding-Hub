import {
  getVendorsByCategory,
  getRecommendedVendors,
  getVendorById,
  getVendorImages,
  getVendorTags,
  getVendorAmenities,
  getVenueDetails,
  getCateringDetails,
  getMenuPackages,
  getEventAddons,
  getVendorReviews,
  getVendorFaqs,
   getPhotographyDetails,  // ← add
  getDecorDetails,        // ← add
  getMakeupDetails,       // ← add
  getCarRentalDetails,    // ← add
} from '../Models/vendor.model.mjs';

// GET all vendors by category
// GET /api/vendors/:category
export const getVendors = async (req, res) => {
  try {
    const { category } = req.params;
    const id = parseInt(req.params.id);

    const vendors = await getVendorsByCategory(category);
    const recommended = await getRecommendedVendors(category);

    res.json({
      success: true,
      data: {
        recommended,
        all: vendors,
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET single vendor full profile
// GET /api/vendors/:category/:id
export const getVendorProfile = async (req, res) => {
  try {
    const { category, id } = req.params;

    // Get base vendor
    const vendor = await getVendorById(id);
    if (!vendor) {
      return res.status(404).json({
        success: false,
        message: 'Vendor not found'
      });
    }

    // Get all related data
    const images = await getVendorImages(id);
    const tags = await getVendorTags(id);
    const amenities = await getVendorAmenities(id);
    const reviews = await getVendorReviews(id);
    const faqs = await getVendorFaqs(id);

    // Category specific data
    let categoryDetails = {};

    if (category === 'venue') {
      categoryDetails = await getVenueDetails(id);
    }

    if (category === 'catering') {
      const details = await getCateringDetails(id);
      const packages = await getMenuPackages(id);
      const addons = await getEventAddons(id);
      categoryDetails = { ...details, packages, addons };
    }
    

    if (category === 'photography') {
      categoryDetails = await getPhotographyDetails(id) || {};
    }

    if (category === 'decor') {
      categoryDetails = await getDecorDetails(id) || {};
    }

    if (category === 'makeup') {
      categoryDetails = await getMakeupDetails(id) || {};
    }

    if (category === 'car-rental') {
      categoryDetails = await getCarRentalDetails(id) || {};
    }

    res.json({
      success: true,
      data: {
        ...vendor,
        images,
        tags,
        amenities,
        reviews,
        faqs,
        categoryDetails,
      }
    });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};