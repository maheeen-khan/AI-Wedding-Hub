export const decorData = {
  id: "1",
  type: "decor",
  breadcrumbLabel: "Decor",
  name: "Royal Grand Decor",
  tags: ["Decor"],
  location: "Gulshan-e-Iqbal, Karachi",
  rating: 4.8,
  reviewCount: 156,
  images: [
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&q=80",
    "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=80",
    "https://images.unsplash.com/photo-1478146059778-26028b07395a?w=600&q=80",
    "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80",
  ],
  infoCards: [
    { label: "Decor Type", value: "Floral & Stage", icon: "sparkles" },
    { label: "Setup Time", value: "6-8 Hours", icon: "clock" },
    { label: "Style", value: "Modern & Traditional", icon: "palette" },
    { label: "Cancellation", value: "Free within 60 days", icon: "shield" },
  ],
  about:
    "Royal Grand Decor is Karachi's go-to name for breathtaking wedding design, blending modern elegance with rich traditional motifs. From the dreamy floral arches of a Mehndi to the regal stage setups of a Barat and Walima, our design team approaches each event with precision and a flair for the spectacular.",
  amenities: [],
  booking: {
    priceLabel: "Starts from",
    priceValue: "PKR 85,000",
  },
  bookingConfig: {
    primaryLabel: "Book Now",
    secondaryLabel: "Chat on WhatsApp",
    fields: [
      {
        name: "decorType",
        type: "button-group",
        label: "Decor Type",
        options: ["Floral", "Stage", "Mixed"],
      },
      {
        name: "decorStyle",
        type: "chip-group",
        label: "Decor Style",
        options: ["Royal Theme", "Modern Minimal", "Boho Garden", "Classic Pastel"],
      },
      { name: "eventDate", type: "date", label: "Event Date" },
      { name: "venueDetails", type: "text", label: "Venue Details", placeholder: "e.g. Sensational Marquee, North Nazimabad" },
    ],
  },
  packageTiers: {
    title: "Packages",
    tiers: [
      {
        name: "Basic",
        price: "PKR 85,000",
        features: ["Stage Florals", "Entrance Decor", "Centre Table Setup"],
      },
      {
        name: "Standard",
        price: "PKR 150,000",
        features: ["Premium Stage Setup", "LED Lighting", "Walkway Decor"],
        highlight: true,
        ctaLabel: "Select Standard",
      },
      {
        name: "Premium",
        price: "PKR 300,000",
        features: ["Royal Floral Installations", "Full Venue Lighting", "Custom Theme Design"],
        ctaLabel: "Select Premium",
      },
    ],
  },
  reviews: [
    {
      name: "Zara A.",
      eventType: "Stage Decor",
      rating: 5,
      comment:
        "Royal Grand Decor outdid themselves with our wedding design. They surprised us with the entire venue beautifully, matching the theme perfectly down to every detail.",
    },
    {
      name: "Saad & Sania",
      eventType: "Mehndi Decor",
      rating: 4,
      comment:
        "Loved the Floral Mehndi Setup! The flowers were fresh and the team was very accommodating with last-minute changes.",
    },
  ],
  faqs: [
    { question: "What areas do you cover for setup?", answer: "We currently cover all of Karachi, including outskirts. Travel charges may apply for venues outside the city." },
    { question: "Do you provide a custom theme design?", answer: "Yes, our Premium package includes a fully custom theme design tailored to your vision." },
    { question: "What is your cancellation policy?", answer: "Free cancellation up to 60 days before the event date." },
  ],
};
