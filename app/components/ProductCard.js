import Link from "next/link";
import { Tag, Package, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/config";

const PLACEHOLDER_COLORS = [
  "from-brand-blue/20 to-brand-teal/20",
  "from-brand-green/20 to-brand-blue/20",
  "from-brand-orange/20 to-brand-coral/20",
  "from-pink-200 to-purple-200",
  "from-brand-teal/20 to-brand-blue/20",
];

function getPlaceholderGradient(id) {
  const idx =
    id.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0) %
    PLACEHOLDER_COLORS.length;
  return PLACEHOLDER_COLORS[idx];
}

const categoryColors = {
  sports: "bg-brand-green text-white",
  swimming: "bg-brand-teal text-white",
  handbags: "bg-pink-500 text-white",
  "tote-bags": "bg-purple-500 text-white",
  kids: "bg-brand-orange text-white",
  other: "bg-brand-slate-500 text-white",
};

const categoryLabels = {
  sports: "Sports",
  swimming: "Swimming",
  handbags: "Handbags",
  "tote-bags": "Tote Bags",
  kids: "Kids",
  other: "Other",
};

const availabilityBadge = {
  Available: "badge-available",
  "Limited Stock": "badge-limited",
  "Sold Out": "badge-sold-out",
};

export default function ProductCard({ product }) {
  const isPlaceholderImage = product.images?.[0]?.startsWith("/images/");
  const whatsappNumber = SITE.WHATSAPP.replace(/[^0-9]/g, "");
  const isWhatsappReady = whatsappNumber.length >= 8;

  return (
    <Link href={`/products/${product.id}`} className="card-product group block">
      <div className="relative aspect-square overflow-hidden">
        {isPlaceholderImage ? (
          <div
            className={`w-full h-full bg-gradient-to-br ${getPlaceholderGradient(
              product.id
            )} flex items-center justify-center`}
          >
            <div className="text-center">
              <Package className="w-12 h-12 mx-auto mb-2 text-brand-slate-300" />
              <span className="text-xs font-medium text-brand-slate-400">
                {product.subcategory}
              </span>
            </div>
          </div>
        ) : (
          <img
            src={product.images?.[0]}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          <span
            className={`px-2.5 py-1 text-[10px] font-bold rounded-full uppercase tracking-wide ${
              categoryColors[product.category] || "bg-brand-slate-500 text-white"
            }`}
          >
            {categoryLabels[product.category] || product.category}
          </span>
          {product.newArrival && <span className="badge-new">NEW</span>}
        </div>

        <div className="absolute top-3 right-3">
          <span className={`px-2.5 py-1 text-[10px] font-bold rounded-full ${availabilityBadge[product.availability] || "bg-brand-slate-400 text-white"}`}>
            {product.availability}
          </span>
        </div>

        <div className="absolute bottom-3 left-3 right-3">
          <div className="flex items-center gap-1.5 mb-1">
            <span className="badge-ex-uk text-[9px]">{product.condition}</span>
            {product.size && (
              <span className="px-2 py-0.5 text-[9px] font-bold rounded-full bg-white/90 text-brand-slate-700">
                Size: {product.size}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center gap-1.5 mb-1.5">
          <Tag className="w-3.5 h-3.5 text-brand-slate-400" />
          <span className="text-brand-slate-400 text-xs font-medium uppercase tracking-wide">
            {product.subcategory}
          </span>
        </div>

        <h3 className="font-heading font-semibold text-brand-navy text-base leading-tight mb-2 group-hover:text-brand-blue transition-colors">
          {product.name}
        </h3>

        <div className="flex items-center justify-between mb-3">
          <span className="text-brand-blue font-bold text-lg">
            {product.priceLabel}
          </span>
        </div>

        {isWhatsappReady && product.availability !== "Sold Out" ? (
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hello, I'm interested in the ${product.name}. Is it still available?`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[#25D366]/10 text-[#25D366] text-sm font-semibold hover:bg-[#25D366] hover:text-white transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <MessageCircle className="w-4 h-4" />
            Ask About This Product
          </a>
        ) : (
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-brand-blue/10 text-brand-blue text-sm font-semibold hover:bg-brand-blue hover:text-white transition-all duration-300"
          >
            Ask About This Product
          </Link>
        )}
      </div>
    </Link>
  );
}
