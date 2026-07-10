export const cateringData = {
  id: "1",
  type: "catering",
  breadcrumbLabel: "Catering",
  name: "Royal Flavors Catering",
  tags: ["Catering"],
  location: "Bahria Town, Karachi",
  rating: 4.69,
  reviewCount: 230,
  images: [
    "https://images.unsplash.com/photo-1555244162-803834f70033?w=1200&q=80",
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
    "/Servers.png",
    "/Live Station.png",
    "/Plated Appetizers.png"
  ],
  infoCards: [
    { label: "Pax Range", value: "50 Persons", icon: "users" },
    { label: "Service Type", value: "On-site & Delivery", icon: "utensils" },
    { label: "Buffet/Live", value: "Both Available", icon: "sparkles" },
    { label: "Staffing", value: "15-day Notice", icon: "clock" },
  ],
  about:
    "With over 25 years of experience in the catering industry, Royal Flavors Catering is a premier choice for sophisticated and authentic Pakistani and continental cuisine. From intimate Mehndi functions to grand Valima receptions, our culinary team crafts unforgettable dining experiences with rich flavors and elegant presentation.",
  amenities: ["Live BBQ Counter", "Buffet Service", "Crockery Included", "Staff Provided"],
  booking: {
    priceLabel: "Starts from",
    priceValue: "PKR 1,500 / head",
  },
  bookingConfig: {
    primaryLabel: "Book Now",
    secondaryLabel: "Check Availability",
    fields: [
      {
        name: "eventType",
        type: "select",
        label: "Event Type",
        placeholder: "Select",
        options: [
          { value: "mehndi", label: "Mehndi" },
          { value: "barat", label: "Barat" },
          { value: "walima", label: "Walima" },
        ],
      },
      { name: "eventDate", type: "date", label: "Event Date" },
      { name: "guestCount", type: "number", label: "Total Guests", placeholder: "e.g. 200" },
      {
        name: "address",
        type: "text",
        label: "Additional Address",
        placeholder: "Any special instructions or address...",
      },
    ],
  },
  menuPackages: [
    { name: "Basic", profile: "3 Main Course, 1 Salad, 1 Side", price: "Rs. 1,500/head" },
    {
      name: "Standard",
      profile: "5 Main Course, 2 Desserts, Premium Rice, Live",
      price: "Rs. 2,000/head",
      highlight: true,
    },
    {
      name: "Premium",
      profile: "Live BBQ, 7 Main Course, 3 Desserts, Live BBQ, Soft Drink",
      price: "Rs. 2,800/head",
    },
  ],
  addons: [
    ["Live Mehndi Station", "Rs. 15,000"],
    ["Dessert Counter", "Rs. 10,000"],
    ["Live BBQ Counter", "Rs. 20,000"],
    ["Soda Counter", "Rs. 10,000"],
  ],
  reviews: [
    {
      name: "Amna Akhtar",
      eventType: "Walima · Nov 2025",
      rating: 5,
      comment:
        "The Mehndi event was the highlight of our event! The team was extremely professional and the food was outstanding.",
    },
    {
      name: "Zohaib S.",
      eventType: "Barat · Oct 2025",
      rating: 4,
      comment:
        "My personal chef confirmed everything plan. The live BBQ was an upgrade everyone enjoyed.",
    },
  ],
  faqs: [
    { question: "What areas in Karachi do you cover?", answer: "We cover all major areas across Karachi including DHA, Clifton, Bahria Town, and North Nazimabad." },
    { question: "How early should I book for a wedding?", answer: "We recommend booking at least 4-6 weeks in advance, especially during peak wedding season." },
    { question: "Do you offer dietary variations?", answer: "Yes, we can accommodate vegetarian, halal-specific, and other dietary requirements on request." },
  ],
};
