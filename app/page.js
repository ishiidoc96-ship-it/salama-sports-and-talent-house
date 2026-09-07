import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  MessageCircle,
  Package,
  Sparkles,
  ChevronRight,
  Store,
  Users,
} from "lucide-react";
import { SITE, SEARCH_OPTIONS } from "@/lib/config";
import {
  getFeaturedProducts,
  getNewArrivals,
  getProductsByCategory,
} from "@/lib/products";
import ProductCard from "./components/ProductCard";
import ScrollReveal from "./components/ScrollReveal";

const categories = [
  {
    title: "Sports",
    icon: "⚽",
    description: "Footballs, basketballs, rackets, sports equipment and more.",
    href: "/sports",
    btnText: "Explore Sports",
    gradient: "from-brand-green to-emerald-600",
    bg: "bg-brand-green/10",
  },
  {
    title: "Swimming",
    icon: "🏊",
    description: "Goggles, flippers, swimsuits, bikinis and swimming accessories.",
    href: "/swimming",
    btnText: "Explore Swimming",
    gradient: "from-brand-teal to-cyan-600",
    bg: "bg-brand-teal/10",
  },
  {
    title: "Handbags & Tote Bags",
    icon: "👜",
    description: "Discover changing selections of Ex-UK handbags and tote bags.",
    href: "/handbags",
    btnText: "Explore Bags",
    gradient: "from-pink-500 to-rose-600",
    bg: "bg-pink-500/10",
  },
  {
    title: "Kids",
    icon: "🧸",
    description: "Explore hard Ex-UK children's toys, games and other fun finds.",
    href: "/kids",
    btnText: "Explore Kids",
    gradient: "from-brand-orange to-amber-600",
    bg: "bg-brand-orange/10",
  },
];

const whyShopWithUs = [
  {
    icon: Package,
    title: "Variety",
    description: "A wide selection across sports, swimming, fashion and children's products.",
  },
  {
    icon: Sparkles,
    title: "Fresh Finds",
    description: "Our changing stock means there's always something new to discover.",
  },
  {
    icon: Store,
    title: "Local & Convenient",
    description: "Conveniently located along Absa Bank Road in Kilifi Town.",
  },
  {
    icon: Users,
    title: "Personal Service",
    description: "Customers can easily ask questions and check availability directly with the shop.",
  },
];

