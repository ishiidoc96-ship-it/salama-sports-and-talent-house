import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/config";
import { getProductsByCategory } from "@/lib/products";
import ProductCard from "../components/ProductCard";
import ScrollReveal from "../components/ScrollReveal";

export const metadata = { title: "Kids", description: "Discover hard Ex-UK children's toys, games and fun products at SALAMA SPORTS AND TALENT HOUSE in Kilifi Town." };

export default function KidsPage() {
  const products = getProductsByCategory("kids");
  return (
    <>
      <ScrollReveal />
      <section className="bg-kids-gradient py-16 sm:py-20 relative overflow-hidden">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-semibold mb-4"><span>Kids</span> Kids</div>
          <h1 className="heading-main text-3xl sm:text-4xl md:text-5xl text-white font-bold mb-4">Fun Finds for Kids</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">Discover a changing selection of hard Ex-UK children&apos;s toys, games and fun products.</p>
        </div>
      </section>
      <section className="section-padding bg-brand-cream">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12 stagger-children">
            {[{ name: "Toys", icon: "Toys" }, { name: "Games", icon: "Games" }, { name: "Outdoor", icon: "Outdoor" }, { name: "Play Items", icon: "Play" }].map((item) => (
              <div key={item.name} className="bg-white rounded-2xl p-5 text-center shadow-card"><span className="text-3xl block mb-2">{item.icon}</span><h3 className="font-heading font-semibold text-brand-navy text-sm">{item.name}</h3></div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 stagger-children">
            {products.map((product) => (<ProductCard key={product.id} product={product} />))}
          </div>
        </div>
      </section>
      <section className="py-12 bg-brand-orange">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-white font-heading font-bold text-xl mb-2">Looking for Something Fun?</h3>
          <p className="text-white/80 mb-6">Our kids&apos; stock changes regularly. Ask us what&apos;s currently in store!</p>
          <a href={"https://wa.me/" + "PLACEHOLDER"} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-brand-orange font-bold rounded-xl hover:bg-brand-cream transition-all duration-300 shadow-lg">
            <MessageCircle className="w-5 h-5" /> Ask Us
          </a>
        </div>
      </section>
    </>
  );
}
