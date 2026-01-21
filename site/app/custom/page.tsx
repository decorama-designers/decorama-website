export default function CustomDesignsPage() {
  const designs = [
    { id: 1, image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=600&auto=format&fit=crop" },
    { id: 2, image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?q=80&w=600&auto=format&fit=crop" },
    { id: 3, image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=600&auto=format&fit=crop" },
    { id: 4, image: "https://images.unsplash.com/photo-1505693419148-ad1913ac147d?q=80&w=600&auto=format&fit=crop" },
  ];

  return (
    <div>
      <section className="relative h-[400px] w-full">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=2000&auto=format&fit=crop"
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
          {designs.map((design) => (
            <div key={design.id} className="aspect-square bg-gray-100 overflow-hidden border border-gray-200">
              <img
                src={design.image}
                alt={`Custom design ${design.id}`}
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
