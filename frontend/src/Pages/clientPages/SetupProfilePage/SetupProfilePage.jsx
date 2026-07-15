import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SetupProfilePage.css";

// ---- Static data (kept in the parent/page component per project convention) ----
const EVENT_OPTIONS = [
  { id: "mehndi", label: "Mehndi", icon: "bi-flower1" },
  { id: "dholki", label: "Dholki", icon: "bi-music-note-beamed" },
  { id: "barat", label: "Barat", icon: "bi-flower2" },
  { id: "valima", label: "Valima", icon: "bi-cup-hot-fill" },
];

const STEPS = [
  { id: 1, title: "Who is getting married?" },
  { id: 2, title: "Wedding Date and Location" },
  { id: 3, title: "Which events are you planning?" },
  { id: 4, title: "Budget and Guests" },
];

export default function SetupProfilePage() {
  const [form, setForm] = useState({
    brideName: "",
    groomName: "",
    date: "",
    city: "Karachi",
    area: "",
    budget: "",
    guestCount: "",
  });

  const navigate = useNavigate();

  // Barat & Valima pre-selected to match default expectations for most weddings
  const [selectedEvents, setSelectedEvents] = useState(["barat", "valima"]);

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const toggleEvent = (id) => {
    setSelectedEvents((prev) =>
      prev.includes(id) ? prev.filter((e) => e !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { ...form, events: selectedEvents };
    console.log("Wedding setup submitted:", payload);
    // TODO: wire up to backend / routing to dashboard
    setTimeout(()=>{
        navigate('/venue')
    },2000);
  };

  return (
    <div className="ww-setup-page">
      {/* Header */}
      <header className="ww-header">
        <div className="container ww-header-inner">
          <span className="ww-logo">WeddingHub</span>
          <div className="ww-user">
            <div className="ww-user-text">
              <span className="ww-user-name">Zainab Ahmed</span>
              <span className="ww-user-tag">PREMIUM MEMBER</span>
            </div>
            <div className="ww-avatar">
              <i className="bi bi-person-fill"></i>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="ww-main">
        <div className="container">
          <div className="ww-card">
            <div className="ww-card-header">
              <span className="ww-eyebrow">Let us get to know your wedding.</span>
              <h1 className="ww-title">Setup Your Dream Wedding</h1>
              <p className="ww-subtitle">
                Tell us the details and we will show you the best vendors for your big day.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Step 1 */}
              <section className="ww-step">
                <div className="ww-step-heading">
                  <span className="ww-step-number">{STEPS[0].id}</span>
                  <h2>{STEPS[0].title}</h2>
                </div>
                <div className="row g-3 ww-step-body">
                  <div className="col-12 col-md-6">
                    <label className="ww-label" htmlFor="brideName">Bride Name</label>
                    <input
                      id="brideName"
                      type="text"
                      className="ww-input"
                      placeholder="e.g. Fatima"
                      value={form.brideName}
                      onChange={handleChange("brideName")}
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <label className="ww-label" htmlFor="groomName">Groom Name</label>
                    <input
                      id="groomName"
                      type="text"
                      className="ww-input"
                      placeholder="e.g. Ali"
                      value={form.groomName}
                      onChange={handleChange("groomName")}
                    />
                  </div>
                </div>
              </section>

              {/* Step 2 */}
              <section className="ww-step">
                <div className="ww-step-heading">
                  <span className="ww-step-number">{STEPS[1].id}</span>
                  <h2>{STEPS[1].title}</h2>
                </div>
                <div className="row g-3 ww-step-body">
                  <div className="col-12 col-md-4">
                    <label className="ww-label" htmlFor="date">Date</label>
                    <input
                      id="date"
                      type="date"
                      className="ww-input"
                      placeholder="mm/dd/yyyy"
                      value={form.date}
                      onChange={handleChange("date")}
                    />
                  </div>
                  <div className="col-12 col-md-4">
                    <label className="ww-label" htmlFor="city">City</label>
                    <div className="ww-input-icon-wrap">
                      <input
                        id="city"
                        type="text"
                        className="ww-input"
                        // placeholder="Karachi"
                        value={form.city}
                        readOnly
                        title="Karachi City only"
                        onChange={handleChange("city")}
                      />
                      <i className="bi bi-geo-alt-fill ww-input-icon"></i>
                    </div>
                  </div>
                  <div className="col-12 col-md-4">
                    <label className="ww-label" htmlFor="area">Area</label>
                    <input
                      id="area"
                      type="text"
                      className="ww-input"
                      placeholder="e.g. DHA, Clifton"
                      value={form.area}
                      onChange={handleChange("area")}
                    />
                  </div>
                </div>
              </section>

              {/* Step 3 */}
              <section className="ww-step">
                <div className="ww-step-heading">
                  <span className="ww-step-number">{STEPS[2].id}</span>
                  <h2>{STEPS[2].title}</h2>
                </div>
                <div className="row g-3 ww-step-body">
                  {EVENT_OPTIONS.map((opt) => {
                    const isSelected = selectedEvents.includes(opt.id);
                    return (
                      <div className="col-6 col-md-3" key={opt.id}>
                        <button
                          type="button"
                          className={`ww-event-card ${isSelected ? "is-selected" : ""}`}
                          onClick={() => toggleEvent(opt.id)}
                          aria-pressed={isSelected}
                        >
                          <i className={`bi ${opt.icon} ww-event-icon`}></i>
                          <span className="ww-event-label">{opt.label}</span>
                        </button>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* Step 4 */}
              <section className="ww-step">
                <div className="ww-step-heading">
                  <span className="ww-step-number">{STEPS[3].id}</span>
                  <h2>{STEPS[3].title}</h2>
                </div>
                <div className="row g-3 ww-step-body">
                  <div className="col-12 col-md-6">
                    <label className="ww-label" htmlFor="budget">Total Budget (PKR)</label>
                    <div className="ww-input-prefix-wrap">
                      <span className="ww-input-prefix">Rs.</span>
                      <input
                        id="budget"
                        type="text"
                        className="ww-input ww-input-prefixed"
                        placeholder="5,000,000"
                        value={form.budget}
                        onChange={handleChange("budget")}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <label className="ww-label" htmlFor="guestCount">Expected Guest Count</label>
                    <input
                      id="guestCount"
                      type="number"
                      className="ww-input"
                      placeholder="500"
                      value={form.guestCount}
                      onChange={handleChange("guestCount")}
                    />
                  </div>
                </div>
              </section>

              <button type="submit" className="ww-submit-btn">
                Let&apos;s Start Planning
                <i className="bi bi-arrow-right"></i>
              </button>

              <p className="ww-form-footnote">
                You can change these details at any time in your dashboard.
              </p>
            </form>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="ww-footer">
        <div className="container ww-footer-inner">
          <span className="ww-footer-logo">WeddingHub</span>
          <span className="ww-footer-copy">
            &copy; 2024 WeddingWala. A legacy of love, powered by AI.
          </span>
          <div className="ww-footer-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#support">Support</a>
          </div>
        </div>
      </footer>

      {/* Floating action button */}
      <button type="button" className="ww-fab" aria-label="AI Assistant">
        <i className="bi bi-stars"></i>
      </button>
    </div>
  );
}