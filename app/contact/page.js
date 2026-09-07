"use client";

import { useState } from "react";
import { Send, Phone, Mail, MapPin, MessageCircle, CheckCircle } from "lucide-react";
import { SITE, CATEGORIES } from "@/lib/config";
import ScrollReveal from "../components/ScrollReveal";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [requestSubmitted, setRequestSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", product: "", message: "" });
  const [requestData, setRequestData] = useState({ name: "", phone: "", product: "", category: "", size: "", budget: "", message: "" });

  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); };
  const handleRequestSubmit = (e) => { e.preventDefault(); setRequestSubmitted(true); };

  return (
    <>
      <ScrollReveal />
      <section className="bg-brand-navy py-16 sm:py-20">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="heading-main text-3xl sm:text-4xl md:text-5xl text-white font-bold mb-4">Get In Touch</h1>
          <p className="text-brand-slate-300 text-lg max-w-2xl mx-auto">Have a question? Want to check if a product is available? Reach out to us directly.</p>
        </div>
      </section>

      <section className="section-padding bg-brand-cream">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div className="reveal">
              <h2 className="heading-main text-2xl sm:text-3xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-5 mb-10">
                <div className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-card">
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center shrink-0"><MapPin className="w-6 h-6 text-brand-blue" /></div>
                  <div><h3 className="font-heading font-semibold text-brand-navy mb-1">Location</h3><p className="text-brand-slate-500 text-sm">{SITE.LOCATION}</p></div>
                </div>
                <div className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-card">
                  <div className="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center shrink-0"><Phone className="w-6 h-6 text-brand-green" /></div>
                  <div><h3 className="font-heading font-semibold text-brand-navy mb-1">Phone</h3><p className="text-brand-slate-500 text-sm">{SITE.PHONE}</p></div>
                </div>
                <div className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-card">
                  <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 flex items-center justify-center shrink-0"><MessageCircle className="w-6 h-6 text-[#25D366]" /></div>
                  <div><h3 className="font-heading font-semibold text-brand-navy mb-1">WhatsApp</h3><p className="text-brand-slate-500 text-sm">{SITE.WHATSAPP}</p></div>
                </div>
                <div className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-card">
                  <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center shrink-0"><Mail className="w-6 h-6 text-brand-orange" /></div>
                  <div><h3 className="font-heading font-semibold text-brand-navy mb-1">Email</h3><p className="text-brand-slate-500 text-sm">{SITE.EMAIL}</p></div>
                </div>
              </div>
              <div className="bg-brand-slate-100 rounded-2xl h-48 flex items-center justify-center">
                <div className="text-center text-brand-slate-400"><MapPin className="w-10 h-10 mx-auto mb-2 opacity-40" /><p className="text-sm">Google Maps integration coming soon</p></div>
              </div>
            </div>

            <div className="reveal">
              <h2 className="heading-main text-2xl sm:text-3xl font-bold mb-6">Send Us a Message</h2>
              {submitted ? (
                <div className="bg-white rounded-2xl p-8 shadow-card text-center">
                  <div className="w-16 h-16 rounded-full bg-brand-green/10 flex items-center justify-center mx-auto mb-4"><CheckCircle className="w-8 h-8 text-brand-green" /></div>
                  <h3 className="font-heading font-semibold text-brand-navy text-xl mb-2">Message Sent</h3>
                  <p className="text-brand-slate-500 mb-4">Thank you! We&apos;ll get back to you shortly.</p>
                  <button onClick={() => { setSubmitted(false); setFormData({ name: "", phone: "", email: "", product: "", message: "" }); }} className="btn-primary">Send Another Message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 sm:p-8 shadow-card">
                  <div className="space-y-4">
                    <div><label className="label-field">Name *</label><input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="input-field" placeholder="Your name" /></div>
                    <div><label className="label-field">Phone *</label><input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="input-field" placeholder="Your phone number" /></div>
                    <div><label className="label-field">Email</label><input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="input-field" placeholder="Your email (optional)" /></div>
                    <div><label className="label-field">Product / Category</label><input type="text" value={formData.product} onChange={(e) => setFormData({ ...formData, product: e.target.value })} className="input-field" placeholder="e.g. Football, Swimming Goggles, Handbag" /></div>
                    <div><label className="label-field">Message *</label><textarea required rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="input-field resize-none" placeholder="Your message..." /></div>
                    <button type="submit" className="btn-primary w-full justify-center text-base !py-3.5"><Send className="w-5 h-5 mr-2" />Send Message</button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="request" className="section-padding bg-white">
        <div className="container-wide mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10 reveal">
              <h2 className="heading-main text-3xl sm:text-4xl font-bold mb-4">Can&apos;t Find What You Need?</h2>
              <p className="text-brand-slate-500 text-lg">Tell us what you&apos;re looking for and we&apos;ll help you check what&apos;s available.</p>
            </div>
            {requestSubmitted ? (
              <div className="bg-brand-cream rounded-2xl p-8 text-center reveal">
                <div className="w-16 h-16 rounded-full bg-brand-green/10 flex items-center justify-center mx-auto mb-4"><CheckCircle className="w-8 h-8 text-brand-green" /></div>
                <h3 className="font-heading font-semibold text-brand-navy text-xl mb-2">Request Received</h3>
                <p className="text-brand-slate-500 mb-4">Thank you! We&apos;ll get back to you regarding your request.</p>
                <button onClick={() => { setRequestSubmitted(false); setRequestData({ name: "", phone: "", product: "", category: "", size: "", budget: "", message: "" }); }} className="btn-primary">Submit Another Request</button>
              </div>
            ) : (
              <form onSubmit={handleRequestSubmit} className="bg-brand-cream rounded-2xl p-6 sm:p-8 reveal">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div><label className="label-field">Name *</label><input type="text" required value={requestData.name} onChange={(e) => setRequestData({ ...requestData, name: e.target.value })} className="input-field" placeholder="Your name" /></div>
                  <div><label className="label-field">Phone *</label><input type="tel" required value={requestData.phone} onChange={(e) => setRequestData({ ...requestData, phone: e.target.value })} className="input-field" placeholder="Your phone number" /></div>
                  <div><label className="label-field">Product You&apos;re Looking For *</label><input type="text" required value={requestData.product} onChange={(e) => setRequestData({ ...requestData, product: e.target.value })} className="input-field" placeholder="e.g. Nike Football, Swimming Goggles" /></div>
                  <div><label className="label-field">Category</label><select value={requestData.category} onChange={(e) => setRequestData({ ...requestData, category: e.target.value })} className="select-field"><option value="">Select category</option>{CATEGORIES.map((c) => (<option key={c.id} value={c.id}>{c.label}</option>))}</select></div>
                  <div><label className="label-field">Preferred Size</label><input type="text" value={requestData.size} onChange={(e) => setRequestData({ ...requestData, size: e.target.value })} className="input-field" placeholder="e.g. M, L, 42" /></div>
                  <div><label className="label-field">Budget</label><input type="text" value={requestData.budget} onChange={(e) => setRequestData({ ...requestData, budget: e.target.value })} className="input-field" placeholder="e.g. Under KSh 2,000" /></div>
                  <div className="sm:col-span-2"><label className="label-field">Additional Message</label><textarea rows={3} value={requestData.message} onChange={(e) => setRequestData({ ...requestData, message: e.target.value })} className="input-field resize-none" placeholder="Any other details..." /></div>
                </div>
                <button type="submit" className="btn-primary w-full justify-center text-base !py-3.5 mt-4"><Send className="w-5 h-5 mr-2" />Send Request</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}