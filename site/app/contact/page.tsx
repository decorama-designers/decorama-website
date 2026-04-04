export default function ContactPage() {
  const mapsQuery = "Decorama Designers & Decorama Blinds";
  const openInMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapsQuery)}`;
  const embedMapUrl = `https://www.google.com/maps?q=${encodeURIComponent(mapsQuery)}&output=embed`;

  return (
    <div>
      <section className="relative h-[300px] w-full bg-black">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-center">
            <h1 className="text-4xl font-light tracking-tight mb-4">Contact Us</h1>
            <div className="w-16 h-[2px] bg-white mx-auto"></div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pt-12 pb-20">
        <div className="text-sm text-gray-500 font-light space-y-1 pt-2 mb-12 max-w-5xl mx-auto">
          {/* Contact */}
          <p>Tel.</p>
            <p>
            <a href="tel:+27114553018" className="hover:text-black transition">
              +27 11 455 3018
            </a>
            /
            <a href="tel:+27114553019" className="hover:text-black transition">
              9
            </a>
            </p>
            <p>
            <a href="tel:+27118289094" className="hover:text-black transition">
              +27 11 828 9094
            </a>
            /
            <a href="tel:+27118289095" className="hover:text-black transition">
              5
            </a>
            </p>
            <p>Cel.</p>
            <p>
            <a href="tel:+27787302445" className="hover:text-black transition">
              +27 78 730 2445
            </a>
            </p>
          <p>Email:</p>
          <p><a href="mailto:designers@decorama.co.za" className="hover:text-black transition">designers@decorama.co.za</a></p>
           <p><a href="mailto:decorama@iafrica.com" className="hover:text-black transition">decorama@iafrica.com</a></p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-10 max-w-5xl mx-auto mt-12 pb-10">
          {/* Showroom */}
          <h2 className="text-xl font-medium tracking-wide text-gray-800">Showroom:</h2>
            <div className="text-sm text-gray-500 leading-relaxed font-light space-y-1">
              <p>NEW LOCATION LOADING...</p>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-20 max-w-5xl mx-auto mb-20">
          {/* Warehouse */}
          <div className="space-y-6">
            <h2 className="text-xl font-medium tracking-wide text-gray-800">Warehouse:</h2>
            <div className="text-sm text-gray-500 leading-relaxed font-light space-y-1">
              <p>Unit 5, The Refinery</p>
              <p>George Allen Street</p>
              <p>Wilbart Ext 1</p>
              <p className="italic">(across from Union Tiles)</p>
            </div>

            <div className="w-full h-64 bg-gray-100 border border-gray-200 mt-8 overflow-hidden">
			<iframe
			  width="100%"
			  height="100%"
			  style={{ border: 0 }}
			  loading="lazy"
			  allowFullScreen
			  referrerPolicy="no-referrer-when-downgrade"
        src={embedMapUrl}
			></iframe>
              <p className="pt-2">
                <a
                  href={openInMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-black transition"
                >
                  Open in Maps
                </a>
              </p>
            </div>

         </div>
        </div>
      </section>
    </div>
  );
}
