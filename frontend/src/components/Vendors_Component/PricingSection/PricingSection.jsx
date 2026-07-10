// PricingSection.jsx
import "./PricingSection.css";

export default function PricingSection({ pricing }) {
  if (!pricing) return null;

  return (
    <section className="vp-pricing">
      <div className="vp-pricing__left">
        <p className="vp-pricing__label">{pricing.rangeLabel}</p>
        <p className="vp-pricing__range">{pricing.range}</p>
        {pricing.note && <p className="vp-pricing__note">{pricing.note}</p>}
      </div>

      <div className="vp-pricing__right">
        <div className="vp-pricing__menu-card">
          <p className="vp-pricing__menu-label">Sample Menu Items</p>
          <div className="vp-pricing__menu-grid">
            {pricing.sampleMenu.map(([item, tag], i) => (
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