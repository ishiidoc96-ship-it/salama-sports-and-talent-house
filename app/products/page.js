"use client";

import { useState, useMemo } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { CATEGORIES, CONDITIONS, AVAILABILITY_OPTIONS } from "@/lib/config";
import { getAllProducts } from "@/lib/products";
import ProductCard from "../components/ProductCard";
import ScrollReveal from "../components/ScrollReveal";

export default function ProductsPage() {
  const allProducts = getAllProducts();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [condition, setCondition] = useState("All");
  const [availability, setAvailability] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let results = [...allProducts];
    if (search) { const q = search.toLowerCase(); results = results.filter((p) => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.subcategory.toLowerCase().includes(q)); }
    if (category !== "All") { results = results.filter((p) => p.category === category); }
    if (condition !== "All") { results = results.filter((p) => p.condition === condition); }
    if (availability !== "All") { results = results.filter((p) => p.availability === availability); }
    return results;
  }, [allProducts, search, category, condition, availability]);

  const activeFilters = [category, condition, availability].filter((f) => f !== "All").length + (search ? 1 : 0);

  return (
    <>
      <ScrollReveal />
      <section className="bg-brand-navy py-16 sm:py-20">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="heading-main text-3xl sm:text-4xl md:text-5xl text-white font-bold mb-4">Shop / Products</h1>
          <p className="text-brand-slate-300 text-lg max-w-2xl mx-auto">Browse our full catalogue of sports goods, swimming products, handbags, tote bags, children&apos;s toys and more.</p>
        </div>
      </section>
      <section className="section-padding bg-brand-cream">
        <div className="container-wide mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-slate-400" />
              <input type="text" placeholder="Search products... (e.g. football, goggles, handbag)" value={search} onChange={(e) => setSearch(e.target.value)} className="input-field !pl-10" />
            </div>
            <button onClick={() => setShowFilters(!showFilters)} className="inline-flex items-center gap-2 px-5 py-3 bg-white border border-brand-slate-200 rounded-xl text-brand-slate-700 font-medium hover:bg-brand-slate-50 transition-colors sm:w-auto">
              <SlidersHorizontal className="w-4 h-4" />Filters
              {activeFilters > 0 && <span className="w-5 h-5 rounded-full bg-brand-blue text-white text-xs flex items-center justify-center">{activeFilters}</span>}
            </button>
          </div>
          {showFilters && (
            <div className="bg-white rounded-2xl p-6 shadow-card mb-6 animate-fade-in">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-heading font-semibold text-brand-navy">Filters</h3>
                {activeFilters > 0 && <button onClick={() => { setCategory("All"); setCondition("All"); setAvailability("All"); setSearch(""); }} className="text-sm text-brand-blue hover:underline">Clear All</button>}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div><label className="label-field">Category</label><select value={category} onChange={(e) => setCategory(e.target.value)} className="select-field"><option value="All">All Categories</option>{CATEGORIES.map((c) => (<option key={c.id} value={c.id}>{c.label}</option>))}</select></div>
                <div><label className="label-field">Condition</label><select value={condition} onChange={(e) => setCondition(e.target.value)} className="select-field"><option value="All">All Conditions</option>{CONDITIONS.map((c) => (<option key={c} value={c}>{c}</option>))}</select></div>
                <div><label className="label-field">Availability</label><select value={availability} onChange={(e) => setAvailability(e.target.value)} className="select-field"><option value="All">All Availability</option>{AVAILABILITY_OPTIONS.map((a) => (<option key={a} value={a}>{a}</option>))}</select></div>
              </div>
            </div>
          )}
          <p className="text-brand-slate-500 text-sm mb-6">Showing {filtered.length} product{filtered.length !== 1 ? "s" : ""}</p>
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">{filtered.map((product) => (<ProductCard key={product.id} product={product} />))}</div>
          ) : (
            <div className="text-center py-20">
              <Search className="w-12 h-12 mx-auto text-brand-slate-300 mb-4" />
              <h3 className="font-heading font-semibold text-brand-navy text-xl mb-2">No Products Found</h3>
              <p className="text-brand-slate-500 mb-4">Try adjusting your filters or search terms.</p>
              <button onClick={() => { setCategory("All"); setCondition("All"); setAvailability("All"); setSearch(""); }} className="btn-primary">Clear Filters</button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}