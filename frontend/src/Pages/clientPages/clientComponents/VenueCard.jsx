import React from "react";
import { Link } from "react-router-dom";
import '../VenuePage/VenuePage.css';
const VenueCard = ({ venue, recommended = false }) => {
  return (
    <div className="venue-card">
      <div className="venue-img-wrap">
        <img src={venue.image} alt={venue.name} className="venue-img" />
        {recommended && (
          <span className="recommended-badge">Recommended</span>
        )}
      </div>
      <div className="venue-body">
        <h4 className="venue-name">{venue.name}</h4>
        <p className="venue-location text-muted"><i class="bi bi-geo-alt"></i> {venue.location}</p>
        <div className="venue-meta">
          <div className="meta-row">
            <span className="meta-label">Capacity</span>
            <span className="meta-value">{venue.capacity}</span>
          </div>
          {/* <div className="meta-row">
            <span className="meta-label">Price</span>
            <span className="meta-value">{venue.price}</span>
          </div> */}
          <div className="meta-row">
            <span className="meta-label">Starting at</span>
            <span className="meta-value meta-starting">{venue.starting}</span>
          </div>
        </div>
        <div className="venue-rating">
          <span className="star">&#9733;</span>
          <span className="rating-val fw-bold">{venue.rating}</span>
        </div>
        <Link to={`/Vendor_Profile_Page/venue/${venue.id}`} className="view-profile-btn w-100 ">
          VIEW PROFILE
        </Link>
      </div>
    </div>
  );
}

export default VenueCard;