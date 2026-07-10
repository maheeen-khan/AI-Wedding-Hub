import { Check } from "lucide-react";
import "./PackageTiers.css";

/**
 * Reusable tiered package cards — used by Photography ("Mehndi Only" /
 * "Nikkah + Walima" / "The Full Journey") and Decor ("Basic" / "Standard" /
 * "Premium"). Each tier: { name, price, features: string[], highlight?: bool,
 * ctaLabel? }
 */
export default function PackageTiers({ title = "Packages", tiers = [] }) {
  return (
    <section className="vp-tiers">
      {title && <h2 className="vp-tiers__title">{title}</h2>}
      <div className="vp-tiers__grid">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={
              tier.highlight ? "vp-tiers__card vp-tiers__card--highlight" : "vp-tiers__card"
            }
          >
            {tier.highlight && <span className="vp-tiers__badge">Most Popular</span>}
            <p className="vp-tiers__name">{tier.name}</p>
            <p className="vp-tiers__price">{tier.price}</p>

            <ul className="vp-tiers__features">
              {tier.features.map((f) => (
                <li key={f}>
                  <Check size={14} />
                  {f}
                </li>
              ))}
            </ul>

            <button
              className={
                tier.highlight
                  ? "vp-tiers__cta vp-tiers__cta--highlight"
                  : "vp-tiers__cta"
              }
            >
              {tier.ctaLabel || `Select ${tier.name}`}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
