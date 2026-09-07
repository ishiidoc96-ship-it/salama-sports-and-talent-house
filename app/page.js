import Link from "next/link";
import {
  Home,
  TreePine,
  Building2,
  Key,
  ArrowRight,
  Search,
  Users,
  Map,
  Handshake,
  MessageCircle,
  ChevronRight,
} from "lucide-react";
import { SITE } from "@/lib/config";
import { getFeaturedProperties } from "@/lib/properties";
import PropertyCard from "./components/PropertyCard";
import SearchPanel from "./components/SearchPanel";
import ScrollReveal from "./components/ScrollReveal";

const valueProps = [
  {
    icon: Home,
    title: "Homes",
    description: "Find houses and homes suited to your lifestyle and budget.",
    href: "/buy",
  },
  {
    icon: TreePine,
    title: "Land",
    description: "Discover plots and land opportunities for residential, agricultural or investment purposes.",
    href: "/land",
  },
  {
    icon: Key,
    title: "Rentals",
    description: "Connect with suitable rental properties based on your requirements.",
    href: "/rent",
  },
  {
    icon: Building2,
    title: "Commercial Property",
    description: "Explore spaces and opportunities for businesses and investment.",
    href: "/buy",
  },
];

const discoveryCards = [
  { icon: Home, title: "A Home", description: "Find a place to call home.", href: "/buy", color: "bg-brand-gold/10 text-brand-gold" },
  { icon: TreePine, title: "Land", description: "Explore land and plot opportunities.", href: "/land", color: "bg-emerald-50 text-emerald-600" },
  { icon: Building2, title: "Commercial Property", description: "Find spaces for business and investment.", href: "/buy", color: "bg-purple-50 text-purple-600" },
  { icon: Key, title: "Rental Property", description: "Find your next rental.", href: "/rent", color: "bg-blue-50 text-blue-600" },
];

const steps = [
  { number: "01", title: "Tell Us What You Need", description: "Share the type of property, location and budget you're looking for." },
  { number: "02", title: "We Find Suitable Opportunities", description: "JAMWACHA PROPERTIES helps connect you with available properties that match your requirements." },
  { number: "03", title: "Make Your Move", description: "View the property, ask questions and take the next step with confidence." },
];

const whyChoose = [
  { icon: Users, title: "Personal Service", description: "Get direct assistance rather than navigating an impersonal property marketplace." },
  { icon: Map, title: "Property Variety", description: "From homes and rentals to land and commercial opportunities." },
  { icon: Handshake, title: "Client-Focused", description: "We focus on understanding what you're actually looking for." },
  { icon: Search, title: "Local Knowledge", description: "Benefit from practical knowledge of property opportunities and locations." },
  { icon: MessageCircle, title: "Straightforward Communication", description: "Make it easy to ask questions, discuss requirements and arrange property viewings." },
];

