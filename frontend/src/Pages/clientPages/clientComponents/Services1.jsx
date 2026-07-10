import React from "react";
import { Link } from "react-router-dom";
import Venues from "../../../assets/Venues.png";
import Catering from "../../../assets/Catering.png";
import Bridal from "../../../assets/Bridal.png";
import Car from "../../../assets/CarRental.png";
import Decor from "../../../assets/Decor.png";
import Henna from "../../../assets/Henna.png";
import card from "../../../assets/card.png";
import Photography from "../../../assets/Photography.png";
import Divider from "../../../assets/Divider.png";
import "../LandingPage/LandingPage.css";

const services = [
  { id: 1, title: "Wedding Venues", subtitle: "Banquet Halls & Outdoor Spaces", image: Venues, path: "/venue" },
  { id: 2, title: "Catering", subtitle: "Traditional & Fusion Menus", image: Catering, path: "/catering" },
  { id: 3, title: "Photography", subtitle: "Capturing Lifelong Memories", image: Photography, path: "/photography" },
  { id: 4, title: "Décor", subtitle: "Floral & Thematic Designs", image: Decor, path: "/decor" },
  { id: 5, title: "Bridal Makeup", subtitle: "Professional Artists & Stylists", image: Bridal, path: "/makeup" },
  { id: 6, title: "Car Rental", subtitle: "Luxury Sedans & Vintage Cars", image: Car, path: "/car-rental" },
  { id: 7, title: "Henna Artists", subtitle: "Intricate Bridal Designs", image: Henna, path: "/henna" },
  { id: 8, title: "Stationery", subtitle: "Elegant Invitations & More", image: card, path: "/stationery" },
];

const Services1 = () => {
  return (
    <section className="services-section mt-3 text-center">
      <h1 className="section-title">Find Every Wedding Service</h1>
      <img src={Divider} alt="divider" width={300} className="mb-5" />
      <div className="services-grid" style={{ textAlign: "left" }}>
        {services.map((service) => (
          <Link
            to={service.path}
            key={service.id}
            className="service-card"
            style={{ textDecoration: "none" }}
          >
            <img src={service.image} alt={service.title} className="service-img" />
            <div className="service-overlay">
              <h2 className="service-name">{service.title}</h2>
              <p className="service-sub">{service.subtitle}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Services1;