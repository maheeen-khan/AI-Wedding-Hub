import React, { useRef } from "react";
import Venues from "../../../assets/Venues.png";
import Catering from "../../../assets/Catering.png";
import Photography from "../../../assets/Photography.png";
import Decor from "../../../assets/Decor.png";
import "../LandingPage/LandingPage.css";
const deals = [
  {
    id: 1,
    name: "Palazzo Banquets",
    category: "Clifton Venue",
    discount: "25% OFF",
    image: Venues,
  },
  {
    id: 2,
    name: "Flavors of Karachi",
    category: "Gourmet Catering",
    discount: "30% OFF",
    image: Catering,
  },
  {
    id: 3,
    name: "Aum Studios",
    category: "Premium Photography",
    discount: "20% OFF",
    image: Photography,
  },
  {
    id: 4,
    name: "Royal Domes",
    category: "Stage & Hall Décor",
    discount: "35% OFF",
    image: Decor,
  },
];

const PopularDeals1 = () => {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 280, behavior: "smooth" });
    }
  };

  return (
    <section className="deals-section mt-5 mb-3">
      <div className="deals-header pt-4 pb-3">
        <div className='mx-auto text-center px-2'>
          <h2 className="deals-title">Popular Deals</h2>
          <p className="deals-sub">Limited time offers from our top partners</p>
        </div>
        {/* <div className="deals-nav">
          <button className="nav-btn" onClick={() => scroll(-1)} aria-label="Previous">&#8592;</button>
          <button className="nav-btn" onClick={() => scroll(1)} aria-label="Next">&#8594;</button>
        </div> */}
      </div>

      <div className="deals-scroll px-3" ref={scrollRef}>
        {deals.map((deal) => (
          <div key={deal.id} className="deal-card mb-4">
            <div className="deal-img-wrap">
              <img src={deal.image} alt={deal.name} className="deal-img" />
              <span className="deal-badge">{deal.discount}</span>
            </div>
            <div className="deal-info">
              <h5 className="deal-name">{deal.name}</h5>
              <p className="deal-category">{deal.category}</p>
              <button className="view-deal-btn">View Deal</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PopularDeals1;