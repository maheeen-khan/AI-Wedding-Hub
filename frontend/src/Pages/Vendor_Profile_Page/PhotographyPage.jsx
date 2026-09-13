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
import PortfolioGrid from "../../components/Vendors_Component/PortfolioGrid/PortfolioGrid"
import { photographyData } from "./data/photographyData";
import "./tokens.css";
import "./PageLayout.css";
import { PhotographyDetailPage } from '../../api/VendorDetailPages/VendorDetailPage.jsx';
import AmenitiesSection from "../../components/Vendors_Component/AmenitiesSection/AmenitiesSection";

/** Route: /vendor/photography/:id */
export default function PhotographyPage() {
  const { id } = useParams();
  
   const [photographyDetails, setPhotographyDetails] = useState(null);
    
      useEffect(() => {
        const fetchPhotographyDetails = async () => {
          try {
            const details = await PhotographyDetailPage(id);
            console.log("API response:", details);
            console.log("API data:", details.data);
            console.log("API images:", details.data?.images);
    
    
            setPhotographyDetails(details.data);
          } catch (error) {
            console.error("Error fetching photography details:", error);
          }
        };
    
        fetchPhotographyDetails();
      }, [id]);
  
      console.log("Photography Details:", photographyDetails?.categoryDetails);
    
      if (!photographyDetails) {
        return <p>Loading...</p>;
      }
    
    const vendor = photographyDetails;
  const infoCards = [
    { label: "Type", value: `${vendor.categoryDetails?.coverage_type || "N/A"}`, icon: "clock" },
    { label: "Equipment", value: `${vendor.categoryDetails?.equipment || "N/A"}`, icon: "camera" },
    { label: "Delivery", value: `${vendor.categoryDetails?.delivery_days || "N/A"} days`, icon: "truck" },
    { label: "Team size", value: `${vendor.categoryDetails?.team_size || "N/A"} professionals`, icon: "users" },
  ]

 const  packageTiers = {
    title: "Packages",
    tiers: [
      {
        name: "Mehndi Only",
        price: "PKR 85,000",
        features: ["1 Event (7 Hours)", "Photographers Only", "Digital High-Res Link"],
      },
      {
        name: "Nikkah + Valima",
        price: "PKR 150,000",
        features: ["2 Events", "Cinematic Highlights", "Premium Photo Book"],
        highlight: true,
        ctaLabel: "Select Standard",
      },
      {
        name: "The Full Journey",
        price: "PKR 250,000",
        features: ["3+ Events", "Bridal Shoot + Drone", "Luxury Boxed Album"],
        ctaLabel: "Select Premium",
      },
    ],
  }

  const handleBookNow = (formData) => {
    console.log("Photography booking submitted:", { vendorId: vendor.id, ...formData });
  };

  return (
    <div className="vp-page">
      <Navbar breadcrumbLabel={vendor.breadcrumbLabel} breadcrumbHref="/photography" />

      <main className="vp-page__main">
        <ImageGallery images={vendor.images?.map(img => img.image_url) || []} vendorName={vendor.name} />

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
          <PackageTiers
            title={packageTiers.title}
            tiers={packageTiers.tiers}
          />
          <PortfolioGrid images={vendor.images.map(
            img => ({
              src: img.image_url,
              alt: img.alt_text || "Portfolio Image",
            })
          )} />
          <ReviewsSection title="What Couples Say" reviews={vendor.reviews} />
          <FAQSection faqs={vendor.faqs} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
