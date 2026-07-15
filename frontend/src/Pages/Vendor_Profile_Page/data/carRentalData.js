export const carRentalData = {
  id: "1",
  type: "car-rental",
  breadcrumbLabel: "Vendors",
  name: "Royal Wheels Karachi",
  tags: ["Car Rental", "Verified Partner"],
  location: "Clifton & DHA, Karachi, Pakistan",
  rating: 4.7,
  reviewCount: 100,
  images: [
    "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1200&q=80",
    "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=600&q=80",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80",
    "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=600&q=80",
  ],
  infoCards: [
    { label: "Fleet Size", value: "12 Cars", icon: "car" },
    { label: "Trip Type", value: "Luxury, Vintage, SUV", icon: "sparkles" },
    { label: "Driver", value: "Included", icon: "driver" },
    { label: "Decoration", value: "Bridal Style Available", icon: "palette" },
  ],
  about:
    "As a legacy of over 15 years in Karachi's premium event automotive industry, Royal Wheels provides more than just transportation, we offer elegance that culminates the magic of your special day. From a vintage Rolls Royce entrance to a fully decorated SUV for the Walima, your arrival will be as spectacular as the celebration itself.",
  amenities: ["Driver Included", "Fuel Included", "Decoration Included", "Insured Fleet"],
  booking: {
    priceLabel: "Starting from",
    priceValue: "PKR 50,000",
  },
  bookingConfig: {
    primaryLabel: "Book Now",
    secondaryLabel: "WhatsApp Support",
    fields: [
      {
        name: "selectedCar",
        type: "select",
        label: "Select Package",
        placeholder: "The Scenic 3-Car",
        options: [
          { value: "rolls-royce", label: "1960 Rolls Royce" },
          { value: "mercedes", label: "Mercedes S-Class" },
          { value: "land-cruiser", label: "Toyota Land Cruiser" },
        ],
      },
      { name: "eventDate", type: "date", label: "Event Date" },
      { name: "noOfCars", type: "number", label: "No. of Cars", placeholder: "e.g. 3" },
    ],
  },
  fleet: [
    {
      name: "1960 Rolls Royce",
      specs: "Vintage · 4 Seats",
      price: "PKR 50,000",
      image: "https://images.unsplash.com/photo-1601929213188-cfeaf7285cb9?w=300&q=80",
      badge: "Available",
    },
    {
      name: "Mercedes S-Class",
      specs: "Luxury · 4 Seats",
      price: "PKR 35,000",
      image: "https://images.unsplash.com/photo-1563720223185-11003d516935?w=300&q=80",
      badge: "Available",
    },
    {
      name: "Toyota Land Cruiser",
      specs: "SUV · 7 Seats",
      price: "PKR 30,000",
      image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=300&q=80",
      badge: "Few units left",
    },
  ],
  eventPackagesColumns: ["Package Name", "Cars", "Hours", "Price"],
  eventPackages: [
    ["The Bridal", "1 Wedding Car", "8 Hours", "PKR 25,000"],
    ["The Royal Convoy", "3 Luxury Cars", "8 Hours", "PKR 80,000"],
    ["Full Fleet", "6 Mixed Fleet", "Full Day", "PKR 150,000"],
  ],
  serviceAreas: ["DHA", "Clifton", "Bahria Town", "North Nazimabad", "Gulshan-e-Iqbal"],
  reviews: [
    {
      name: "Ahmed & Zara",
      eventType: "Walima",
      rating: 5,
      comment:
        "The Rolls Royce was the highlight of our Barat! The driver was extremely professional and punctual, made our entrance unforgettable.",
    },
    {
      name: "Bilal & Maria",
      eventType: "Nikkah",
      rating: 5,
      comment:
        "Booked the Royal Convoy for our Valima, cars were spotless and the decoration was exactly as promised.",
    },
  ],
  faqs: [
    { question: "What is your driver policy?", answer: "All bookings include an experienced, professionally dressed driver for the duration of your booking." },
    { question: "Do you provide outdoor services?", answer: "Yes, we provide service across all of Karachi including outdoor venues. Out-of-city requests can be discussed separately." },
    { question: "What is your cancellation policy?", answer: "Free cancellation up to 14 days before the event. Within 14 days, a partial deposit is retained." },
  ],
};
