const SITE = {
  COMPANY_NAME: "JAMWACHA PROPERTIES",
  TAGLINE: "Property connections made simple.",
  PHONE: "+254755633717",
  WHATSAPP: "+254755633717",
  EMAIL: "[EMAIL ADDRESS]",
  LOCATION: "[LOCATION]",
  FOUNDER_NAME: "[FATHER'S NAME]",
  FOUNDER_TITLE: "Founder / Real Estate Agent",
  FOUNDER_DESCRIPTION:
    "With a client-focused approach to real estate, [NAME] helps individuals and businesses navigate property opportunities and connect with suitable houses, land, rentals and other real-estate solutions.",
  SOCIAL_FACEBOOK: "",
  SOCIAL_INSTAGRAM: "",
  SOCIAL_TIKTOK: "",
  SOCIAL_LINKEDIN: "",
  DEMO_NOTICE:
    "This is a demo listing. Property details shown are sample data for development purposes.",
};

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Properties", href: "/properties" },
  { label: "Buy", href: "/buy" },
  { label: "Rent", href: "/rent" },
  { label: "Land", href: "/land" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const PROPERTY_TYPES = [
  "House",
  "Apartment",
  "Land",
  "Plot",
  "Commercial",
  "Townhouse",
  "Villa",
  "Maisonette",
];

const LOCATIONS = [
  "Nairobi",
  "Mombasa",
  "Kisumu",
  "Nakuru",
  "Eldoret",
  "Thika",
  "Nyeri",
  "Malindi",
  "Naivasha",
  "Kitale",
];

const BUDGET_RANGES = [
  { label: "Any", min: 0, max: Infinity },
  { label: "Under KSh 1M", min: 0, max: 1000000 },
  { label: "KSh 1M - 5M", min: 1000000, max: 5000000 },
  { label: "KSh 5M - 10M", min: 5000000, max: 10000000 },
  { label: "KSh 10M - 20M", min: 10000000, max: 20000000 },
  { label: "KSh 20M - 50M", min: 20000000, max: 50000000 },
  { label: "KSh 50M+", min: 50000000, max: Infinity },
];

const BEDROOM_OPTIONS = ["Any", "1", "2", "3", "4", "5", "6+"];

const CONTACT_METHODS = ["Phone", "WhatsApp", "Email"];

const LOOKING_FOR_OPTIONS = [
  "House",
  "Apartment",
  "Land",
  "Rental",
  "Commercial Property",
  "Other",
];

export {
  SITE,
  NAV_LINKS,
  PROPERTY_TYPES,
  LOCATIONS,
  BUDGET_RANGES,
  BEDROOM_OPTIONS,
  CONTACT_METHODS,
  LOOKING_FOR_OPTIONS,
};
