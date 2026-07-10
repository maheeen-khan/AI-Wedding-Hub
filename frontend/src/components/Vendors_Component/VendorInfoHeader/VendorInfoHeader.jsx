import { MapPin, Star, BadgeCheck } from "lucide-react";
import "./VendorInfoHeader.css";

export default function VendorInfoHeader({
  tags,
  name,
  location,
  rating,
  reviewCount,
}) {
  return (
    <div className="vp-info-header">
      <div className="vp-info-header__tags">
        {tags.map((tag, i) => (
          <span
            key={tag}
            className={
              i === 0
                ? "vp-info-header__tag vp-info-header__tag--primary"
                : "vp-info-header__tag vp-info-header__tag--verified"
            }
          >
            {i !== 0 && <BadgeCheck size={14} />}
            {tag}
          </span>
        ))}
      </div>

      <h1 className="vp-info-header__name">{name}</h1>

      <div className="vp-info-header__meta">
        <span className="vp-info-header__location">
          <MapPin size={15} />
          {location}
        </span>
        <span className="vp-info-header__rating">
          <Star size={15} className="vp-info-header__star" />
          {rating}
          <span className="vp-info-header__review-count">
            ({reviewCount} reviews)
          </span>
        </span>
      </div>
    </div>
  );
}
