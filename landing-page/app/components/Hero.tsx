import Image from "next/image";

export default function Hero() {
  return (
    <section className="mx-4 md:mx-10 my-4 relative h-[320px] md:h-[420px] rounded-xl overflow-hidden">
      <Image
        src="/hero_pizza_hands.png"
        alt="Hands reaching for pizza slices on a wooden table"
        fill
        className="object-cover"
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/10" />

      {/* Content */}
      <div className="absolute bottom-8 left-8 md:bottom-10 md:left-10">
        <h1 className="text-white font-extrabold uppercase leading-tight text-3xl md:text-[2.4rem] mb-3">
          For Delicious,<br />Made-From<br />Scratch Pizzas
        </h1>
        <p className="text-gray-300 text-[0.8rem] mb-5">
          Fresh ingredients, bold flavors, baked to perfection every time.
        </p>
        <a
          href="#"
          className="inline-block bg-[#F47B20] hover:bg-[#d96a10] text-white font-bold text-[0.85rem] px-6 py-2.5 rounded-full transition-colors"
        >
          Order Online
        </a>
      </div>
    </section>
  );
}
