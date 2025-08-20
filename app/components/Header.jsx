"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Production", path: "/production" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
  ];

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

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50",
        {
          "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4":
            isScrolled,
          "py-4 md:py-6 bg-orange-400": !isScrolled,
        }
      )}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/logo/logo-1-png.png" // Ensure this path points to a local asset in the public folder
          alt="Hot Forged Bolts Logo"
          width={150}
          height={50}
          className={clsx({ "opacity-80": isScrolled })}
        />
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-4 lg:gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            className={clsx("group flex flex-col gap-0.5", {
              "text-gray-700": isScrolled,
              "text-white": !isScrolled,
            })}
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
      </div>

      {/* Desktop Right */}
      <div className="hidden md:flex items-center gap-4">
        <svg
          aria-label="Search"
          role="button"
          className={clsx("h-6 w-6 text-white transition-all duration-500", {
            invert: isScrolled,
          })}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <Link href="/contact">
          <button
            className={clsx(
              "px-8 py-2.5 rounded-full ml-4 transition-all duration-500",
              {
                "text-white bg-black": isScrolled,
                "bg-white text-black": !isScrolled,
              }
            )}
          >
            Get Quote
          </button>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="flex items-center gap-3 md:hidden">
        <svg
          aria-label="Open menu"
          role="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={clsx("h-6 w-6 cursor-pointer text-white", {
            invert: isScrolled,
          })}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      </div>

      {/* Mobile Menu */}
      <div
        className={clsx(
          "fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500",
          {
            "translate-x-0": isMenuOpen,
            "-translate-x-full": !isMenuOpen,
          }
        )}
      >
        <button
          className="absolute top-4 right-4"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {navLinks.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            onClick={() => setIsMenuOpen(false)}
            className="text-lg"
          >
            {link.name}
          </Link>
        ))}

        {/* <button className="border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all">
          New Launch
        </button> */}

        <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
          <button className="bg-orange-500 text-white px-8 py-2.5 rounded-full transition-all duration-500 cursor-pointer">
            Get Quote
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
