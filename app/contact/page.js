"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle, ChevronDown } from "lucide-react";
import { SITE, LOOKING_FOR_OPTIONS, CONTACT_METHODS } from "@/lib/config";
import ScrollReveal from "../components/ScrollReveal";

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState("contact");
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [requestSubmitted, setRequestSubmitted] = useState(false);
  const [listSubmitted, setListSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({ name: "", phone: "", email: "", interested: "", message: "" });
  const [requestForm, setRequestForm] = useState({ name: "", phone: "", email: "", lookingFor: "", location: "", budget: "", bedrooms: "", propertySize: "", requirements: "", contactMethod: "" });
  const [listForm, setListForm] = useState({ ownerName: "", phone: "", email: "", propertyType: "", location: "", askingPrice: "", description: "", propertySize: "", bedrooms: "", additionalInfo: "" });

  const whatsappNumber = SITE.WHATSAPP.replace(/[^0-9]/g, "");

  return (
    <>
      <ScrollReveal />
      <section className="bg-brand-charcoal pt-8 pb-12">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="heading-serif text-3xl sm:text-4xl md:text-5xl text-white font-bold mb-3">Let&apos;s Find What You&apos;re Looking For</h1>
          <p className="text-brand-stone-300 text-lg max-w-2xl">Get in touch with {SITE.COMPANY_NAME} for property enquiries, requests, or to list your property.</p>
        </div>
      </section>

      <section className="section-padding bg-brand-cream">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10 reveal">
            <a href={SITE.PHONE !== "[PHONE NUMBER]" ? `tel:${SITE.PHONE}` : "#"} className="bg-white rounded-xl p-5 shadow-card hover:shadow-card-hover transition-all group">
              <div className="w-10 h-10 rounded-lg bg-brand-gold/10 flex items-center justify-center mb-3 group-hover:bg-brand-gold group-hover:text-white transition-all">
                <Phone className="w-5 h-5 text-brand-gold group-hover:text-white" />
              </div>
              <p className="text-xs text-brand-stone-500 mb-1">Phone</p>
              <p className="text-brand-charcoal font-medium text-sm">{SITE.PHONE}</p>
            </a>
            <a href={whatsappNumber.length >= 8 ? `https://wa.me/${whatsappNumber}` : "#"} target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl p-5 shadow-card hover:shadow-card-hover transition-all group">
              <div className="w-10 h-10 rounded-lg bg-[#25D366]/10 flex items-center justify-center mb-3 group-hover:bg-[#25D366] transition-all">
                <MessageCircle className="w-5 h-5 text-[#25D366] group-hover:text-white" />
              </div>
              <p className="text-xs text-brand-stone-500 mb-1">WhatsApp</p>
              <p className="text-brand-charcoal font-medium text-sm">{SITE.WHATSAPP}</p>
            </a>
            <a href={SITE.EMAIL !== "[EMAIL ADDRESS]" ? `mailto:${SITE.EMAIL}` : "#"} className="bg-white rounded-xl p-5 shadow-card hover:shadow-card-hover transition-all group">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3 group-hover:bg-blue-600 transition-all">
                <Mail className="w-5 h-5 text-blue-600 group-hover:text-white" />
              </div>
              <p className="text-xs text-brand-stone-500 mb-1">Email</p>
              <p className="text-brand-charcoal font-medium text-sm">{SITE.EMAIL}</p>
            </a>
            <div className="bg-white rounded-xl p-5 shadow-card">
              <div className="w-10 h-10 rounded-lg bg-brand-stone-100 flex items-center justify-center mb-3">
                <MapPin className="w-5 h-5 text-brand-stone-600" />
              </div>
              <p className="text-xs text-brand-stone-500 mb-1">Location</p>
              <p className="text-brand-charcoal font-medium text-sm">{SITE.LOCATION}</p>
            </div>
          </div>

          <div className="flex gap-1 bg-white rounded-xl p-1 mb-8 max-w-md shadow-card reveal">
            {[{ id: "contact", label: "Enquiry" }, { id: "request", label: "Property Request" }, { id: "list", label: "List Property" }].map((tab) => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex-1 py-2.5 text-sm font-medium rounded-lg transition-colors ${activeTab === tab.id ? "bg-brand-charcoal text-white" : "text-brand-stone-600 hover:bg-brand-stone-50"}`}>
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === "contact" && (
            <div className="max-w-2xl reveal">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-card">
                {contactSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4"><CheckCircle className="w-8 h-8 text-emerald-600" /></div>
                    <h3 className="font-serif text-xl font-bold mb-2">Enquiry Sent</h3>
                    <p className="text-brand-stone-500">Thank you. {SITE.COMPANY_NAME} will be in touch shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setContactSubmitted(true); }} className="space-y-4">
                    <h2 className="font-serif text-xl font-bold mb-4">Send an Enquiry</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div><label className="label-field">Name</label><input type="text" required value={contactForm.name} onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })} className="input-field" placeholder="Your full name" /></div>
                      <div><label className="label-field">Phone</label><input type="tel" required inputMode="numeric" value={contactForm.phone} onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })} className="input-field" placeholder="Phone number" /></div>
                    </div>
                    <div><label className="label-field">Email</label><input type="email" required value={contactForm.email} onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })} className="input-field" placeholder="Email address" /></div>
                    <div>
                      <label className="label-field">I&apos;m interested in</label>
                      <div className="relative">
                        <select value={contactForm.interested} onChange={(e) => setContactForm({ ...contactForm, interested: e.target.value })} className="select-field">
                          <option value="">Select...</option>
                          {LOOKING_FOR_OPTIONS.map((o) => (<option key={o} value={o}>{o}</option>))}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-stone-400 pointer-events-none" />
                      </div>
                    </div>
                    <div><label className="label-field">Message</label><textarea rows={4} required value={contactForm.message} onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })} className="input-field resize-none" placeholder="Tell us what you're looking for..." /></div>
                    <button type="submit" className="btn-primary w-full justify-center"><Send className="w-4 h-4 mr-2" />Send Enquiry</button>
                  </form>
                )}
              </div>
            </div>
          )}

          {activeTab === "request" && (
            <div className="max-w-2xl reveal">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-card">
                {requestSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4"><CheckCircle className="w-8 h-8 text-emerald-600" /></div>
                    <h3 className="font-serif text-xl font-bold mb-2">Request Received</h3>
                    <p className="text-brand-stone-500">Thank you. {SITE.COMPANY_NAME} has received your request. We&apos;ll be in touch regarding suitable opportunities.</p>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setRequestSubmitted(true); }} className="space-y-4">
                    <div>
                      <h2 className="font-serif text-xl font-bold mb-1">Property Request</h2>
                      <p className="text-brand-stone-500 text-sm mb-4">Tell us exactly what you need and we&apos;ll help you look for a suitable property.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div><label className="label-field">Full Name</label><input type="text" required value={requestForm.name} onChange={(e) => setRequestForm({ ...requestForm, name: e.target.value })} className="input-field" /></div>
                      <div><label className="label-field">Phone Number</label><input type="tel" required inputMode="numeric" value={requestForm.phone} onChange={(e) => setRequestForm({ ...requestForm, phone: e.target.value })} className="input-field" /></div>
                    </div>
                    <div><label className="label-field">Email</label><input type="email" required value={requestForm.email} onChange={(e) => setRequestForm({ ...requestForm, email: e.target.value })} className="input-field" /></div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="label-field">Looking For</label>
                        <div className="relative">
                          <select required value={requestForm.lookingFor} onChange={(e) => setRequestForm({ ...requestForm, lookingFor: e.target.value })} className="select-field">
                            <option value="">Select...</option>
                            {LOOKING_FOR_OPTIONS.map((o) => (<option key={o} value={o}>{o}</option>))}
                          </select>
                          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-stone-400 pointer-events-none" />
                        </div>
                      </div>
                      <div><label className="label-field">Location</label><input type="text" value={requestForm.location} onChange={(e) => setRequestForm({ ...requestForm, location: e.target.value })} className="input-field" placeholder="Preferred area" /></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div><label className="label-field">Budget</label><input type="text" value={requestForm.budget} onChange={(e) => setRequestForm({ ...requestForm, budget: e.target.value })} className="input-field" placeholder="e.g. KSh 5M" /></div>
                      <div><label className="label-field">Bedrooms</label><input type="text" value={requestForm.bedrooms} onChange={(e) => setRequestForm({ ...requestForm, bedrooms: e.target.value })} className="input-field" placeholder="e.g. 3" /></div>
                      <div><label className="label-field">Property Size</label><input type="text" value={requestForm.propertySize} onChange={(e) => setRequestForm({ ...requestForm, propertySize: e.target.value })} className="input-field" placeholder="e.g. 0.5 acres" /></div>
                    </div>
                    <div><label className="label-field">Additional Requirements</label><textarea rows={3} value={requestForm.requirements} onChange={(e) => setRequestForm({ ...requestForm, requirements: e.target.value })} className="input-field resize-none" placeholder="Any other details about what you're looking for..." /></div>
                    <div>
                      <label className="label-field">Preferred Contact Method</label>
                      <div className="flex gap-3">
                        {CONTACT_METHODS.map((m) => (
                          <label key={m} className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border cursor-pointer transition-colors text-sm ${requestForm.contactMethod === m ? "border-brand-gold bg-brand-gold/5 text-brand-gold" : "border-brand-stone-200 text-brand-stone-600 hover:border-brand-stone-300"}`}>
                            <input type="radio" name="contactMethod" value={m} checked={requestForm.contactMethod === m} onChange={(e) => setRequestForm({ ...requestForm, contactMethod: e.target.value })} className="sr-only" />
                            {m}
                          </label>
                        ))}
                      </div>
                    </div>
                    <button type="submit" className="btn-primary w-full justify-center"><Send className="w-4 h-4 mr-2" />Submit Property Request</button>
                  </form>
                )}
              </div>
            </div>
          )}

          {activeTab === "list" && (
            <div className="max-w-2xl reveal">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-card">
                {listSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4"><CheckCircle className="w-8 h-8 text-emerald-600" /></div>
                    <h3 className="font-serif text-xl font-bold mb-2">Property Submitted</h3>
                    <p className="text-brand-stone-500">Thank you. {SITE.COMPANY_NAME} has received your property listing. We&apos;ll review it and get back to you.</p>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setListSubmitted(true); }} className="space-y-4">
                    <div>
                      <h2 className="font-serif text-xl font-bold mb-1">List Your Property</h2>
                      <p className="text-brand-stone-500 text-sm mb-4">Let {SITE.COMPANY_NAME} help connect your property with people looking for real-estate opportunities.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div><label className="label-field">Owner Name</label><input type="text" required value={listForm.ownerName} onChange={(e) => setListForm({ ...listForm, ownerName: e.target.value })} className="input-field" /></div>
                      <div><label className="label-field">Phone</label><input type="tel" required inputMode="numeric" value={listForm.phone} onChange={(e) => setListForm({ ...listForm, phone: e.target.value })} className="input-field" /></div>
                    </div>
                    <div><label className="label-field">Email</label><input type="email" required value={listForm.email} onChange={(e) => setListForm({ ...listForm, email: e.target.value })} className="input-field" /></div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="label-field">Property Type</label>
                        <div className="relative">
                          <select required value={listForm.propertyType} onChange={(e) => setListForm({ ...listForm, propertyType: e.target.value })} className="select-field">
                            <option value="">Select...</option>
                            <option value="House">House</option>
                            <option value="Apartment">Apartment</option>
                            <option value="Land">Land</option>
                            <option value="Commercial">Commercial</option>
                            <option value="Other">Other</option>
                          </select>
                          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-stone-400 pointer-events-none" />
                        </div>
                      </div>
                      <div><label className="label-field">Location</label><input type="text" required value={listForm.location} onChange={(e) => setListForm({ ...listForm, location: e.target.value })} className="input-field" placeholder="Property location" /></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div><label className="label-field">Asking Price</label><input type="text" value={listForm.askingPrice} onChange={(e) => setListForm({ ...listForm, askingPrice: e.target.value })} className="input-field" placeholder="KSh" /></div>
                      <div><label className="label-field">Property Size</label><input type="text" value={listForm.propertySize} onChange={(e) => setListForm({ ...listForm, propertySize: e.target.value })} className="input-field" placeholder="e.g. 0.25 acres" /></div>
                      <div><label className="label-field">Bedrooms</label><input type="text" value={listForm.bedrooms} onChange={(e) => setListForm({ ...listForm, bedrooms: e.target.value })} className="input-field" placeholder="Number" /></div>
                    </div>
                    <div><label className="label-field">Property Description</label><textarea rows={3} required value={listForm.description} onChange={(e) => setListForm({ ...listForm, description: e.target.value })} className="input-field resize-none" placeholder="Describe the property..." /></div>
                    <div><label className="label-field">Additional Information</label><textarea rows={2} value={listForm.additionalInfo} onChange={(e) => setListForm({ ...listForm, additionalInfo: e.target.value })} className="input-field resize-none" placeholder="Any other details..." /></div>
                    <div>
                      <label className="label-field">Upload Photos</label>
                      <div className="border-2 border-dashed border-brand-stone-200 rounded-xl p-6 text-center hover:border-brand-gold/50 transition-colors cursor-pointer">
                        <p className="text-brand-stone-500 text-sm">Drag and drop photos here, or <span className="text-brand-gold font-medium">browse</span></p>
                        <p className="text-brand-stone-400 text-xs mt-1">JPG, PNG up to 5MB each</p>
                      </div>
                    </div>
                    <button type="submit" className="btn-primary w-full justify-center"><Send className="w-4 h-4 mr-2" />Submit Property</button>
                  </form>
                )}
              </div>
            </div>
          )}

          <div className="mt-12 reveal">
            <div className="bg-brand-stone-200 rounded-2xl h-64 flex items-center justify-center">
              <div className="text-center text-brand-stone-500">
                <MapPin className="w-10 h-10 mx-auto mb-2 opacity-40" />
                <p className="text-sm font-medium">Google Maps integration — coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
