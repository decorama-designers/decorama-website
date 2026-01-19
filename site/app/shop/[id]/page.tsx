import { products } from "../../../lib/data";
import { notFound } from "next/navigation";
import { Mail, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) notFound();

  const emailSubject = encodeURIComponent(`Inquiry about ${product.name}`);
  const emailBody = encodeURIComponent(`Hi Decorama Designers,\n\nI am interested in the ${product.name} (Category: ${product.category}). Could you please provide more information?\n\nThank you!`);
  const mailtoLink = `mailto:info@decorama.co.za?subject=${emailSubject}&body=${emailBody}`;

  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/shop" className="inline-flex items-center text-xs font-bold tracking-widest text-gray-400 hover:text-black transition-colors mb-8">
        <ChevronLeft size={16} /> BACK TO SHOP
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-gray-50 border border-gray-100 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full aspect-square object-cover"
          />
        </div>

        <div className="flex flex-col">
          <p className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-2">{product.category}</p>
          <h1 className="text-4xl font-light text-gray-800 mb-4">{product.name}</h1>
          <p className="text-2xl font-light text-gray-900 mb-8">${product.price}</p>
          
          <div className="w-12 h-[2px] bg-black mb-8"></div>
          
          <div className="prose prose-sm text-gray-600 mb-12">
            <p className="leading-relaxed whitespace-pre-line">{product.description}</p>
          </div>

          <a
            href={mailtoLink}
            className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 text-xs font-bold tracking-[0.2em] hover:bg-gray-800 transition-colors mt-auto"
          >
            <Mail size={16} /> SEND AN INQUIRY
          </a>
          
          <p className="text-[10px] text-gray-400 text-center mt-4 uppercase tracking-widest">
            Average response time: 24-48 hours
          </p>
        </div>
      </div>
    </div>
  );
}
