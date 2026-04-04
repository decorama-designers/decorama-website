export default function AboutPage() {
  return (
    <div>
      <section className="relative h-[400px] w-full">
        <div className="absolute inset-0">
          <img
            src="/home/Screenshot%202024-05-29%20102128.png"
            alt="Interior accessories"
            className="h-full w-full object-cover "
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-black/40 text-white p-12 max-w-lg text-center backdrop-blur-none border-white/20 border">
            <h1 className="text-4xl font-light tracking-tight mb-4">About Us</h1>
            <div className="w-20 h-[1px] bg-white mx-auto"></div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 max-w-4xl">
        <div className="space-y-8 text-center text-gray-600 leading-relaxed font-light tracking-wide">
          <h2 className="text-3xl font-light tracking-tight text-gray-900">Timeless Design. Trusted Expertise. Since 1981.</h2>
          <p>
            Founded in 1981, Decorama Designers is a proudly family-run business built on a passion for creating beautiful, functional spaces. With decades of experience, we have grown into a trusted name in both residential and commercial interior design and window treatments specialist known for our attention to detail, personalised service, and commitment to quality.
          </p>
          <p>
            At the heart of our business is a love for interiors from carefully curated homes to well-considered commercial environments. We believe every space should reflect its purpose and personality, and we work closely with our clients to bring each project to life with elegance, efficiency, and precision.
          </p>
          <p>
            As specialists in window treatments, we are proud Luxaflex East Rand Gallery owners, offering a wide range of premium blinds, curtains, and shutters for both homes and commercial spaces. We also specialise in advanced automation through Somfy systems, delivering smart, functional solutions tailored to modern living and working environments.
          </p>
          <p>
            Our services extend across all aspects of interior design, decorating, and styling including space planning, wall treatments, wallpapers, and soft furnishings. We work on a variety of projects, from private residences to offices, retail spaces, and hospitality environments.
          </p>
          <p>
            We also offer access to an extensive library of fabric and wallpaper samples, supported by strong relationships with leading local fabric houses and factories, allowing us to source and customise finishes to suit each project.
          </p>
          <p>
            In addition, we design and manufacture bespoke furniture tailored to each client’s requirements. With a deep appreciation for craftsmanship, we specialise in furniture restoration bringing new life to existing pieces as well as offering a full in-house upholstery service for both custom and reupholstery projects.
          </p>
          <p>
            For us, it’s not just about design it’s about creating spaces that are considered, refined, and functional. Our long-standing reputation is built on trust, quality, and a genuine passion for what we do.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-20 max-w-4xl">
        <div className="text-center text-gray-600 leading-relaxed font-light tracking-wide space-y-3">
          <h3 className="text-xl font-light tracking-tight text-gray-900">Follow us:</h3>
          <p>
            Instagram:
          </p>
          <p>
            <a href="https://www.instagram.com/decoramadesigners/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-gray-900">decormadesigners</a>
          </p>
          <p>
            <a href="https://www.instagram.com/decoramablinds.sa" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-gray-900">decoramablinds.sa</a>
          </p>
          <p>
            Facebook:
          </p>
          <p>
            <a href="https://www.facebook.com/decoramadesigners/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-gray-900">Decoramadesigners</a>
          </p>
          <p>
            <a href="https://www.facebook.com/profile.php?id=100054583774477" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-gray-900">Decoramablinds</a>
          </p>
        </div>
      </section>
    </div>
  );
}
