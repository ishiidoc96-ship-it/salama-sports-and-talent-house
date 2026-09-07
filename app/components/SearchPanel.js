"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, Home, Key, MapPin, Building2 } from "lucide-react";
import { LOCATIONS, PROPERTY_TYPES, BUDGET_RANGES, BEDROOM_OPTIONS } from "@/lib/config";

var tabs = [
  { id: "sale", label: "Buy", Icon: Home },
  { id: "rent", label: "Rent", Icon: Key },
  { id: "land", label: "Land", Icon: MapPin },
  { id: "commercial", label: "Commercial", Icon: Building2 }
];

export default function SearchPanel() {
  var router = useRouter();
  var [activeTab, setActiveTab] = useState("sale");
  var [location, setLocation] = useState("");
  var [type, setType] = useState("");
  var [budget, setBudget] = useState("");
  var [bedrooms, setBedrooms] = useState("");

  function handleSearch(e) {
    e.preventDefault();
    var params = new URLSearchParams();
    if (activeTab) params.set("category", activeTab);
    if (location) params.set("location", location);
    if (type) params.set("type", type);
    if (budget) {
      var range = BUDGET_RANGES.find(function(r) { return r.label === budget; });
      if (range) {
        if (range.min > 0) params.set("minPrice", String(range.min));
        if (range.max < Infinity) params.set("maxPrice", String(range.max));
      }
    }
    if (bedrooms && bedrooms !== "Any") params.set("bedrooms", bedrooms);
    router.push("/properties?" + params.toString());
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden">
        <div className="flex border-b border-brand-stone-100">
          {tabs.map(function(tab) {
            var isActive = activeTab === tab.id;
            return (
              <button key={tab.id} onClick={function() { setActiveTab(tab.id); }}
                className={"flex-1 flex items-center justify-center gap-2 py-3.5 text-sm font-medium transition-colors " + (isActive ? "text-brand-gold border-b-2 border-brand-gold bg-brand-gold/5" : "text-brand-stone-500 hover:text-brand-stone-700 hover:bg-brand-stone-50")}>
                <tab.Icon className="w-4 h-4" />{tab.label}
              </button>
            );
          })}
        </div>
        <form onSubmit={handleSearch} className="p-4 md:p-6">
          <p className="text-brand-stone-600 text-sm font-medium mb-4">What are you looking for?</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div>
              <label className="label-field">Location</label>
              <select value={location} onChange={function(e) { setLocation(e.target.value); }} className="select-field text-sm">
                <option value="">Any Location</option>
                {LOCATIONS.map(function(l) { return <option key={l} value={l}>{l}</option>; })}
              </select>
            </div>
            <div>
              <label className="label-field">Property Type</label>
              <select value={type} onChange={function(e) { setType(e.target.value); }} className="select-field text-sm">
                <option value="">Any Type</option>
                {PROPERTY_TYPES.map(function(t) { return <option key={t} value={t}>{t}</option>; })}
              </select>
            </div>
            <div>
              <label className="label-field">Budget</label>
              <select value={budget} onChange={function(e) { setBudget(e.target.value); }} className="select-field text-sm">
                <option value="">Any Budget</option>
                {BUDGET_RANGES.map(function(r) { return <option key={r.label} value={r.label}>{r.label}</option>; })}
              </select>
            </div>
            <div>
              <label className="label-field">Bedrooms</label>
              <select value={bedrooms} onChange={function(e) { setBedrooms(e.target.value); }} className="select-field text-sm">
                {BEDROOM_OPTIONS.map(function(b) { return <option key={b} value={b}>{b === "Any" ? "Any" : b + " Bedroom" + (b !== "1" ? "s" : "")}</option>; })}
              </select>
            </div>
          </div>
          <button type="submit" className="btn-primary w-full mt-5 justify-center">
            <Search className="w-4 h-4 mr-2" />Search Properties
          </button>
        </form>
      </div>
    </div>
  );
}
