import { navLinks } from "@/app/constants";
import { Mail, MapPin, Phone , Facebook, Twitter, Linkedin, Instagram} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const products = [
  { name: "Bolts", path: "/bolts" },
  { name: "Nuts", path: "/nuts" },
  { name: "Washers", path: "/washers" },
];

const socialLinks = [
  { name: "Facebook", icon: <Facebook size={20} />, href: "#" },
  { name: "Twitter", icon: <Twitter size={20} />, href: "#" },
  { name: "LinkedIn", icon: <Linkedin size={20} />, href: "#" },
  { name: "Instagram", icon: <Instagram size={20} />, href: "#" },
];

const FooterColumn = ({ title, children }) => (
  <div>
    <h3 className="text-lg font-semibold text-white mb-4">{title}</h3>
    <ul className="space-y-2">{children}</ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <Link href="/">
              <Image
                src="/logo/logo-1-png.png" // Assuming this is the correct path
                alt="Hot Forged Bolts Logo"
                width={180}
                height={60}
                className="bg-white p-2 rounded" // White background for visibility
              />
            </Link>
            <p className="text-sm">
              Leading Turkey's hot forging industry with cutting-edge technology
              and a commitment to quality and precision.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Section */}
          <FooterColumn title="Quick Links">
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
          </FooterColumn>

          {/* Products Section */}
          <FooterColumn title="Our Products">
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
          </FooterColumn>

          {/* Contact Info Section */}
          <FooterColumn title="Contact Us">
            <li className="flex items-start">
              <MapPin
                size={20}
                className="mr-3 mt-1 flex-shrink-0 text-amber-400"
              />
              <span>123 Forging Street, Industry City, 34000, Turkey</span>
            </li>
            <li className="flex items-center">
              <Phone size={20} className="mr-3 flex-shrink-0 text-amber-400" />
              <a href="tel:+901234567890" className="hover:text-amber-400">
                +90 (123) 456-7890
              </a>
            </li>
            <li className="flex items-center">
              <Mail size={20} className="mr-3 flex-shrink-0 text-amber-400" />
              <a
                href="mailto:info@hotforgedbolts.com"
                className="hover:text-amber-400"
              >
                info@hotforgedbolts.com
              </a>
            </li>
          </FooterColumn>
        </div>
      </div>
      <div className="bg-gray-900 py-4">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
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
