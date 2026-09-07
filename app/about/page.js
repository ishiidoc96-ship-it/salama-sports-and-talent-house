import Link from "next/link";
import { MapPin, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/config";
import ScrollReveal from "../components/ScrollReveal";

export const metadata = { title: "About", description: "Learn about SALAMA SPORTS AND TALENT HOUSE, a local retail shop in Kilifi Town owned by Priscilla Salama Kitsao." };

export default function AboutPage() {
  return (
    <>
      <ScrollReveal />
      <section className="bg-brand-navy py-16 sm:py-20">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="heading-main text-3xl sm:text-4xl md:text-5xl text-white font-bold mb-4">About Salama Sports and Talent House</h1>
          <p className="text-brand-slate-300 text-lg max-w-2xl mx-auto">Your local shop for sports goods, swimming products, fashion finds and children&apos;s items in Kilifi Town.</p>
        </div>
      </section>
      <section className="section-padding bg-brand-cream">
        <div className="container-wide mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-card reveal">
              <p className="text-brand-slate-600 text-lg leading-relaxed mb-6"><strong className="text-brand-navy">SALAMA SPORTS AND TALENT HOUSE</strong> is a local retail shop in Kilifi Town, owned by <strong className="text-brand-navy">{SITE.OWNER_NAME}</strong>. The shop offers a wide and changing selection of Ex-UK sports goods, swimming essentials, handbags, tote bags, children&apos;s toys and other products.</p>
              <p className="text-brand-slate-600 text-lg leading-relaxed mb-6">Located along Absa Bank Road in Kilifi Town, the shop gives customers a convenient place to discover sports equipment, swimming products, fashion finds and children&apos;s items in one location.</p>
              <p className="text-brand-slate-600 text-lg leading-relaxed">Whether you&apos;re looking for a football, swimming goggles, a stylish handbag or a toy for your child, SALAMA SPORTS AND TALENT HOUSE is the place to visit. Our Ex-UK stock changes regularly, so there&apos;s always something new to discover.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-wide mx-auto">
          <div className="text-center mb-14 reveal"><h2 className="heading-main text-3xl sm:text-4xl font-bold mb-4">What We Offer</h2></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            <div className="bg-brand-cream rounded-2xl p-6 text-center"><div className="w-14 h-14 rounded-2xl bg-brand-green/10 flex items-center justify-center mx-auto mb-4"><span className="text-2xl">Sports</span></div><h3 className="font-heading font-semibold text-brand-navy mb-2">Sports Goods</h3><p className="text-brand-slate-500 text-sm">Footballs, basketballs, rackets, training equipment and sports accessories.</p></div>
            <div className="bg-brand-cream rounded-2xl p-6 text-center"><div className="w-14 h-14 rounded-2xl bg-brand-teal/10 flex items-center justify-center mx-auto mb-4"><span className="text-2xl">Swimming</span></div><h3 className="font-heading font-semibold text-brand-navy mb-2">Swimming</h3><p className="text-brand-slate-500 text-sm">Goggles, flippers, swimsuits, bikinis and swimming accessories.</p></div>
            <div className="bg-brand-cream rounded-2xl p-6 text-center"><div className="w-14 h-14 rounded-2xl bg-pink-500/10 flex items-center justify-center mx-auto mb-4"><span className="text-2xl">Bags</span></div><h3 className="font-heading font-semibold text-brand-navy mb-2">Handbags & Tote Bags</h3><p className="text-brand-slate-500 text-sm">Ex-UK handbags, tote bags and fashion accessories.</p></div>
            <div className="bg-brand-cream rounded-2xl p-6 text-center"><div className="w-14 h-14 rounded-2xl bg-brand-orange/10 flex items-center justify-center mx-auto mb-4"><span className="text-2xl">Kids</span></div><h3 className="font-heading font-semibold text-brand-navy mb-2">Kids</h3><p className="text-brand-slate-500 text-sm">Hard Ex-UK children&apos;s toys, games and play items.</p></div>
          </div>
        </div>
      </section>
      <section className="section-padding bg-brand-navy">
        <div className="container-wide mx-auto text-center">
          <h2 className="heading-main text-3xl sm:text-4xl text-white font-bold mb-4 reveal">Come Visit Us</h2>
          <p className="text-brand-slate-300 text-lg mb-8 reveal">Find us along Absa Bank Road in Kilifi Town.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal">
            <Link href="/contact" className="btn-primary text-base !px-8 !py-3.5">Contact Us</Link>
            <a href={"https://wa.me/" + "PLACEHOLDER"} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-base !px-8 !py-3.5"><MessageCircle className="w-5 h-5 mr-2" />WhatsApp Us</a>
          </div>
        </div>
      </section>
    </>
  );
}
