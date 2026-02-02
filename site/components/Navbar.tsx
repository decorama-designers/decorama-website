"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { Facebook, Instagram } from "lucide-react";
import { cn } from "../lib/utils";

const navItems = [
  { name: "HOME", href: "/" },
  { name: "ABOUT US", href: "/about" },
  { name: "SHOP", href: "/shop" },
  { name: "SHOWROOM STOCK", href: "/showroom" },
  { name: "PROJECTS", href: "/projects" },
  { name: "CUSTOM DESIGNS", href: "/custom" },
  { name: "BLINDS", href: "/blinds" },
  { name: "CONTACT US", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="w-full bg-white">
      <div className="container mx-auto px-4 py-6 flex flex-col items-center relative">
        <div className="absolute right-4 top-6 flex gap-3 text-white">
          <a href="https://www.facebook.com/decoramadesigners/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-1.5 rounded-full cursor-pointer hover:bg-gray-600 transition">
            <Facebook size={18} fill="currentColor" />
          </a>
          <a href="https://www.instagram.com/decoramadesigners/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-1.5 rounded-full cursor-pointer hover:bg-gray-600 transition">
            <Instagram size={18} />
          </a>
        </div>
        
        <Link href="/">
          <Logo className="mb-6 scale-110" />
        </Link>

        <nav className="w-full bg-[#9b9b9b] flex justify-center items-center">
          <ul className="flex flex-wrap justify-center text-[11px] font-medium tracking-wider text-white">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    "px-4 py-3 inline-block transition-colors hover:bg-[#808080]",
                    pathname === item.href && "bg-black"
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
