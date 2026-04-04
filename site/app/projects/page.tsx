"use client";

import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectsPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const projects = [
    "11849789_1621718691400676_1811883911_n.jpg",
    "12331392_434491710073293_39589767_n.jpg",
    "12339001_443613039167157_325890462_n.jpg",
    "12751164_1669420536645359_1680221668_n.jpg",
    "278171801_451061213457558_1553370261259809916_n.jpg",
    "285311345_3265888473695064_535537181208403268_n.jpg",
    "286380057_359220322977267_2720111135985167828_n.jpg",
    "288607877_5905997892749986_6200625617381466427_n.jpg",
    "288870222_705202670546077_6731625397661767955_n.jpg",
    "310705853_641488354311865_2039615006065314625_n.jpg",
    "310744024_545344767354253_6856767373064965311_n.jpg",
    "Decorama 010.jpg",
    "Decorama 021.jpg",
    "Decorama 156.jpg",
    "Decorama 157.jpg",
    "Decorama 163.jpg",
    "Screenshot 2024-11-14 172417.png",
    "Screenshot 2026-01-15 113722.png",
    "Decorama 176.jpg",
    "Decorama 189.jpg",
    "Screenshot 2024-11-14 172551.png",
    "Screenshot 2025-01-20 155957.png",
    "Screenshot 2025-01-20 161158.png",
    "Screenshot 2025-01-20 161345.png",
    "Screenshot 2025-01-20 161414.png",
    "Screenshot 2025-01-20 161447.png",
    "Screenshot 2025-01-20 161738.png",
    "Screenshot 2025-01-20 164558.png",
    "Screenshot 2025-01-20 164945.png",
    "Screenshot 2025-01-20 171129.png",
    "Screenshot 2025-03-12 114622.png",
    "Screenshot 2025-07-02 120750.png",
    "Screenshot 2025-10-01 101117.png",
    "Screenshot 2025-10-30 110720.png",
    "Screenshot 2026-01-15 112710.png",
    "277973177_505828174551339_8432461489789761488_n.jpg",
  ].map((img) => `/projects/${encodeURIComponent(img)}`);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % projects.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + projects.length) % projects.length);
    }
  };

  return (
    <div>
      <section className="relative h-[400px] w-full">
        <div className="absolute inset-0">
          <img
            src="/Screenshot%202024-11-14%20172551.png"
            alt="Projects"
            className="w-full h-full object-cover "
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-black/40 text-white p-12 max-w-lg text-center  border-white/20 border">
            <h1 className="text-4xl font-light tracking-tight mb-4">Projects</h1>
            <div className="w-20 h-[1px] bg-white mx-auto"></div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <p className="text-sm text-gray-500 italic tracking-wide mb-12">
          Our Passion is working with clients to create their personal story, instead of words we use fabrics, furniture and various elements of decor.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {projects.map((project, index) => (
            <div
              key={project}
              className="aspect-square bg-gray-100 overflow-hidden border border-gray-200 cursor-pointer group"
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={project}
                alt={`Project ${index + 1}`}
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
            src={projects[selectedIndex]}
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
            {selectedIndex + 1} / {projects.length}
          </div>
        </div>
      )}
    </div>
  );
}
