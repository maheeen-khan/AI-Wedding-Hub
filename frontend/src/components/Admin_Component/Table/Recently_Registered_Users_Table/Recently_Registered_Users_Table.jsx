import "./Recently_Registered_Users_Table.css";

/**
 * RecentUsersTable
 *
 * Props:
 *   users  {Array}  array of user objects:
 *     { initials, name, email, role, registered, status }
 *   role values: "COUPLE" | "VENDOR"
 *   status values: "Active" | "Inactive" | "Pending"
 */
export default function Recently_Registered_Users_Table({ users = [] }) {
  return (
    <section className="rut-card">
      {/* Header */}
      <div className="rut-header">
        <h2 className="rut-header__title">Recently Registered Users</h2>
        <p className="rut-header__sub">Latest users who joined the platform</p>
      </div>

      {/* Scrollable table wrapper */}
      <div className="rut-scroll">
        <table className="rut-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Registered Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan={5} className="rut-empty">No users found</td>
              </tr>
            ) : (
              users.map((u, i) => (
                <tr key={u.email || i}>
                  <td className="rut-user">
                    <span className="rut-user__avatar">{u.initials}</span>
                    <span className="rut-user__name">{u.name}</span>
                  </td>
                  <td className="rut-email">{u.email}</td>
                  <td>
                    <span className={`rut-role rut-role--${u.role?.toLowerCase()}`}>
                      {u.role}
                    </span>
                  </td>
                  <td className="rut-date">{u.registered}</td>
                  <td>
                    <span className={`rut-status rut-status--${u.status?.toLowerCase()}`}>
                      {u.status}
                    </span>
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
