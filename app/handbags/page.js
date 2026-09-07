import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/config";
import { getProductsByCategory } from "@/lib/products";
import ProductCard from "../components/ProductCard";
import ScrollReveal from "../components/ScrollReveal";

export const metadata = { title: "Handbags & Tote Bags", description: "Discover Ex-UK handbags, tote bags and fashion accessories at SALAMA SPORTS AND TALENT HOUSE in Kilifi Town." };

export default function HandbagsPage() {
  const handbags = getProductsByCategory("handbags");
  const totebags = getProductsByCategory("tote-bags");
  const allBags = [...handbags, ...totebags];
  return (
    <>
      <ScrollReveal />
      <section className="bg-bag-gradient py-16 sm:py-20 relative overflow-hidden">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-semibold mb-4"><span>Fashion</span> Fashion</div>
          <h1 className="heading-main text-3xl sm:text-4xl md:text-5xl text-white font-bold mb-4">Ex-UK Handbags & Tote Bags</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">Discover unique bags and changing fashion finds.</p>
        </div>
      </section>
      <section className="section-padding bg-brand-cream">
        <div className="container-wide mx-auto">
          <div className="bg-white rounded-2xl p-6 shadow-card mb-10 reveal">
            <p className="text-brand-slate-600 text-center"><strong>Fresh Finds.</strong> <strong>New Stock.</strong> <strong>Limited Finds.</strong> Our Ex-UK bag selection changes regularly — ask about availability for the latest items.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 stagger-children">
            {allBags.map((product) => (<ProductCard key={product.id} product={product} />))}
          </div>
        </div>
      </section>
      <section className="py-12 bg-pink-500">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-white font-heading font-bold text-xl mb-2">Looking for a Specific Bag?</h3>
          <p className="text-white/80 mb-6">Our stock changes regularly. Ask us what&apos;s currently available!</p>
          <a href={"https://wa.me/" + "PLACEHOLDER"} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-pink-500 font-bold rounded-xl hover:bg-brand-cream transition-all duration-300 shadow-lg">
            <MessageCircle className="w-5 h-5" /> Ask About Availability
          </a>
        </div>
      </section>
    </>
  );
}
