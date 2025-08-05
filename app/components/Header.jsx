"use client";

import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItemClass =
    "relative hover:text-orange-600 transition-colors duration-200 after:content-[''] after:block after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-orange-500 after:to-red-500 after:transition-all after:duration-300 hover:after:w-full";

  const buttonClass =
    "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg hover:from-orange-500 hover:to-orange-500 hover:scale-105 active:scale-95 transition-all w-40 h-11 rounded-full font-semibold";

  return (
    <>
      <nav className="h-[70px] relative w-full px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between z-20 bg-white text-gray-700 shadow-[0px_4px_25px_0px_#0000000D] transition-all">
        <p className="text-2xl font-bold">Hotforgedbolt</p>
        <ul className="md:flex hidden items-center gap-10">
          <li>
            <Link href="/" className={menuItemClass}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/products" className={menuItemClass}>
              Products
            </Link>
          </li>
          <li>
            <Link href="/about" className={menuItemClass}>
              About Us
            </Link>
          </li>
          <li>
            <Link href="/contact" className={menuItemClass}>
              Contact Us
            </Link>
          </li>
        </ul>
        <Link
          href="/contact"
          className={"md:inline hidden " + buttonClass}
          tabIndex={0}
          role="button"
        >
          Get started
        </Link>
        <button
          aria-label="menu-btn"
          type="button"
          className="menu-btn inline-block md:hidden active:scale-90 transition"
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={30}
            height={30}
            viewBox="0 0 30 30"
            fill="#000"
          >
            <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z" />
          </svg>
        </button>
        <div
          className={`mobile-menu absolute top-[70px] left-0 w-full bg-white p-6 md:hidden transition-all duration-300 ${
            mobileMenuOpen ? "" : "hidden"
          }`}
        >
          <ul className="flex flex-col space-y-4 text-lg">
            <li>
              <Link
                href="/"
                className={"text-sm " + menuItemClass}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className={"text-sm " + menuItemClass}
                onClick={() => setMobileMenuOpen(false)}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={"text-sm " + menuItemClass}
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={"text-sm " + menuItemClass}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <Link
            href="/contact"
            className={"mt-6 block md:hidden " + buttonClass}
            tabIndex={0}
            role="button"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get started
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
