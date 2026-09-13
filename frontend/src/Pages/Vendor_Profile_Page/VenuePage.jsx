import React, { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import Navbar from "../../components/Vendors_Component/Navbar/Navbar";
import Footer from "../../components/Vendors_Component/footer/Footer";
import ImageGallery from "../../components/Vendors_Component/ImageGallery/ImageGallery";
import VendorInfoHeader from "../../components/Vendors_Component/VendorInfoHeader/VendorInfoHeader";
import InfoCardsGrid from "../../components/Vendors_Component/InfoCardsGrid/InfoCardsGrid";
import AboutSection from "../../components/Vendors_Component/AboutSection/AboutSection";
import BookingSidebar from "../../components/Vendors_Component/BookingSidebar/BookingSidebar";
import AmenitiesSection from "../../components/Vendors_Component/AmenitiesSection/AmenitiesSection";
import PricingSection from "../../components/Vendors_Component/PricingSection/PricingSection";
import ReviewsSection from "../../components/Vendors_Component/ReviewsSection/ReviewsSection";
import FAQSection from "../../components/Vendors_Component/FAQSection/FAQSection";
import { venueData } from "./data/venueData";
import "./tokens.css";
import "./PageLayout.css";
import { VenueDetailPage } from '../../api/VendorDetailPages/VendorDetailPage.jsx';


/** Route: /Vendor_Profile_Page/venue/:id */
export default function VenuePage() {
  const { id } = useParams();

  const [venueDetails, setVenueDetails] = useState(null);

  useEffect(() => {
    const fetchVenueDetails = async () => {
      try {
        const details = await VenueDetailPage(id);
        console.log("API response:", details);
        console.log("API data:", details.data);
        console.log("API images:", details.data?.images);


        setVenueDetails(details.data);
      } catch (error) {
        console.error("Error fetching venue details:", error);
      }
    };

    fetchVenueDetails();
  }, [id]);

  if (!venueDetails) {
    return <p>Loading...</p>;
  }



  const vendor = venueDetails;

  const infoCards = [
    { label: "Venue Type", value: vendor.categoryDetails.venue_type, icon: "building" },
    { label: "Capacity", value: `${vendor.categoryDetails.capacity_min} - ${vendor.categoryDetails.capacity_max} Guests`, icon: "users" },
    { label: "Parking Slots", value: `${vendor.categoryDetails.parking_slots} Vehicles`, icon: "parking" },
    { label: "Catering", value: `${vendor.categoryDetails.catering_policy}`, icon: "utensils" },
  ]

  // if (!vendor) return <Navigate to="/" replace />;

  const handleBookNow = (formData) => {
    console.log("Venue booking submitted:", { vendorId: vendor.id, ...formData });
  };
    let breadcrumbLabel = "Wedding Venues";


  return (
    <div className="vp-page">
      <Navbar breadcrumbLabel={breadcrumbLabel} breadcrumbHref="/venue" />

      <main className="vp-page__main">
        <ImageGallery
          images={venueDetails.images?.map(img => img.image_url) || []}
          vendorName={venueDetails.name}
        />

        <div className="vp-page__columns">
          <div className="vp-page__main-col">
            <VendorInfoHeader
              tags={vendor.tags}
              name={vendor.name}
              location={vendor.location}
              rating={vendor.rating}
              reviewCount={vendor.reviewCount}
            />
            <InfoCardsGrid cards={infoCards} />
            <AboutSection vendorName={vendor.name} about={vendor.about} />
            <AmenitiesSection amenities={vendor.amenities} />
          </div>

          <div className="vp-page__side-col">
            <div className="vp-page__side-col-sticky">
              <BookingSidebar />
            </div>
          </div>
        </div>

        <div className="vp-page__full-width">
          <PricingSection pricing={{ price_min: vendor.price_min, price_max: vendor.price_max }} />
          <ReviewsSection reviews={vendor.reviews} />
          <FAQSection faqs={vendor.faqs} />
        </div>
      </main>

      <Footer />
    </div>
  );
}