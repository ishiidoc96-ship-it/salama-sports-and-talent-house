"use client";
import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Search, SlidersHorizontal, X, ChevronDown } from "lucide-react";
import { PROPERTY_TYPES, LOCATIONS, BUDGET_RANGES, BEDROOM_OPTIONS } from "@/lib/config";
import { filterProperties, sortProperties } from "@/lib/properties";
import PropertyCard from "@/app/components/PropertyCard";
import ScrollReveal from "@/app/components/ScrollReveal";

function PropertiesContent() {
  var searchParams = useSearchParams();
  var [showFilters, setShowFilters] = useState(false);
  var [category, setCategory] = useState(searchParams.get("category") || "");
  var [type, setType] = useState(searchParams.get("type") || "");
  var [location, setLocation] = useState(searchParams.get("location") || "");
  var [minPrice, setMinPrice] = useState(searchParams.get("minPrice") || "");
  var [maxPrice, setMaxPrice] = useState(searchParams.get("maxPrice") || "");
  var [bedrooms, setBedrooms] = useState(searchParams.get("bedrooms") || "");
  var [search, setSearch] = useState("");
  var [sortBy, setSortBy] = useState("newest");

  var filtered = useMemo(function() {
    var results = filterProperties({
      category: category || undefined,
      type: type || undefined,
      location: location || undefined,
      minPrice: minPrice ? parseInt(minPrice) : undefined,
      maxPrice: maxPrice ? parseInt(maxPrice) : undefined,
      bedrooms: bedrooms || undefined,
      search: search || undefined
    });
    return sortProperties(results, sortBy);
  }, [category, type, location, minPrice, maxPrice, bedrooms, search, sortBy]);

  var activeFilterCount = [category, type, location, minPrice, maxPrice, bedrooms].filter(Boolean).length;

  function clearFilters() {
    setCategory(""); setType(""); setLocation(""); setMinPrice(""); setMaxPrice(""); setBedrooms(""); setSearch("");
  }

  return (
    <>
      <ScrollReveal />
      <section className="bg-brand-charcoal pt-8 pb-12">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="heading-serif text-3xl sm:text-4xl md:text-5xl text-white font-bold mb-3">Properties</h1>
          <p className="text-brand-stone-300 text-lg max-w-2xl">Browse our selection of properties available through JAMWACHA PROPERTIES.</p>
        </div>
      </section>
      <section className="section-padding bg-brand-cream">
        <div className="container-wide mx-auto">
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <div className="flex-1 flex items-center gap-2 bg-white rounded-xl px-4 border border-brand-stone-200 focus-within:border-brand-gold focus-within:ring-2 focus-within:ring-brand-gold/20 transition-all">
              <Search className="w-4 h-4 text-brand-stone-400 shrink-0" />
              <input type="text" placeholder="Search by title, location, type..." value={search} onChange={function(e) { setSearch(e.target.value); }} className="w-full py-3 text-sm bg-transparent outline-none" />
            </div>
            <div className="flex gap-2">
              <button onClick={function() { setShowFilters(!showFilters); }} className={"inline-flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium border transition-colors " + (showFilters ? "bg-brand-charcoal text-white border-brand-charcoal" : "bg-white text-brand-stone-700 border-brand-stone-200 hover:border-brand-stone-300")}>
                <SlidersHorizontal className="w-4 h-4" />Filters
                {activeFilterCount > 0 && <span className="w-5 h-5 rounded-full bg-brand-gold text-white text-xs flex items-center justify-center">{activeFilterCount}</span>}
              </button>
              <div className="relative">
                <select value={sortBy} onChange={function(e) { setSortBy(e.target.value); }} className="appearance-none bg-white border border-brand-stone-200 rounded-xl px-4 py-3 pr-10 text-sm text-brand-stone-700 outline-none cursor-pointer">
                  <option value="newest">Sort: Newest</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-stone-400 pointer-events-none" />
              </div>
            </div>
          </div>
          {showFilters && (
            <div className="bg-white rounded-xl p-5 mb-6 shadow-card animate-fade-in">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium text-brand-charcoal">Filters</h3>
                {activeFilterCount > 0 && <button onClick={clearFilters} className="text-sm text-brand-gold hover:text-brand-gold-light flex items-center gap-1"><X className="w-3.5 h-3.5" />Clear all</button>}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div><label className="label-field">Category</label><select value={category} onChange={function(e) { setCategory(e.target.value); }} className="select-field text-sm"><option value="">All</option><option value="sale">Buy</option><option value="rent">Rent</option><option value="land">Land</option><option value="commercial">Commercial</option></select></div>
                <div><label className="label-field">Type</label><select value={type} onChange={function(e) { setType(e.target.value); }} className="select-field text-sm"><option value="">Any</option>{PROPERTY_TYPES.map(function(t) { return <option key={t} value={t}>{t}</option>; })}</select></div>
                <div><label className="label-field">Location</label><select value={location} onChange={function(e) { setLocation(e.target.value); }} className="select-field text-sm"><option value="">Any</option>{LOCATIONS.map(function(l) { return <option key={l} value={l}>{l}</option>; })}</select></div>
                <div><label className="label-field">Bedrooms</label><select value={bedrooms} onChange={function(e) { setBedrooms(e.target.value); }} className="select-field text-sm">{BEDROOM_OPTIONS.map(function(b) { return <option key={b} value={b === "Any" ? "" : b}>{b}</option>; })}</select></div>
              </div>
            </div>
          )}
          <div className="mb-4"><p className="text-brand-stone-500 text-sm">{filtered.length} propert{filtered.length === 1 ? "y" : "ies"} found</p></div>
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-16 h-16 rounded-full bg-brand-stone-100 flex items-center justify-center mx-auto mb-4"><Search className="w-7 h-7 text-brand-stone-400" /></div>
              <h3 className="font-serif text-xl text-brand-charcoal mb-2">No properties found</h3>
              <p className="text-brand-stone-500 mb-4">Try adjusting your filters.</p>
              <button onClick={clearFilters} className="btn-outline-gold text-sm">Clear Filters</button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map(function(property) { return <PropertyCard key={property.id} property={property} />; })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default function PropertiesPage() {
  return <Suspense fallback={<div className="min-h-screen bg-brand-cream" />}><PropertiesContent /></Suspense>;
}
