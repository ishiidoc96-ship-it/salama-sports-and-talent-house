"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle } from "lucide-react";
import { SITE, NAV_LINKS } from "@/lib/config";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const whatsappNumber = SITE.WHATSAPP.replace(/[^0-9]/g, "");
  const isWhatsappReady = whatsappNumber.length >= 8;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-nav"
            : "bg-transparent"
        }`}
      >
        <div className="container-wide mx-auto flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-brand-blue flex items-center justify-center shadow-lg shadow-brand-blue/20">
              <span className="text-white font-heading font-bold text-lg leading-none">S</span>
            </div>
            <div className="hidden sm:block">
              <span
                className={`font-heading font-bold text-sm tracking-tight transition-colors block leading-tight ${
                  scrolled ? "text-brand-navy" : "text-white"
                }`}
              >
                SALAMA
              </span>
              <span
                className={`text-[10px] font-medium tracking-wider uppercase transition-colors block ${
                  scrolled ? "text-brand-slate-500" : "text-white/70"
                }`}
              >
                Sports & Talent House
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? scrolled
                      ? "text-brand-blue bg-brand-blue/10"
                      : "text-white bg-white/15"
                    : scrolled
                    ? "text-brand-slate-600 hover:text-brand-navy hover:bg-brand-slate-100"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            {isWhatsappReady ? (
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-sm !px-5 !py-2.5"
              >
                <MessageCircle className="w-4 h-4 mr-1.5" />
                WhatsApp Us
              </a>
            ) : (
              <Link href="/contact" className="btn-primary text-sm !px-5 !py-2.5">
                Contact Us
              </Link>
            )}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled
                ? "text-brand-navy hover:bg-brand-slate-100"
                : "text-white hover:bg-white/10"
            }`}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-0 right-0 w-full max-w-sm h-full bg-white shadow-xl animate-slide-in-right">
            <div className="flex items-center justify-between p-5 border-b border-brand-slate-100">
              <span className="font-heading font-bold text-brand-navy text-sm">
                {SITE.COMPANY_NAME}
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg text-brand-slate-500 hover:bg-brand-slate-100"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-5 space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    pathname === link.href
                      ? "text-brand-blue bg-brand-blue/10"
                      : "text-brand-slate-700 hover:bg-brand-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="p-5 border-t border-brand-slate-100">
              {isWhatsappReady ? (
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full justify-center"
                >
                  <MessageCircle className="w-4 h-4 mr-1.5" />
                  WhatsApp Us
                </a>
              ) : (
                <Link href="/contact" className="btn-primary w-full justify-center">
                  Contact Us
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
