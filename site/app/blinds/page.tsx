"use client";

import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function BlindsPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [selectedCurtainIndex, setSelectedCurtainIndex] = useState<number | null>(null);

  const images = [
    "DS_1058.jpg",
    "DS_1111.jpg",
    "DS_1113.jpg",
    "DS_1133.jpg",
    "DS_1324.jpg",
    "DS_1366.jpg",
    "DS_1452.jpg",
    "Duette Shades - Top Down Bottom Up.jpg",
    "Photo 2020-06-06, 10 20 56.jpg",
    "Photo 2020-06-06, 10 21 23.jpg",
    "Photo 2020-06-06, 10 21 55.jpg",
    "Photo 2020-06-06, 10 22 23.jpg",
    "RB_1653.jpg",
    "RB_1664.jpg",
    "RB_1804.jpg",
    "RB_1936.jpg",
    "SIL_0133.jpg",
    "SIL_0140.jpg",
    "SIL_0158.jpg",
    "SIL_0166_EN_0168_GECOMBINEERD.jpg",
    "Set 14 Main v2_RT.jpg",
    "Shutters_Bathroom_High_Grey_001.jpg",
    "Shutters_New1.jpg",
    "Slide74.JPG",
    "Slide78.JPG",
    "THOMAS SANDERSON BLINDS PLANTATION SHUTTERS-60429.jpg",
    "TW_0011.jpg",
    "TW_0012.jpg",
    "TW_0021.jpg",
    "TW_0033.jpg",
    "TW_0087.jpg",
    "TW_0094.jpg",
    "TW_0095.jpg",
    "TW_0096.jpg",
    "VB_1321_ZONDER_BEELDJE.jpg",
    "VB_1475.jpg",
    "VB_1484.jpg",
    "VB_1504.jpg",
    "VB_1510.jpg",
    "WVB_0166_ALUMINIUM_TASSEL_2010.jpg",
    "WVB_0276.jpg",
    "WVB_0298.jpg",
    "WVB_0308.jpg",
    "WVB_0324.jpg",
    "som_bathroom_shutters_hr.jpg",
  ].map((img) => `/Window%20treatments/${encodeURIComponent(img)}`);

  const curtainsImages = [
    "12798106_1163417367010051_282365775_n.jpg",
    "Curtain 1cm from the floor with roller blind inside the window.jpg",
    "Screenshot 2024-06-04 085038.png",
    "Screenshot 2024-11-07 111418.png",
    "Screenshot 2024-11-07 111510.png",
    "Screenshot 2024-11-07 112002.png",
    "Screenshot 2024-11-07 112038.png",
    "Screenshot 2025-01-20 171638.png",
    "WhatsApp Image 2026-04-04 at 20.51.43.jpeg",
    "WhatsApp Image 2026-04-04 at 20.52.43.jpeg",
  ].map((img) => `/curtains/${encodeURIComponent(img)}`);

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

  const handleCurtainsNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedCurtainIndex !== null) {
      setSelectedCurtainIndex((selectedCurtainIndex + 1) % curtainsImages.length);
    }
  };

  const handleCurtainsPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedCurtainIndex !== null) {
      setSelectedCurtainIndex((selectedCurtainIndex - 1 + curtainsImages.length) % curtainsImages.length);
    }
  };

  return (
    <div>
      <section className="relative h-[400px] w-full">
        <div className="absolute inset-0">
          <img
            src="/Window%20treatments/RB_1653.jpg"
            alt="Window Gallery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-black/25 text-white p-12 max-w-xl text-center backdrop-blur-[1px] border-white/15 border">
            <h1 className="text-4xl font-light tracking-tight mb-4">Window Gallery</h1>
            <div className="w-20 h-[1px] bg-white mx-auto mb-4"></div>
            <p className="text-sm font-light leading-relaxed">
              An attractive window and the right light can change everything from your room to your mood.
            </p>
          </div>
        </div>
      </section>

      { /*window treatments and automation*/}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="mb-5">
           <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-6 italic">Window Treatments & Automation</p>
           <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mt-2">
            Premium blinds, curtains and motorised solutions tailored for both residential and commercial spaces.
           </p>
            <img src="/Window%20treatments/Luxaflex.jpg" alt="Luxaflex" className="h-40 w-40 mx-auto object-contain" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-7xl mx-auto">
          {images.map((src, index) => (
            <div
              key={src}
              className="aspect-square bg-gray-100 overflow-hidden border border-gray-200 cursor-pointer group"
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={src}
                alt={`Window treatment ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      { /* curtains */ }
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="mb-5">
           <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-6 italic">Curtains</p>
           <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mt-2">
            Custom made to suit your space.
           </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-7xl mx-auto">
          {curtainsImages.map((src, index) => (
            <div
              key={src}
              className="aspect-square bg-gray-100 overflow-hidden border border-gray-200 cursor-pointer group"
              onClick={() => setSelectedCurtainIndex(index)}
            >
              <img
                src={src}
                alt={`Curtain ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Curtains Lightbox */}
      {selectedCurtainIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCurtainIndex(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition"
            onClick={() => setSelectedCurtainIndex(null)}
          >
            <X size={32} />
          </button>

          <button
            className="absolute left-6 text-white hover:text-gray-300 transition"
            onClick={handleCurtainsPrev}
          >
            <ChevronLeft size={48} />
          </button>

          <img
            src={curtainsImages[selectedCurtainIndex]}
            alt="Curtains large view"
            className="max-w-full max-h-full object-contain shadow-2xl"
          />

          <button
            className="absolute right-6 text-white hover:text-gray-300 transition"
            onClick={handleCurtainsNext}
          >
            <ChevronRight size={48} />
          </button>

          <div className="absolute bottom-6 text-white text-sm font-light tracking-widest">
            {selectedCurtainIndex + 1} / {curtainsImages.length}
          </div>
        </div>
      )}

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
