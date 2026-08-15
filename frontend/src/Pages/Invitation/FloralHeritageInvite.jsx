import React from "react";

/**
 * Floral Heritage invitation card.
 * Pure SVG so it scales crisply from the small template-picker thumbnail
 * up to the full live-preview size just by changing the container width.
 */
export default function FloralHeritageInvite({
  brideName = "Zainab",
  groomName = "Ahmed",
  ceremonyLabel = "BARAT CEREMONY",
  dateLabel = "Sunday, 25th December 2024",
  time = "",
  venueName = "Venue name",
  city = "Karachi, Pakistan",
  message = "",
}) {
  const tagline1 = "Together with their families, invite you to";
  const tagline2 = "celebrate the joyous occasion of their union";

  return (
    <svg
      viewBox="0 0 380 540"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%", display: "block" }}
    >
      <defs>
        <radialGradient id="fh-bg" cx="50%" cy="42%" r="75%">
          <stop offset="0%" stopColor="#6e1c30" />
          <stop offset="100%" stopColor="#390d1a" />
        </radialGradient>
        <linearGradient id="fh-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f6e3b4" />
          <stop offset="50%" stopColor="#d9a441" />
          <stop offset="100%" stopColor="#a8791f" />
        </linearGradient>

        <g id="fh-corner-vine">
          <path
            d="M8,102 C8,70 16,44 36,29 C56,14 78,11 100,7"
            fill="none"
            stroke="url(#fh-gold)"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <ellipse cx="19" cy="78" rx="10" ry="3.6" transform="rotate(-38 19 78)" fill="url(#fh-gold)" />
          <ellipse cx="33" cy="53" rx="9" ry="3.3" transform="rotate(-18 33 53)" fill="url(#fh-gold)" />
          <ellipse cx="53" cy="32" rx="8" ry="3" transform="rotate(8 53 32)" fill="url(#fh-gold)" />
          <ellipse cx="74" cy="19" rx="7" ry="2.8" transform="rotate(28 74 19)" fill="url(#fh-gold)" />
          <circle cx="97" cy="7" r="3.6" fill="url(#fh-gold)" />
          <circle cx="13" cy="98" r="2.6" fill="url(#fh-gold)" opacity="0.75" />
          <circle cx="44" cy="20" r="2" fill="url(#fh-gold)" opacity="0.6" />
        </g>
      </defs>

      {/* background */}
      <rect x="0" y="0" width="380" height="540" fill="url(#fh-bg)" />

      {/* subtle bandhani-style dot texture */}
      <g fill="#f6e3b4" opacity="0.05">
        <circle cx="70" cy="130" r="1.4" />
        <circle cx="120" cy="90" r="1.2" />
        <circle cx="300" cy="150" r="1.4" />
        <circle cx="330" cy="220" r="1.1" />
        <circle cx="60" cy="400" r="1.3" />
        <circle cx="90" cy="460" r="1.1" />
        <circle cx="310" cy="420" r="1.4" />
        <circle cx="290" cy="470" r="1.1" />
      </g>

      {/* border frame */}
      <rect x="14" y="14" width="352" height="512" fill="none" stroke="url(#fh-gold)" strokeWidth="1.6" />
      <rect x="20" y="20" width="340" height="500" fill="none" stroke="url(#fh-gold)" strokeWidth="0.7" opacity="0.65" />

      {/* corner ornaments */}
      <use href="#fh-corner-vine" transform="translate(18,18)" />
      <use href="#fh-corner-vine" transform="translate(362,18) scale(-1,1)" />
      <use href="#fh-corner-vine" transform="translate(18,522) scale(1,-1)" />
      <use href="#fh-corner-vine" transform="translate(362,522) scale(-1,-1)" />

      {/* Bismillah */}
      <text
        x="190"
        y="118"
        textAnchor="middle"
        fill="#e8c988"
        fontFamily="'Cormorant Garamond', Georgia, serif"
        fontStyle="italic"
        fontSize="15"
        letterSpacing="0.5"
      >
        Bismillah-ir-Rahman-ir-Rahim
      </text>

      {/* flourish divider */}
      <g transform="translate(190,142)">
        <line x1="-46" y1="0" x2="-14" y2="0" stroke="url(#fh-gold)" strokeWidth="1" />
        <path d="M0,-6 L6,0 L0,6 L-6,0 Z" fill="url(#fh-gold)" />
        <line x1="14" y1="0" x2="46" y2="0" stroke="url(#fh-gold)" strokeWidth="1" />
      </g>

      {/* names */}
      <text
        x="190"
        y="212"
        textAnchor="middle"
        fill="#f6e3b4"
        fontFamily="'Playfair Display', Georgia, serif"
        fontSize="36"
        fontWeight="600"
      >
        {brideName} <tspan fontStyle="italic" fill="#d9a441" fontSize="28">&amp;</tspan> {groomName}
      </text>

      {/* tagline */}
      <text
        x="190"
        y="250"
        textAnchor="middle"
        fill="#e9d9c8"
        fontFamily="'Cormorant Garamond', Georgia, serif"
        fontSize="13.5"
      >
        {tagline1}
      </text>
      <text
        x="190"
        y="270"
        textAnchor="middle"
        fill="#e9d9c8"
        fontFamily="'Cormorant Garamond', Georgia, serif"
        fontSize="13.5"
      >
        {tagline2}
      </text>

      {/* divider */}
      <g transform="translate(190,300)">
        <line x1="-60" y1="0" x2="-16" y2="0" stroke="url(#fh-gold)" strokeWidth="0.8" />
        <circle r="2.4" fill="url(#fh-gold)" />
        <line x1="16" y1="0" x2="60" y2="0" stroke="url(#fh-gold)" strokeWidth="0.8" />
      </g>

      {/* ceremony label */}
      <text
        x="190"
        y="336"
        textAnchor="middle"
        fill="#f6e3b4"
        fontFamily="Georgia, serif"
        fontSize="14"
        fontWeight="700"
        letterSpacing="2.5"
      >
        {ceremonyLabel}
      </text>

      {/* date / time */}
      <text
        x="190"
        y="362"
        textAnchor="middle"
        fill="#e9d9c8"
        fontFamily="'Cormorant Garamond', Georgia, serif"
        fontSize="14"
      >
        {dateLabel}
        {time ? ` \u00B7 ${time}` : ""}
      </text>

      {/* venue */}
      <text
        x="190"
        y="410"
        textAnchor="middle"
        fill="#f6e3b4"
        fontFamily="Georgia, serif"
        fontSize="15"
        fontWeight="700"
      >
        {venueName}
      </text>
      <text
        x="190"
        y="430"
        textAnchor="middle"
        fill="#c9b39c"
        fontFamily="'Cormorant Garamond', Georgia, serif"
        fontSize="12.5"
      >
        {city}
      </text>

      {/* optional message */}
      {message && (
        <text
          x="190"
          y="462"
          textAnchor="middle"
          fill="#c9b39c"
          fontFamily="'Cormorant Garamond', Georgia, serif"
          fontStyle="italic"
          fontSize="12"
        >
          {message}
        </text>
      )}

      {/* bottom flourish */}
      <g transform="translate(190,494)">
        <line x1="-46" y1="0" x2="-14" y2="0" stroke="url(#fh-gold)" strokeWidth="1" />
        <path d="M0,-6 L6,0 L0,6 L-6,0 Z" fill="url(#fh-gold)" />
        <line x1="14" y1="0" x2="46" y2="0" stroke="url(#fh-gold)" strokeWidth="1" />
      </g>
    </svg>
  );
}
