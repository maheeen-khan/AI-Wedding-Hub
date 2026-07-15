import { Info } from "lucide-react";
import "./ImportantNotice.css";

export default function ImportantNotice({ title = "Important Notice", text }) {
  return (
    <div className="vp-notice">
      <Info size={18} className="vp-notice__icon" />
      <div>
        <p className="vp-notice__title">{title}</p>
        <p className="vp-notice__text">{text}</p>
      </div>
    </div>
  );
}
