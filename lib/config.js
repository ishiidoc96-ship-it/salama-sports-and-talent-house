const SITE = {
  COMPANY_NAME: "SALAMA SPORTS AND TALENT HOUSE",
  SHORT_NAME: "Salama Sports",
  TAGLINE: "Gear Up. Dive In. Discover More.",
  PHONE: "[PHONE NUMBER]",
  WHATSAPP: "[WHATSAPP NUMBER]",
  EMAIL: "[EMAIL ADDRESS]",
  LOCATION: "Along Absa Bank Road, Kilifi Town, Kilifi County, Kenya",
  OWNER_NAME: "Priscilla Salama Kitsao",
  SOCIAL_FACEBOOK: "",
  SOCIAL_INSTAGRAM: "",
  SOCIAL_TIKTOK: "",
};

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Sports", href: "/sports" },
  { label: "Swimming", href: "/swimming" },
  { label: "Handbags", href: "/handbags" },
  { label: "Kids", href: "/kids" },
  { label: "New Arrivals", href: "/new-arrivals" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const CATEGORIES = [
  { id: "sports", label: "Sports", icon: "⚽", color: "emerald" },
  { id: "swimming", label: "Swimming", icon: "🏊", color: "blue" },
  { id: "handbags", label: "Handbags", icon: "👜", color: "pink" },
  { id: "tote-bags", label: "Tote Bags", icon: "🛍️", color: "purple" },
  { id: "kids", label: "Kids", icon: "🧸", color: "amber" },
  { id: "other", label: "Other", icon: "✨", color: "stone" },
];

const SPORTS_SUBCATEGORIES = [
  "Football",
  "Basketball",
  "Tennis",
  "Badminton",
  "Rackets",
  "Training Equipment",
  "Sports Accessories",
  "Other Sports Goods",
];

const SWIMMING_SUBCATEGORIES = [
  "Swimming Goggles",
  "Flippers",
  "Swimsuits",
  "Bikinis",
  "Swimming Accessories",
];

const HANDBAGS_SUBCATEGORIES = [
  "Handbags",
  "Tote Bags",
  "Fashion Accessories",
];

const KIDS_SUBCATEGORIES = [
  "Children's Toys",
  "Games",
  "Outdoor Toys",
  "Play Items",
  "Other Children's Products",
];

const CONDITIONS = ["Ex-UK", "New", "Used", "Other"];
const AVAILABILITY_OPTIONS = ["Available", "Limited Stock", "Sold Out"];

const SEARCH_OPTIONS = [
  { label: "Sports", value: "sports" },
  { label: "Swimming", value: "swimming" },
  { label: "Handbags", value: "handbags" },
  { label: "Kids", value: "kids" },
  { label: "Other", value: "other" },
];

export {
  SITE,
  NAV_LINKS,
  CATEGORIES,
  SPORTS_SUBCATEGORIES,
  SWIMMING_SUBCATEGORIES,
  HANDBAGS_SUBCATEGORIES,
  KIDS_SUBCATEGORIES,
  CONDITIONS,
  AVAILABILITY_OPTIONS,
  SEARCH_OPTIONS,
};
