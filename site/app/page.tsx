import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] w-full">
        <div className="absolute inset-0">
          <img
            src="/home/Screenshot 2024-05-29 102023.png"
            alt="home page image"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-black/60 text-white p-12 max-w-2xl text-center backdrop-blur-sm">
            <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
              Exquisite Style Defined
            </h1>
            <div className="w-24 h-[1px] bg-white mx-auto mb-6"></div>
            <p className="text-lg md:text-xl font-light italic leading-relaxed">
              All our products are uniquely sourced, and cater for all of your interior decorating needs.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
            { name: "Showroom Stock", image: "/showroom/nosestatue.jpg", href: "/showroom" },
            { name: "Exclusive Range", image: "custom_designs/IMG_5284-1024x768.jpg", href: "/custom" },
            { name: "Window Gallery", image: "/curtains/Screenshot 2024-11-07 112002.png", href: "/blinds" },
            { name: "Projects", image: "/Screenshot 2024-11-14 172551.png", href: "/projects" },
            ].map((cat) => (
            <Link key={cat.name} href={cat.href} className="group cursor-pointer">
              <div className="aspect-square overflow-hidden bg-gray-100 mb-4 border border-gray-200 shadow-sm">
              <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              </div>
              <h3 className="text-center text-sm font-medium tracking-widest uppercase text-gray-700">
              {cat.name}
              </h3>
            </Link>
            ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-[#e0e0e0] py-20">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl font-light tracking-tight text-gray-800 mb-2">
            Newsletter Sign-Up
          </h2>
          <div className="w-16 h-[3px] bg-black mx-auto mb-6"></div>
          <p className="text-sm text-gray-600 mb-10 tracking-wide">
            Stay up to date with Decorama sales & promotions, as well as occasional news.
          </p>
          
          <form className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <input
              type="text"
              placeholder="Your first name"
              className="w-full md:w-64 px-4 py-3 bg-white border-none text-sm placeholder:text-gray-400 focus:ring-1 focus:ring-black outline-none"
            />
            <input
              type="email"
              placeholder="Your email address"
              className="w-full md:w-80 px-4 py-3 bg-white border-none text-sm placeholder:text-gray-400 focus:ring-1 focus:ring-black outline-none"
            />
            <button
              type="submit"
              className="w-full md:w-auto px-10 py-3 bg-black text-white text-xs font-bold tracking-widest hover:bg-gray-800 transition-colors"
            >
              SIGN UP
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
