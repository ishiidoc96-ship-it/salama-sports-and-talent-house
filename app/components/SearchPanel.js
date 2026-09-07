"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, Home, Key, MapPin, Building2 } from "lucide-react";
import { LOCATIONS, PROPERTY_TYPES, BUDGET_RANGES, BEDROOM_OPTIONS } from "@/lib/config";

const tabs = [
  { id: "sale", label: "Buy", icon: Home },
  { id: "rent", label: "Rent", icon: Key },
  { id: "land", label: "Land", icon: MapPin },
  { id: "commercial", label: "Commercial", icon: Building2 },
];

export default function SearchPanel({ compact = false }) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("sale");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [budget, setBudget] = useState("");
  const [bedrooms, setBedrooms] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (activeTab) params.set("category", activeTab);
    if (location) params.set("location", location);
    if (type) params.set("type", type);
    if (budget) {
      const range = BUDGET_RANGES.find((r) => r.label === budget);
      if (range) {
        if (range.min > 0) params.set("minPrice", range.min);
        if (range.max < Infinity) params.set("maxPrice", range.max);
      }
    }
    if (bedrooms && bedrooms !== "Any") params.set("bedrooms", bedrooms);
    router.push(`/properties?${params.toString()}`);
  };

  if (compact) {
    return (
      <form onSubmit={handleSearch} className="w-full">
        <div className="flex flex-col sm:flex-row gap-2 bg-white/95 backdrop-blur-md rounded-xl p-2 shadow-xl">
          <div className="flex-1 flex items-center gap-2 px-3 border-b sm:border-b-0 sm:border-r border-brand-stone-200">
            <Search className="w-4 h-4 text-brand-stone-400 shrink-0" />
            <input
              type="text"
              placeholder="Location..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full py-2.5 text-sm bg-transparent outline-none placeholder-brand-stone-400"
            />
          </div>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="px-3 py-2.5 text-sm bg-transparent border-b sm:border-b-0 sm:border-r border-brand-stone-200 outline-none text-brand-stone-600"
          >
            <option value="">Property Type</option>
            {PROPERTY_TYPES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
          <select
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="px-3 py-2.5 text-sm bg-transparent border-b sm:border-b-0 sm:border-r border-brand-stone-200 outline-none text-brand-stone-600"
          >
            <option value="">Budget</option>
            {BUDGET_RANGES.map((r) => (
              <option key={r.label} value={r.label}>{r.label}</option>
            ))}
          </select>
          <button
            type="submit"
            className="btn-primary !rounded-lg text-sm whitespace-nowrap"
          >
            <Search className="w-4 h-4 mr-1.5" />
            Search
          </button>
        </div>
      </form>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden">
        <div className="flex border-b border-brand-stone-100">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center gap-2 py-3.5 text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? "text-brand-gold border-b-2 border-brand-gold bg-brand-gold/5"
                  : "text-brand-stone-500 hover:text-brand-stone-700 hover:bg-brand-stone-50"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        <form onSubmit={handleSearch} className="p-4 md:p-6">
          <p className="text-brand-stone-600 text-sm font-medium mb-4">
            What are you looking for?
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div>
              <label className="label-field">Location</label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="select-field text-sm"
              >
                <option value="">Any Location</option>
                {LOCATIONS.map((l) => (
                  <option key={l} value={l}>{l}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="label-field">Property Type</label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="select-field text-sm"
              >
                <option value="">Any Type</option>
                {PROPERTY_TYPES.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="label-field">Budget</label>
              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="select-field text-sm"
              >
                <option value="">Any Budget</option>
                {BUDGET_RANGES.map((r) => (
                  <option key={r.label} value={r.label}>{r.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="label-field">Bedrooms</label>
              <select
                value={bedrooms}
                onChange={(e) => setBedrooms(e.target.value)}
                className="select-field text-sm"
              >
                {BEDROOM_OPTIONS.map((b) => (
                  <option key={b} value={b}>{b === "Any" ? "Any" : `${b} Bedroom${b !== "1" ? "s" : ""}`}</option>
                ))}
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="btn-primary w-full mt-5 justify-center"
          >
            <Search className="w-4 h-4 mr-2" />
            Search Properties
          </button>
        </form>
      </div>
    </div>
  );
}
