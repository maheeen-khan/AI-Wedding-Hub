export const photographyData = {
  id: "1",
  type: "photography",
  breadcrumbLabel: "Photography",
  name: "Majestic Moments Studio",
  tags: ["Photography", "Verified Partner"],
  location: "DHA Phase 5, Karachi",
  rating: 4.9,
  reviewCount: 128,
  images: [
    "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1200&q=80",
    "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80",
    "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
    "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80",
    "https://images.unsplash.com/photo-1583939411023-30c4b9341f64?w=600&q=80",
  ],
  infoCards: [
    { label: "Experience", value: "10+ Years", icon: "clock" },
    { label: "Style", value: "Candid & Traditional", icon: "camera" },
    { label: "Delivery", value: "Digital & Album", icon: "image" },
    { label: "Cancellation", value: "Free within 30 days", icon: "shield" },
  ],
  about:
    "At Majestic Moments Studio, we believe every wedding is a grand tapestry of heritage and emotion. Our team specializes in 'Joota Chupai' style cinematic wedding photography, where we preserve the magic of every glance, laughter, and tear with artistic finesse. From the vibrant colors of Mehndi to the timeless elegance of Walima, we ensure every moment of your story is told beautifully and authentically.",
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
        name: "package",
        type: "select",
        label: "Select Package",
        placeholder: "Choose a package",
        options: [
          { value: "basic", label: "Mehndi Only (PKR 85,000)" },
          { value: "standard", label: "Nikkah + Walima (PKR 150,000)" },
          { value: "premium", label: "The Full Journey (PKR 250,000)" },
        ],
      },
      {
        name: "eventTypes",
        type: "checkbox-group",
        label: "Event Types",
        options: ["Mehndi", "Barat", "Valima", "Engagement"],
        defaultChecked: ["Barat"],
      },
      { name: "preferredDate", type: "date", label: "Preferred Date" },
      {
        name: "notes",
        type: "textarea",
        label: "Notes for Photographer",
        placeholder: "e.g. Traditional theme, specific family requirements...",
      },
    ],
  },
  packageTiers: {
    title: "Packages",
    tiers: [
      {
        name: "Mehndi Only",
        price: "PKR 85,000",
        features: ["1 Event (7 Hours)", "Photographers Only", "Digital High-Res Link"],
      },
      {
        name: "Nikkah + Valima",
        price: "PKR 150,000",
        features: ["2 Events", "Cinematic Highlights", "Premium Photo Book"],
        highlight: true,
        ctaLabel: "Select Standard",
      },
      {
        name: "The Full Journey",
        price: "PKR 250,000",
        features: ["3+ Events", "Bridal Shoot + Drone", "Luxury Boxed Album"],
        ctaLabel: "Select Premium",
      },
    ],
  },
  portfolioImages: [
    "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=400&q=80",
    "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400&q=80",
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&q=80",
    "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400&q=80",
  ],
  reviews: [
    {
      name: "Zainab & Ali",
      eventType: "Barat · Dec 2025",
      rating: 5,
      comment:
        "Majestic Moments captured our wedding with such grace. They were incredible during the emotional moments but extremely fast and timely. The Nikahnama is also a piece of art.",
    },
    {
      name: "Sara & Saad",
      eventType: "Walima · Oct 2025",
      rating: 5,
      comment:
        "Best decision for our Mehndi! They really understood the vibe and the candid shots of our families dancing are something we'll keep forever.",
    },
  ],
  faqs: [
    { question: "Do you provide raw photos?", answer: "We provide curated and edited high-resolution photos. Raw, unedited files can be provided for an additional fee." },
    { question: "Are you available for destination weddings outside Karachi?", answer: "Yes, we travel across Pakistan for destination weddings. Travel and accommodation costs apply separately." },
    { question: "What is your cancellation policy?", answer: "Free cancellation up to 30 days before the event. After that, the advance deposit becomes non-refundable." },
  ],
};
