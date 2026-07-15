export const makeupData = {
  id: "1",
  type: "makeup",
  breadcrumbLabel: "Makeup Artists",
  name: "Zoya's Heritage Glam",
  tags: ["Makeup Artist"],
  location: "Bath Island, Karachi",
  rating: 4.8,
  reviewCount: 142,
  images: [
    "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1200&q=80",
    "https://images.unsplash.com/photo-1487412912498-0447579c8d04?w=600&q=80",
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=80",
    "https://images.unsplash.com/photo-1457972729786-0411a3b2b626?w=600&q=80",
  ],
  infoCards: [
    { label: "Style Specialist", value: "Non-Clumpy Application", icon: "sparkles" },
    { label: "Trial Session", value: "Available", icon: "clock" },
    { label: "Brands Used", value: "MAC, Huda Beauty", icon: "palette" },
    { label: "Travel", value: "On-site Available", icon: "car" },
  ],
  about:
    "Zoya's Heritage Glam delivers a curated approach to bridal makeup, blending traditional South Asian heritage with modern high-fashion techniques. Specializing in flawless, long-lasting makeup that highlights your natural beauty, Zoya and her team have transformed brides for over 8 years across Karachi's most memorable weddings.",
  amenities: [],
  booking: {
    priceLabel: "Price Range",
    priceValue: "PKR 15,000",
  },
  bookingConfig: {
    primaryLabel: "Request Quote",
    secondaryLabel: "Check Availability",
    fields: [
      {
        name: "package",
        type: "select",
        label: "Select Package",
        placeholder: "Choose a package",
        options: [
          { value: "party", label: "Party Makeup (PKR 8,000)" },
          { value: "semi-bridal", label: "Semi-Bridal (PKR 12,000)" },
          { value: "signature-bridal", label: "Signature Bridal (PKR 15,000)" },
        ],
      },
      { name: "eventDate", type: "date", label: "Mehndi / Event Date" },
      { name: "eventTime", type: "text", label: "Preferred Time", placeholder: "e.g. 4:00 PM" },
    ],
  },
  signaturePackages: [
    { name: "Party Makeup", profile: "Day Makeup, Classy Look", price: "PKR 8,000", highlight: false },
    { name: "Semi-Bridal", profile: "Bridal Makeup, Editorial Soft Glam", price: "PKR 12,000", highlight: false },
    { name: "Signature Bridal", profile: "Luxe Bridal, Airbrush, Full HD", price: "PKR 15,000", highlight: true },
  ],
  enhancements: [
    { name: "Hair Styling", price: "PKR 5,000" },
    { name: "Lashes Application", price: "PKR 2,500" },
    { name: "Contact Lenses", price: "PKR 3,000" },
  ],
  importantNotice:
    "A 50% non-refundable deposit is required to secure the booking. Mehndi or Valima slots are subject to availability — book early.",
  reviews: [
    {
      name: "Amina Khalid",
      eventType: "Bridal · Nov 2025",
      rating: 5,
      comment:
        "Zoya made me look absolutely stunning on my Valima day. The makeup stayed flawless and stunning for the whole day, highly recommend for any bride who wants high quality.",
    },
    {
      name: "Sana Mirza",
      eventType: "Mehndi · Sept 2025",
      rating: 5,
      comment:
        "The best service for Valima. The salon team was excellent and the colors were exactly what I had hoped for.",
    },
  ],
  faqs: [
    { question: "Do you provide a trial session?", answer: "Yes, a trial session can be booked separately for an additional fee, typically a few weeks before the event." },
    { question: "What is your cancellation policy?", answer: "Cancellations within 7 days of the event forfeit the advance deposit. Rescheduling is possible subject to availability." },
  ],
};
