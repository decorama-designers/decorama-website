"use client";

import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function CustomDesignsPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const designs = [
    { id: 1, image: "/custom_designs/Deco-images-2017-a.jpg" },
    { id: 2, image: "/custom_designs/Deco-images-2017-b-1024x747.jpg" },
    { id: 3, image: "/custom_designs/Decorama-117-2.jpg" },
    { id: 4, image: "/custom_designs/Decorama-210.jpg" },
    { id: 5, image: "/custom_designs/Decorama-241.jpg" },
    { id: 6, image: "/custom_designs/Decorama-258.jpg" },
    { id: 7, image: "/custom_designs/IMG_3057-768x1024.jpg" },
    { id: 8, image: "/custom_designs/IMG_4222-768x1024.jpg" },
    { id: 9, image: "/custom_designs/IMG_4394-1024x768.jpg" },
    { id: 10, image: "/custom_designs/IMG_5284-1024x768.jpg" },
    { id: 11, image: "/custom_designs/IMG_7264-1024x768.jpg" },
    { id: 12, image: "/custom_designs/IMG_8071-1024x768.jpg" },
    { id: 13, image: "/custom_designs/IMG_9163-1024x768.jpg" },
    { id: 14, image: "/custom_designs/IMG_9326.jpeg" },
    { id: 15, image: "/custom_designs/IMG_9556-1024x768.jpg" },
    { id: 16, image: "/custom_designs/IMG_9610-1024x768.jpg" },
    { id: 17, image: "/custom_designs/IMG_9618-1024x1024.jpg" },
    { id: 18, image: "/custom_designs/IMG_9944-1024x768.jpg" },
    { id: 19, image: "/custom_designs/Long-Island.jpg" },
  ];

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % designs.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + designs.length) % designs.length);
    }
  };

  return (
    <div>
      <section className="relative h-[400px] w-full">
        <div className="absolute inset-0">
          <img
            src="/custom_designs/Deco-images-2017-a.jpg"
            alt="Custom Designs"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-black/60 text-white p-12 max-w-xl text-center backdrop-blur-sm border-white/20 border">
            <h1 className="text-4xl font-light tracking-tight mb-4">Exclusive Range</h1>
            <div className="w-20 h-[1px] bg-white mx-auto mb-4"></div>
            <p className="text-sm font-light leading-relaxed">
              Our Exclusive Range of furniture and custom made pieces make every project intimate, creating a personal inspiring and ultimately liveable space to be used and enjoyed.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {designs.map((design, index) => (
            <div 
              key={design.id} 
              className="aspect-square bg-gray-100 overflow-hidden border border-gray-200 cursor-pointer group"
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={design.image}
                alt={`Custom design ${design.id}`}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
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
            src={designs[selectedIndex].image} 
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
            {selectedIndex + 1} / {designs.length}
          </div>
        </div>
      )}
    </div>
  );
}
