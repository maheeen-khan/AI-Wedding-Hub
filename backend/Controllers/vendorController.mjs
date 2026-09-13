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
  findVendorByUserId,
  createVendor,
  updateVendor,
  upsertVenueDetails,
  upsertCateringDetails,
  upsertPhotographyDetails,
  upsertDecorDetails,
  upsertMakeupDetails,
  upsertCarRentalDetails,
  replaceAmenities,
  replaceMenuPackages,
  replaceEventAddons,
  replaceVendorImages,
  getFullProfile,
} from '../Models/vendor.model.mjs';

// GET all vendors by category
// GET /api/vendors/:category
export const getVendors = async (req, res) => {
  try {
    const { category } = req.params;

    // Get all vendors
    const vendors = await getVendorsByCategory(category);

    // Get recommended vendors
    const recommended = await getRecommendedVendors(category);

    // Add main image to each vendor
    const addMainImage = async (vendor) => {
      const images = await getVendorImages(vendor.id);

      const mainImage =
        images.find((image) => image.is_main === true || image.is_main === 1) ||
        images[0];

      return {
        ...vendor,
        image_url: mainImage?.image_url || null,
      };
    };

    const allWithImages = await Promise.all(
      vendors.map(addMainImage)
    );

    const recommendedWithImages = await Promise.all(
      recommended.map(addMainImage)
    );

    res.json({
      success: true,
      data: {
        recommended: recommendedWithImages,
        all: allWithImages,
      },
    });

  } catch (error) {
    console.error("Error fetching vendors:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
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


//register-business 

const detailHandlers = {
  venue: upsertVenueDetails,
  catering: upsertCateringDetails,
  photography: upsertPhotographyDetails,
  decor: upsertDecorDetails,
  makeup: upsertMakeupDetails,
  "car-rental": upsertCarRentalDetails,
};

// GET /api/vendor/profile
export async function getMyProfile(req, res) {
  try {
    const userId = req.user.id; // set by tokenVerification middleware
    const profile = await getFullProfile(userId);

    if (!profile) {
      return res.status(404).json({ message: "No business profile found" });
    }

    res.json(profile);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to load profile" });
  }
}

// POST /api/vendor/register-business
export async function registerBusiness(req, res) {
  try {
    const userId = req.user.id;
    const data = req.body; // text fields (multer parses these alongside files)

    if (!data.name || !data.category) {
      return res.status(400).json({ message: "Business name and category are required" });
    }

    if (!detailHandlers[data.category]) {
      return res.status(400).json({ message: "Invalid category" });
    }

    // 1. create or update the base vendor row
    const existing = await findVendorByUserId(userId);
    let vendorId;

    if (existing) {
      await updateVendor(existing.id, data);
      vendorId = existing.id;
    } else {
      vendorId = await createVendor(userId, data);
    }

    // 2. category-specific detail table
    await detailHandlers[data.category](vendorId, data);

    // 3. amenities (applies to all categories)
    const amenities = data.amenities ? JSON.parse(data.amenities) : [];
    await replaceAmenities(vendorId, amenities);

    // 4. catering-only extras
    if (data.category === "catering") {
      const packages = data.menu_packages ? JSON.parse(data.menu_packages) : [];
      const addons = data.event_addons ? JSON.parse(data.event_addons) : [];
      await replaceMenuPackages(vendorId, packages);
      await replaceEventAddons(vendorId, addons);
    }

    // 5. images — req.files comes from multer's upload.fields()
    const coverFile = req.files?.cover_image?.[0];
    const galleryFiles = req.files?.gallery_images || [];

    if (coverFile || galleryFiles.length > 0) {
      const coverPath = coverFile ? `/uploads/vendor-images/${coverFile.filename}` : null;
      const galleryPaths = galleryFiles.map((f) => `/uploads/vendor-images/${f.filename}`);
      await replaceVendorImages(vendorId, coverPath, galleryPaths);
    }

    res.status(existing ? 200 : 201).json({
      message: existing ? "Profile updated" : "Business registered",
      vendorId,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to save business profile" });
  }
}