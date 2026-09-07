import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { SITE, SPORTS_SUBCATEGORIES } from "@/lib/config";
import { getProductsByCategory } from "@/lib/products";
import ProductCard from "../components/ProductCard";
import ScrollReveal from "../components/ScrollReveal";

export const metadata = {
  title: "Sports Goods",
  description: `Shop footballs, basketballs, rackets, training equipment and more at ${SITE.COMPANY_NAME} in Kilifi Town.`,
};

const sportsHighlights = [
  { name: "Football", icon: "⚽", sub: "Football" },
  { name: "Basketball", icon: "🏀", sub: "Basketball" },
  { name: "Tennis", icon: "🎾", sub: "Tennis" },
  { name: "Badminton", icon: "🏸", sub: "Badminton" },
];

export default function SportsPage() {
  const products = getProductsByCategory("sports");

  return (
    <>
      <ScrollReveal />

      {/* Hero */}
      <section className="bg-sports-gradient py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{ backgroundImage: "radial-gradient(circle at 30% 50%, rgba(255,255,255,0.2) 0%, transparent 50%)" }} />
        </div>
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-semibold mb-4">
            <span>⚽</span> Sports Goods
          </div>
          <h1 className="heading-main text-3xl sm:text-4xl md:text-5xl text-white font-bold mb-4">
            Everything You Need to Get Moving
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Footballs, basketballs, rackets, training equipment, sports accessories and more.
          </p>
        </div>
      </section>

      {/* Sports Subcategories */}
      <section className="section-padding bg-brand-cream">
        <div className="container-wide mx-auto">
          <div className="text-center mb-10 reveal">
            <h2 className="heading-main text-2xl sm:text-3xl font-bold mb-4">
              For Football Lovers
            </h2>
            <p className="text-brand-slate-500">Find footballs, football accessories, training equipment and more.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 stagger-children">
            {sportsHighlights.map((item) => (
              <div key={item.name} className="bg-white rounded-2xl p-6 text-center shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                <span className="text-4xl block mb-3">{item.icon}</span>
                <h3 className="font-heading font-semibold text-brand-navy">{item.name}</h3>
                <p className="text-brand-slate-400 text-xs mt-1">{products.filter(p => p.subcategory === item.sub).length} products</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section-padding bg-white">
        <div className="container-wide mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10 reveal">
            <h2 className="heading-main text-2xl sm:text-3xl font-bold">
              All Sports Products
            </h2>
            <Link href="/products?category=sports" className="btn-outline-blue shrink-0">
              View Full Catalogue
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 stagger-children">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-brand-green">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-white font-heading font-bold text-xl mb-2">Ready to Gear Up?</h3>
          <p className="text-white/80 mb-6">Chat with us on WhatsApp to check availability and prices.</p>
          <a
            href={`https://wa.me/${SITE.WHATSAPP.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hello! I'm interested in your sports products.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-brand-green font-bold rounded-xl hover:bg-brand-cream transition-all duration-300 shadow-lg"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Us
          </a>
        </div>
      </section>
    </>
  );
}
