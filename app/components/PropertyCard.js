import Link from "next/link";
import { MapPin, BedDouble, Bath, Maximize, ArrowRight } from "lucide-react";

var PLACEHOLDER_COLORS = [
  "from-brand-stone-700 to-brand-stone-900",
  "from-brand-stone-600 to-brand-stone-800",
  "from-brand-gold/30 to-brand-stone-800",
  "from-brand-stone-800 to-brand-charcoal"
];

function getPlaceholderGradient(id) {
  var idx = 0;
  for (var i = 0; i < id.length; i++) { idx += id.charCodeAt(i); }
  return PLACEHOLDER_COLORS[idx % PLACEHOLDER_COLORS.length];
}

var categoryColors = {
  sale: "bg-brand-gold text-white",
  rent: "bg-blue-600 text-white",
  land: "bg-emerald-600 text-white",
  commercial: "bg-purple-600 text-white"
};
var categoryLabels = { sale: "For Sale", rent: "For Rent", land: "Land", commercial: "Commercial" };

export default function PropertyCard({ property }) {
  var isPlaceholderImage = property.image && property.image.startsWith("/images/");
  return (
    <Link href={"/properties/" + property.id} className="card-property group block">
      <div className="relative aspect-[4/3] overflow-hidden">
        {isPlaceholderImage ? (
          <div className={"w-full h-full bg-gradient-to-br " + getPlaceholderGradient(property.id) + " flex items-center justify-center"}>
            <div className="text-center text-white/70">
              <Maximize className="w-10 h-10 mx-auto mb-2 opacity-40" />
              <span className="text-xs font-medium opacity-60">{property.type}</span>
            </div>
          </div>
        ) : (
          <img src={property.image} alt={property.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <span className={"absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full " + (categoryColors[property.category] || "bg-brand-stone-800 text-white")}>{categoryLabels[property.category] || property.category}</span>
        {property.demo && <span className="absolute top-3 right-3 px-2 py-1 text-[10px] font-medium rounded bg-black/40 text-white/80 backdrop-blur-sm">DEMO</span>}
        <div className="absolute bottom-3 left-3 right-3">
          <h3 className="text-white font-serif font-semibold text-lg leading-tight mb-1">{property.title}</h3>
          <div className="flex items-center gap-1 text-white/80 text-sm"><MapPin className="w-3.5 h-3.5" /><span>{property.location}</span></div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-brand-gold font-bold text-lg">{property.priceLabel}</span>
          <span className="text-brand-stone-500 text-xs font-medium uppercase tracking-wide">{property.type}</span>
        </div>
        <div className="flex items-center gap-4 text-brand-stone-500 text-sm mb-3">
          {property.bedrooms != null && <span className="flex items-center gap-1"><BedDouble className="w-4 h-4" /><span>{property.bedrooms} Beds</span></span>}
          {property.bathrooms != null && <span className="flex items-center gap-1"><Bath className="w-4 h-4" /><span>{property.bathrooms} Baths</span></span>}
          {property.landSize && <span className="flex items-center gap-1"><Maximize className="w-4 h-4" /><span>{property.landSize}</span></span>}
        </div>
        <div className="flex items-center justify-between pt-3 border-t border-brand-stone-100">
          <span className="text-brand-stone-500 text-xs">{property.address}</span>
          <span className="flex items-center gap-1 text-brand-gold text-sm font-medium group-hover:gap-2 transition-all">View Details<ArrowRight className="w-4 h-4" /></span>
        </div>
      </div>
    </Link>
  );
}
