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
import FleetListing from "../../components/Vendors_Component/FleetListing/FleetListing";
import AddonsTable from "../../components/Vendors_Component/AddonsTable/AddonsTable";
import AmenitiesSection from "../../components/Vendors_Component/AmenitiesSection/AmenitiesSection"
import {carRentalData} from "./data/carRentalData"
import "./tokens.css";
import "./PageLayout.css";


/** Route: /vendor/car-rental/:id */
export default function CarRentalPage() {
  const { id } = useParams();
  const vendor = id && id !== carRentalData.id ? null : carRentalData;

  if (!vendor) return <Navigate to="/" replace />;

  const handleBookNow = (formData) => {
    console.log("Car rental booking submitted:", { vendorId: vendor.id, ...formData });
  };

  return (
    <div className="vp-page">
      <Navbar breadcrumbLabel={vendor.breadcrumbLabel} breadcrumbHref="/vendors/car-rental" />

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
            <FleetListing cars={vendor.fleet} />
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
          <AddonsTable
            title="Event Packages"
            columns={vendor.eventPackagesColumns}
            rows={vendor.eventPackages}
          />
          <AmenitiesSection title="Service Coverage" amenities={vendor.serviceAreas} />
          <ReviewsSection title="What Couples Say" reviews={vendor.reviews} />
          <FAQSection faqs={vendor.faqs} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
