import React, { useMemo, useState } from "react";
import "./Invitation.css";
import FloralHeritageInvite from "./FloralHeritageInvite";

const invitationDesigns = [
  {
    id: "floral-heritage",
    name: "Floral Heritage",
    theme: "floral",
  },
  {
    id: "royal-geometric",
    name: "Royal Geometric",
    theme: "royal",
  },
  {
    id: "modern-minimal",
    name: "Modern Minimal",
    theme: "minimal",
  },
];

const eventTypeOptions = [
  { value: "barat", label: "Barat" },
  { value: "mehndi", label: "Mehndi" },
  { value: "walima", label: "Walima" },
  { value: "engagement", label: "Engagement" },
];

const initialGuests = [
  {
    id: 1,
    name: "M. Ali Siddiqui",
    relation: "Family",
    category: "all",
    phone: "923001234567",
    email: "ali.siddiqui@example.com",
    checked: true,
    sent: true,
    opened: true,
    rsvp: "YES",
  },
  {
    id: 2,
    name: "Sara Waqas",
    relation: "Friend",
    category: "barat",
    phone: "923011234567",
    email: "sara.waqas@example.com",
    checked: true,
    sent: true,
    opened: false,
    rsvp: "NO",
  },
  {
    id: 3,
    name: "Uncle Javed",
    relation: "Family",
    category: "mehndi",
    phone: "923021234567",
    email: "javed.uncle@example.com",
    checked: true,
    sent: true,
    opened: true,
    rsvp: null,
  },
  {
    id: 4,
    name: "Fatima Noor",
    relation: "Friend",
    category: "all",
    phone: "923031234567",
    email: "fatima.noor@example.com",
    checked: true,
    sent: true,
    opened: false,
    rsvp: null,
  },
  {
    id: 5,
    name: "Zahid Hussain",
    relation: "Family",
    category: "barat",
    phone: "923041234567",
    email: "zahid.hussain@example.com",
    checked: true,
    sent: true,
    opened: true,
    rsvp: "YES",
  },
  {
    id: 6,
    name: "Maya Sheikh",
    relation: "Friend",
    category: "mehndi",
    phone: "923051234567",
    email: "maya.sheikh@example.com",
    checked: true,
    sent: true,
    opened: false,
    rsvp: "NO",
  },
  {
    id: 7,
    name: "Farooq Ahmed",
    relation: "Family",
    category: "all",
    phone: "923061234567",
    email: "farooq.ahmed@example.com",
    checked: true,
    sent: true,
    opened: true,
    rsvp: null,
  },
  {
    id: 8,
    name: "Rabia Malik",
    relation: "Friend",
    category: "barat",
    phone: "923071234567",
    email: "rabia.malik@example.com",
    checked: true,
    sent: true,
    opened: false,
    rsvp: null,
  },
];

