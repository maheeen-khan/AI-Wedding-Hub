import React from "react";
import "./Table.css";

/**
 * Reusable table — pass columns config + rows.
 * Each column can have a custom render function.
 */
export default function Table({ title, viewAll, search, columns, rows }) {
  const safeRows = Array.isArray(rows) ? rows : [];

  return (
    <div className="table-card">
      <div className="table-header">
        <h3>{title}</h3>
        {viewAll && (<a href="#" className="view-all" onClick={(e) => { e.preventDefault(); onViewAll?.(); }}>View All</a> )}
        {search && (
          <input type="text" className="table-search" placeholder="Search bookings..." />
        )}
      </div>
      <div className="table-scroll">
        <table className="data-table">
          <thead>
            <tr>
              {columns.map((col) => (
                <th key={col.key}>{col.header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {safeRows.length === 0 ? (
              <tr>
                <td colSpan={columns.length} style={{ textAlign: "center", padding: "20px", color: "#a8938c" }}>
                  No data to show
                </td>
              </tr>
            ) : (
              safeRows.map((row, i) => (
                <tr key={i}>
                  {columns.map((col) => (
                    <td key={col.key}>{col.render ? col.render(row) : row[col.key]}</td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}