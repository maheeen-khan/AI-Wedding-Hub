// MenuPackagesTable.jsx
import "./MenuPackagesTable.css";

/**
 * Catering "Menu Packages" — row-based table: Package | Details | Price.
 * packages: [{ name, profile, price, highlight?, recommended? }]
 */
export default function MenuPackagesTable({ title = "Menu Packages", packages = [] }) {
  return (
    <section className="vp-menu-table">
      <div className="vp-menu-table__header">
        <h2 className="vp-menu-table__title">{title}</h2>
      </div>

      <div className="vp-menu-table__table">
        <div className="vp-menu-table__head">
          <span>Package</span>
          <span>Details</span>
          <span className="vp-menu-table__head-price">Price</span>
        </div>

        {packages.map((pkg) => (
          <div
            key={pkg.name}
            className={
              pkg.highlight
                ? "vp-menu-table__row vp-menu-table__row--highlight"
                : "vp-menu-table__row"
            }
          >
            <span className="vp-menu-table__name-cell">
              <span className="vp-menu-table__name">{pkg.name}</span>
              {pkg.recommended && (
                <span className="vp-menu-table__badge">Recommended</span>
              )}
            </span>
            <span className="vp-menu-table__profile">{pkg.profile}</span>
            <span className="vp-menu-table__price">{pkg.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
}