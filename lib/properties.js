const SAMPLE_PROPERTIES = [
  {
    id: "modern-family-home-nairobi",
    title: "Modern Family Home",
    slug: "modern-family-home-nairobi",
    location: "Nairobi",
    address: "Kilimani Area, Nairobi",
    type: "House",
    category: "sale",
    status: "available",
    price: 15000000,
    priceLabel: "KSh 15,000,000",
    bedrooms: 3,
    bathrooms: 2,
    landSize: "0.12 acres",
    squareMeters: 180,
    image: "/images/property-1.jpg",
    images: ["/images/property-1.jpg"],
    description:
      "A beautifully designed modern family home located in the heart of Kilimani. This property features spacious living areas, modern finishes, and a serene environment perfect for families. Close to schools, shopping centers, and major highways.",
    features: [
      "Modern kitchen",
      "Spacious living room",
      "Master en-suite",
      "Parking for 2 cars",
      "Garden",
      "24/7 security",
      "Backup water supply",
    ],
    amenities: [
      "Swimming pool access",
      "Gym facilities",
      "Children's play area",
    ],
    featured: true,
    demo: true,
  },
  {
    id: "prime-residential-plot-nakuru",
    title: "Prime Residential Plot",
    slug: "prime-residential-plot-nakuru",
    location: "Nakuru",
    address: "Milimani Estate, Nakuru",
    type: "Land",
    category: "land",
    status: "available",
    price: 3500000,
    priceLabel: "KSh 3,500,000",
    bedrooms: null,
    bathrooms: null,
    landSize: "0.5 acres",
    squareMeters: null,
    image: "/images/property-2.jpg",
    images: ["/images/property-2.jpg"],
    description:
      "A prime residential plot in the sought-after Milimani Estate, Nakuru. The plot is flat, well-drained, and ready for development. Excellent road access and close to essential amenities. Ideal for building a family home or investment.",
    features: [
      "Flat terrain",
      "Road access",
      "Near water supply",
      "Electricity available",
      "Secure neighborhood",
      "Title deed available",
    ],
    amenities: [],
    featured: true,
    demo: true,
  },
  {
    id: "spacious-rental-home-mombasa",
    title: "Spacious Rental Home",
    slug: "spacious-rental-home-mombasa",
    location: "Mombasa",
    address: "Nyali Area, Mombasa",
    type: "House",
    category: "rent",
    status: "available",
    price: 85000,
    priceLabel: "KSh 85,000 / Month",
    bedrooms: 4,
    bathrooms: 3,
    landSize: null,
    squareMeters: 250,
    image: "/images/property-3.jpg",
    images: ["/images/property-3.jpg"],
    description:
      "A spacious and well-maintained rental home in the popular Nyali area of Mombasa. Features four bedrooms, three bathrooms, a large kitchen, and a private garden. Minutes from the beach, shopping centers, and international schools.",
    features: [
      "4 spacious bedrooms",
      "3 modern bathrooms",
      "Large kitchen",
      "Private garden",
      "Servant quarter",
      "Double parking",
      "Perimeter wall",
    ],
    amenities: ["Near beach", "Shopping nearby", "Schools nearby"],
    featured: true,
    demo: true,
  },
  {
    id: "commercial-office-space-eldoret",
    title: "Commercial Office Space",
    slug: "commercial-office-space-eldoret",
    location: "Eldoret",
    address: "CBD, Eldoret",
    type: "Commercial",
    category: "sale",
    status: "available",
    price: 25000000,
    priceLabel: "KSh 25,000,000",
    bedrooms: null,
    bathrooms: 4,
    landSize: null,
    squareMeters: 320,
    image: "/images/property-4.jpg",
    images: ["/images/property-4.jpg"],
    description:
      "A prime commercial office space located in the heart of Eldoret CBD. This property is ideal for businesses looking for a professional and accessible location. Features modern office layouts, conference rooms, and ample parking.",
    features: [
      "Modern office layout",
      "Conference room",
      "Reception area",
      "Air conditioning",
      "Fiber internet ready",
      "Ample parking",
      "Security system",
    ],
    amenities: ["Near banks", "Public transport access", "Restaurants nearby"],
    featured: true,
    demo: true,
  },
  {
    id: "luxury-apartment-kisumu",
    title: "Luxury Lakeside Apartment",
    slug: "luxury-apartment-kisumu",
    location: "Kisumu",
    address: "Milimani, Kisumu",
    type: "Apartment",
    category: "sale",
    status: "available",
    price: 8500000,
    priceLabel: "KSh 8,500,000",
    bedrooms: 2,
    bathrooms: 2,
    landSize: null,
    squareMeters: 120,
    image: "/images/property-5.jpg",
    images: ["/images/property-5.jpg"],
    description:
      "A stunning luxury apartment with breathtaking views of Lake Victoria. Located in the upscale Milimani area, this apartment offers modern living with premium finishes, open-plan design, and world-class amenities.",
    features: [
      "Lake view balcony",
      "Open-plan living",
      "Modern kitchen",
      "En-suite bedrooms",
      "Smart home features",
      "Rooftop access",
    ],
    amenities: [
      "Swimming pool",
      "Fitness center",
      "Concierge service",
    ],
    featured: true,
    demo: true,
  },
  {
    id: "family-home-thika",
    title: "Elegant Family Residence",
    slug: "family-home-thika",
    location: "Thika",
    address: "Kamiti Road, Thika",
    type: "House",
    category: "sale",
    status: "available",
    price: 12000000,
    priceLabel: "KSh 12,000,000",
    bedrooms: 4,
    bathrooms: 3,
    landSize: "0.25 acres",
    squareMeters: 280,
    image: "/images/property-6.jpg",
    images: ["/images/property-6.jpg"],
    description:
      "An elegant family residence set on a quarter-acre plot in Thika. This home combines classic architecture with modern amenities, featuring expansive living spaces, a well-manicured garden, and a domestic staff quarter.",
    features: [
      "Spacious compound",
      "DSQ included",
      "Modular kitchen",
      "Master bedroom suite",
      "Laundry room",
      "Borehole water",
      "Electric fence",
    ],
    amenities: ["Near schools", "Shopping mall nearby", "Easy highway access"],
    featured: false,
    demo: true,
  },
];

