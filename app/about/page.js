import Link from "next/link";
import { ArrowRight, Users, Map, Handshake, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/config";
import ScrollReveal from "../components/ScrollReveal";

export const metadata = {
  title: "About Us",
  description: `Learn about ${SITE.COMPANY_NAME} and our mission to help clients find suitable property opportunities.`,
};

const values = [
  { icon: Users, title: "Personal Service", description: "Get direct assistance rather than navigating an impersonal property marketplace." },
  { icon: Map, title: "Property Variety", description: "From homes and rentals to land and commercial opportunities." },
  { icon: Handshake, title: "Client-Focused", description: "We focus on understanding what you're actually looking for." },
  { icon: MessageCircle, title: "Straightforward Communication", description: "Make it easy to ask questions, discuss requirements and arrange property viewings." },
];

export default function AboutPage() {
  return (
    <>
      <ScrollReveal />
      <section className="bg-brand-charcoal pt-8 pb-16">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="heading-serif text-3xl sm:text-4xl md:text-5xl text-white font-bold mb-3">About {SITE.COMPANY_NAME}</h1>
          <p className="text-brand-stone-300 text-lg max-w-2xl">Helping people find and connect with real-estate opportunities.</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-brand-stone-600 leading-relaxed">
                <p>{SITE.COMPANY_NAME} is a real-estate business focused on helping people find suitable property opportunities. We connect clients with houses, land, rentals, commercial property and other real-estate solutions that match their needs.</p>
                <p>Whether you&apos;re looking for a home for your family, land to build on, a rental property, or a commercial space for your business, {SITE.COMPANY_NAME} is here to help you navigate the property market with confidence.</p>
                <p>We believe that finding property shouldn&apos;t be complicated. Our approach is simple: listen to what you need, find suitable opportunities, and help you make the right move.</p>
              </div>
            </div>
            <div className="reveal">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-brand-stone-200 to-brand-stone-300 flex items-center justify-center">
                <div className="text-center text-brand-stone-500">
                  <Map className="w-16 h-16 mx-auto mb-3 opacity-30" />
                  <span className="text-sm font-medium">About Image</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-cream">
        <div className="container-wide mx-auto">
          <div className="max-w-3xl mx-auto text-center reveal">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-8">Meet the Founder</h2>
            <div className="bg-white rounded-2xl p-8 shadow-card">
              <div className="w-24 h-24 rounded-full bg-brand-charcoal flex items-center justify-center mx-auto mb-5">
                <span className="text-white font-serif font-bold text-3xl">J</span>
              </div>
              <h3 className="font-serif font-semibold text-xl text-brand-charcoal mb-1">{SITE.FOUNDER_NAME}</h3>
              <p className="text-brand-gold font-medium text-sm mb-4">{SITE.FOUNDER_TITLE}</p>
              <p className="text-brand-stone-500 leading-relaxed max-w-xl mx-auto">{SITE.FOUNDER_DESCRIPTION.replace("[NAME]", SITE.FOUNDER_NAME)}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide mx-auto">
          <div className="text-center mb-12 reveal">
            <h2 className="heading-serif text-3xl sm:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-brand-stone-500 text-lg max-w-2xl mx-auto">The principles that guide how we work with our clients.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {values.map((item) => (
              <div key={item.title} className="bg-brand-cream rounded-2xl p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-brand-gold" />
                </div>
                <h3 className="font-serif font-semibold text-brand-charcoal mb-2">{item.title}</h3>
                <p className="text-brand-stone-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-charcoal">
        <div className="container-wide mx-auto text-center">
          <h2 className="heading-serif text-3xl sm:text-4xl text-white font-bold mb-4 reveal">Ready to Find Your Property?</h2>
          <p className="text-brand-stone-300 text-lg mb-8 max-w-xl mx-auto reveal">Let {SITE.COMPANY_NAME} help you find the right property opportunity.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal">
            <Link href="/properties" className="btn-primary text-base !px-8 !py-3.5">
              Browse Properties <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link href="/contact" className="btn-secondary !border-white/30 !text-white hover:!bg-white hover:!text-brand-charcoal text-base !px-8 !py-3.5">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
