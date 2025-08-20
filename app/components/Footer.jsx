import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Production", path: "/production" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
  ];

  const products = [
    { name: "Bolts", path: "/bolts" },
    { name: "Nuts", path: "/nuts" },
    { name: "Washers", path: "/washers" },
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, href: "#" },
    { icon: <Twitter size={20} />, href: "#" },
    { icon: <Linkedin size={20} />, href: "#" },
    { icon: <Instagram size={20} />, href: "#" },
  ];

  return (
    <footer className="text-black/70">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <Link href="/">
              <Image
                src="/logo/logo-1-png.png"
                alt="Hot Forged Bolts Logo"
                width={180}
                height={60}
                className="bg-white p-2 rounded"
              />
            </Link>
            <p className="text-sm">
              Leading Turkey's hot forging industry with cutting-edge technology
              and a commitment to quality and precision.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="hover:text-amber-400 transition-colors"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="hover:text-amber-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Our Products
            </h3>
            <ul className="space-y-2">
              {products.map((product) => (
                <li key={product.path}>
                  <Link
                    href={product.path}
                    className="hover:text-amber-400 transition-colors"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin
                  size={20}
                  className="mr-3 mt-1 flex-shrink-0 text-amber-400"
                />
                <span>123 Forging Street, Industry City, 34000, Turkey</span>
              </li>
              <li className="flex items-center">
                <Phone
                  size={20}
                  className="mr-3 flex-shrink-0 text-amber-400"
                />
                <a
                  href="tel:+901234567890"
                  className="hover:text-amber-400 transition-colors"
                >
                  +90 (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 flex-shrink-0 text-amber-400" />
                <a
                  href="mailto:info@hotforgedbolts.com"
                  className="hover:text-amber-400 transition-colors"
                >
                  info@hotforgedbolts.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 py-4">
        <div className=" px-4 text-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Hot Forged Bolts. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
