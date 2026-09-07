"use client";

import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/config";

export default function WhatsAppButton() {
  const number = SITE.WHATSAPP.replace(/[^0-9]/g, "");
  const isPlaceholder = number.length < 8;

  if (isPlaceholder) return null;

  return (
    <a
      href={`https://wa.me/${number}?text=Hello! I'm interested in your products.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse" />
    </a>
  );
}
