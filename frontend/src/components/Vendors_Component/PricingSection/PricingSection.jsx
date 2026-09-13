// PricingSection.jsx
import "./PricingSection.css";

const sampleMenu = [
      ["Chicken Biryani", "Premium Rice"],
      ["Seekh Kabab", "Live BBQ"],
      ["Shahi Kheer", "Dessert"],
    ]

export default function PricingSection({ pricing }) {
  if (!pricing) return null;

  return (
    <section className="vp-pricing">
      <div className="vp-pricing__left">
        <p className="vp-pricing__label">{'PRICE PER HEAD RANGE'}</p>
        <p className="vp-pricing__range">PKR {pricing.price_min} - {pricing.price_max}</p>
        <p className="vp-pricing__note">Prices vary based on menu selection and guest count</p>
      </div>

      <div className="vp-pricing__right">
        <div className="vp-pricing__menu-card">
          <p className="vp-pricing__menu-label">Sample Menu Items</p>
          <div className="vp-pricing__menu-grid">
            {sampleMenu.map(([item, tag], i) => (
              <div key={i} className="vp-pricing__menu-item">
                <p className="vp-pricing__menu-item-name">{item}</p>
                <p className="vp-pricing__menu-item-tag">{tag}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}