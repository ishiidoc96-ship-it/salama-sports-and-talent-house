import Link from "next/link";
import { notFound } from "next/navigation";
import { Tag, Package, MessageCircle, Phone, MapPin, ChevronRight } from "lucide-react";
import { SITE } from "@/lib/config";
import { getProductById, getProductsByCategory } from "@/lib/products";
import ProductCard from "../../components/ProductCard";
import ScrollReveal from "../../components/ScrollReveal";

const PLACEHOLDER_COLORS = ["from-brand-blue/20 to-brand-teal/20","from-brand-green/20 to-brand-blue/20","from-brand-orange/20 to-brand-coral/20","from-pink-200 to-purple-200","from-brand-teal/20 to-brand-blue/20"];
function getPlaceholderGradient(id) { const idx = id.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0) % PLACEHOLDER_COLORS.length; return PLACEHOLDER_COLORS[idx]; }

export function generateMetadata({ params }) {
  const product = getProductById(params.id);
  if (!product) return { title: "Product Not Found" };
  return { title: product.name, description: product.description };
}

export default function ProductDetailPage({ params }) {
  const product = getProductById(params.id);
  if (!product) notFound();

  const whatsappNumber = SITE.WHATSAPP.replace(/[^0-9]/g, "");
  const isWhatsappReady = whatsappNumber.length >= 8;
  const related = getProductsByCategory(product.category).filter((p) => p.id !== product.id).slice(0, 4);
  const availabilityBadge = { Available: "badge-available", "Limited Stock": "badge-limited", "Sold Out": "badge-sold-out" };

  return (
    <>
      <ScrollReveal />
      <section className="section-padding bg-brand-cream">
        <div className="container-wide mx-auto">
          <nav className="flex items-center gap-2 text-sm text-brand-slate-500 mb-8">
            <Link href="/" className="hover:text-brand-blue transition-colors">Home</Link><ChevronRight className="w-3.5 h-3.5" />
            <Link href="/products" className="hover:text-brand-blue transition-colors">Products</Link><ChevronRight className="w-3.5 h-3.5" />
            <Link href={"/products?category=" + product.category} className="hover:text-brand-blue transition-colors capitalize">{product.category}</Link><ChevronRight className="w-3.5 h-3.5" />
            <span className="text-brand-navy font-medium">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div className="reveal">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-white shadow-card">
                {product.images?.[0]?.startsWith("/images/") ? (
                  <div className={`w-full h-full bg-gradient-to-br ${getPlaceholderGradient(product.id)} flex items-center justify-center`}>
                    <div className="text-center"><Package className="w-20 h-20 mx-auto mb-3 text-brand-slate-200" /><span className="text-sm font-medium text-brand-slate-400">{product.subcategory}</span></div>
                  </div>
                ) : (<img src={product.images?.[0]} alt={product.name} className="w-full h-full object-cover" />)}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {product.newArrival && <span className="badge-new">NEW</span>}<span className="badge-ex-uk">{product.condition}</span>
                </div>
              </div>
            </div>

            <div className="reveal">
              <div className="flex items-center gap-2 mb-3"><Tag className="w-4 h-4 text-brand-slate-400" /><span className="text-brand-slate-500 text-sm font-medium uppercase tracking-wide">{product.subcategory}</span></div>
              <h1 className="heading-main text-3xl sm:text-4xl font-bold mb-4">{product.name}</h1>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className={`px-3 py-1.5 text-xs font-bold rounded-full ${availabilityBadge[product.availability] || "bg-brand-slate-400 text-white"}`}>{product.availability}</span>
                {product.size && <span className="px-3 py-1.5 text-xs font-bold rounded-full bg-brand-slate-100 text-brand-slate-700">Size: {product.size}</span>}
              </div>
              <div className="mb-6"><span className="text-brand-blue font-bold text-3xl">{product.priceLabel}</span></div>
              <p className="text-brand-slate-600 leading-relaxed mb-8">{product.description}</p>

              <div className="bg-brand-slate-50 rounded-2xl p-6 mb-8">
                <h3 className="font-heading font-semibold text-brand-navy mb-4">Product Details</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div><span className="text-brand-slate-500">Category</span><p className="font-medium text-brand-navy capitalize">{product.category}</p></div>
                  <div><span className="text-brand-slate-500">Condition</span><p className="font-medium text-brand-navy">{product.condition}</p></div>
                  <div><span className="text-brand-slate-500">Availability</span><p className="font-medium text-brand-navy">{product.availability}</p></div>
                  {product.size && <div><span className="text-brand-slate-500">Size</span><p className="font-medium text-brand-navy">{product.size}</p></div>}
                </div>
              </div>

              <div className="space-y-3">
                {isWhatsappReady && product.availability !== "Sold Out" ? (
                  <a href={"https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent("Hello, I'm interested in the " + product.name + ". Is it still available?")} target="_blank" rel="noopener noreferrer" className="btn-whatsapp w-full justify-center text-base !py-4">
                    <MessageCircle className="w-5 h-5 mr-2" />WhatsApp About This Item
                  </a>
                ) : (<Link href="/contact" className="btn-primary w-full justify-center text-base !py-4">Ask About This Product</Link>)}
                <a href={"tel:" + SITE.PHONE} className="btn-secondary w-full justify-center text-base !py-4"><Phone className="w-5 h-5 mr-2" />Call the Shop</a>
              </div>
              <div className="mt-6 flex items-center gap-2 text-brand-slate-500 text-sm"><MapPin className="w-4 h-4" /><span>{SITE.LOCATION}</span></div>
            </div>
          </div>

          {related.length > 0 && (
            <div className="mt-20">
              <h2 className="heading-main text-2xl sm:text-3xl font-bold mb-8">Related Products</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">{related.map((p) => (<ProductCard key={p.id} product={p} />))}</div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
