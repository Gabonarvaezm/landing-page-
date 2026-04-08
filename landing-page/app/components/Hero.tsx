import Image from "next/image";

export default function Hero() {
  return (
    <section className="mx-4 md:mx-10 my-6 relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden bg-[#222]">
      <Image
        src="/hero_pizza_hands.png"
        alt="Hands reaching for pizza slices on a wooden table"
        fill
        className="object-cover opacity-90"
        priority
        sizes="(max-width: 1200px) 100vw, 1200px"
      />
      
      {/* Tape top left */}
      <div className="absolute top-0 left-0 w-32 h-10 bg-[#E5DCC5]/70 -rotate-45 -translate-x-10 translate-y-8 shadow-sm z-10 hidden md:block" />

      {/* Content wrapper */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 md:left-12 flex flex-col items-start z-10 w-full max-w-[500px]">
        
        {/* Torn paper container */}
        <div 
          className="bg-[#161616] px-8 py-8 md:px-10 md:py-10 -rotate-1 relative shadow-2xl w-full"
          style={{
            clipPath: "polygon(1% 2%, 98% 0%, 100% 25%, 99% 50%, 100% 75%, 98% 100%, 2% 98%, 0% 75%, 1% 50%, 0% 25%)",
          }}
        >
          <h1 className="text-white font-[900] uppercase leading-[1.05] text-[2.2rem] md:text-[3.2rem] tracking-[-1px] mb-3">
            FOR DELICIOUS,<br />MADE-FROM<br />SCRATCH PIZZAS
          </h1>
          <p className="text-[#A0A0A0] text-[0.65rem] md:text-[0.75rem] font-[500]">
            Nunc id rbi sneale iene inecei accets.
          </p>
        </div>
        
        {/* Button below the paper */}
        <a
          href="#"
          className="mt-6 md:mt-8 ml-6 md:ml-10 inline-block bg-[#F47B20] hover:bg-[#d96a10] text-[#FFFFFF] font-[800] text-[0.85rem] px-8 py-3 rounded-[50px] transition-colors shadow-[0_4px_15px_rgba(244,123,32,0.4)] z-20 tracking-wide"
        >
          Order Online
        </a>
      </div>
    </section>
  );
}
