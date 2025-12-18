"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import flower1 from "../../../public/images/flower1.svg";
import group1 from "../../../public/images/group1.svg";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Helper function to determine if a link is active
  const isActive = (path) => pathname === path;

  // Common styling for links to keep code DRY
  const getLinkClass = (path) =>
    `transition-colors duration-200 hover:text-[#0069D1] cursor-pointer ${
      isActive(path) ? "font-bold text-[#0069D1]" : "text-[#121921] font-medium"
    }`;

  return (
    <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-sm border-b border-[#B8E4FF]/60 px-3 md:px-0 z-[99999]">
      <div className="container mx-auto  py-4 md:py-[40px] flex items-center justify-between ">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <div className="group flex flex-row items-center justify-start gap-5">
              <Image
                src={flower1}
                alt="flower"
                className="transition-transform duration-900 group-hover:rotate-[360deg]"
              />
              <Image src={group1} alt="group" />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex flex-row items-center gap-10 list-none text-[14px] xl:text-[16px]">
          <Link href="/">
            <li className={getLinkClass("/")}>Startseite</li>
          </Link>
          <Link href="/unsereGeschichte">
            <li className={getLinkClass("/unsereGeschichte")}>
              Unsere Geschichte
            </li>
          </Link>
          <Link href="/dienstleistungen">
            <li className={getLinkClass("/dienstleistungen")}>
              Dienstleistungen
            </li>
          </Link>
          <Link href="/karriere">
            <li className={getLinkClass("/karriere")}>Karriere</li>
          </Link>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex flex-row items-center gap-3 text-[14px] xl:text-[16px]">
          <Link href="/kontakt">
            <button className="text-[#0069D1] hover:bg-[#F0F9FF] border border-[#0069D1] px-8 py-3 lg:px-12 lg:py-4 rounded-full transition-all">
              Kontakt
            </button>
          </Link>
          <Link href="/termin">
            <button className="text-white hover:shadow-lg border border-[#0069D1] bg-[#0069D1] px-5 py-3 lg:py-4 rounded-full transition-all">
              Termin buchen
            </button>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus:outline-none z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span
            className={`block w-6 h-0.5 bg-[#121921] transition-all duration-300 ${
              isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#121921] transition-all duration-300 ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#121921] transition-all duration-300 ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`absolute top-[100%] left-0 w-full bg-white border-b border-[#B8E4FF]/60 shadow-xl lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6 py-8">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
            <span className={`${getLinkClass("/")} text-xl`}>Startseite</span>
          </Link>
          <Link
            href="/unsereGeschichte"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className={`${getLinkClass("/unsereGeschichte")} text-xl`}>
              Unsere Geschichte
            </span>
          </Link>
          <Link
            href="/dienstleistungen"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className={`${getLinkClass("/dienstleistungen")} text-xl`}>
              Dienstleistungen
            </span>
          </Link>
          <Link href="/karriere" onClick={() => setIsMobileMenuOpen(false)}>
            <span className={`${getLinkClass("/karriere")} text-xl`}>
              Karriere
            </span>
          </Link>

          <div className="flex flex-col gap-4 mt-4 w-full px-8">
            <Link href="/kontakt" onClick={() => setIsMobileMenuOpen(false)}>
              <button className="w-full text-[#0069D1] font-medium border border-[#0069D1] px-4 py-3 rounded-full hover:bg-[#F0F9FF]">
                Kontakt
              </button>
            </Link>
            <Link href="/termin" onClick={() => setIsMobileMenuOpen(false)}>
              <button className="w-full text-white font-medium bg-[#0069D1] border border-[#0069D1] px-4 py-3 rounded-full hover:shadow-md">
                Termin buchen
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
