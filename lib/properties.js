export const SAMPLE_PROPERTIES = [
  {
    id: "villa-karen-001",
    title: "Luxury 5-Bedroom Villa in Karen",
    type: "Villa",
    category: "sale",
    location: "Karen",
    address: "Karen Road, Nairobi",
    price: 85000000,
    priceLabel: "KSh 85,000,000",
    bedrooms: 5,
    bathrooms: 4,
    landSize: "1 Acre",
    description: "A stunning luxury villa nestled in the prestigious Karen neighborhood. This property features modern architecture, a spacious garden, swimming pool, and state-of-the-art security systems. Perfect for families seeking privacy and elegance in one of Nairobi's most exclusive addresses.",
    features: ["Private Swimming Pool", "Gated Community", "CCTV Security", "Staff Quarters", "Double Garage", "Garden", "Modern Kitchen", "Air Conditioning"],
    amenities: ["24/7 Security", "Backup Generator", "Borehole Water", "Fitness Center", "Children's Play Area"],
    image: "/images/properties/villa-karen.jpg",
    yearBuilt: 2022,
    demo: true
  },
  {
    id: "apartment-westlands-002",
    title: "Modern 3-Bedroom Apartment in Westlands",
    type: "Apartment",
    category: "sale",
    location: "Westlands",
    address: "Waiyaki Way, Westlands",
    price: 22000000,
    priceLabel: "KSh 22,000,000",
    bedrooms: 3,
    bathrooms: 3,
    landSize: null,
    description: "Contemporary apartment in the heart of Westlands with panoramic city views. Features an open-plan living area, fitted kitchen with premium appliances, and a private balcony. Located near shopping malls, restaurants, and business centers.",
    features: ["City Views", "Fitted Kitchen", "Balcony", "En-Suite Bedrooms", "Visitor Parking", "Elevator Access"],
    amenities: ["Swimming Pool", "Gym", "CCTV", "Backup Power", "Concierge Service"],
    image: "/images/properties/apartment-westlands.jpg",
    yearBuilt: 2023,
    demo: true
  },
  {
    id: "house-kilimani-003",
    title: "Spacious 4-Bedroom Family House in Kilimani",
    type: "House",
    category: "sale",
    location: "Kilimani",
    address: "Lenana Road, Kilimani",
    price: 35000000,
    priceLabel: "KSh 35,000,000",
    bedrooms: 4,
    bathrooms: 3,
    landSize: "0.25 Acres",
    description: "Beautiful family home in a quiet cul-de-sac in Kilimani. Features include a large living room, modern kitchen, servant's quarter, and a well-maintained garden. Close to schools, hospitals, and shopping centers.",
    features: ["Cul-de-sac Location", "Large Garden", "Servant's Quarter", "Modern Kitchen", "TV Room", "Study Room"],
    amenities: ["Perimeter Wall", "Electric Fence", "Borehole", "Car Port"],
    image: "/images/properties/house-kilimani.jpg",
    yearBuilt: 2020,
    demo: true
  },
  {
    id: "land-ruiru-004",
    title: "1-Acre Plot in Ruiru",
    type: "Land",
    category: "land",
    location: "Ruiru",
    address: "Thika Road, Ruiru",
    price: 5500000,
    priceLabel: "KSh 5,500,000",
    bedrooms: null,
    bathrooms: null,
    landSize: "1 Acre",
    description: "Prime plot along Thika Super Highway with ready title deed. Excellent for residential or commercial development. Close to Ruiru town center, schools, and shopping malls. All services available including water, electricity, and tarred roads.",
    features: ["Title Deed Ready", "Near Highway", "All Services Available", "Commercial Zone", "Clear boundaries"],
    amenities: ["Water Connection", "Electricity", "Tarred Road Access", "Drainage System"],
    image: "/images/properties/land-ruiru.jpg",
    yearBuilt: null,
    demo: true
  },
  {
    id: "rent-apartment-kilimani-005",
    title: "2-Bedroom Apartment for Rent in Kilimani",
    type: "Apartment",
    category: "rent",
    location: "Kilimani",
    address: "Adams Arcade, Kilimani",
    price: 65000,
    priceLabel: "KSh 65,000/month",
    bedrooms: 2,
    bathrooms: 2,
    landSize: null,
    description: "Well-maintained apartment in a secure compound near Adams Arcade. Spacious rooms with good lighting, modern fittings, and ample parking. Walking distance to shopping facilities and public transport.",
    features: ["Ample Parking", "Good Lighting", "Modern Fittings", "Secure Compound", "Balcony"],
    amenities: ["Security Guard", "Garbage Collection", "Water Tank", "Playground"],
    image: "/images/properties/rent-kilimani.jpg",
    yearBuilt: 2019,
    demo: true
  },
  {
    id: "commercial-westlands-006",
    title: "Office Space in Westlands Business Hub",
    type: "Commercial",
    category: "commercial",
    location: "Westlands",
    address: "Westgate Business Park, Westlands",
    price: 150000,
    priceLabel: "KSh 150,000/month",
    bedrooms: null,
    bathrooms: null,
    landSize: "2000 sqft",
    description: "Premium office space in a Grade A building in Westlands. Features open-plan layout, meeting rooms, dedicated parking, and 24/7 access. Ideal for corporate offices, tech companies, and professional firms.",
    features: ["Open Plan Layout", "Meeting Rooms", "Reception Area", "Server Room", "Dedicated Parking"],
    amenities: ["24/7 Security", "Backup Generator", "Fiber Internet", "Central AC", "Elevator"],
    image: "/images/properties/office-westlands.jpg",
    yearBuilt: 2021,
    demo: true
  }
];

export function filterProperties({ category, type, location, minPrice, maxPrice, bedrooms, search } = {}) {
  var results = SAMPLE_PROPERTIES.slice();
  if (category) {
    results = results.filter(function(p) { return p.category === category; });
  }
  if (type) {
    results = results.filter(function(p) { return p.type === type; });
  }
  if (location) {
    results = results.filter(function(p) { return p.location === location; });
  }
  if (minPrice != null) {
    results = results.filter(function(p) { return p.price >= minPrice; });
  }
  if (maxPrice != null) {
    results = results.filter(function(p) { return p.price <= maxPrice; });
  }
  if (bedrooms) {
    var num = parseInt(bedrooms, 10);
    if (bedrooms === "6+") {
      results = results.filter(function(p) { return p.bedrooms != null && p.bedrooms >= 6; });
    } else if (!isNaN(num)) {
      results = results.filter(function(p) { return p.bedrooms === num; });
    }
  }
  if (search) {
    var q = search.toLowerCase();
    results = results.filter(function(p) {
      return p.title.toLowerCase().indexOf(q) !== -1 ||
        p.location.toLowerCase().indexOf(q) !== -1 ||
        p.type.toLowerCase().indexOf(q) !== -1 ||
        p.address.toLowerCase().indexOf(q) !== -1;
    });
  }
  return results;
}

export function sortProperties(properties, sortBy) {
  var arr = properties.slice();
  switch (sortBy) {
    case "price-asc":
      arr.sort(function(a, b) { return a.price - b.price; });
      break;
    case "price-desc":
      arr.sort(function(a, b) { return b.price - a.price; });
      break;
    case "newest":
    default:
      arr.sort(function(a, b) { return (b.yearBuilt || 0) - (a.yearBuilt || 0); });
      break;
  }
  return arr;
}

export function getPropertyById(id) {
  return SAMPLE_PROPERTIES.find(function(p) { return p.id === id; }) || null;
}
