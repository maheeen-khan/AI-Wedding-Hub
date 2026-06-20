import "./Cards.css";

/**
 * StatCard — reusable metric card
 *
 * Props:
 *   icon     {string}  emoji/icon shown top-right
 *   label    {string}  small ALL-CAPS label  e.g. "TOTAL VENDORS"
 *   value    {string|number}  big number      e.g. 200
 *   sub      {string}  optional third line   e.g. "+12% from last month"
 *   subType  {"positive"|"alert"|"neutral"}  controls sub colour
 *   urgent   {boolean} adds gold left-border accent
 */
export default function StatCard({
  icon,
  label,
  value,
  sub,
  subType = "neutral",
  urgent = false,
}) {
  return (
    <div className={`stat-card${urgent ? " stat-card--urgent" : ""}`}>
      {icon && <span className="stat-card__icon">{icon}</span>}
      <p className="stat-card__label">{label}</p>
      <p className="stat-card__value">{value}</p>
      {sub && (
        <p className={`stat-card__sub stat-card__sub--${subType}`}>{sub}</p>
      )}
    </div>
  );
}
