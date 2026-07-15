// BookingSidebar.jsx
import { useState } from "react";
import { Calendar, Users2, MessageCircle, ShieldCheck, CalendarCheck } from "lucide-react";
import "./BookingSidebar.css";

/**
 * Flexible booking sidebar driven by `config.fields`, since each vendor
 * type asks for slightly different inputs:
 *   - venue: package select, date, guest count
 *   - catering: package select, date, guest count, address
 *   - photography: package select, event-type checkboxes, date, notes textarea
 *   - makeup: package select, date, time
 *   - decor: decor-type button group, decor-style chips, date, venue input
 *   - car rental: car select, date range, pickup location
 *
 * Supported field types: "select", "date", "number", "text", "textarea",
 * "checkbox-group", "button-group", "chip-group"
 */
export default function BookingSidebar({ booking, config, onBookNow }) {
  const initialState = Object.fromEntries(
    (config.fields || []).map((f) => [
      f.name,
      f.type === "checkbox-group" ? f.defaultChecked || [] : "",
    ])
  );
  const [values, setValues] = useState(initialState);

  const setValue = (name, val) => setValues((prev) => ({ ...prev, [name]: val }));

  const toggleCheckbox = (name, option) => {
    setValues((prev) => {
      const current = prev[name] || [];
      const next = current.includes(option)
        ? current.filter((o) => o !== option)
        : [...current, option];
      return { ...prev, [name]: next };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onBookNow?.(values);
  };

  return (
    <aside className="vp-booking">
      {(booking.priceLabel || booking.priceValue) && (
        <div className="vp-booking__price-block">
          {booking.priceLabel && (
            <p className="vp-booking__price-label">{booking.priceLabel}</p>
          )}
          {booking.priceValue && (
            <p className="vp-booking__price-value">{booking.priceValue}</p>
          )}
        </div>
      )}

      <form onSubmit={handleSubmit} className="vp-booking__form">
        {(config.fields || []).map((field) => (
          <FieldRenderer
            key={field.name}
            field={field}
            value={values[field.name]}
            setValue={setValue}
            toggleCheckbox={toggleCheckbox}
          />
        ))}

        <button type="submit" className="vp-booking__primary-btn">
          {config.primaryLabel || "Book Now"}
        </button>

        {config.secondaryLabel === "Check Availability" ? (
          <button type="button" className="vp-booking__secondary-outline-btn">
            <CalendarCheck size={16} />
            Check Availability
          </button>
        ) : (
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="vp-booking__whatsapp-btn"
          >
            <MessageCircle size={16} />
            {config.secondaryLabel || "WhatsApp Inquiry"}
          </a>
        )}

        {booking.cancellationNote && (
          <p className="vp-booking__note">
            <ShieldCheck size={14} />
            {booking.cancellationNote}
          </p>
        )}
      </form>
    </aside>
  );
}

function FieldRenderer({ field, value, setValue, toggleCheckbox }) {
  switch (field.type) {
    case "select":
      return (
        <div className="vp-booking__field">
          <label>{field.label}</label>
          <div className="vp-booking__select-wrap">
            <select value={value} onChange={(e) => setValue(field.name, e.target.value)}>
              <option value="">{field.placeholder || "Select"}</option>
              {field.options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      );

    case "date":
      return (
        <div className="vp-booking__field">
          <label>{field.label}</label>
          <div className="vp-booking__input-icon-wrap">
            <Calendar size={15} className="vp-booking__input-icon" />
            <input
              type="date"
              value={value}
              onChange={(e) => setValue(field.name, e.target.value)}
            />
          </div>
        </div>
      );

    case "number":
      return (
        <div className="vp-booking__field">
          <label>{field.label}</label>
          <div className="vp-booking__input-icon-wrap">
            <Users2 size={15} className="vp-booking__input-icon" />
            <input
              type="number"
              min="1"
              placeholder={field.placeholder}
              value={value}
              onChange={(e) => setValue(field.name, e.target.value)}
            />
          </div>
        </div>
      );

    case "text":
      return (
        <div className="vp-booking__field">
          <label>{field.label}</label>
          <input
            type="text"
            placeholder={field.placeholder}
            value={value}
            onChange={(e) => setValue(field.name, e.target.value)}
          />
        </div>
      );

    case "textarea":
      return (
        <div className="vp-booking__field">
          <label>{field.label}</label>
          <textarea
            rows={3}
            placeholder={field.placeholder}
            value={value}
            onChange={(e) => setValue(field.name, e.target.value)}
          />
        </div>
      );

    case "checkbox-group":
      return (
        <div className="vp-booking__field">
          <label>{field.label}</label>
          <div className="vp-booking__checkbox-list">
            {field.options.map((opt) => (
              <label key={opt} className="vp-booking__checkbox-item">
                <input
                  type="checkbox"
                  checked={(value || []).includes(opt)}
                  onChange={() => toggleCheckbox(field.name, opt)}
                />
                {opt}
              </label>
            ))}
          </div>
        </div>
      );

    case "button-group":
      return (
        <div className="vp-booking__field">
          <label>{field.label}</label>
          <div className="vp-booking__button-group">
            {field.options.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => setValue(field.name, opt)}
                className={
                  value === opt
                    ? "vp-booking__tab-btn vp-booking__tab-btn--active"
                    : "vp-booking__tab-btn"
                }
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      );

    case "chip-group":
      return (
        <div className="vp-booking__field">
          <label>{field.label}</label>
          <div className="vp-booking__chip-group">
            {field.options.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => setValue(field.name, opt)}
                className={
                  value === opt
                    ? "vp-booking__chip-btn vp-booking__chip-btn--active"
                    : "vp-booking__chip-btn"
                }
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      );

    default:
      return null;
  }
}