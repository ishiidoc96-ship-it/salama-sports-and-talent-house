import Link from "next/link";
import { ArrowRight, MapPin, MessageCircle, Sparkles, ChevronRight, Shield, Users, Home as HomeIcon, Phone } from "lucide-react";
import { SITE } from "@/lib/config";
import SearchPanel from "./components/SearchPanel";
import ScrollReveal from "./components/ScrollReveal";

var propertyTypes = [
  { title: "Buy", icon: HomeIcon, description: "Find your dream home from our curated selection of houses, villas, and apartments.", href: "/buy", btnText: "Browse Properties", bg: "bg-brand-gold/10" },
  { title: "Rent", icon: HomeIcon, description: "Explore rental properties ranging from cozy apartments to spacious family homes.", href: "/rent", btnText: "View Rentals", bg: "bg-blue-500/10" },
  { title: "Land", icon: MapPin, description: "Invest in prime land parcels across Nairobi and surrounding areas.", href: "/land", btnText: "View Land", bg: "bg-emerald-500/10" },
  { title: "Commercial", icon: HomeIcon, description: "Office spaces, retail units, and commercial properties for businesses.", href: "/properties?category=commercial", btnText: "Explore Commercial", bg: "bg-purple-500/10" },
];

var whyChooseUs = [
  { icon: Shield, title: "Trusted & Verified", description: "All our properties are thoroughly verified to ensure secure transactions and legitimate ownership." },
  { icon: Sparkles, title: "Premium Selection", description: "Handpicked properties that meet our strict quality and value standards." },
  { icon: Users, title: "Expert Guidance", description: "Our experienced agents guide you through every step of the property journey." },
  { icon: Phone, title: "Direct Contact", description: "Reach us directly via WhatsApp or phone for personalized assistance." },
];

export default function HomePage() {
  return (
    <>
      <ScrollReveal />
      <section className="relative min-h-[90vh] flex items-center bg-brand-charcoal overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-charcoal via-brand-stone-900 to-brand-charcoal opacity-95" />
        <div className="absolute inset-0 opacity-10"><div className="w-full h-full" style={{ backgroundImage: "radial-gradient(circle at 25% 25%, rgba(161,98,7,0.2) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(161,98,7,0.15) 0%, transparent 50%)" }} /></div>
        <div className="relative container-wide mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/80 text-sm mb-6 animate-fade-in">
              <div className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />Trusted Real Estate Partner
            </div>
            <h1 className="heading-main text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-extrabold mb-6 leading-tight animate-fade-up">
              Find Your Perfect <span className="text-brand-gold">Property</span>
            </h1>
            <p className="text-brand-stone-300 text-lg sm:text-xl max-w-2xl mx-auto mb-10 text-balance animate-fade-up animate-delay-200">
              {SITE.TAGLINE} Houses, land, rentals, and commercial properties across Kenya.
            </p>
          </div>
          <div className="animate-fade-up animate-delay-400">
            <SearchPanel />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-brand-cream to-transparent" />
      </section>

      <div className="bg-white border-b border-brand-stone-100">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-center gap-2 text-brand-stone-600 text-sm">
            <MapPin className="w-4 h-4 text-brand-gold" /><span>{SITE.LOCATION}</span>
          </div>
        </div>
      </div>

      <section className="section-padding bg-brand-cream">
        <div className="container-wide mx-auto">
          <div className="text-center mb-14 reveal">
            <h2 className="heading-main text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Browse by Category</h2>
            <p className="text-brand-stone-500 text-lg max-w-2xl mx-auto text-balance">Explore our full range of property services across Kenya.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {propertyTypes.map(function(cat) {
              return (
                <Link key={cat.title} href={cat.href} className="group bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                  <div className={"w-16 h-16 rounded-2xl " + cat.bg + " flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"}>
                    <cat.icon className="w-8 h-8 text-brand-gold" />
                  </div>
                  <h3 className="font-heading font-semibold text-brand-charcoal text-xl mb-2">{cat.title}</h3>
                  <p className="text-brand-stone-500 text-sm mb-4 leading-relaxed">{cat.description}</p>
                  <span className="inline-flex items-center gap-1 text-brand-gold text-sm font-semibold group-hover:gap-2 transition-all">{cat.btnText}<ChevronRight className="w-4 h-4" /></span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide mx-auto">
          <div className="text-center mb-14 reveal">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 text-brand-gold text-sm font-semibold mb-4"><Sparkles className="w-4 h-4" />Featured</div>
            <h2 className="heading-main text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Why Choose Us</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {whyChooseUs.map(function(item) {
              return (
                <div key={item.title} className="bg-white rounded-2xl p-6 shadow-card text-center border border-brand-stone-100">
                  <div className="w-14 h-14 rounded-2xl bg-brand-gold/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-brand-gold" />
                  </div>
                  <h3 className="font-heading font-semibold text-brand-charcoal mb-2">{item.title}</h3>
                  <p className="text-brand-stone-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-charcoal relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"><div className="w-full h-full" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, rgba(161,98,7,0.3) 0%, transparent 50%)" }} /></div>
        <div className="container-wide mx-auto relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-main text-3xl sm:text-4xl md:text-5xl text-white font-bold mb-4 reveal">Looking to Sell or List a Property?</h2>
            <p className="text-brand-stone-300 text-lg mb-4 text-balance reveal">Let us help you connect with the right buyers. Get in touch today.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal">
              <Link href="/contact" className="btn-primary text-base !px-8 !py-3.5">List Your Property<ArrowRight className="w-5 h-5 ml-2" /></Link>
              <Link href="/properties" className="btn-secondary !border-white/30 !text-white hover:!bg-white hover:!text-brand-charcoal text-base !px-8 !py-3.5">Browse Properties</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#25D366]">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-white font-heading font-bold text-xl mb-1">Have a Question?</h3>
              <p className="text-white/80">Chat with us directly on WhatsApp for quick assistance.</p>
            </div>
            <a href={"https://wa.me/" + SITE.WHATSAPP.replace(/[^0-9]/g, "") + "?text=" + encodeURIComponent("Hello! I am interested in your properties.")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-[#25D366] font-bold rounded-xl hover:bg-brand-cream transition-all duration-300 shadow-lg">
              <MessageCircle className="w-5 h-5" />WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