function formatPrice(price) {
  return `KSh ${price.toLocaleString()}`;
}

function getPropertyById(id) {
  return SAMPLE_PROPERTIES.find((p) => p.id === id || p.slug === id) || null;
}

function getFeaturedProperties() {
  return SAMPLE_PROPERTIES.filter((p) => p.featured);
}

function filterProperties({
  category,
  type,
  location,
  minPrice,
  maxPrice,
  bedrooms,
  search,
} = {}) {
  let results = [...SAMPLE_PROPERTIES];

  if (category) {
    results = results.filter((p) => p.category === category);
  }
  if (type && type !== "Any") {
    results = results.filter((p) => p.type === type);
  }
  if (location && location !== "Any") {
    results = results.filter((p) => p.location === location);
  }
  if (minPrice != null && minPrice > 0) {
    results = results.filter((p) => p.price >= minPrice);
  }
  if (maxPrice != null && maxPrice < Infinity) {
    results = results.filter((p) => p.price <= maxPrice);
  }
  if (bedrooms && bedrooms !== "Any") {
    const b = parseInt(bedrooms, 10);
    if (bedrooms === "6+") {
      results = results.filter((p) => p.bedrooms && p.bedrooms >= 6);
    } else {
      results = results.filter((p) => p.bedrooms === b);
    }
  }
  if (search) {
    const q = search.toLowerCase();
    results = results.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.location.toLowerCase().includes(q) ||
        p.type.toLowerCase().includes(q) ||
        p.address.toLowerCase().includes(q)
    );
  }
  return results;
}

function sortProperties(properties, sortBy = "newest") {
  const sorted = [...properties];
  switch (sortBy) {
    case "price-asc":
      sorted.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      sorted.sort((a, b) => b.price - a.price);
      break;
    default:
      break;
  }
  return sorted;
}

export {
  SAMPLE_PROPERTIES,
  formatPrice,
  getPropertyById,
  getFeaturedProperties,
  filterProperties,
  sortProperties,
};
