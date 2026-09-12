import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Register_Business.css";

const CITY_OPTIONS = ["Karachi", "Lahore", "Islamabad"];

const CATEGORY_TABS = [
  { value: "venue", label: "Venue" },
  { value: "catering", label: "Catering" },
  { value: "photography", label: "Photography" },
  { value: "decor", label: "Decor" },
  { value: "makeup", label: "Makeup" },
  { value: "car-rental", label: "Car Rental" },
];

const AMENITY_OPTIONS = [
  "Professional Host / Event Coordinator",
  "Advance Booking Span (30/60/90 days)",
  "Backup Generator & Power",
  "Female Attendants / Staff",
  "Dedicated Point of Contact",
  "NPB / PKR Tax Compliant",
];

/* Field sets map 1:1 to the *_details tables in your schema.
   Only fields listed here get sent for that category, so nothing
   ends up with no column to land in. */
const CATEGORY_FIELDS = {
  venue: [
    { name: "venue_type", label: "Venue Type", type: "text", placeholder: "Marquee, Air-conditioned, Outdoor..." },
    { name: "capacity_min", label: "Min Guest Capacity", type: "number" },
    { name: "capacity_max", label: "Max Guest Capacity", type: "number" },
    { name: "parking_slots", label: "Parking Slots", type: "number" },
    {
      name: "catering_policy",
      label: "Catering Policy",
      type: "select",
      options: ["In-house Only", "Outside Allowed", "Both Allowed"],
    },
  ],
  catering: [
    { name: "min_pax", label: "Minimum Pax", type: "number" },
    {
      name: "service_type",
      label: "Service Type",
      type: "select",
      options: ["Buffet", "Live Counters", "Plated", "Family Style"],
    },
    { name: "buffet_live", label: "Buffet / Live Stations", type: "text" },
    { name: "staffing_notice", label: "Staffing Notice", type: "text", placeholder: "e.g. 48 hours advance notice" },
  ],
  photography: [
    {
      name: "coverage_type",
      label: "Coverage Type",
      type: "select",
      options: ["Full Day", "Half Day", "Event Only"],
    },
    { name: "delivery_days", label: "Delivery (days)", type: "number" },
    { name: "team_size", label: "Team Size", type: "number" },
    { name: "equipment", label: "Equipment", type: "text", placeholder: "e.g. Sony A7IV, drone, dual shooters" },
  ],
  decor: [
    { name: "decor_type", label: "Decor Type", type: "text", placeholder: "Floral, Fairy-light, Traditional..." },
    { name: "theme", label: "Theme", type: "text", placeholder: "e.g. Royal Mughal, Boho, Minimalist" },
  ],
  makeup: [
    {
      name: "artist_type",
      label: "Artist Type",
      type: "select",
      options: ["Bridal", "Party", "HD/Airbrush"],
    },
    { name: "experience_years", label: "Experience (years)", type: "number" },
  ],
  "car-rental": [
    { name: "car_model", label: "Car Model", type: "text" },
    { name: "car_type", label: "Car Type", type: "text", placeholder: "Sedan, SUV, Vintage..." },
    {
      name: "fuel_type",
      label: "Fuel Type",
      type: "select",
      options: ["Petrol", "Diesel", "Hybrid", "Electric"],
    },
    { name: "with_driver", label: "With Driver", type: "checkbox" },
  ],
};

/* Base shape for the detail fields, so switching categories
   clears out any previous category's leftover values. */
const emptyDetailValues = (category) =>
  (CATEGORY_FIELDS[category] || []).reduce((acc, field) => {
    acc[field.name] = field.type === "checkbox" ? true : "";
    return acc;
  }, {});

