import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/config";
import { getProductsByCategory } from "@/lib/products";
import ProductCard from "../components/ProductCard";
import ScrollReveal from "../components/ScrollReveal";

export const metadata = {
  title: "Swimming",
  description: `Shop swimming goggles, flippers, swimsuits, bikinis and swimming accessories at ${SITE.COMPANY_NAME} in Kilifi Town.`,
};

export default function SwimmingPage() {
  const products = getProductsByCategory("swimming");

  return (
    <>
      <ScrollReveal />

      <section className="bg-swim-gradient py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{ backgroundImage: "radial-gradient(circle at 30% 50%, rgba(255,255,255,0.2) 0%, transparent 50%)" }} />
        </div>
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-semibold mb-4">
            <span>🏊</span> Swimming
          </div>
          <h1 className="heading-main text-3xl sm:text-4xl md:text-5xl text-white font-bold mb-4">
            Make a Splash
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Get ready for the pool, beach or your next swim.
          </p>
        </div>
      </section>

      <section className="section-padding bg-brand-cream">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-12 stagger-children">
            {[
              { name: "Goggles", icon: "🥽" },
              { name: "Flippers", icon: "🦶" },
              { name: "Swimsuits", icon: "👙" },
              { name: "Bikinis", icon: "🩱" },
              { name: "Accessories", icon: "🏊" },
            ].map((item) => (
              <div key={item.name} className="bg-white rounded-2xl p-5 text-center shadow-card">
                <span className="text-3xl block mb-2">{item.icon}</span>
                <h3 className="font-heading font-semibold text-brand-navy text-sm">{item.name}</h3>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 stagger-children">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-brand-teal">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-white font-heading font-bold text-xl mb-2">Ready to Swim?</h3>
          <p className="text-white/80 mb-6">Chat with us on WhatsApp to check availability and prices.</p>
          <a
            href={`https://wa.me/${SITE.WHATSAPP.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hello! I'm interested in your swimming products.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-brand-teal font-bold rounded-xl hover:bg-brand-cream transition-all duration-300 shadow-lg"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Us
          </a>
        </div>
      </section>
    </>
  );
}
