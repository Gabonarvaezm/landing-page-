import Image from "next/image";

const mosaicImages = [
  { seed: "pizza-people1", alt: "People enjoying pizza" },
  { seed: "pizza-slice1", alt: "Close-up of pizza slice" },
  { seed: "pizza-woman1", alt: "Woman smiling with pizza" },
  { seed: "pizza-box1", alt: "Pizza box being held" },
  { seed: "pizza-oven1", alt: "Putting pizza in oven" },
  { seed: "pizza-cheese1", alt: "Cheese pull" },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white rounded-[24px] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.06)] h-full">
      <h2 className="text-[1.2rem] font-[900] uppercase tracking-wide mb-4 text-[#1A1A1A]">
        WHY CHOOSE US
      </h2>
      <div className="grid grid-cols-3 gap-2">
        {mosaicImages.map((img) => (
          <div key={img.seed} className="relative aspect-[4/3] w-full rounded-md overflow-hidden">
            <Image
              src={`https://picsum.photos/seed/${img.seed}/300/200`}
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
