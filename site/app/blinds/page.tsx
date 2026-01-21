export default function BlindsPage() {
  const blinds = [
    { id: 1, image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=600&auto=format&fit=crop" },
    { id: 2, image: "https://images.unsplash.com/photo-1615876234886-fd9a39faa97f?q=80&w=600&auto=format&fit=crop" },
    { id: 3, image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=600&auto=format&fit=crop" },
  ];

  return (
    <div>
      <section className="relative h-[400px] w-full">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2000&auto=format&fit=crop"
            alt="Blinds"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-black/60 text-white p-12 max-w-xl text-center backdrop-blur-sm border-white/20 border">
            <h1 className="text-4xl font-light tracking-tight mb-4">Blinds</h1>
            <div className="w-20 h-[1px] bg-white mx-auto mb-4"></div>
            <p className="text-sm font-light leading-relaxed">
              An attractive window and the right light can change everything from your room to your mood.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 text-center">
        <div className="mb-12">
           <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-6 italic">The Art of Window Styling.</p>
           <img src="https://www.luxaflex.co.za/assets/images/logos/logo.svg" alt="Luxaflex" className="h-12 mx-auto grayscale opacity-80" />
           <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mt-2">window styling</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 max-w-5xl mx-auto">
          {blinds.map((blind) => (
            <div key={blind.id} className="aspect-square bg-gray-100 overflow-hidden">
              <img
                src={blind.image}
                alt={`Blind ${blind.id}`}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
