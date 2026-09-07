import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/config";
import { getProductsByCategory } from "@/lib/products";
import ProductCard from "../components/ProductCard";
import ScrollReveal from "../components/ScrollReveal";

export const metadata = { title: "Sports Goods", description: "Shop footballs, basketballs, rackets, training equipment and more at SALAMA SPORTS AND TALENT HOUSE in Kilifi Town." };

export default function SportsPage() {
  const products = getProductsByCategory("sports");
  return (
    <>
      <ScrollReveal />
      <section className="bg-sports-gradient py-16 sm:py-20 relative overflow-hidden">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-semibold mb-4"><span>Sports</span> Sports Goods</div>
          <h1 className="heading-main text-3xl sm:text-4xl md:text-5xl text-white font-bold mb-4">Everything You Need to Get Moving</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">Footballs, basketballs, rackets, training equipment, sports accessories and more.</p>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-wide mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10 reveal">
            <h2 className="heading-main text-2xl sm:text-3xl font-bold">All Sports Products</h2>
            <Link href="/products?category=sports" className="btn-outline-blue shrink-0">View Full Catalogue<ArrowRight className="w-4 h-4 ml-2" /></Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 stagger-children">
            {products.map((product) => (<ProductCard key={product.id} product={product} />))}
          </div>
        </div>
      </section>
      <section className="py-12 bg-brand-green">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-white font-heading font-bold text-xl mb-2">Ready to Gear Up?</h3>
          <p className="text-white/80 mb-6">Chat with us on WhatsApp to check availability and prices.</p>
          <a href={"https://wa.me/" + "PLACEHOLDER" + "?text=" + encodeURIComponent("Hello! I'm interested in your sports products.")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-brand-green font-bold rounded-xl hover:bg-brand-cream transition-all duration-300 shadow-lg">
            <MessageCircle className="w-5 h-5" /> WhatsApp Us
          </a>
        </div>
      </section>
    </>
  );
}
