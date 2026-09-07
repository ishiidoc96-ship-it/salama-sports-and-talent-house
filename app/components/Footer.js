import Link from "next/link";
import { Phone, Mail, MapPin, Globe, ExternalLink } from "lucide-react";
import { SITE, NAV_LINKS } from "@/lib/config";

const services = [
  { label: "Houses", href: "/buy" },
  { label: "Land", href: "/land" },
  { label: "Rentals", href: "/rent" },
  { label: "Commercial Property", href: "/buy" },
  { label: "Property Requests", href: "/contact" },
  { label: "List Your Property", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-dark-gradient text-white">
      <div className="container-wide mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-brand-gold flex items-center justify-center">
                <span className="text-white font-serif font-bold text-lg leading-none">J</span>
              </div>
              <span className="font-serif font-bold text-lg tracking-tight">{SITE.COMPANY_NAME}</span>
            </div>
            <p className="text-brand-stone-400 text-sm leading-relaxed mb-6">{SITE.TAGLINE}</p>
            <div className="flex gap-3">
              {SITE.SOCIAL_FACEBOOK && <a href={SITE.SOCIAL_FACEBOOK} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-brand-gold transition-colors" aria-label="Facebook"><Globe className="w-4 h-4" /></a>}
              {SITE.SOCIAL_INSTAGRAM && <a href={SITE.SOCIAL_INSTAGRAM} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-brand-gold transition-colors" aria-label="Instagram"><Globe className="w-4 h-4" /></a>}
              {SITE.SOCIAL_LINKEDIN && <a href={SITE.SOCIAL_LINKEDIN} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-brand-gold transition-colors" aria-label="LinkedIn"><Globe className="w-4 h-4" /></a>}
            </div>
          </div>
          <div>
            <h3 className="font-serif font-semibold text-white mb-4">Navigation</h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}><Link href={link.href} className="text-brand-stone-400 text-sm hover:text-brand-gold transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-serif font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.label}><Link href={s.href} className="text-brand-stone-400 text-sm hover:text-brand-gold transition-colors">{s.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-serif font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-brand-stone-400 text-sm"><Phone className="w-4 h-4 mt-0.5 shrink-0" /><span>{SITE.PHONE}</span></li>
              <li className="flex items-start gap-3 text-brand-stone-400 text-sm"><Mail className="w-4 h-4 mt-0.5 shrink-0" /><span>{SITE.EMAIL}</span></li>
              <li className="flex items-start gap-3 text-brand-stone-400 text-sm"><MapPin className="w-4 h-4 mt-0.5 shrink-0" /><span>{SITE.LOCATION}</span></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-brand-stone-500 text-sm">&copy; {new Date().getFullYear()} {SITE.COMPANY_NAME}. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-brand-stone-500">
            <Link href="/privacy" className="hover:text-brand-gold transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-brand-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
