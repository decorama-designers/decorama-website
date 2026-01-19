import type { Metadata } from "next";
import { Navbar } from "../components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "decorama designers | Exquisite Style Defined",
  description: "Bespoke furniture and interior decorating services by decorama designers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans text-gray-900 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <footer className="bg-[#e0e0e0] py-12 px-4 mt-auto">
          <div className="container mx-auto text-center">
             <div className="flex flex-col items-center gap-4">
                <p className="text-xl font-extralight tracking-tighter text-gray-400 lowercase leading-none">decorama</p>
                <p className="text-xs text-gray-500 tracking-widest mt-4">
                  © {new Date().getFullYear()} DECORAMA DESIGNERS. ALL RIGHTS RESERVED.
                </p>
             </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
