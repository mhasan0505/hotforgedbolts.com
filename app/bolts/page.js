import Image from "next/image";

const boltSections = [
  {
    title: "Allen Bolt",
    img: "/images/allen-bolt.jpg",
    alt: "Allen Bolt",
    description:
      "High-strength Allen bolts for precision engineering applications.",
  },
  {
    title: "Counter Sunk Allen Bolt",
    img: "/images/countersunk-allen.jpg",
    alt: "Counter Sunk Allen Bolt",
    description:
      "Counter sunk Allen bolts for flush mounting and clean finishes.",
  },
  {
    title: "Hex Head Screw",
    img: "/images/hex-head.jpg",
    alt: "Hex Head Screw",
    description: "Durable hex head screws for heavy-duty fastening needs.",
  },
];

const Bolts = () => {
  return (
    <main className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-800">
        Bolts
      </h1>
      <div className="grid gap-12 md:grid-cols-3">
        {boltSections.map((section) => (
          <section
            key={section.title}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center"
          >
            <h2 className="text-2xl font-bold mb-4 text-amber-700 text-center">
              {section.title}
            </h2>
            <div className="w-full h-48 relative mb-4">
              <Image
                src={section.img}
                alt={section.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-contain rounded-lg"
                priority
                onError={(e) => {
                  console.error(`Error loading image: ${section.img}`);
                  e.target.src = "/placeholder.jpg"; // Fallback image
                }}
              />
            </div>
            <p className="text-gray-600 text-center">{section.description}</p>
          </section>
        ))}
      </div>
    </main>
  );
};

export default Bolts;