export default function Invitation() {
  const [selectedDesign, setSelectedDesign] = useState(invitationDesigns[0].id);
  const [guestFilter, setGuestFilter] = useState("all");
  const [guests, setGuests] = useState(initialGuests);
  const [sendMethod, setSendMethod] = useState("whatsapp");
  const [form, setForm] = useState({
    brideName: "Zainab Siddiqui",
    groomName: "Ahmed Khan",
    weddingDate: "2024-12-25",
    eventType: "barat",
    venueName: "",
    time: "",
    message: "No boxed gifts please...",
  });
  const [sendStatus, setSendStatus] = useState("");

  const visibleGuests = useMemo(() => {
    if (guestFilter === "all") return guests;
    return guests.filter((g) => g.category === guestFilter || g.category === "all");
  }, [guests, guestFilter]);

  const totalGuests = guests.length;
  const invitationsToSend = guests.filter((g) => g.checked).length;

  const rsvpStats = useMemo(() => {
    const sent = guests.filter((g) => g.sent).length;
    const opened = guests.filter((g) => g.opened).length;
    const confirmed = guests.filter((g) => g.rsvp === "YES").length;
    const declined = guests.filter((g) => g.rsvp === "NO").length;
    return { sent, opened, confirmed, declined };
  }, [guests]);

  const updateForm = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const toggleGuest = (id) => {
    setGuests((prev) =>
      prev.map((g) => (g.id === id ? { ...g, checked: !g.checked } : g))
    );
  };

  const selectAll = () => {
    setGuests((prev) => prev.map((g) => ({ ...g, checked: true })));
  };

  const formattedDate = useMemo(() => {
    if (!form.weddingDate) return "";
    const d = new Date(form.weddingDate);
    if (isNaN(d.getTime())) return form.weddingDate;
    return d.toLocaleDateString("en-US", {
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  }, [form.weddingDate]);

  const eventLabel =
    eventTypeOptions.find((e) => e.value === form.eventType)?.label || "";

  const buildMessage = () => {
    const lines = [
      "Bismillah-ir-Rahman-ir-Rahim",
      "",
      `${form.brideName} & ${form.groomName}`,
      "",
      "Together with their families, invite you to celebrate the joyous occasion of their union",
      "",
      `${eventLabel.toUpperCase()} CEREMONY`,
      formattedDate,
      form.time ? form.time : "",
      "",
      form.venueName || "",
      form.message ? `\n${form.message}` : "",
    ];
    return lines.filter(Boolean).join("\n");
  };

  const handleSendAll = () => {
    const selected = guests.filter((g) => g.checked);
    if (selected.length === 0) {
      setSendStatus("Select at least one guest to send invitations.");
      return;
    }

    const message = buildMessage();

    if (sendMethod === "whatsapp") {
      selected.forEach((guest) => {
        const url = `https://wa.me/${guest.phone}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
      });
    } else {
      const bcc = selected.map((g) => g.email).join(",");
      const subject = encodeURIComponent(
        `You're Invited: ${form.brideName} & ${form.groomName}'s ${eventLabel}`
      );
      const body = encodeURIComponent(message);
      window.location.href = `mailto:?bcc=${bcc}&subject=${subject}&body=${body}`;
    }

    setGuests((prev) =>
      prev.map((g) => (g.checked ? { ...g, sent: true } : g))
    );
    setSendStatus(`Invitations queued for ${selected.length} guest(s) via ${sendMethod}.`);
  };

  return (
    <div className="inv-page">
      <header className="inv-navbar">
        <div className="inv-logo">WeddingWala</div>
        <div className="inv-user">
          <div className="inv-user-text">
            <span className="inv-user-names">
              {form.brideName.split(" ")[0]} &amp; {form.groomName.split(" ")[0]}
            </span>
            <span className="inv-user-sub">Karachi, PK</span>
          </div>
          <div className="inv-avatar" />
        </div>
      </header>

      <main className="inv-main">
        <p className="inv-eyebrow">ALMOST THERE</p>
        <h1 className="inv-title">Design Your Wedding Invitations</h1>
        <p className="inv-subtitle">
          Choose a design, customize it, and send to all your guests in one click.
        </p>

        <div className="inv-grid">
          {/* Left column */}
          <div className="inv-left">
            <section className="inv-card">
              <h2 className="inv-card-title">Choose Your Invitation Design</h2>
              <div className="inv-design-grid">
                {invitationDesigns.map((design) => {
                  const isSelected = selectedDesign === design.id;
                  return (
                    <div
                      key={design.id}
                      className={`inv-design-option ${isSelected ? "selected" : ""}`}
                    >
                      <button
                        className={`inv-design-preview theme-${design.theme}`}
                        onClick={() => setSelectedDesign(design.id)}
                        aria-label={`Select ${design.name}`}
                      >
                        {design.id === "floral-heritage" ? (
                          <FloralHeritageInvite
                            brideName={form.brideName.split(" ")[0]}
                            groomName={form.groomName.split(" ")[0]}
                            ceremonyLabel={`${eventLabel.toUpperCase()} CEREMONY`}
                            dateLabel={formattedDate}
                            time={form.time}
                            venueName={form.venueName || "Venue name"}
                            city="Karachi, Pakistan"
                          />
                        ) : (
                          <div className="inv-mini-invite">
                            <p className="mini-names">
                              {form.brideName.split(" ")[0]} &amp; {form.groomName.split(" ")[0]}
                            </p>
                          </div>
                        )}
                      </button>
                      <p className="inv-design-name">{design.name}</p>
                      <button
                        className={`inv-select-btn ${isSelected ? "selected" : ""}`}
                        onClick={() => setSelectedDesign(design.id)}
                      >
                        {isSelected ? "Selected" : "Select"}
                      </button>
                    </div>
                  );
                })}
              </div>
            </section>

            <section className="inv-card">
              <h2 className="inv-card-title">Customize Your Invitation</h2>
              <div className="inv-form-grid">
                <div className="inv-field">
                  <label>BRIDE NAME</label>
                  <input
                    type="text"
                    value={form.brideName}
                    onChange={(e) => updateForm("brideName", e.target.value)}
                  />
                </div>
                <div className="inv-field">
                  <label>GROOM NAME</label>
                  <input
                    type="text"
                    value={form.groomName}
                    onChange={(e) => updateForm("groomName", e.target.value)}
                  />
                </div>
                <div className="inv-field">
                  <label>WEDDING DATE</label>
                  <input
                    type="date"
                    value={form.weddingDate}
                    onChange={(e) => updateForm("weddingDate", e.target.value)}
                  />
                </div>
                <div className="inv-field">
                  <label>EVENT TYPE</label>
                  <select
                    value={form.eventType}
                    onChange={(e) => updateForm("eventType", e.target.value)}
                  >
                    {eventTypeOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="inv-field">
                  <label>VENUE NAME</label>
                  <input
                    type="text"
                    placeholder="e.g. PC Hotel, Crystal Ballroom"
                    value={form.venueName}
                    onChange={(e) => updateForm("venueName", e.target.value)}
                  />
                </div>
                <div className="inv-field">
                  <label>TIME</label>
                  <input
                    type="time"
                    value={form.time}
                    onChange={(e) => updateForm("time", e.target.value)}
                  />
                </div>
                <div className="inv-field inv-field-full">
                  <label>ADDITIONAL MESSAGE</label>
                  <textarea
                    rows={3}
                    placeholder="No boxed gifts please..."
                    value={form.message}
                    onChange={(e) => updateForm("message", e.target.value)}
                  />
                </div>
              </div>
              <button className="inv-preview-btn" type="button">
                👁 Preview Invitation
              </button>
            </section>

            <section className="inv-card">
              <h2 className="inv-card-title">Live Preview</h2>
              {selectedDesign === "floral-heritage" ? (
                <div className="inv-live-preview-svg">
                  <FloralHeritageInvite
                    brideName={form.brideName.split(" ")[0]}
                    groomName={form.groomName.split(" ")[0]}
                    ceremonyLabel={`${eventLabel.toUpperCase()} CEREMONY`}
                    dateLabel={formattedDate}
                    time={form.time}
                    venueName={form.venueName || "Venue name"}
                    city="Karachi, Pakistan"
                    message={form.message}
                  />
                </div>
              ) : (
                <div className={`inv-live-preview theme-${
                  invitationDesigns.find((d) => d.id === selectedDesign)?.theme
                }`}>
                  <p className="preview-bismillah">Bismillah-ir-Rahman-ir-Rahim</p>
                  <p className="preview-names">
                    {form.brideName.split(" ")[0]} &amp; {form.groomName.split(" ")[0]}
                  </p>
                  <p className="preview-line">
                    Together with their families, invite you to celebrate the
                    joyous occasion of their union
                  </p>
                  <p className="preview-ceremony">{eventLabel.toUpperCase()} CEREMONY</p>
                  <p className="preview-date">{formattedDate}{form.time ? ` · ${form.time}` : ""}</p>
                  <p className="preview-venue">{form.venueName || "Venue name"}</p>
                  <p className="preview-location">Karachi, Pakistan</p>
                </div>
              )}
              <div className="inv-send-buttons">
                <button
                  className="inv-send-btn whatsapp"
                  onClick={() => {
                    setSendMethod("whatsapp");
                    handleSendAll();
                  }}
                >
                  📱 Send via WhatsApp
                </button>
                <button
                  className="inv-send-btn email"
                  onClick={() => {
                    setSendMethod("email");
                    handleSendAll();
                  }}
                >
                  ✉ Send via Email
                </button>
              </div>
              {sendStatus && <p className="inv-send-status">{sendStatus}</p>}
            </section>
          </div>

          {/* Right column */}
          <div className="inv-right">
            <section className="inv-card">
              <div className="inv-send-to-header">
                <h2 className="inv-card-title">Send To</h2>
                <button className="inv-select-all" onClick={selectAll}>
                  Select All
                </button>
              </div>

              <div className="inv-total-guests">
                <span className="inv-total-count">{totalGuests}</span>
                <div>
                  <p className="inv-total-label">Total Guests</p>
                  <p className="inv-total-sub">Confirmed attendance</p>
                </div>
              </div>

              <div className="inv-radio-group">
                <label>
                  <input
                    type="radio"
                    name="guestFilter"
                    checked={guestFilter === "all"}
                    onChange={() => setGuestFilter("all")}
                  />
                  Send to All Guests
                </label>
                <label>
                  <input
                    type="radio"
                    name="guestFilter"
                    checked={guestFilter === "barat"}
                    onChange={() => setGuestFilter("barat")}
                  />
                  Barat Guests Only
                </label>
                <label>
                  <input
                    type="radio"
                    name="guestFilter"
                    checked={guestFilter === "mehndi"}
                    onChange={() => setGuestFilter("mehndi")}
                  />
                  Mehndi Guests Only
                </label>
              </div>

              <ul className="inv-guest-list">
                {visibleGuests.map((guest) => (
                  <li key={guest.id} className="inv-guest-item">
                    <label className="inv-guest-checkbox">
                      <input
                        type="checkbox"
                        checked={guest.checked}
                        onChange={() => toggleGuest(guest.id)}
                      />
                      {guest.name}
                    </label>
                    <span className="inv-guest-relation">{guest.relation}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="inv-card">
              <div className="inv-summary-row">
                <span>Invitations to Send</span>
                <span className="inv-summary-value">{invitationsToSend}</span>
              </div>
              <div className="inv-summary-row">
                <span>Method Selected</span>
                <span className="inv-summary-method">
                  {sendMethod === "whatsapp" ? "📱 WhatsApp" : "✉ Email"}
                </span>
              </div>
              <button className="inv-send-all-btn" onClick={handleSendAll}>
                Send All Invitations
              </button>
            </section>

            <section className="inv-card">
              <h2 className="inv-card-title">RSVP Tracking</h2>
              <div className="inv-rsvp-stats">
                <div className="inv-stat sent">
                  <p className="inv-stat-label">SENT</p>
                  <p className="inv-stat-value">{rsvpStats.sent}</p>
                </div>
                <div className="inv-stat opened">
                  <p className="inv-stat-label">OPENED</p>
                  <p className="inv-stat-value">{rsvpStats.opened}</p>
                </div>
                <div className="inv-stat confirmed">
                  <p className="inv-stat-label">CONFIRMED</p>
                  <p className="inv-stat-value">{rsvpStats.confirmed}</p>
                </div>
                <div className="inv-stat declined">
                  <p className="inv-stat-label">DECLINED</p>
                  <p className="inv-stat-value">{rsvpStats.declined}</p>
                </div>
              </div>

              <table className="inv-rsvp-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Status</th>
                    <th>RSVP</th>
                  </tr>
                </thead>
                <tbody>
                  {guests.slice(0, 4).map((guest) => (
                    <tr key={guest.id}>
                      <td>{guest.name}</td>
                      <td>
                        <span
                          className={`inv-status-pill ${
                            guest.opened ? "read" : guest.sent ? "sent" : ""
                          }`}
                        >
                          {guest.opened ? "READ" : guest.sent ? "SENT" : "—"}
                        </span>
                      </td>
                      <td>
                        {guest.rsvp ? (
                          <span className={`inv-rsvp-pill ${guest.rsvp.toLowerCase()}`}>
                            {guest.rsvp}
                          </span>
                        ) : (
                          "—"
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button className="inv-detailed-report">View Detailed Report</button>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
