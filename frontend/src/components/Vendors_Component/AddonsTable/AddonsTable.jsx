import "./AddonsTable.css";

/**
 * Generic 3-column row table. Reused for:
 *  - Catering "Event Add-ons" (Add-on | Detail | Price)
 *  - Car Rental "Event Packages" (Package Name | Cars | Hours | Price)
 * rows: [{ col1, col2, col3, col4? }]
 * columns: array of header labels (3 or 4 columns supported)
 */
export default function AddonsTable({ title, columns = [], rows = [] }) {
  const colCount = columns.length;

  return (
    <section className="vp-addons">
      <h2 className="vp-addons__title">{title}</h2>
      <div className="vp-addons__table">
        <div className={`vp-addons__head vp-addons__row--cols-${colCount}`}>
          {columns.map((col) => (
            <span key={col}>{col}</span>
          ))}
        </div>
        {rows.map((row, i) => (
          <div key={i} className={`vp-addons__row vp-addons__row--cols-${colCount}`}>
            {row.map((cell, j) => (
              <span key={j} className={j === 0 ? "vp-addons__cell-primary" : ""}>
                {cell}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