export default function HomePage() {
  const featured = getFeaturedProperties();

  return (
    <>
      <ScrollReveal />

      <section className="relative min-h-[90vh] flex items-center bg-brand-charcoal overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-charcoal via-brand-stone-800 to-brand-charcoal opacity-95" />
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{ backgroundImage: "radial-gradient(circle at 25% 25%, rgba(161,98,7,0.15) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(161,98,7,0.08) 0%, transparent 50%)" }} />
        </div>

        <div className="relative container-wide mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/80 text-sm mb-6 animate-fade-in">
              <div className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
              Trusted Property Connections
            </div>
            <h1 className="heading-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold mb-6 leading-tight animate-fade-up">
              Find the Right Property. <span className="text-brand-gold">Make the Right Move.</span>
            </h1>
            <p className="text-brand-stone-300 text-lg sm:text-xl max-w-2xl mx-auto mb-10 text-balance animate-fade-up animate-delay-200">
              {SITE.COMPANY_NAME} connects you with houses, land, commercial spaces and property opportunities that match what you&apos;re looking for.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up animate-delay-300">
              <Link href="/properties" className="btn-primary text-base !px-8 !py-3.5">
                Explore Properties
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/contact" className="btn-secondary !border-white/30 !text-white hover:!bg-white hover:!text-brand-charcoal text-base !px-8 !py-3.5">
                Talk to an Agent
              </Link>
            </div>
          </div>
          <div className="animate-fade-up animate-delay-400">
            <SearchPanel />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-brand-cream to-transparent" />
      </section>

      <section className="section-padding bg-brand-cream">
        <div className="container-wide mx-auto">
          <div className="text-center mb-14 reveal">
            <h2 className="heading-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Property Solutions Built Around You</h2>
            <p className="text-brand-stone-500 text-lg max-w-2xl mx-auto text-balance">
              Whether you&apos;re searching for a home, land, an investment opportunity or commercial property, {SITE.COMPANY_NAME} helps connect you with opportunities that fit your needs.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {valueProps.map((item) => (
              <Link key={item.title} href={item.href} className="group bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center mb-4 group-hover:bg-brand-gold group-hover:text-white transition-all duration-300">
                  <item.icon className="w-6 h-6 text-brand-gold group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-serif font-semibold text-brand-charcoal text-lg mb-2">{item.title}</h3>
                <p className="text-brand-stone-500 text-sm leading-relaxed">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide mx-auto">
          <div className="text-center mb-14 reveal">
            <h2 className="heading-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Featured Properties</h2>
            <p className="text-brand-stone-500 text-lg max-w-2xl mx-auto">Explore some of the latest property opportunities available through {SITE.COMPANY_NAME}.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {featured.slice(0, 6).map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          <div className="text-center mt-10 reveal">
            <Link href="/properties" className="btn-outline-gold">
              View All Properties
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-cream-dark">
        <div className="container-wide mx-auto">
          <div className="text-center mb-14 reveal">
            <h2 className="heading-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4">What Are You Looking For?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {discoveryCards.map((card) => (
              <Link key={card.title} href={card.href} className="group bg-white rounded-2xl p-8 text-center shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                <div className={`w-16 h-16 rounded-2xl ${card.color} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <card.icon className="w-8 h-8" />
                </div>
                <h3 className="font-serif font-semibold text-brand-charcoal text-xl mb-2">{card.title}</h3>
                <p className="text-brand-stone-500 text-sm mb-4">{card.description}</p>
                <span className="inline-flex items-center gap-1 text-brand-gold text-sm font-medium group-hover:gap-2 transition-all">
                  Browse <ChevronRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide mx-auto">
          <div className="text-center mb-14 reveal">
            <h2 className="heading-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Finding Property Doesn&apos;t Have to Be Complicated</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
            {steps.map((step) => (
              <div key={step.number} className="text-center md:text-left">
                <span className="inline-block text-6xl font-serif font-bold text-brand-gold/20 mb-4">{step.number}</span>
                <h3 className="font-serif font-semibold text-brand-charcoal text-xl mb-3">{step.title}</h3>
                <p className="text-brand-stone-500 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-cream">
        <div className="container-wide mx-auto">
          <div className="text-center mb-14 reveal">
            <h2 className="heading-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Why Choose {SITE.COMPANY_NAME}?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {whyChoose.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 shadow-card">
                <div className="w-11 h-11 rounded-xl bg-brand-gold/10 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-brand-gold" />
                </div>
                <h3 className="font-serif font-semibold text-brand-charcoal mb-2">{item.title}</h3>
                <p className="text-brand-stone-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-charcoal relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, rgba(161,98,7,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(161,98,7,0.15) 0%, transparent 50%)" }} />
        </div>
        <div className="container-wide mx-auto relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-serif text-3xl sm:text-4xl md:text-5xl text-white font-bold mb-4 reveal">Can&apos;t Find What You&apos;re Looking For?</h2>
            <p className="text-brand-stone-300 text-lg mb-8 text-balance reveal">Tell us exactly what you need and we&apos;ll help you look for a suitable property opportunity.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal">
              <Link href="/contact#request" className="btn-primary text-base !px-8 !py-3.5">
                Submit Property Request <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/contact#list" className="btn-secondary !border-white/30 !text-white hover:!bg-white hover:!text-brand-charcoal text-base !px-8 !py-3.5">
                List Your Property
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
