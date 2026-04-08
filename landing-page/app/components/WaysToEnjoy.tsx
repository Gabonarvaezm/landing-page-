import Image from "next/image";

export default function WaysToEnjoy() {
  return (
    <section className="py-16 px-4 md:px-10">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start">
          {/* Left Column */}
          <div className="flex flex-col">
            <h2 className="text-[1.2rem] font-[900] uppercase tracking-[-0.5px] text-[#1A1A1A] mb-4">WAYS TO ENJOY</h2>
            <div className="relative w-full aspect-square md:w-[480px] md:h-[480px]">
              <div className="w-full h-full rounded-[40px] shadow-2xl overflow-hidden">
                <Image
                  src="/ways_round_pizza.png"
                  alt="Crust Pizza Co. pizza"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Stamp overlay */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140px] h-[140px] rounded-full bg-[#1A1A1A] border-4 border-[#1A1A1A] flex flex-col items-center justify-center shadow-2xl hover:scale-105 transition-transform">
                <div className="absolute inset-1 rounded-full border border-dashed border-[#F47B20] opacity-80" />
                <span className="text-white font-[900] uppercase text-center leading-[0.8] tracking-[1px] mt-2 text-[1.4rem]">
                  CRUST
                </span>
                <span className="text-white font-[800] uppercase text-center tracking-[3px] text-[0.45rem] mt-2 text-[#F47B20]">
                  PIZZA CO.
                </span>
              </div>
            </div>
          </div>

          {/* Dark cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
            <div className="bg-[#1A1A1A] rounded-[24px] p-6 flex flex-col items-center text-center gap-4 justify-between h-full shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
              <div className="w-12 h-12 rounded-full border border-white/20 flex flex-col items-center justify-center mb-2">
                 <svg className="w-6 h-6 fill-[#F47B20]" viewBox="0 0 24 24">
                   <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                 </svg>
              </div>
              <div>
                <h3 className="text-white font-[800] uppercase text-[0.8rem] tracking-tight leading-tight mb-2">
                  AWARD-WINNING<br />PIZZA &amp; SERVICE
                </h3>
                <p className="text-gray-400 text-[0.6rem] leading-relaxed">
                  Stnegeratem uiaoste cior tirutess ewaot coencrpaeratss.
                </p>
              </div>
              <a href="#" className="inline-block bg-[#F47B20] hover:bg-[#d96a10] text-[#1A1A1A] font-[800] text-[0.6rem] uppercase px-5 py-2.5 rounded-full transition-colors mt-2">
                LEARN MORE
              </a>
            </div>

            <div className="bg-[#1A1A1A] rounded-[24px] p-6 flex flex-col items-center text-center gap-4 justify-between h-full shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
              <div className="w-12 h-12 rounded-full border border-white/20 flex flex-col items-center justify-center mb-2">
                 <svg className="w-6 h-6 fill-[#F47B20]" viewBox="0 0 24 24">
                   <path d="M18.06 22.99h1.66c.84 0 1.53-.64 1.63-1.46L23 5.05h-5V1h-1.97v4.05h-4.97l.3 2.34c1.71.47 3.31 1.32 4.27 2.26 1.44 1.42 2.43 2.89 2.43 5.29v8.05z" />
                 </svg>
              </div>
              <div>
                <h3 className="text-white font-[800] uppercase text-[0.8rem] tracking-tight leading-tight mb-2">
                  KIDS EAT FREE<br />TUESDAYS!
                </h3>
                <p className="text-gray-400 text-[0.6rem] leading-relaxed">
                  Voor obrel onxtoentsenet diocass oeactaeae peonrysess.
                </p>
              </div>
              <a href="#" className="inline-block bg-[#F47B20] hover:bg-[#d96a10] text-[#1A1A1A] font-[800] text-[0.6rem] uppercase px-5 py-2.5 rounded-full transition-colors mt-2">
                VIEW OUR COMPLETE MENU
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
