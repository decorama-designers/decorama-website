
import Link from "next/link";
import { ChevronLeft, Hammer } from "lucide-react";

export default function ProductPageUnderConstruction() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-gray-50 text-gray-800">
      <div className="text-center max-w-xl">
        <Hammer className="mx-auto mb-6 text-black" size={48} />
        <h1 className="text-4xl font-light mb-4">Under Construction</h1>
        <p className="text-lg text-gray-600 mb-8">
          Sorry, this page is currently under construction. We’re working hard to bring it to you soon!
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-gray-400 hover:text-black transition-colors"
        >
          <ChevronLeft size={16} /> BACK TO HOME
        </Link>
      </div>
    </div>
  );
}

