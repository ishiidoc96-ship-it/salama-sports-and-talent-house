import Link from "next/link";
import { Sparkles, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/config";
import { getNewArrivals } from "@/lib/products";
import ProductCard from "../components/ProductCard";
import ScrollReveal from "../components/ScrollReveal";

export const metadata = {
  title: "New Arrivals",
  description: `See the latest products and fresh finds at ${SITE.COMPANY_NAME} in Kilifi Town.`,
};

export default function NewArrivalsPage() {
  const products = getNewArrivals();

  return (
    <>
      <ScrollReveal />

      <section className="bg-brand-navy py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{ backgroundImage: "radial-gradient(circle at 30% 50%, rgba(249,115,22,0.2) 0%, transparent 50%)" }} />
        </div>
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/20 text-brand-orange text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" /> Just In
          </div>
          <h1 className="heading-main text-3xl sm:text-4xl md:text-5xl text-white font-bold mb-4">
            Fresh Finds
          </h1>
          <p className="text-brand-slate-300 text-lg max-w-2xl mx-auto">
            New products and interesting finds are always arriving.
          </p>
        </div>
      </section>

      <section className="section-padding bg-brand-cream">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 stagger-children">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {products.length === 0 && (
            <div className="text-center py-20">
              <Sparkles className="w-12 h-12 mx-auto text-brand-slate-300 mb-4" />
              <h3 className="font-heading font-semibold text-brand-navy text-xl mb-2">
                No New Arrivals Yet
              </h3>
              <p className="text-brand-slate-500">Check back soon for fresh stock!</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-12 bg-brand-orange">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-white font-heading font-bold text-xl mb-2">Want to Know When New Stock Arrives?</h3>
          <p className="text-white/80 mb-6">Follow us or chat with us on WhatsApp for the latest updates.</p>
          <a
            href={`https://wa.me/${SITE.WHATSAPP.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hello! I'd like to know when new stock arrives.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-brand-orange font-bold rounded-xl hover:bg-brand-cream transition-all duration-300 shadow-lg"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Us
          </a>
        </div>
      </section>
    </>
  );
}
