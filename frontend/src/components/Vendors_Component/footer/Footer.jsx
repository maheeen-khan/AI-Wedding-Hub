import "./Footer.css";
import { Globe, Send, MessageCircle } from "lucide-react";


const FOOTER_COLUMNS = [
  {
    title: "WeddingWala",
    links: ["About Us", "How It Works", "Become a Vendor"],
  },
  {
    title: "Vendors",
    links: ["Venues", "Catering", "Photography", "Makeup Artists"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Cancellation Policy"],
  },
];

export default function Footer() {
  return (
    <footer className="vp-footer">
      <div className="vp-footer__inner">
        <div className="vp-footer__brand-col">
          <p className="vp-footer__brand">
            Wedding<span>Wala</span>
          </p>
          <p className="vp-footer__tagline">
            Planning Pakistan's most memorable weddings, one vendor at a time.
          </p>
          <div className="vp-footer__socials">
            <a href="#" aria-label="Website" className="vp-footer__icon-btn">
              <Globe size={16} />
            </a>
            <a href="#" aria-label="Direct message" className="vp-footer__icon-btn">
              <MessageCircle size={16} />
            </a>
            <a href="#" aria-label="Send" className="vp-footer__icon-btn">
              <Send size={16} />
            </a>
          </div>
        </div>

        {FOOTER_COLUMNS.map((col) => (
          <div key={col.title} className="vp-footer__col">
            <p className="vp-footer__col-title">{col.title}</p>
            <ul>
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="vp-footer__bottom">
        © {new Date().getFullYear()} WeddingWala. All rights reserved.
      </div>
    </footer>
  );
}
