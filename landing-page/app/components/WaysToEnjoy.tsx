import Image from "next/image";

export default function WaysToEnjoy() {
  return (
    <section className="py-16 px-4 md:px-10">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-[1.1rem] font-bold uppercase tracking-widest mb-8">Ways to Enjoy</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* Circular pizza photo */}
          <div className="flex justify-center">
            <div className="relative w-[300px] h-[300px] md:w-[340px] md:h-[340px]">
              <div className="w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/ways_round_pizza.png"
                  alt="Crust Pizza Co. pizza"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Stamp overlay */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110px] h-[110px] rounded-full bg-black/85 border-[3px] border-[#F47B20] flex flex-col items-center justify-center">
                <span className="text-white font-extrabold uppercase text-center leading-tight text-[0.38rem] tracking-widest">
                  CRUST<br />PIZZA<br />CO.
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-[#F47B20] mt-1" />
              </div>
            </div>
          </div>

          {/* Dark cards */}
          <div className="flex flex-col gap-4">
            <div className="bg-[#1A1A1A] rounded-xl p-7 flex flex-col items-center text-center gap-3">
              <svg className="w-9 h-9 fill-[#F47B20]" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
              </svg>
              <h3 className="text-white font-bold uppercase text-[0.9rem] tracking-wide">
                Award-Winning Pizza &amp; Service
              </h3>
              <p className="text-gray-400 text-[0.75rem] leading-relaxed">
                Recognized nationally for our exceptional quality, taste, and hospitality.
                Every visit is an experience worth remembering.
              </p>
              <a href="#" className="inline-block bg-[#F47B20] hover:bg-[#d96a10] text-white font-bold text-[0.75rem] uppercase px-5 py-2 rounded-full transition-colors">
                Learn More
              </a>
            </div>

            <div className="bg-[#1A1A1A] rounded-xl p-7 flex flex-col items-center text-center gap-3">
              <svg className="w-9 h-9 fill-[#F47B20]" viewBox="0 0 24 24">
                <path d="M18.06 22.99h1.66c.84 0 1.53-.64 1.63-1.46L23 5.05h-5V1h-1.97v4.05h-4.97l.3 2.34c1.71.47 3.31 1.32 4.27 2.26 1.44 1.42 2.43 2.89 2.43 5.29v8.05zM1 21.99V21h15.03v.99c0 .55-.45 1-1.01 1H2.01c-.56 0-1.01-.45-1.01-1zm15.03-7c0-8-15.03-8-15.03 0h15.03zM1.02 17h15v2h-15z" />
              </svg>
              <h3 className="text-white font-bold uppercase text-[0.9rem] tracking-wide">
                Kids Eat Free Tuesdays!
              </h3>
              <p className="text-gray-400 text-[0.75rem] leading-relaxed">
                Every Tuesday, kids 12 and under eat free with the purchase of an adult entree.
                Family night just got even better.
              </p>
              <a href="#" className="inline-block bg-[#F47B20] hover:bg-[#d96a10] text-white font-bold text-[0.75rem] uppercase px-5 py-2 rounded-full transition-colors">
                View Our Complete Menu
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
