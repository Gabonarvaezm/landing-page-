import Image from "next/image";

const mosaicImages = [
  { seed: "pizza-people1", alt: "People enjoying pizza" },
  { seed: "pizza-slice1", alt: "Close-up of pizza slice" },
  { seed: "pizza-woman1", alt: "Woman smiling with pizza" },
  { seed: "pizza-box1", alt: "Pizza box being held" },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 px-4 md:px-10 bg-white">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Text side */}
          <div className="lg:text-right order-2 lg:order-1">
            <h2 className="text-[1.1rem] font-bold uppercase tracking-widest mb-4">Why Choose Us</h2>
            <p className="text-[0.875rem] text-[#666] leading-relaxed">
              From our hand-stretched dough to our locally sourced toppings, every detail matters.
              We&apos;re committed to delivering an unforgettable dining experience — whether you&apos;re
              dining in, carrying out, or ordering for delivery.
            </p>
          </div>

          {/* Mosaic grid */}
          <div className="grid grid-cols-2 gap-3 order-1 lg:order-2">
            {mosaicImages.map((img) => (
              <div key={img.seed} className="relative h-[160px] md:h-[180px] rounded-xl overflow-hidden">
                <Image
                  src={`https://picsum.photos/seed/${img.seed}/400/400`}
                  alt={img.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
