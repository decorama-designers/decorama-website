import { Logo } from "@/components/Navbar";

export default function AboutPage() {
  return (
    <div>
      <section className="relative h-[400px] w-full">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=2000&auto=format&fit=crop"
            alt="Interior accessories"
            className="w-full h-full object-cover grayscale opacity-60"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-black/60 text-white p-12 max-w-lg text-center backdrop-blur-sm border-white/20 border">
            <h1 className="text-4xl font-light tracking-tight mb-4">About Us</h1>
            <div className="w-20 h-[1px] bg-white mx-auto"></div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 max-w-4xl">
        <div className="space-y-8 text-center text-gray-600 leading-relaxed font-light tracking-wide">
          <p>
            Decorama is a company extremely passionate & dedicated to their clients. We are able to help each client decorate their home from furniture choices & fabric selections to curtaining & wallpaper & then finally adding that final accessory. We offer our clients decorating advice for residential or corporate interiors from furniture choices, fabric selections, window treatments and wallpaper.
          </p>
          <p>
            We have a vast library of fabrics, wallpapers and a good relationship with all the top fabric houses. We not only source products locally & internationally but we also manufacture a range of quality custom furniture.
          </p>
          <p>
            Our styles vary from modern, contemporary to classical always keeping the client's needs first. We stock the latest in ornaments, lamps, linen & rugs. We also stock a large range of local art. We are constantly changing our range and keeping it fresh & in with the latest trends.
          </p>
        </div>
      </section>
    </div>
  );
}
