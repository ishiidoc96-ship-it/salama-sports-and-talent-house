"use client";

import { useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { CATEGORIES, CONDITIONS, AVAILABILITY_OPTIONS } from "@/lib/config";
import ProductCard from "../components/ProductCard";
import { useRouter, useSearchParams } from "next/navigation";

export default function ProductsPageClient({ products, totalProducts }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [showFilters, setShowFilters] = useState(false);

  const currentCategory = searchParams.get("category") || "";
  const currentCondition = searchParams.get("condition") || "";
  const currentAvailability = searchParams.get("availability") || "";

  function updateParam(key, value) {
    const params = new URLSearchParams(searchParams.toString());
    if (value) { params.set(key, value); } else { params.delete(key); }
    router.push("/products?" + params.toString());
  }

  function handleSearch(e) {
    e.preventDefault();
    updateParam("search", search);
  }

  return (
    <>
      <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-card mb-8 reveal">
        <form onSubmit={handleSearch} className="flex gap-3 mb-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-slate-400" />
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search products..." className="input-field !pl-10" />
          </div>
          <button type="submit" className="btn-primary">Search</button>
          <button type="button" onClick={() => setShowFilters(!showFilters)} className="btn-outline-blue sm:hidden"><SlidersHorizontal className="w-4 h-4" /></button>
        </div>
        <div className="flex flex-wrap gap-2 " + (showFilters ? "" : "hidden sm:flex">
          <button onClick={() => updateParam("category", "")} className="px-3 py-1.5 rounded-lg text-sm font-medium transition-colors " + (!currentCategory ? "bg-brand-blue text-white" : "bg-brand-slate-100 text-brand-slate-600 hover:bg-brand-slate-200")>All</button>
          {CATEGORIES.map((cat) => (
            <button key={cat.value} onClick={() => updateParam("category", cat.value)} className="px-3 py-1.5 rounded-lg text-sm font-medium transition-colors " + (currentCategory === cat.value ? "bg-brand-blue text-white" : "bg-brand-slate-100 text-brand-slate-600 hover:bg-brand-slate-200")>{cat.label}</button>
          ))}
        </div>
      </div>
      <p className="text-brand-slate-500 text-sm mb-6">{totalProducts} product{totalProducts !== 1 ? "s" : ""} found</p>
      {products.length === 0 ? (
        <div className="text-center py-20"><Search className="w-12 h-12 mx-auto text-brand-slate-300 mb-4" /><h3 className="font-heading font-semibold text-brand-navy text-xl mb-2">No Products Found</h3><p className="text-brand-slate-500">Try adjusting your filters or search terms.</p></div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 stagger-children">
          {products.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      )}
    </>
  );
}