function CategoryDetailFields({ category, formData, onChange }) {
  const fields = CATEGORY_FIELDS[category] || [];

  if (fields.length === 0) return null;

  return (
    <div className="detail-fields-grid">
      {fields.map((field) => {
        const value = formData[field.name] ?? "";

        if (field.type === "select") {
          return (
            <div className="form-group" key={field.name}>
              <label>{field.label}</label>
              <select name={field.name} value={value} onChange={onChange}>
                <option value="">Select...</option>
                {field.options.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
          );
        }

        if (field.type === "checkbox") {
          return (
            <div className="form-group checkbox-group" key={field.name}>
              <label>
                <input
                  type="checkbox"
                  name={field.name}
                  checked={!!value}
                  onChange={(e) =>
                    onChange({ target: { name: field.name, value: e.target.checked } })
                  }
                />
                {field.label}
              </label>
            </div>
          );
        }

        return (
          <div className="form-group" key={field.name}>
            <label>{field.label}</label>
            <input
              type={field.type}
              name={field.name}
              value={value}
              placeholder={field.placeholder || ""}
              onChange={onChange}
            />
          </div>
        );
      })}
    </div>
  );
}

// ... (all the CATEGORY_FIELDS, CATEGORY_TABS, CategoryDetailFields, AMENITY_OPTIONS 
// constants stay exactly as in the last full version — unchanged)

export default function RegisterBusiness() {
  const navigate = useNavigate();
  const location = useLocation();
  const existingProfile = location.state?.profile || null;

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);
  const [coverPreview, setCoverPreview] = useState(existingProfile?.cover_image_url || null);
  const [amenities, setAmenities] = useState(existingProfile?.amenities || []);
  const [packages, setPackages] = useState(
    existingProfile?.menu_packages?.length
      ? existingProfile.menu_packages
      : [{ name: "", profile: "", price: "", is_highlighted: false }]
  );
  const [addons, setAddons] = useState(
    existingProfile?.event_addons?.length
      ? existingProfile.event_addons
      : [{ addon_name: "", price: "" }]
  );

  const initialCategory = existingProfile?.category || "catering";

  const [formData, setFormData] = useState({
    name: existingProfile?.name || "",
    category: initialCategory,
    location: existingProfile?.location || "",
    city: existingProfile?.city || "Karachi",
    about: existingProfile?.about || "",
    price_min: existingProfile?.price_min || "",
    price_max: existingProfile?.price_max || "",
    price_label: existingProfile?.price_label || "",
    ...emptyDetailValues(initialCategory),
    ...existingProfile, // pre-fills category-specific fields when editing
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCategoryChange = (newCategory) => {
    setFormData((prev) => ({
      ...prev,
      category: newCategory,
      ...emptyDetailValues(newCategory),
    }));
  };

  const handleCoverChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setCoverImage(file);
    setCoverPreview(URL.createObjectURL(file));
  };

  const handleGalleryChange = (e) => {
    const files = Array.from(e.target.files).slice(0, 6);
    setGalleryImages(files);
  };

  const toggleAmenity = (amenity) => {
    setAmenities((prev) =>
      prev.includes(amenity) ? prev.filter((a) => a !== amenity) : [...prev, amenity]
    );
  };

  const handlePackageChange = (index, field, value) => {
    setPackages((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], [field]: value };
      return next;
    });
  };

  const addPackageRow = () =>
    setPackages((prev) => [...prev, { name: "", profile: "", price: "", is_highlighted: false }]);

  const removePackageRow = (index) =>
    setPackages((prev) => prev.filter((_, i) => i !== index));

  const handleAddonChange = (index, field, value) => {
    setAddons((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], [field]: value };
      return next;
    });
  };

  const addAddonRow = () => setAddons((prev) => [...prev, { addon_name: "", price: "" }]);
  const removeAddonRow = (index) => setAddons((prev) => prev.filter((_, i) => i !== index));

  const buildSubmitPayload = () => {
    const fd = new FormData();

    const commonKeys = ["name", "category", "location", "city", "about", "price_min", "price_max", "price_label"];
    commonKeys.forEach((key) => {
      if (formData[key] !== null && formData[key] !== undefined) {
        fd.append(key, formData[key]);
      }
    });

    (CATEGORY_FIELDS[formData.category] || []).forEach((field) => {
      const val = formData[field.name];
      if (val !== null && val !== undefined) {
        fd.append(field.name, field.type === "checkbox" ? (val ? "1" : "0") : val);
      }
    });

    fd.append("amenities", JSON.stringify(amenities));

    if (formData.category === "catering") {
      fd.append("menu_packages", JSON.stringify(packages.filter((p) => p.name)));
      fd.append("event_addons", JSON.stringify(addons.filter((a) => a.addon_name)));
    }

    if (coverImage) fd.append("cover_image", coverImage);
    galleryImages.forEach((file) => fd.append("gallery_images", file));

    return fd;
  };

  const handleSubmit = async (e, isDraft = false) => {
    e.preventDefault();
    setSaving(true);
    setError(null);

    try {
      const fd = buildSubmitPayload();
      fd.append("is_draft", isDraft ? "1" : "0");

      const res = await fetch("http://localhost:5000/api/vendors/register-business", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: fd,
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.message || "Failed to save business profile");
      }

      const result = await res.json();
      navigate("/vendor-dashboard", { state: { justSaved: true, vendorId: result.vendorId } });
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <form className="register-business-form" onSubmit={(e) => handleSubmit(e, false)}>
      <h2>Register Your Wedding Business</h2>
      <p className="subtitle">
        List your signature services across Karachi, Lahore &amp; Islamabad. Takes under 3 minutes.
      </p>

      {error && <div className="form-error">{error}</div>}

      {/* SECTION 1: Basic Business Profile */}
      <section className="form-section">
        <h3>1. Basic Business Profile</h3>
        <div className="form-grid">
          <div className="form-group">
            <label>Registered Business / Brand Name *</label>
            <input name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Service Category *</label>
            <select
              name="category"
              value={formData.category}
              onChange={(e) => handleCategoryChange(e.target.value)}
              required
            >
              {CATEGORY_TABS.map((tab) => (
                <option key={tab.value} value={tab.value}>{tab.label}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Operating City *</label>
            <select name="city" value={formData.city} onChange={handleChange} required>
              {CITY_OPTIONS.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Business Location / Address</label>
            <input name="location" value={formData.location} onChange={handleChange} />
          </div>
        </div>
        <div className="form-group" style={{ marginTop: 16 }}>
          <label>About Your Business</label>
          <textarea
            name="about"
            rows={4}
            value={formData.about}
            onChange={handleChange}
            placeholder="Tell couples what makes your service stand out..."
          />
        </div>
      </section>

      {/* SECTION 2: Showcase Cover & Gallery */}
      <section className="form-section">
        <h3>2. Showcase Cover &amp; Gallery</h3>
        <div className="cover-upload">
          <label>Primary Cover Photo (Wide Banner) *</label>
          {coverPreview && <img src={coverPreview} alt="Cover preview" className="cover-preview" />}
          <input type="file" accept="image/*" onChange={handleCoverChange} />
        </div>
        <div className="gallery-upload">
          <label>Recent Event Highlights (Add 3 or more photos)</label>
          <input type="file" accept="image/*" multiple onChange={handleGalleryChange} />
          <div className="gallery-preview-row">
            {galleryImages.map((file, i) => (
              <img key={i} src={URL.createObjectURL(file)} alt={`Gallery ${i}`} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Category Specific Details — this is the part that changes */}
      <section className="form-section">
        <h3>3. Category Specific Details</h3>
        <p className="section-hint">Tailored fields for your selected service category</p>

        <div className="category-tabs">
          {CATEGORY_TABS.map((tab) => (
            <button
              type="button"
              key={tab.value}
              className={`category-tab ${formData.category === tab.value ? "active" : ""}`}
              onClick={() => handleCategoryChange(tab.value)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <CategoryDetailFields
          category={formData.category}
          formData={formData}
          onChange={handleChange}
        />
      </section>

     {/* SECTION 4: Packages & Service Highlights */}
<section className="form-section">
  <h3>4. Packages &amp; Service Highlights</h3>

  <div className="form-grid">
    <div className="form-group">
      <label>Pricing Structure</label>
      <select name="price_label" value={formData.price_label} onChange={handleChange}>
        <option value="">Select...</option>
        <option value="Per Person / Head">Per Person / Head</option>
        <option value="Fixed Package">Fixed Package</option>
      </select>
    </div>
    <div className="form-group">
      <label>Starting Rate (PKR)</label>
      <input type="number" name="price_min" value={formData.price_min} onChange={handleChange} />
    </div>
    <div className="form-group">
      <label>Maximum Rate (PKR)</label>
      <input type="number" name="price_max" value={formData.price_max} onChange={handleChange} />
    </div>
  </div>

  {/* Amenities — applies to all categories */}
  <div className="amenities-block">
    <label className="block-label">Select Included Amenities &amp; Trust Badges</label>
    <div className="amenities-grid">
      {AMENITY_OPTIONS.map((amenity) => (
        <label key={amenity} className="amenity-chip">
          <input
            type="checkbox"
            checked={amenities.includes(amenity)}
            onChange={() => toggleAmenity(amenity)}
          />
          {amenity}
        </label>
      ))}
    </div>
  </div>

  {/* Menu packages + add-ons — catering only, matches menu_packages/event_addons tables */}
  {formData.category === "catering" && (
    <>
      <div className="repeatable-block">
        <label className="block-label">Menu Packages</label>
        {packages.map((pkg, i) => (
          <div className="repeatable-row" key={i}>
            <input
              placeholder="Package name (e.g. Gold Package)"
              value={pkg.name}
              onChange={(e) => handlePackageChange(i, "name", e.target.value)}
            />
            <input
              placeholder="Profile / description"
              value={pkg.profile}
              onChange={(e) => handlePackageChange(i, "profile", e.target.value)}
            />
            <input
              placeholder="Price (e.g. PKR 3,500/head)"
              value={pkg.price}
              onChange={(e) => handlePackageChange(i, "price", e.target.value)}
            />
            <label className="highlight-toggle">
              <input
                type="checkbox"
                checked={pkg.is_highlighted}
                onChange={(e) => handlePackageChange(i, "is_highlighted", e.target.checked)}
              />
              Featured
            </label>
            {packages.length > 1 && (
              <button type="button" className="remove-row-btn" onClick={() => removePackageRow(i)}>✕</button>
            )}
          </div>
        ))}
        <button type="button" className="add-row-btn" onClick={addPackageRow}>+ Add another package</button>
      </div>

      <div className="repeatable-block">
        <label className="block-label">Event Add-ons</label>
        {addons.map((addon, i) => (
          <div className="repeatable-row" key={i}>
            <input
              placeholder="Add-on name (e.g. Live BBQ Counter)"
              value={addon.addon_name}
              onChange={(e) => handleAddonChange(i, "addon_name", e.target.value)}
            />
            <input
              placeholder="Price (e.g. PKR 15,000)"
              value={addon.price}
              onChange={(e) => handleAddonChange(i, "price", e.target.value)}
            />
            {addons.length > 1 && (
              <button type="button" className="remove-row-btn" onClick={() => removeAddonRow(i)}>✕</button>
            )}
          </div>
        ))}
        <button type="button" className="add-row-btn" onClick={addAddonRow}>+ Add another add-on</button>
      </div>
    </>
  )}
</section>

      <div className="form-actions">
        <button
          type="button"
          className="btn btn-outline"
          disabled={saving}
          onClick={(e) => handleSubmit(e, true)}
        >
          Save Progress as Draft
        </button>
        <button type="submit" className="btn btn-gold" disabled={saving}>
          {saving ? "Publishing..." : "Publish Vendor Profile & Start Getting Inquiries"}
        </button>
      </div>
    </form>
  );
}