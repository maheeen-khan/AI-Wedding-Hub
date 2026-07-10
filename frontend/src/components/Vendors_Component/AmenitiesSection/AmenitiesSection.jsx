import { Check } from "lucide-react";
import "./AmenitiesSection.css";

export default function AmenitiesSection({ title = "Available Amenities", amenities = [] }) {
  return (
    <section className="vp-amenities">
      <h2 className="vp-amenities__title">{title}</h2>
      <div className="vp-amenities__list">
        {amenities.map((item) => (
          <span key={item} className="vp-amenities__chip">
            <Check size={14} />
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
