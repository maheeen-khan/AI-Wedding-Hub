import "./Directory_Table.css";

/**
 * VendorTable — Manage Vendors page table
 *
 * Props:
 *   vendors  {Array}  array of vendor objects:
 *     { id, image, name, category, area, registeredDate, totalBookings, status }
 *   status values: "Approved" | "Pending" | "Rejected"
 *   onView(id)     open vendor detail
 *   onSearch(val)  search input change
 *   searchValue    controlled search input value
 */
export default function Directory_Table({
  vendors = [],
  onView,
  onSearch,
  searchValue = "",
}) {
  return (
    <section className="vt-card">
      {/* Header row */}
      <div className="vt-header">
        <h2 className="vt-header__title">Vendor Directory</h2>
        <div className="vt-header__controls">
          <div className="vt-search">
            <span className="vt-search__icon">🔍</span>
            <input
              className="vt-search__input"
              type="text"
              placeholder="Search vendors..."
              value={searchValue}
              onChange={(e) => onSearch && onSearch(e.target.value)}
            />
          </div>
          <button className="vt-filter-btn">⚙ Filter</button>
        </div>
      </div>

      {/* Scrollable table */}
      <div className="vt-scroll">
        <table className="vt-table">
          <thead>
            <tr>
              <th>Vendor Name</th>
              <th>Category</th>
              <th>Area</th>
              <th>Registered Date</th>
              <th>Total Bookings</th>
              <th>Status</th>
              <th>Action.</th>
            </tr>
          </thead>
          <tbody>
            {vendors.length === 0 ? (
              <tr>
                <td colSpan={7} className="vt-empty">No vendors found</td>
              </tr>
            ) : (
              vendors.map((v) => (
                <tr key={v.id}>
                  <td className="vt-name">
                    <div className="vt-name__thumb">
                      {v.image
                        ? <img src={v.image} alt={v.name} className="vt-name__img" />
                        : <span className="vt-name__fallback">{v.name?.[0]}</span>
                      }
                    </div>
                    <span className="vt-name__text">{v.name}</span>
                  </td>
                  <td>
                    <span className={`vt-category vt-category--${v.category?.toLowerCase().replace(/\s+/g, "-")}`}>
                      {v.category}
                    </span>
                  </td>
                  <td className="vt-area">{v.area}</td>
                  <td className="vt-date">{v.registeredDate}</td>
                  <td className="vt-bookings">{v.totalBookings}</td>
                  <td>
                    <span className={`vt-status vt-status--${v.status?.toLowerCase()}`}>
                      {v.status}
                    </span>
                  </td>
                  <td>
                    <button
                      className="vt-view-btn"
                      title="View"
                      onClick={() => onView && onView(v.id)}
                    >
                      👁
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination stub */}
      <div className="vt-pagination">
        <span className="vt-pagination__info">
          Showing 1 to {vendors.length} of {vendors.length} vendors
        </span>
        <div className="vt-pagination__pages">
          <button className="vt-pg-btn" disabled>‹</button>
          <button className="vt-pg-btn vt-pg-btn--active">1</button>
          <button className="vt-pg-btn">2</button>
          <button className="vt-pg-btn">3</button>
          <button className="vt-pg-btn">›</button>
        </div>
      </div>
    </section>
  );
}