export default function HomePage() {
  const newArrivals = getNewArrivals();
  const sportsProducts = getProductsByCategory("sports").slice(0, 3);
  const swimmingProducts = getProductsByCategory("swimming").slice(0, 3);
  const handbagProducts = [...getProductsByCategory("handbags"), ...getProductsByCategory("tote-bags")].slice(0, 3);
  const kidsProducts = getProductsByCategory("kids").slice(0, 3);

  return (
    <>
      <ScrollReveal />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-brand-navy overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-blue opacity-95" />
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "radial-gradient(circle at 25% 25%, rgba(30,111,235,0.2) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(8,145,178,0.15) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(249,115,22,0.1) 0%, transparent 50%)",
            }}
          />
        </div>

        <div className="relative container-wide mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/80 text-sm mb-6 animate-fade-in">
              <div className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
              Fresh Ex-UK Stock Regularly Available
            </div>

            <h1 className="heading-main text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-extrabold mb-6 leading-tight animate-fade-up">
              Gear Up. Dive In.{" "}
              <span className="text-brand-blue">Discover More.</span>
            </h1>

            <p className="text-brand-slate-300 text-lg sm:text-xl max-w-2xl mx-auto mb-10 text-balance animate-fade-up animate-delay-200">
              Discover sports goods, swimming essentials, Ex-UK handbags, tote bags, children's toys and more — right in Kilifi Town.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up animate-delay-300">
              <Link href="/products" className="btn-primary text-base !px-8 !py-3.5">
                Explore Our Products
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="#visit"
                className="btn-secondary !border-white/30 !text-white hover:!bg-white hover:!text-brand-navy text-base !px-8 !py-3.5"
              >
                Visit Our Shop
              </Link>
            </div>
          </div>

          {/* Search / Discovery Interface */}
          <div className="animate-fade-up animate-delay-400">
            <div className="max-w-2xl mx-auto">
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-6 shadow-float">
                <p className="text-brand-slate-600 text-sm font-medium mb-3 text-center">
                  What are you looking for?
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {SEARCH_OPTIONS.map((opt) => (
                    <Link
                      key={opt.value}
                      href={`/products?category=${opt.value}`}
                      className="px-4 py-2 rounded-xl bg-brand-slate-100 text-brand-slate-700 text-sm font-medium hover:bg-brand-blue hover:text-white transition-all duration-300"
                    >
                      {opt.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-brand-cream to-transparent" />
      </section>

      {/* Location Indicator */}
      <div className="bg-white border-b border-brand-slate-100">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-center gap-2 text-brand-slate-600 text-sm">
            <MapPin className="w-4 h-4 text-brand-blue" />
            <span>Along Absa Bank Road, Kilifi Town</span>
          </div>
        </div>
      </div>

      {/* Main Categories */}
      <section className="section-padding bg-brand-cream">
        <div className="container-wide mx-auto">
          <div className="text-center mb-14 reveal">
            <h2 className="heading-main text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Something for Everyone
            </h2>
            <p className="text-brand-slate-500 text-lg max-w-2xl mx-auto text-balance">
              Sports, swimming, fashion and kids — find what you need at SALAMA SPORTS AND TALENT HOUSE.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {categories.map((cat) => (
              <Link
                key={cat.title}
                href={cat.href}
                className="group bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-16 h-16 rounded-2xl ${cat.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-3xl">{cat.icon}</span>
                </div>
                <h3 className="font-heading font-semibold text-brand-navy text-xl mb-2">
                  {cat.title}
                </h3>
                <p className="text-brand-slate-500 text-sm mb-4 leading-relaxed">
                  {cat.description}
                </p>
                <span className="inline-flex items-center gap-1 text-brand-blue text-sm font-semibold group-hover:gap-2 transition-all">
                  {cat.btnText}
                  <ChevronRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Fresh Finds / New Arrivals */}
      <section className="section-padding bg-white">
        <div className="container-wide mx-auto">
          <div className="text-center mb-14 reveal">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange text-sm font-semibold mb-4">
              <Sparkles className="w-4 h-4" />
              Just In
            </div>
            <h2 className="heading-main text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Fresh Finds
            </h2>
            <p className="text-brand-slate-500 text-lg max-w-2xl mx-auto">
              New products and interesting finds are always arriving.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 stagger-children">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-10 reveal">
            <Link href="/new-arrivals" className="btn-outline-blue">
              View All New Arrivals
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Sports Section */}
      <section className="section-padding bg-brand-cream">
        <div className="container-wide mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10 reveal">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/10 text-brand-green text-sm font-semibold mb-3">
                <span>⚽</span>
                Sports Goods
              </div>
              <h2 className="heading-main text-3xl sm:text-4xl font-bold">
                Everything You Need to Get Moving
              </h2>
            </div>
            <Link href="/sports" className="inline-flex items-center justify-center px-6 py-3 bg-brand-green text-white font-semibold rounded-xl transition-all duration-300 hover:bg-brand-green-light hover:shadow-lg active:scale-[0.98] shrink-0">
              Explore Sports
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {sportsProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Swimming Section */}
      <section className="section-padding bg-white">
        <div className="container-wide mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10 reveal">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal/10 text-brand-teal text-sm font-semibold mb-3">
                <span>🏊</span>
                Swimming
              </div>
              <h2 className="heading-main text-3xl sm:text-4xl font-bold">
                Make a Splash
              </h2>
              <p className="text-brand-slate-500 text-lg mt-2">
                Get ready for the pool, beach or your next swim.
              </p>
            </div>
            <Link href="/swimming" className="inline-flex items-center justify-center px-6 py-3 bg-brand-teal text-white font-semibold rounded-xl transition-all duration-300 hover:bg-brand-teal-light hover:shadow-lg active:scale-[0.98] shrink-0">
              Shop Swimming
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {swimmingProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Handbags & Tote Bags */}
      <section className="section-padding bg-brand-cream">
        <div className="container-wide mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10 reveal">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 text-pink-500 text-sm font-semibold mb-3">
                <span>👜</span>
                Handbags & Tote Bags
              </div>
              <h2 className="heading-main text-3xl sm:text-4xl font-bold">
                Ex-UK Handbags & Tote Bags
              </h2>
              <p className="text-brand-slate-500 text-lg mt-2">
                Discover unique bags and changing fashion finds.
              </p>
            </div>
            <Link href="/handbags" className="inline-flex items-center justify-center px-6 py-3 bg-pink-500 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-pink-400 hover:shadow-lg active:scale-[0.98] shrink-0">
              View Bags
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {handbagProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Children's Toys */}
      <section className="section-padding bg-white">
        <div className="container-wide mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10 reveal">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange text-sm font-semibold mb-3">
                <span>🧸</span>
                Kids
              </div>
              <h2 className="heading-main text-3xl sm:text-4xl font-bold">
                Fun Finds for Kids
              </h2>
              <p className="text-brand-slate-500 text-lg mt-2">
                Discover a changing selection of hard Ex-UK children's toys, games and fun products.
              </p>
            </div>
            <Link href="/kids" className="inline-flex items-center justify-center px-6 py-3 bg-brand-orange text-white font-semibold rounded-xl transition-all duration-300 hover:bg-brand-orange-light hover:shadow-lg active:scale-[0.98] shrink-0">
              Explore Kids' Toys
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {kidsProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Can't Find What You Need */}
      <section className="section-padding bg-brand-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, rgba(30,111,235,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(8,145,178,0.2) 0%, transparent 50%)",
            }}
          />
        </div>
        <div className="container-wide mx-auto relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-main text-3xl sm:text-4xl md:text-5xl text-white font-bold mb-4 reveal">
              Can't Find What You Need?
            </h2>
            <p className="text-brand-slate-300 text-lg mb-4 text-balance reveal">
              Tell us what you're looking for and we'll help you check what's available.
            </p>
            <p className="text-brand-slate-400 text-sm mb-8 reveal">
              Our Ex-UK stock changes regularly, so if you don't see exactly what you're looking for, get in touch. We may have something similar available in-store.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal">
              <Link
                href="/contact#request"
                className="btn-primary text-base !px-8 !py-3.5"
              >
                Send a Request
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/contact"
                className="btn-secondary !border-white/30 !text-white hover:!bg-white hover:!text-brand-navy text-base !px-8 !py-3.5"
              >
                Ask Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Shop With Us */}
      <section className="section-padding bg-brand-cream">
        <div className="container-wide mx-auto">
          <div className="text-center mb-14 reveal">
            <h2 className="heading-main text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Why Shop With Us
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {whyShopWithUs.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 shadow-card text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-brand-blue" />
                </div>
                <h3 className="font-heading font-semibold text-brand-navy mb-2">
                  {item.title}
                </h3>
                <p className="text-brand-slate-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit The Shop */}
      <section id="visit" className="section-padding bg-white">
        <div className="container-wide mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-sm font-semibold mb-4 reveal">
              <MapPin className="w-4 h-4" />
              Find Us
            </div>
            <h2 className="heading-main text-3xl sm:text-4xl md:text-5xl font-bold mb-4 reveal">
              Come Visit Us in Kilifi
            </h2>
            <p className="text-brand-slate-500 text-lg mb-6 text-balance reveal">
              Find SALAMA SPORTS AND TALENT HOUSE along Absa Bank Road in Kilifi Town.
            </p>

            <div className="bg-brand-slate-100 rounded-2xl p-8 mb-8 reveal">
              <div className="flex items-center justify-center gap-3 text-brand-navy text-lg font-medium">
                <MapPin className="w-5 h-5 text-brand-blue" />
                <span>{SITE.LOCATION}</span>
              </div>
            </div>

            <div className="bg-brand-slate-100 rounded-2xl h-64 flex items-center justify-center mb-8 reveal">
              <div className="text-center text-brand-slate-400">
                <MapPin className="w-12 h-12 mx-auto mb-2 opacity-40" />
                <p className="text-sm">Google Maps integration coming soon</p>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Kilifi+Town+Absa+Bank+Road"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base !px-8 !py-3.5 reveal"
            >
              Get Directions
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-12 bg-[#25D366]">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-white font-heading font-bold text-xl mb-1">
                Have a Question?
              </h3>
              <p className="text-white/80">
                Chat with us directly on WhatsApp for quick assistance.
              </p>
            </div>
            <a
              href={`https://wa.me/${SITE.WHATSAPP.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hello! I'm interested in your products.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-[#25D366] font-bold rounded-xl hover:bg-brand-cream transition-all duration-300 shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
