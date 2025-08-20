"use client";

import { navLinks } from "@/app/constants";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// Icon Components for better readability and reusability
const SearchIcon = (props) => (
  <svg
    aria-label="Search"
    role="button"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const MenuIcon = (props) => (
  <svg
    aria-label="Open menu"
    role="button"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    {...props}
  >
    <line x1="4" y1="6" x2="20" y2="6" />
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="18" x2="20" y2="18" />
  </svg>
);

const CloseIcon = (props) => (
  <svg
    aria-label="Close menu"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    {...props}
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Effect to prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50",
        {
          "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4":
            isScrolled,
          "py-4 md:py-6 bg-transparent text-black": !isScrolled,
        }
      )}
    >
      {/* Logo */}
      <Link href="/" className="flex-shrink-0">
        <Image
          src="/logo/logo-1-png.png"
          alt="Hot Forged Bolts Logo"
          width={150}
          height={50}
          priority
          className={clsx({ "opacity-80": isScrolled })}
        />
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-4 lg:gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            className="group flex flex-col gap-0.5"
          >
            {link.name}
            <div
              className={clsx(
                "h-0.5 w-0 group-hover:w-full transition-all duration-300",
                {
                  "bg-orange-500": isScrolled,
                  "bg-white": !isScrolled,
                }
              )}
            />
          </Link>
        ))}
      </nav>

      {/* Desktop Right */}
      <div className="hidden md:flex items-center gap-4">
        <SearchIcon
          className={clsx(
            "h-6 w-6 transition-all duration-500 cursor-pointer",
            {
              "text-gray-700 hover:text-orange-500": isScrolled,
              "text-white hover:text-gray-200": !isScrolled,
            }
          )}
        />
        <Link href="/contact">
          <button
            className={clsx(
              "px-8 py-2.5 rounded-full ml-4 transition-all duration-500 font-semibold",
              {
                "text-white bg-gray-800 hover:bg-orange-500": isScrolled,
                "bg-white text-black hover:bg-gray-200": !isScrolled,
              }
            )}
          >
            Get Quote
          </button>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="flex items-center gap-3 md:hidden">
        <MenuIcon
          onClick={() => setIsMenuOpen(true)}
          className={clsx("h-6 w-6 cursor-pointer", {
            "text-gray-700": isScrolled,
            "text-white": !isScrolled,
          })}
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={clsx(
          "fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-transform duration-300 ease-in-out",
          {
            "translate-x-0": isMenuOpen,
            "-translate-x-full": !isMenuOpen,
          }
        )}
      >
        <button
          className="absolute top-6 right-6"
          onClick={() => setIsMenuOpen(false)}
        >
          <CloseIcon className="h-7 w-7" />
        </button>

        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl hover:text-orange-500 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          onClick={() => setIsMenuOpen(false)}
          className="mt-8"
        >
          <button className="bg-orange-500 text-white px-10 py-3 rounded-full transition-all duration-300 hover:bg-orange-600 active:scale-95 text-lg">
            Get Quote
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
