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

/** Route: /Vendor_Profile_Page/venue/:id */
export default function VenuePage() {
  const { id } = useParams();
  const vendor = venueData.id === Number(id) ? venueData : null;

  if (!vendor) return <Navigate to="/" replace />;

  const handleBookNow = (formData) => {
    console.log("Venue booking submitted:", { vendorId: vendor.id, ...formData });
  };

  return (
    <div className="vp-page">
      <Navbar breadcrumbLabel={vendor.breadcrumbLabel} breadcrumbHref="/vendors/venue" />

      <main className="vp-page__main">
        <ImageGallery images={vendor.images} vendorName={vendor.name} />

        <div className="vp-page__columns">
          <div className="vp-page__main-col">
            <VendorInfoHeader
              tags={vendor.tags}
              name={vendor.name}
              location={vendor.location}
              rating={vendor.rating}
              reviewCount={vendor.reviewCount}
            />
            <InfoCardsGrid cards={vendor.infoCards} />
            <AboutSection vendorName={vendor.name} about={vendor.about} />
            <AmenitiesSection amenities={vendor.amenities} />
          </div>

          <div className="vp-page__side-col">
            <div className="vp-page__side-col-sticky">
              <BookingSidebar
                booking={vendor.booking}
                config={vendor.bookingConfig}
                onBookNow={handleBookNow}
              />
            </div>
          </div>
        </div>

        <div className="vp-page__full-width">
          <PricingSection pricing={vendor.pricing} />
          <ReviewsSection reviews={vendor.reviews} />
          <FAQSection faqs={vendor.faqs} />
        </div>
      </main>

      <Footer />
    </div>
  );
}