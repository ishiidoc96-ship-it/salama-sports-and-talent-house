"use client";
import { useState, use } from "react";
import Link from "next/link";
import { MapPin, BedDouble, Bath, Maximize, ArrowLeft, Phone, MessageCircle, Mail, CheckCircle, Send } from "lucide-react";
import { SITE } from "@/lib/config";
import { getPropertyById, SAMPLE_PROPERTIES } from "@/lib/properties";

var PLACEHOLDER_COLORS = [
  "from-brand-stone-700 to-brand-stone-900",
  "from-brand-stone-600 to-brand-stone-800",
  "from-brand-gold/30 to-brand-stone-800"
];

function getPlaceholderGradient(id) {
  var idx = 0;
  for (var i = 0; i < id.length; i++) { idx += id.charCodeAt(i); }
  return PLACEHOLDER_COLORS[idx % PLACEHOLDER_COLORS.length];
}

export default function PropertyDetailPage({ params }) {
  var resolvedParams = use(params);
  var property = getPropertyById(resolvedParams.id);
  var [showContact, setShowContact] = useState(false);
  var [submitted, setSubmitted] = useState(false);
  var [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  if (!property) {
    return (
      <section className="section-padding bg-brand-cream min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="heading-serif text-3xl font-bold mb-4">Property Not Found</h1>
          <p className="text-brand-stone-500 mb-6">The property you are looking for does not exist.</p>
          <Link href="/properties" className="btn-primary"><ArrowLeft className="w-4 h-4 mr-2" />Back to Properties</Link>
        </div>
      </section>
    );
  }

  var isPlaceholderImage = property.image && property.image.startsWith("/images/");
  var related = SAMPLE_PROPERTIES.filter(function(p) { return p.id !== property.id && p.category === property.category; }).slice(0, 3);
  var whatsappNumber = SITE.WHATSAPP.replace(/[^0-9]/g, "");
  var whatsappMessage = "I am interested in " + property.title + ". Please contact me with more information.";

  function handleSubmit(e) { e.preventDefault(); setSubmitted(true); }

  var categoryBadge = property.category === "sale" ? "bg-brand-gold text-white" : property.category === "rent" ? "bg-blue-600 text-white" : property.category === "land" ? "bg-emerald-600 text-white" : "bg-purple-600 text-white";
  var categoryLabel = property.category === "sale" ? "For Sale" : property.category === "rent" ? "For Rent" : property.category === "land" ? "Land" : "Commercial";

  return (
    <>
      <div className="bg-brand-cream-dark py-3 border-b border-brand-stone-100">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-brand-stone-500">
            <Link href="/" className="hover:text-brand-gold transition-colors">Home</Link><span>/</span>
            <Link href="/properties" className="hover:text-brand-gold transition-colors">Properties</Link><span>/</span>
            <span className="text-brand-stone-800">{property.title}</span>
          </div>
        </div>
      </div>

      <section className="bg-white">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6">
                {isPlaceholderImage ? (
                  <div className={"w-full h-full bg-gradient-to-br " + getPlaceholderGradient(property.id) + " flex items-center justify-center"}>
                    <div className="text-center text-white/60"><Maximize className="w-16 h-16 mx-auto mb-3 opacity-30" /><span className="text-sm font-medium opacity-50">{property.type} Image</span></div>
                  </div>
                ) : (<img src={property.image} alt={property.title} className="w-full h-full object-cover" />)}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className={"px-3 py-1.5 text-xs font-semibold rounded-full " + categoryBadge}>{categoryLabel}</span>
                  {property.demo && <span className="px-2 py-1.5 text-[10px] font-medium rounded bg-black/40 text-white/80 backdrop-blur-sm">DEMO</span>}
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-start justify-between mb-2">
                  <h1 className="heading-serif text-2xl sm:text-3xl font-bold">{property.title}</h1>
                  <span className="text-brand-gold font-bold text-xl sm:text-2xl whitespace-nowrap ml-4">{property.priceLabel}</span>
                </div>
                <div className="flex items-center gap-2 text-brand-stone-500 mb-4"><MapPin className="w-4 h-4" /><span>{property.address}</span></div>
                <div className="flex flex-wrap items-center gap-4 text-brand-stone-600 text-sm">
                  <span className="px-3 py-1.5 bg-brand-stone-50 rounded-lg font-medium text-brand-stone-800">{property.type}</span>
                  {property.bedrooms != null && <span className="flex items-center gap-1.5"><BedDouble className="w-4 h-4 text-brand-gold" />{property.bedrooms} Bedrooms</span>}
                  {property.bathrooms != null && <span className="flex items-center gap-1.5"><Bath className="w-4 h-4 text-brand-gold" />{property.bathrooms} Bathrooms</span>}
                  {property.landSize && <span className="flex items-center gap-1.5"><Maximize className="w-4 h-4 text-brand-gold" />{property.landSize}</span>}
                </div>
              </div>

              <div className="mb-8"><h2 className="font-serif font-semibold text-xl mb-3">Description</h2><p className="text-brand-stone-600 leading-relaxed">{property.description}</p></div>

              {property.features.length > 0 && <div className="mb-8"><h2 className="font-serif font-semibold text-xl mb-3">Features</h2><div className="grid grid-cols-1 sm:grid-cols-2 gap-2">{property.features.map(function(f) { return <div key={f} className="flex items-center gap-2 text-brand-stone-600 text-sm"><CheckCircle className="w-4 h-4 text-brand-gold shrink-0" />{f}</div>; })}</div></div>}

              {property.amenities.length > 0 && <div className="mb-8"><h2 className="font-serif font-semibold text-xl mb-3">Amenities</h2><div className="flex flex-wrap gap-2">{property.amenities.map(function(a) { return <span key={a} className="px-3 py-1.5 bg-brand-gold/10 text-brand-gold text-sm rounded-lg font-medium">{a}</span>; })}</div></div>}
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-4">
                <div className="bg-white rounded-2xl border border-brand-stone-200 p-6">
                  <h3 className="font-serif font-semibold text-lg mb-4">Contact Agent</h3>
                  <div className="flex items-center gap-3 mb-4 pb-4 border-b border-brand-stone-100">
                    <div className="w-12 h-12 rounded-full bg-brand-charcoal flex items-center justify-center"><span className="text-white font-serif font-bold text-lg">J</span></div>
                    <div><p className="font-medium text-brand-charcoal">{SITE.COMPANY_NAME}</p><p className="text-brand-stone-500 text-sm">Property Agent</p></div>
                  </div>
                  <button onClick={function() { setShowContact(!showContact); }} className="btn-primary w-full justify-center mb-3"><Mail className="w-4 h-4 mr-2" />I am Interested</button>
                  <a href={"tel:" + SITE.PHONE} className="btn-secondary w-full justify-center mb-3 text-sm !py-2.5"><Phone className="w-4 h-4 mr-2" />Call Agent</a>
                  {whatsappNumber.length >= 8 && <a href={"https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(whatsappMessage)} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#25D366] text-white rounded-lg font-medium text-sm hover:bg-[#20BA5C] transition-colors"><MessageCircle className="w-4 h-4" />WhatsApp Agent</a>}
                </div>

                {showContact && (
                  <div className="bg-white rounded-2xl border border-brand-stone-200 p-6 animate-fade-in">
                    {submitted ? (
                      <div className="text-center py-6">
                        <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4"><CheckCircle className="w-7 h-7 text-emerald-600" /></div>
                        <h3 className="font-serif font-semibold text-lg mb-2">Message Sent</h3>
                        <p className="text-brand-stone-500 text-sm">Thank you. {SITE.COMPANY_NAME} will be in touch shortly.</p>
                      </div>
                    ) : (
                      <>
                        <h3 className="font-serif font-semibold text-lg mb-4">Send a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-3">
                          <input type="text" placeholder="Your Name" required value={form.name} onChange={function(e) { setForm(Object.assign({}, form, { name: e.target.value })); }} className="input-field text-sm" />
                          <input type="tel" placeholder="Phone Number" required inputMode="numeric" value={form.phone} onChange={function(e) { setForm(Object.assign({}, form, { phone: e.target.value })); }} className="input-field text-sm" />
                          <input type="email" placeholder="Email Address" required value={form.email} onChange={function(e) { setForm(Object.assign({}, form, { email: e.target.value })); }} className="input-field text-sm" />
                          <textarea rows={3} required value={form.message || ("I am interested in " + property.title + ". Please contact me with more information.")} onChange={function(e) { setForm(Object.assign({}, form, { message: e.target.value })); }} className="input-field text-sm resize-none" />
                          <button type="submit" className="btn-primary w-full justify-center text-sm"><Send className="w-4 h-4 mr-2" />Send Message</button>
                        </form>
                      </>
                    )}
                  </div>
                )}

                {property.demo && <div className="bg-brand-gold/10 rounded-xl p-4 border border-brand-gold/20"><p className="text-brand-gold text-xs font-medium">{SITE.DEMO_NOTICE}</p></div>}
              </div>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-padding bg-brand-cream">
          <div className="container-wide mx-auto">
            <h2 className="heading-serif text-2xl sm:text-3xl font-bold mb-8">Related Properties</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map(function(p) {
                return (
                  <Link key={p.id} href={"/properties/" + p.id} className="card-property group block">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <div className={"w-full h-full bg-gradient-to-br " + getPlaceholderGradient(p.id) + " flex items-center justify-center"}>
                        <Maximize className="w-10 h-10 text-white/30" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3">
                        <h3 className="text-white font-serif font-semibold">{p.title}</h3>
                        <p className="text-white/70 text-sm">{p.location}</p>
                      </div>
                    </div>
                    <div className="p-4"><span className="text-brand-gold font-bold">{p.priceLabel}</span></div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
