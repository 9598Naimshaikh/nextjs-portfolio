"use client";

import Link from "next/link";
import {
  Home,
  FolderKanban,
  Briefcase,
  Code2,
  Mail,
} from "lucide-react";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Projects", href: "/projects", icon: FolderKanban },
  { name: "Experience", href: "/experience", icon: Briefcase },
  { name: "Skills", href: "/skills", icon: Code2 },
  { name: "Contact", href: "/contact", icon: Mail },
];

export default function Header() {
  return (
    <header className="fixed -bottom-6 left-0 flex items-center justify-center w-full px-4 z-50">

        <nav className="flex justify-center rounded-md bg-[#1e222ba5] backdrop-blur-lg border border-zinc-500/20 shadow-[2px_2px_0px_orangered]">
          <ul className="flex items-center gap-6 px-6 py-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="flex flex-col items-center gap-2 text-sm font-medium text-gray-300 transition hover:text-orange-500"
                >
                  <item.icon size={18} />
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
  
    </header>
  );
}
