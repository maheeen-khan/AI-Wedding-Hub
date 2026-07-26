import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./chatbot.css";
import { vendorsByType } from "../Vendor_Profile_Page/data";

const previousChats = [
  {
    id: 1,
    title: "Vendor suggestions for...",
    time: "Today, 2:39 PM",
  },
  {
    id: 2,
    title: "Nikkah Stage Decor Ideas",
    time: "Yesterday, 10:15 AM",
  },
  {
    id: 3,
    title: "Guest List AI Optimization",
    time: "Oct 12, 2024",
  },
  {
    id: 4,
    title: "Mehndi Outfit Coordination",
    time: "Oct 10, 2024",
  },
];

const allVendors = Object.values(vendorsByType).flatMap((byId) =>
  Object.values(byId)
);

const vendorSuggestions = allVendors.slice(0, 2);

const quickActions = [
  "Suggest vendors",
  "Check my budget",
  "What's next in my plan?",
  "Help with invitations",
];

export default function Chatbot() {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;
    setMessage("");
  };

  return (
    <div className="zoya-page">
      {/* Top Nav */}
      <header className="zoya-navbar">
        <div className="zoya-logo">WeddingWala</div>
        <nav className="zoya-nav-links">
          <a href="#venues">Venues</a>
          <a href="#vendors">Vendors</a>
          <a href="#inspiration">Inspiration</a>
          <a href="#planner">Planner</a>
        </nav>
        <div className="zoya-user">
          <div className="zoya-user-text">
            <span className="zoya-user-names">Zain &amp; Aisha</span>
            <span className="zoya-user-sub">WEDDING: DEC 2024</span>
          </div>
          <div className="zoya-avatar" />
        </div>
      </header>

      {/* Main content */}
      <main className="zoya-main">
        <p className="zoya-eyebrow">YOUR PERSONAL ASSISTANT</p>
        <h1 className="zoya-title">Chat with Zoya</h1>

        <div className="zoya-panel">
          {/* Sidebar */}
          <aside className="zoya-sidebar">
            <button className="zoya-new-chat">+ New Chat</button>
            <p className="zoya-sidebar-label">PREVIOUS CHATS</p>
            <ul className="zoya-chat-list">
              {previousChats.map((chat) => (
                <li key={chat.id} className="zoya-chat-item">
                  <p className="zoya-chat-title">{chat.title}</p>
                  <p className="zoya-chat-time">{chat.time}</p>
                </li>
              ))}
            </ul>
          </aside>

          {/* Chat window */}
          <section className="zoya-chat-window">
            <div className="zoya-chat-header">
              <div className="zoya-chat-header-left">
                <div className="zoya-bot-icon">✦</div>
                <div>
                  <p className="zoya-bot-name">Zoya - Your Wedding Assistant</p>
                  <p className="zoya-bot-status">Online &amp; ready to help</p>
                </div>
              </div>
              <div className="zoya-chat-header-right">
                <button className="zoya-icon-btn" aria-label="Search">🔍</button>
                <button className="zoya-icon-btn" aria-label="More options">⋮</button>
              </div>
            </div>

            <div className="zoya-messages">
              <div className="zoya-message zoya-message-bot">
                <div className="zoya-bot-icon small">✦</div>
                <p>
                  Assalam o Alaikum! I am Zoya, your personal wedding assistant.
                  How can I help you plan your dream wedding today?
                </p>
              </div>

              <div className="zoya-message zoya-message-user">
                <p>Can you suggest some caterers within PKR 500,000?</p>
              </div>

              <div className="zoya-message zoya-message-bot">
                <div className="zoya-bot-icon small">✦</div>
                <p>
                  Certainly! I've found a few highly-rated caterers that fit
                  perfectly within your budget. These options specialize in
                  traditional Pakistani cuisine with premium presentation:
                </p>
              </div>

              <div className="zoya-vendor-cards">
                {vendorSuggestions.map((vendor) => (
                  <div className="zoya-vendor-card" key={vendor.id}>
                    <div
                      className="zoya-vendor-image"
                      style={{
                        backgroundImage: vendor.images?.[0]
                          ? `url(${vendor.images[0]})`
                          : undefined,
                      }}
                    >
                      {vendor.tags?.[0] && (
                        <span className="zoya-vendor-tag">{vendor.tags[0]}</span>
                      )}
                    </div>
                    <div className="zoya-vendor-info">
                      <p className="zoya-vendor-name">{vendor.name}</p>
                      <p className="zoya-vendor-price">
                        {vendor.booking?.priceValue || vendor.pricing?.range}
                      </p>
                      <Link
                        to={`/Vendor_Profile_Page/${vendor.type}/${vendor.id}`}
                        className="zoya-view-profile"
                      >
                        View Profile
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              <div className="zoya-quick-actions">
                {quickActions.map((action) => (
                  <button key={action} className="zoya-quick-btn">
                    {action}
                  </button>
                ))}
              </div>
            </div>

            <div className="zoya-input-bar">
              <button className="zoya-icon-btn" aria-label="Attach">📎</button>
              <input
                type="text"
                placeholder="Ask Zoya anything about your wedding..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <button className="zoya-send-btn" onClick={handleSend} aria-label="Send">
                ➤
              </button>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="zoya-footer">
        <p>WeddingWala &copy; 2024 WeddingWala. Elegance in every tradition.</p>
        <div className="zoya-footer-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="#contact">Contact Us</a>
        </div>
      </footer>
    </div>
  );
}