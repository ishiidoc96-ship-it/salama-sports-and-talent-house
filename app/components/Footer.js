import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { SITE, NAV_LINKS } from "@/lib/config";

const categories = [
  { label: "Sports", href: "/sports" },
  { label: "Swimming", href: "/swimming" },
  { label: "Handbags", href: "/handbags" },
  { label: "Kids", href: "/kids" },
  { label: "New Arrivals", href: "/new-arrivals" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-gradient text-white">
      <div className="container-wide mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-brand-blue flex items-center justify-center">
                <span className="text-white font-heading font-bold text-lg leading-none">
                  S
                </span>
              </div>
              <div>
                <span className="font-heading font-bold text-sm tracking-tight block leading-tight">
                  SALAMA
                </span>
                <span className="text-[10px] font-medium tracking-wider uppercase text-white/60 block">
                  Sports & Talent House
                </span>
              </div>
            </div>
            <p className="text-brand-slate-400 text-sm leading-relaxed mb-4">
              {SITE.TAGLINE}
            </p>
            <p className="text-brand-slate-500 text-xs leading-relaxed">
              Sports &bull; Swimming &bull; Fashion &bull; Kids &bull; More
            </p>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-brand-slate-400 text-sm hover:text-brand-blue transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-white mb-4">
              Categories
            </h3>
            <ul className="space-y-2.5">
              {categories.map((cat) => (
                <li key={cat.href}>
                  <Link
                    href={cat.href}
                    className="text-brand-slate-400 text-sm hover:text-brand-blue transition-colors"
                  >
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-white mb-4">
              Visit Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-brand-slate-400 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-brand-blue" />
                <span>{SITE.LOCATION}</span>
              </li>
              <li className="flex items-start gap-3 text-brand-slate-400 text-sm">
                <Phone className="w-4 h-4 mt-0.5 shrink-0 text-brand-blue" />
                <span>{SITE.PHONE}</span>
              </li>
              <li className="flex items-start gap-3 text-brand-slate-400 text-sm">
                <MessageCircle className="w-4 h-4 mt-0.5 shrink-0 text-[#25D366]" />
                <span>{SITE.WHATSAPP}</span>
              </li>
              <li className="flex items-start gap-3 text-brand-slate-400 text-sm">
                <Mail className="w-4 h-4 mt-0.5 shrink-0 text-brand-blue" />
                <span>{SITE.EMAIL}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-brand-slate-500 text-sm">
            &copy; {new Date().getFullYear()} {SITE.COMPANY_NAME}. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-sm text-brand-slate-500">
            <Link href="/about" className="hover:text-brand-blue transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-brand-blue transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
