"use client";

import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function ShowroomStockPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const images = [
    "Coffee-Table-1021x1024.jpg",
    "Coffee-Table-2-1024x1024.jpg",
    "Decorama-057.jpg",
    "Decorama-072.jpg",
    "Decorama-075.jpg",
    "Decorama-110.jpg",
    "Decorama-152.jpg",
    "Decorama-156-2.jpg",
    "Decorama-166.jpg",
    "Decorama-182-2-1.jpg",
    "Decorama-224.jpg",
    "Decorama-238.jpg",
    "Decorama-246.jpg",
    "Decorama-270.jpg",
    "Decorama-275.jpg",
    "Decorama-356.jpg",
    "Fang-Wall-Mask-Long-1024x1024.jpg",
    "home-projects.jpg",
    "IMG_0017-1024x625.jpg",
    "IMG_9912-743x1024.jpg",
    "IMG_9923-1024x683.jpg",
    "IMG_9927-1024x662.jpg",
    "IMG_9931-707x1024.jpg",
    "IMG_9993-683x1024.jpg",
    "nosestatue.jpg",
    "one.jpg",
    "ORCHID-IMAGE-CHAIR-TABLE-768x1024.jpg",
    "ORN5003-BENCH-BLACK-TEAKWOOD-BLACK-LEATHER-768x1024.jpg",
    "Sideboard-1024x1024.jpg",
    "umbrella-chair-1018x1024.jpg"
  ].map(img => `/showroom/${img}`);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <div>
      <section className="relative h-[400px] w-full">
        <div className="absolute inset-0">
          <img
            src="/showroom/nosestatue.jpg"
            alt="Showroom Stock"
            className="w-full h-full object-cover blur-[2px] grayscale"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-black/60 text-white p-12 max-w-lg text-center backdrop-blur-sm border-white/20 border">
            <h1 className="text-4xl font-light tracking-tight mb-4">Showroom Stock</h1>
            <div className="w-20 h-[1px] bg-white mx-auto mb-4"></div>
            <p className="text-sm italic font-light tracking-wide">Continuously sourcing new and fresh trends</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {images.map((src, index) => (
            <div 
              key={index} 
              className="aspect-square bg-gray-100 overflow-hidden border border-gray-200 cursor-pointer group"
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={src}
                alt={`Stock item ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedIndex(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition"
            onClick={() => setSelectedIndex(null)}
          >
            <X size={32} />
          </button>
          
          <button 
            className="absolute left-6 text-white hover:text-gray-300 transition"
            onClick={handlePrev}
          >
            <ChevronLeft size={48} />
          </button>

          <img 
            src={images[selectedIndex]} 
            alt="Large view"
            className="max-w-full max-h-full object-contain shadow-2xl"
          />

          <button 
            className="absolute right-6 text-white hover:text-gray-300 transition"
            onClick={handleNext}
          >
            <ChevronRight size={48} />
          </button>

          <div className="absolute bottom-6 text-white text-sm font-light tracking-widest">
            {selectedIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </div>
  );
}
