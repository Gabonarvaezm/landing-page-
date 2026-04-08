import Image from "next/image";

const mosaicImages = [
  { url: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=300&q=80", alt: "Cheese pull" },
  { url: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&w=300&q=80", alt: "People eating" },
  { url: "https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?auto=format&fit=crop&w=300&q=80", alt: "Friends at restaurant" },
  { url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=300&q=80", alt: "Whole pizza" },
  { url: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=300&q=80", alt: "Pizza slice" },
  { url: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=300&q=80", alt: "Sharing pizza" },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white rounded-[24px] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.06)] h-full">
      <h2 className="text-[1.2rem] font-[900] uppercase tracking-wide mb-4 text-[#1A1A1A]">
        WHY CHOOSE US
      </h2>
      <div className="grid grid-cols-3 gap-1">
        {mosaicImages.map((img, i) => (
          <div key={i} className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src={img.url}
              alt={img.alt}
              fill
              className="object-cover hover:scale-105 transition-transform"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
