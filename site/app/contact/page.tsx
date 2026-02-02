export default function ContactPage() {
  const address = "Unit 5 The Refinery, cnr North Reef Road, George Allen St, Germiston, 1401";
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=REPLACE_WITH_YOUR_API_KEY&q=${encodeURIComponent(address)}`;

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

      <section className="container mx-auto px-4 py-20">
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
            <div className="text-sm text-gray-500 font-light space-y-1 pt-4">
              <p>Tel. +27 11 828 9094/5</p>
              <p>Fax. +27 11 828 6877</p>
              <p>Email: <a href="mailto:decorama@iafrica.com" className="hover:text-black transition">decorama@iafrica.com</a></p>
            </div>
            <div className="w-full h-64 bg-gray-100 border border-gray-200 mt-8 overflow-hidden">
			<iframe
			  width="100%"
			  height="100%"
			  style={{ border: 0 }}
			  loading="lazy"
			  allowFullScreen
			  referrerPolicy="no-referrer-when-downgrade"
			  src="https://www.google.com/maps?q=The+Refinery+Business+Park+George+Allen+Street+Bedfordview+Gauteng+South+Africa&output=embed"
			></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
