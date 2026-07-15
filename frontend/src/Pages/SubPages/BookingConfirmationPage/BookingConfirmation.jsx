import { Link, useLocation } from "react-router-dom";
import {
    CheckCircleFill,
    ClipboardCheck,
    ArrowRight,
} from "react-bootstrap-icons";

import "./BookingConfirmation.css";

const BookingConfirmation = () => {
    const { state } = useLocation();

    // Default values if user refreshes page
    const booking = state || {
        vendorName: "Majestic Moments Studio",
        category: "Photography",
        event: "Barat",
        date: "December 12, 2024",
        guests: 500,
        note: "Please capture candid moments of the family.",
    };

    return (
        <>
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


        <div className="booking-success-page" style={{ marginTop: "60px" }}>
            <div className="success-card">

                {/* Icon */}

                <div className="success-icon">
                    <CheckCircleFill size={40} />
                </div>

                {/* Heading */}

                <h2>Booking Request Sent!</h2>

                <p className="subtitle">
                    Your request has been sent to the vendor. You will be notified once
                    they confirm.
                </p>

                {/* Status */}

                <div className="status-pill">
                    <i className="bi bi-clock-history me-2"></i>
                     Status: Pending Vendor Confirmation
                </div>

                {/* Summary */}

                <div className="summary-card">

                    <h6 className="summary-heading">
                        <ClipboardCheck size={16} style={{ marginRight: "6px" }}/>
                         Booking Summary
                    </h6>

                    <div className="summary-row">
                        <span>Vendor Name</span>
                        <strong>{booking.vendorName}</strong>
                    </div>

                    <div className="summary-row">
                        <span>Category</span>
                        <strong>{booking.category}</strong>
                    </div>

                    <div className="summary-row">
                        <span>Event</span>
                        <strong>{booking.event}</strong>
                    </div>

                    <div className="summary-row">
                        <span>Date</span>
                        <strong>{booking.date}</strong>
                    </div>

                    <div className="summary-row">
                        <span>Guest Count</span>
                        <strong>{booking.guests}</strong>
                    </div>

                    <div className="summary-row note">
                        <span>Special Note</span>
                        <strong>"{booking.note}"</strong>
                    </div>
                </div>

                {/* Steps */}

                <div className="steps">

                    <h4>What Happens Next?</h4>

                    <div className="step-container">

                        <div className="step">
                            <div className="circle">1</div>
                            <p>Vendor reviews your request</p>
                        </div>

                        <div className="step">
                            <div className="circle">2</div>
                            <p>You get notified of confirmation</p>
                        </div>

                        <div className="step">
                            <div className="circle">3</div>
                            <p>Proceed to next vendor</p>
                        </div>

                    </div>

                </div>

                {/* Buttons */}

                <div className="buttons">

                    <Link to="/vendors" className="btn-outline">
                        Back to Vendors
                    </Link>

                    <Link to="/planning" className="btn-filled">
                        Continue Planning <ArrowRight />
                    </Link>

                </div>

                <p className="assistant-text">
                    Need help? Chat with our AI Assistant.
                </p>

            </div>

            {/* Floating action button */}
      <button type="button" className="ww-fab" aria-label="AI Assistant" title='Need Wedding Ideas? Ask AI'>
        <i className="bi bi-stars"></i>
      </button>

        </div>

        </>
    );
};

export default BookingConfirmation;