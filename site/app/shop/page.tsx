"use client";

import { useState } from "react";
import { products } from "../../lib/data";
import Link from "next/link";
import { Search } from "lucide-react";

export default function ShopPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];

  const filteredProducts = products.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) || 
                         p.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-light tracking-tight text-gray-800 mb-2">Shop Our Collection</h1>
        <div className="w-20 h-[3px] bg-black mx-auto"></div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 mb-12">
        {/* Search */}
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search furniture..."
            className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 text-sm focus:ring-1 focus:ring-black outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Categories */}
        <div className="flex gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 text-[11px] font-bold tracking-widest transition-colors ${
                selectedCategory === cat ? "bg-black text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
        {filteredProducts.map((product) => (
          <Link key={product.id} href={`/shop/${product.id}`} className="group">
            <div className="aspect-square bg-gray-50 border border-gray-100 overflow-hidden mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="text-sm font-medium text-gray-800 mb-1">{product.name}</h3>
            <p className="text-xs text-gray-500 italic mb-2">{product.category}</p>
            <p className="text-sm font-bold text-gray-900">${product.price}</p>
          </Link>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-24 text-gray-500">
          No products found matching your criteria.
        </div>
      )}
    </div>
  );
}
