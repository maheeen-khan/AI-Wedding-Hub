import "./Pending_Approval_Table.css"

/**
 * PendingApprovalsTable
 *
 * Props:
 *   vendors  {Array}   array of vendor objects:
 *     { id, icon, name, category, location, date }
 *   onApprove(id)  callback when approve clicked
 *   onReject(id)   callback when reject clicked
 *   onViewAll()    callback / href for "View All Requests"
 */
export default function PendingApprovalsTable({
  vendors = [],
  onApprove,
  onReject,
  onViewAll,
}) {
  return (
    <section className="pat-card">
      {/* Header */}
      <div className="pat-header">
        <div>
          <h2 className="pat-header__title">Pending Vendor Approvals</h2>
          <p className="pat-header__sub">Vendors waiting for admin review</p>
        </div>
        <button className="pat-header__view-all" onClick={onViewAll}>
          View All Requests →
        </button>
      </div>

      {/* Scrollable table wrapper */}
      <div className="pat-scroll">
        <table className="pat-table">
          <thead>
            <tr>
              <th>Vendor Name</th>
              <th>Category</th>
              <th>Location</th>
              <th>Registered Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {vendors.length === 0 ? (
              <tr>
                <td colSpan={5} className="pat-empty">No pending approvals</td>
              </tr>
            ) : (
              vendors.map((v) => (
                <tr key={v.id}>
                  <td className="pat-vendor-name">
                    {v.icon && <span className="pat-vendor-name__icon">{v.icon}</span>}
                    {v.name}
                  </td>
                  <td>{v.category}</td>
                  <td>{v.location}</td>
                  <td>{v.date}</td>
                  <td className="pat-actions">
                    <button
                      className="pat-btn pat-btn--approve"
                      title="Approve"
                      onClick={() => onApprove && onApprove(v.id)}
                    >
                      ✓
                    </button>
                    <button
                      className="pat-btn pat-btn--reject"
                      title="Reject"
                      onClick={() => onReject && onReject(v.id)}
                    >
                      ✕
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
