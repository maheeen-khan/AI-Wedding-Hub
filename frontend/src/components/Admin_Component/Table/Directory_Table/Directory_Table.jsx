import "./Directory_Table.css";

/**
 * DirectoryTable — Reusable table for Vendors, Users, or any data
 *
 * Props:
 *   title          {string}   Table heading (e.g. "Vendor Directory", "User Directory")
 *   searchPlaceholder {string}  Search input placeholder
 *   columns        {Array}    Column definitions:
 *     [{ key: string, label: string, width?: string, render?: fn }]
 *   data           {Array}    Array of data objects (vendors, users, etc.)
 *   onView(id)     {fn}       callback when view button clicked
 *   onSearch(val)  {fn}       callback for search input change
 *   searchValue    {string}   controlled search input value
 *   emptyMessage   {string}   Message when no data
 *   showViewBtn    {boolean}  Show view action button (default: true)
 *   paginationInfo {string}   Custom pagination text (optional)
 */
export default function Directory_Table({
  title = "Directory",
  searchPlaceholder = "Search...",
  columns = [],
  data = [],
  onView,
  onSearch,
  searchValue = "",
  emptyMessage = "No items found",
  showViewBtn = true,
  paginationInfo,
}) {
  return (
    <section className="dt-card">
      {/* Header row */}
      <div className="dt-header">
        <h2 className="dt-header__title">{title}</h2>
        <div className="dt-header__controls">
          <div className="dt-search">
            <span className="dt-search__icon">🔍</span>
            <input
              className="dt-search__input"
              type="text"
              placeholder={searchPlaceholder}
              value={searchValue}
              onChange={(e) => onSearch && onSearch(e.target.value)}
            />
          </div>
          <button className="dt-filter-btn">⚙ Filter</button>
        </div>
      </div>

      {/* Table */}
      <div className="dt-scroll">
        <table className="dt-table">
          <thead>
            <tr>
              {columns.map((col) => (
                <th key={col.key} style={col.width ? { width: col.width } : {}}>
                  {col.label}
                </th>
              ))}
              {showViewBtn && <th style={{ width: "36px" }}>Action</th>}
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan={columns.length + (showViewBtn ? 1 : 0)} className="dt-empty">
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              data.map((item) => (
                <tr key={item.id}>
                  {columns.map((col) => (
                    <td key={col.key}>
                      {col.render ? col.render(item) : item[col.key]}
                    </td>
                  ))}
                  {showViewBtn && (
                    <td>
                      <button
                        className="dt-view-btn"
                        title="View"
                        onClick={() => onView && onView(item.id)}
                      >
                        👁
                      </button>
                    </td>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="dt-pagination">
        <span className="dt-pagination__info">
          {paginationInfo || `Showing 1 to ${data.length} of ${data.length} entries`}
        </span>
        <div className="dt-pagination__pages">
          <button className="dt-pg-btn" disabled>‹</button>
          <button className="dt-pg-btn dt-pg-btn--active">1</button>
          <button className="dt-pg-btn">2</button>
          <button className="dt-pg-btn">3</button>
          <button className="dt-pg-btn">›</button>
        </div>
      </div>
    </section>
  );
}