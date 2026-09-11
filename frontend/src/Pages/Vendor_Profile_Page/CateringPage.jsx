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
import AddonsTable from "../../components/Vendors_Component/AddonsTable/AddonsTable";
import { cateringData } from "./data/cateringData";
import "./tokens.css";
import "./PageLayout.css";
import { CateringDetailPage } from '../../api/VendorDetailPages/VendorDetailPage.jsx';
import AmenitiesSection from "../../components/Vendors_Component/AmenitiesSection/AmenitiesSection";
/** Route: /vendor/catering/:id */
export default function CateringPage() {
  const { id } = useParams();
   const [cateringDetails, setCateringDetails] = useState(null);
  
    useEffect(() => {
      const fetchCateringDetails = async () => {
        try {
          const details = await CateringDetailPage(id);
          console.log("API response:", details);
          console.log("API data:", details.data);
          console.log("API images:", details.data?.images);
  
  
          setCateringDetails(details.data);
        } catch (error) {
          console.error("Error fetching catering details:", error);
        }
      };
  
      fetchCateringDetails();
    }, [id]);

    console.log("Catering Details:", cateringDetails?.categoryDetails);
  
    if (!cateringDetails) {
      return <p>Loading...</p>;
    }
  
  const vendor = cateringDetails;

  const infoCards = [
  {
    label: "Pax Range",
    value: `${vendor.categoryDetails?.min_pax || 0} Person`,
    icon: "users",
  },
  {
    label: "Service Type",
    value: vendor.categoryDetails?.service_type || "N/A",
    icon: "utensils",
  },
  {
    label: "Buffet/Live",
    value: vendor.categoryDetails?.buffet_live || "N/A",
    icon: "sparkles",
  },
  {
    label: "Staffing",
    value: vendor.categoryDetails?.staffing_notice || "N/A",
    icon: "clock",
  },
];


  const handleBookNow = (formData) => {
    console.log("Catering booking submitted:", { vendorId: vendor.id, ...formData });
  };

  return (
    <div className="vp-page">
      <Navbar breadcrumbLabel={vendor.breadcrumbLabel} breadcrumbHref="/vendors/catering" />

      <main className="vp-page__main">
        <ImageGallery images={vendor.images?.map(img => img.image_url) || []} vendorName={vendor.name} />

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
              <BookingSidebar
                
              />
            </div>
          </div>
        </div>

        <div className="vp-page__full-width">
          <MenuPackagesTable packages={vendor.categoryDetails.packages} />
          <AddonsTable
            title="Event Add-ons"
            columns={["Add-on", "Price"]}
            rows={vendor.categoryDetails.addons?.map((item) => [item.addon_name, item.price]) || []}
          />
          <ReviewsSection title="Guest Experiences" reviews={vendor.reviews} />
          <FAQSection faqs={vendor.faqs} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
