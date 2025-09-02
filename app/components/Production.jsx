import Image from "next/image";
import Link from "next/link";

const items = [
  {
    name: "Bolts",
    href: "/bolts",
    icon: "/Icons/bolt.png",
  },
  {
    name: "Nuts",
    href: "/nuts",
    icon: "/Icons/screw.png",
  },
  {
    name: "Washers",
    href: "/washers",
    icon: "/Icons/washer.png",
  },
];

const Production = () => {
  return (
    <section className="container mx-auto flex flex-col items-center justify-center min-h-[70vh] bg-gray-50 py-16">
      <h2 className="text-center text-4xl font-extrabold mb-10 text-gray-800 tracking-tight">
        Our Production
      </h2>
      <div className="flex flex-col md:flex-row gap-8 items-center justify-center w-full">
        {items.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="group flex flex-col items-center justify-center w-48 h-48 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-amber-400"
          >
            <div className="mb-4">
              <Image
                src={item.icon}
                alt={item.name}
                width={64}
                height={64}
                className="group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <span className="text-xl font-bold text-gray-700 group-hover:text-amber-600 transition-colors duration-300">
              {item.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Production;
