import React, { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import Navbar from "../../components/Vendors_Component/Navbar/Navbar";
import Footer from "../../components/Vendors_Component/footer/Footer";
import ImageGallery from "../../components/Vendors_Component/ImageGallery/ImageGallery";
import VendorInfoHeader from "../../components/Vendors_Component/VendorInfoHeader/VendorInfoHeader";
import InfoCardsGrid from "../../components/Vendors_Component/InfoCardsGrid/InfoCardsGrid";
import AboutSection from "../../components/Vendors_Component/AboutSection/AboutSection";
import BookingSidebar from "../../components/Vendors_Component/BookingSidebar/BookingSidebar";
import MenuPackagesTable from "../../components/Vendors_Component/MenuPackagesTable/MenuPackagesTable";
import EnhancementsList from "../../components/Vendors_Component/EnhancementsList/EnhancementsList";
import ImportantNotice from "../../components/Vendors_Component/ImportantNotice/ImportantNotice";
import ReviewsSection from "../../components/Vendors_Component/ReviewsSection/ReviewsSection";
import FAQSection from "../../components/Vendors_Component/FAQSection/FAQSection";
import PackageTiers from "../../components/Vendors_Component/PackageTiers/PackageTiers";
import { decorData } from "./data/decorData";
import "./tokens.css";
import "./PageLayout.css";
import { DecorDetailPage } from '../../api/VendorDetailPages/VendorDetailPage.jsx';
import AmenitiesSection from "../../components/Vendors_Component/AmenitiesSection/AmenitiesSection";

/** Route: /vendor/decor/:id */
export default function DecorPage() {
  const { id } = useParams();

  const [decorDetails, setDecorDetails] = useState(null);

  useEffect(() => {
    const fetchDecorDetails = async () => {
      try {
        const details = await DecorDetailPage(id);
        console.log("API response:", details);
        console.log("API data:", details.data);
        console.log("API images:", details.data?.images);
        setDecorDetails(details.data);
      } catch (error) {
        console.error("Error fetching decor details:", error);
      }
    };

    fetchDecorDetails();
  }, [id]);

  if (!decorDetails) {
    return <p>Loading...</p>;
  }

   const vendor = decorDetails;
const infoCards = [
    { label: "Decor Type", value: `${vendor.categoryDetails.decor_type || "N/A"}`, icon: "sparkles" },
    { label: "Setup Time", value: `${vendor.setup_time || "6-8 Hours"}`, icon: "clock" },
    { label: "Style", value: `${vendor.categoryDetails.theme || "Modern & Traditional"}`, icon: "palette" },
    
  ];

  const  packageTiers =  {
    title: "Packages",
    tiers: [
      {
        name: "Basic",
        price: "PKR 85,000",
        features: ["Stage Florals", "Entrance Decor", "Centre Table Setup"],
      },
      {
        name: "Standard",
        price: "PKR 150,000",
        features: ["Premium Stage Setup", "LED Lighting", "Walkway Decor"],
        highlight: true,
        ctaLabel: "Select Standard",
      },
      {
        name: "Premium",
        price: "PKR 300,000",
        features: ["Royal Floral Installations", "Full Venue Lighting", "Custom Theme Design"],
        ctaLabel: "Select Premium",
      },
    ],
  }
  const handleBookNow = (formData) => {
    console.log("Decor booking submitted:", { vendorId: vendor.id, ...formData });
  };

  return (
    <div className="vp-page">
      <Navbar breadcrumbLabel={vendor.breadcrumbLabel} breadcrumbHref="/decor" />

      <main className="vp-page__main">
        <ImageGallery  images={vendor.images?.map(img => img.image_url) || []}  vendorName={vendor.name} />

        <div className="vp-page__columns">
          <div className="vp-page__main-col">
            <VendorInfoHeader
              tags={vendor.tags}
              name={vendor.name}
              location={vendor.location}
              rating={vendor.rating}
              reviewCount={vendor.review_count}
            />
            <InfoCardsGrid cards={infoCards} />
            <AboutSection vendorName={vendor.name} about={vendor.about} />

            <AmenitiesSection amenities={vendor.amenities} />
            
          </div>

          <div className="vp-page__side-col">
            <div className="vp-page__side-col-sticky">
              <BookingSidebar
              />
            </div>
          </div>
        </div>

        <div className="vp-page__full-width">
          <PackageTiers title={packageTiers.title} tiers={packageTiers.tiers} />
          <ReviewsSection title="What Couples Say" reviews={vendor.reviews} />
          <FAQSection faqs={vendor.faqs} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
