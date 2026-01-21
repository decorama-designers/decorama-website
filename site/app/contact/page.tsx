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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-5xl mx-auto mb-20">
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
                    style={ { border: 0 } }
                    loading="lazy"
                    allowFullScreen
                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.670693051394!2d28.1633519!3d-26.1748286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e951239c894982f%3A0x633d6b206c7e4713!2sThe%20Refinery%20Business%20Park!5e0!3m2!1sen!2sza!4v1705680000000!5m2!1sen!2sza`}
                ></iframe>
            </div>
          </div>

          {/* Design Studio */}
          <div className="space-y-6">
            <h2 className="text-xl font-medium tracking-wide text-gray-800">Design Studio:</h2>
            <div className="text-sm text-gray-500 leading-relaxed font-light space-y-1">
              <p>Decorama Designers</p>
              <p>13 Park Street</p>
              <p>Bedfordview</p>
              <p>South Africa</p>
            </div>
            <div className="text-sm text-gray-500 font-light space-y-1 pt-4">
              <p>Tel. +27 11 455 3018/9</p>
              <p>Fax. +27 11 455 4895</p>
              <p>Email: <a href="mailto:designers@decorama.co.za" className="hover:text-black transition">designers@decorama.co.za</a></p>
            </div>
             <div className="w-full h-64 bg-gray-100 border border-gray-200 mt-8 overflow-hidden">
                <iframe
                    width="100%"
                    height="100%"
                    style={ { border: 0 } }
                    loading="lazy"
                    allowFullScreen
                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.354124978434!2d28.1364539!3d-26.1843286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e951336c1e57c6b%3A0x9d169e6b360b8d5e!2s13%20Park%20St%2C%20Bedfordview%2C%20Germiston%2C%202008!5e0!3m2!1sen!2sza!4v1705680000000!5m2!1sen!2sza`}
                ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
