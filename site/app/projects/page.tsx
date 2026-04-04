export default function ProjectsPage() {
  const projects = [
    { id: 1, image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=600&auto=format&fit=crop" },
    { id: 2, image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=600&auto=format&fit=crop" },
    { id: 3, image: "https://images.unsplash.com/photo-1615876234886-fd9a39faa97f?q=80&w=600&auto=format&fit=crop" },
    { id: 4, image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=600&auto=format&fit=crop" },
    { id: 5, image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=600&auto=format&fit=crop" },
    { id: 6, image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=600&auto=format&fit=crop" },
  ];

  return (
    <div>
      <section className="relative h-[400px] w-full">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
            alt="Projects"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-black/60 text-white p-12 max-w-lg text-center backdrop-blur-sm border-white/20 border">
            <h1 className="text-4xl font-light tracking-tight mb-4">Projects</h1>
            <div className="w-20 h-[1px] bg-white mx-auto"></div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 text-center max-w-4xl">
        <p className="text-sm text-gray-500 italic tracking-wide mb-12">
          Our Passion is working with clients to create their personal story, instead of words we use fabrics, furniture and various elements of decor.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {projects.map((project) => (
            <div key={project.id} className="aspect-square bg-gray-100 overflow-hidden">
              <img
                src={project.image}
                alt={`Project ${project.id}`}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
