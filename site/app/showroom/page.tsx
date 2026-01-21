export default function ShowroomStockPage() {
  const stockItems = [
    { id: 1, image: "https://images.unsplash.com/photo-1538688525198-9b88f6f50126?q=80&w=600&auto=format&fit=crop" },
    { id: 2, image: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?q=80&w=600&auto=format&fit=crop" },
    { id: 3, image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=600&auto=format&fit=crop" },
    { id: 4, image: "https://images.unsplash.com/photo-1506485338423-2283912932e8?q=80&w=600&auto=format&fit=crop" },
    { id: 5, image: "https://images.unsplash.com/photo-1582201943021-e8e5b3061b33?q=80&w=600&auto=format&fit=crop" },
    { id: 6, image: "https://images.unsplash.com/photo-1612152605347-f93296cb657d?q=80&w=600&auto=format&fit=crop" },
    { id: 7, image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?q=80&w=600&auto=format&fit=crop" },
    { id: 8, image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=600&auto=format&fit=crop" },
    { id: 9, image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=600&auto=format&fit=crop" },
    { id: 10, image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=600&auto=format&fit=crop" },
  ];

  return (
    <div>
      <section className="relative h-[400px] w-full">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=2000&auto=format&fit=crop"
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
          {stockItems.map((item) => (
            <div key={item.id} className="aspect-square bg-gray-100 overflow-hidden border border-gray-200">
              <img
                src={item.image}
                alt={`Stock item ${item.id}`}
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
