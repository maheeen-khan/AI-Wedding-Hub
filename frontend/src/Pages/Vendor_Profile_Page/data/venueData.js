export const venueData = {
  id: 1,
  type: "venue",
  breadcrumbLabel: "Wedding Venues",
  name: "Sensational Marquee",
  tags: ["Wedding Venue", "Verified Partner"],
  location: "North Nazimabad, Karachi",
  rating: 4.7,
  reviewCount: 96,
  images: [
    "/main2.png",
    "/Buffet.svg",
    "/Exterior Night.svg",
    "/Stage Decor.png",
    "/Table Setting.png",
  ],
  infoCards: [
    { label: "Venue Type", value: "Marquee / Banquet", icon: "building" },
    { label: "Capacity", value: "50 - 400 Guests", icon: "users" },
    { label: "Parking Slots", value: "80 Vehicles", icon: "parking" },
    { label: "Catering", value: "External Allowed", icon: "utensils" },
  ],
  about:
    "Discover the epitome of elegance at Sensational Marquee, Karachi's premier destination for luxury celebrations. Our state-of-the-art climate-controlled marquee offers a seamless blend of modern amenities and traditional charm. Whether you're planning an intimate Mehndi or a grand Valima, our versatile space provides the perfect canvas for your dream wedding.",
  amenities: ["Full AC", "Valet Parking", "DJ Sound System", "24/7 Security", "Buffet Service"],
  booking: {
    priceLabel: "Price starts from",
    priceValue: "PKR 500 / head",
    cancellationNote: "Free cancellation up to 60 days",
  },
  bookingConfig: {
    primaryLabel: "Book Now",
    secondaryLabel: "WhatsApp Inquiry",
    fields: [
      {
        name: "eventType",
        type: "select",
        label: "Event Type",
        placeholder: "Select Event",
        options: [
          { value: "mehndi", label: "Mehndi" },
          { value: "barat", label: "Barat / Nikkah" },
          { value: "walima", label: "Walima" },
          { value: "engagement", label: "Engagement" },
        ],
      },
      { name: "eventDate", type: "date", label: "Event Date" },
      { name: "guestCount", type: "number", label: "Total Guests", placeholder: "e.g. 250" },
    ],
  },
  pricing: {
    rangeLabel: "PRICE PER HEAD RANGE",
    range: "PKR 500 - 1,180",
    note: "*Prices vary based on menu selection and guest count",
    sampleMenu: [
      ["Chicken Biryani", "Premium Rice"],
      ["Seekh Kabab", "Live BBQ"],
      ["Shahi Kheer", "Dessert"],
    ],
  },
  reviews: [
    {
      name: "Ayesha & Musa",
      eventType: "Walima · Dec 2025",
      rating: 5,
      comment:
        "Absolutely stunning decor and the food was praised by everyone. The staff made our special day seamless and stress-free.",
    },
    {
      name: "Zoya & Hamza",
      eventType: "Barat · Jan 2026",
      rating: 4,
      comment:
        "The marquee was very spacious and the AC worked perfectly despite the Karachi heat. Great experience with the management team.",
    },
  ],
  faqs: [
    {
      question: "What is the cancellation policy?",
      answer:
        "Free cancellation up to 60 days before your event date. After that, a partial deposit may be retained.",
    },
    {
      question: "Is outside catering permitted?",
      answer:
        "Yes, this venue allows external catering vendors. In-house catering is also available on request.",
    },
  ],
};
