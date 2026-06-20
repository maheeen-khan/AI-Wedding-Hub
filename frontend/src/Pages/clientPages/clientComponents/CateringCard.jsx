import React from "react";
import '../CateringPage/CateringPage.css';
const CateringCard = ({ caterer, recommended = false }) => {
  return (
    <div className="food-card">
      <div className="venue-img-wrap">
        <img src={caterer.image} alt={caterer.name} className="venue-img" />
        {recommended && (
          <span className="recommended-badge">Recommended</span>
        )}
      </div>
      <div className="venue-body">
        
    
        <div className="venue-meta">
          <div className="meta-row">
            <h4 className="venue-name">{caterer.name}</h4>
                
             <div className="venue-rating pt-3">
          <span className="star">&#9733;</span>
          <span className="rating-val fw-bold">{caterer.rating}</span>
          
        </div>
        
          </div>
          <p className="venue-location text-muted"><i class="bi bi-geo-alt"></i> {caterer.location}</p>
          {/* <div className="meta-row">
            <span className="meta-label">Price</span>
            <span className="meta-value">{caterer.starting}</span>
          </div> */}
          {/* <div className="meta-row"> */}
            <div className="food-card-footer d-flex  justify-content-between gap-5 align-items-center px-2">
          <div className="price-section">
            <p className="label">Starting from</p>
            <h6>{caterer.starting}</h6>
          </div>

          <button className="profile-btn">
            View Profile
          </button>
        </div>
          </div>
        {/* </div> */}
     
        
      </div>
    </div>
  );
}

export default CateringCard;