const SAMPLE_PRODUCTS = [
  {
    id: "football-standard",
    name: "Standard Football",
    slug: "football-standard",
    category: "sports",
    subcategory: "Football",
    description: "Durable standard football perfect for training and casual games. Great quality at an affordable price.",
    price: null,
    priceLabel: "Ask Us",
    condition: "Ex-UK",
    availability: "Available",
    size: null,
    images: ["/images/product-1.jpg"],
    featured: true,
    newArrival: true,
    dateAdded: "2026-09-01",
  },
  {
    id: "basketball-indoor-outdoor",
    name: "Indoor/Outdoor Basketball",
    slug: "basketball-indoor-outdoor",
    category: "sports",
    subcategory: "Basketball",
    description: "Quality basketball suitable for both indoor and outdoor play. Excellent grip and bounce.",
    price: null,
    priceLabel: "Ask Us",
    condition: "Ex-UK",
    availability: "Available",
    size: null,
    images: ["/images/product-2.jpg"],
    featured: true,
    newArrival: false,
    dateAdded: "2026-08-28",
  },
  {
    id: "tennis-racket-pro",
    name: "Tennis Racket",
    slug: "tennis-racket-pro",
    category: "sports",
    subcategory: "Tennis",
    description: "Lightweight tennis racket with comfortable grip. Suitable for beginners and intermediate players.",
    price: 2500,
    priceLabel: "KSh 2,500",
    condition: "Ex-UK",
    availability: "Available",
    size: null,
    images: ["/images/product-3.jpg"],
    featured: true,
    newArrival: true,
    dateAdded: "2026-09-05",
  },
  {
    id: "badminton-racket-set",
    name: "Badminton Racket Set",
    slug: "badminton-racket-set",
    category: "sports",
    subcategory: "Badminton",
    description: "Set of badminton rackets perfect for recreational play. Lightweight and durable frame.",
    price: null,
    priceLabel: "Ask Us",
    condition: "Ex-UK",
    availability: "Limited Stock",
    size: null,
    images: ["/images/product-4.jpg"],
    featured: false,
    newArrival: false,
    dateAdded: "2026-08-20",
  },
  {
    id: "swimming-goggles-clear",
    name: "Swimming Goggles - Clear",
    slug: "swimming-goggles-clear",
    category: "swimming",
    subcategory: "Swimming Goggles",
    description: "Clear lens swimming goggles with comfortable seal. Anti-fog coating for clear underwater vision.",
    price: 800,
    priceLabel: "KSh 800",
    condition: "New",
    availability: "Available",
    size: null,
    images: ["/images/product-5.jpg"],
    featured: true,
    newArrival: true,
    dateAdded: "2026-09-03",
  },
  {
    id: "flippers-size-8",
    name: "Swimming Flippers",
    slug: "flippers-size-8",
    category: "swimming",
    subcategory: "Flippers",
    description: "Comfortable swimming flippers for improved speed and efficiency in the water.",
    price: 1500,
    priceLabel: "KSh 1,500",
    condition: "Ex-UK",
    availability: "Available",
    size: "8",
    images: ["/images/product-6.jpg"],
    featured: true,
    newArrival: false,
    dateAdded: "2026-08-25",
  },
  {
    id: "swimsuit-womens",
    name: "Women's Swimsuit",
    slug: "swimsuit-womens",
    category: "swimming",
    subcategory: "Swimsuits",
    description: "Stylish women's swimsuit with comfortable fit. Perfect for pool and beach.",
    price: null,
    priceLabel: "Ask Us",
    condition: "Ex-UK",
    availability: "Limited Stock",
    size: "M",
    images: ["/images/product-7.jpg"],
    featured: false,
    newArrival: true,
    dateAdded: "2026-09-06",
  },
  {
    id: "bikini-set",
    name: "Bikini Set",
    slug: "bikini-set",
    category: "swimming",
    subcategory: "Bikinis",
    description: "Fashionable bikini set. Various styles available — ask in-store for current selection.",
    price: null,
    priceLabel: "Ask Us",
    condition: "Ex-UK",
    availability: "Available",
    size: "S",
    images: ["/images/product-8.jpg"],
    featured: false,
    newArrival: false,
    dateAdded: "2026-08-15",
  },
  {
    id: "handbag-leather-brown",
    name: "Leather Handbag - Brown",
    slug: "handbag-leather-brown",
    category: "handbags",
    subcategory: "Handbags",
    description: "Elegant brown leather handbag. Ex-UK quality with stylish design and ample space.",
    price: 2000,
    priceLabel: "KSh 2,000",
    condition: "Ex-UK",
    availability: "Available",
    size: null,
    images: ["/images/product-9.jpg"],
    featured: true,
    newArrival: true,
    dateAdded: "2026-09-04",
  },
  {
    id: "tote-bag-canvas",
    name: "Canvas Tote Bag",
    slug: "tote-bag-canvas",
    category: "tote-bags",
    subcategory: "Tote Bags",
    description: "Durable canvas tote bag. Perfect for everyday use, shopping or beach trips.",
    price: 1200,
    priceLabel: "KSh 1,200",
    condition: "Ex-UK",
    availability: "Available",
    size: null,
    images: ["/images/product-10.jpg"],
    featured: true,
    newArrival: false,
    dateAdded: "2026-08-30",
  },
  {
    id: "kids-toy-car",
    name: "Toy Car Set",
    slug: "kids-toy-car",
    category: "kids",
    subcategory: "Children's Toys",
    description: "Set of hard plastic toy cars. Durable and fun for children of all ages.",
    price: 600,
    priceLabel: "KSh 600",
    condition: "Ex-UK",
    availability: "Available",
    size: null,
    images: ["/images/product-11.jpg"],
    featured: true,
    newArrival: true,
    dateAdded: "2026-09-02",
  },
  {
    id: "kids-board-game",
    name: "Board Game - Classic",
    slug: "kids-board-game",
    category: "kids",
    subcategory: "Games",
    description: "Classic board game for family fun. Complete set with all pieces included.",
    price: null,
    priceLabel: "Ask Us",
    condition: "Ex-UK",
    availability: "Limited Stock",
    size: null,
    images: ["/images/product-12.jpg"],
    featured: false,
    newArrival: false,
    dateAdded: "2026-08-18",
  },
  {
    id: "training-cones-set",
    name: "Training Cones Set",
    slug: "training-cones-set",
    category: "sports",
    subcategory: "Training Equipment",
    description: "Set of bright training cones for drills and practice sessions. Essential coaching equipment.",
    price: 500,
    priceLabel: "KSh 500",
    condition: "New",
    availability: "Available",
    size: null,
    images: ["/images/product-13.jpg"],
    featured: false,
    newArrival: false,
    dateAdded: "2026-08-10",
  },
  {
    id: "swimming-accessories-kit",
    name: "Swimming Accessories Kit",
    slug: "swimming-accessories-kit",
    category: "swimming",
    subcategory: "Swimming Accessories",
    description: "Kit containing swimming cap, nose clip and ear plugs. Everything you need for the pool.",
    price: 400,
    priceLabel: "KSh 400",
    condition: "New",
    availability: "Available",
    size: null,
    images: ["/images/product-14.jpg"],
    featured: false,
    newArrival: true,
    dateAdded: "2026-09-07",
  },
  {
    id: "handbag-crossbody",
    name: "Crossbody Handbag",
    slug: "handbag-crossbody",
    category: "handbags",
    subcategory: "Handbags",
    description: "Compact crossbody handbag. Perfect for going out and everyday carry.",
    price: null,
    priceLabel: "Ask Us",
    condition: "Ex-UK",
    availability: "Available",
    size: null,
    images: ["/images/product-15.jpg"],
    featured: false,
    newArrival: true,
    dateAdded: "2026-09-06",
  },
  {
    id: "kids-outdoor-toy",
    name: "Outdoor Play Ball",
    slug: "kids-outdoor-toy",
    category: "kids",
    subcategory: "Outdoor Toys",
    description: "Colorful outdoor play ball. Soft and safe for young children.",
    price: 350,
    priceLabel: "KSh 350",
    condition: "New",
    availability: "Available",
    size: null,
    images: ["/images/product-16.jpg"],
    featured: false,
    newArrival: false,
    dateAdded: "2026-08-22",
  },
];

function formatPrice(price) {
  if (!price) return "Ask Us";
  return `KSh ${price.toLocaleString()}`;
}

function getProductById(id) {
  return SAMPLE_PRODUCTS.find((p) => p.id === id || p.slug === id) || null;
}

function getFeaturedProducts() {
  return SAMPLE_PRODUCTS.filter((p) => p.featured);
}

function getNewArrivals() {
  return SAMPLE_PRODUCTS.filter((p) => p.newArrival);
}

function getProductsByCategory(category) {
  return SAMPLE_PRODUCTS.filter((p) => p.category === category);
}

function getProductsBySubcategory(subcategory) {
  return SAMPLE_PRODUCTS.filter((p) => p.subcategory === subcategory);
}

function filterProducts({
  category,
  subcategory,
  condition,
  availability,
  search,
} = {}) {
  let results = [...SAMPLE_PRODUCTS];

  if (category) {
    results = results.filter((p) => p.category === category);
  }
  if (subcategory) {
    results = results.filter((p) => p.subcategory === subcategory);
  }
  if (condition && condition !== "All") {
    results = results.filter((p) => p.condition === condition);
  }
  if (availability && availability !== "All") {
    results = results.filter((p) => p.availability === availability);
  }
  if (search) {
    const q = search.toLowerCase();
    results = results.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.subcategory.toLowerCase().includes(q)
    );
  }
  return results;
}

function getAllProducts() {
  return SAMPLE_PRODUCTS;
}

export {
  SAMPLE_PRODUCTS,
  formatPrice,
  getProductById,
  getFeaturedProducts,
  getNewArrivals,
  getProductsByCategory,
  getProductsBySubcategory,
  filterProducts,
  getAllProducts,
};
