import Image from "next/image";

const iconBoxes = [
  {
    label: "Dine-In",
    svg: <path d="M11 2a9 9 0 100 18A9 9 0 0011 2zm0 16a7 7 0 110-14 7 7 0 010 14zm1-11H10v3H7v2h3v3h2v-3h3v-2h-3V7z" />,
  },
  {
    label: "Carryout/Pickup",
    svg: <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />,
  },
  {
    label: "WiFi/Free Parking",
    svg: <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3a4.237 4.237 0 00-6 0zm-4-4l2 2a7.074 7.074 0 0110 0l2-2C15.14 9.14 8.87 9.14 5 13z" />,
  },
  {
    label: "Learn More",
    svg: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />,
  },
  {
    label: "Nutrition Facts",
    svg: <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" />,
  },
  {
    label: "Private Events",
    svg: <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" />,
  },
];

export default function ChicagoSection() {
  return (
    <section className="py-20 px-4 md:px-10 bg-transparent border-b border-black/5">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr_1.2fr] gap-8 items-center">

          {/* Left Text */}
          <div className="pr-4">
            <h2 className="text-[2rem] font-[900] uppercase leading-[1.05] tracking-[-1px] mb-6">
              HOME OF THE<br />CHICAGO-STYLE<br />THIN CRUST PIZZA
            </h2>
            <p className="text-[0.8rem] text-[#666] leading-relaxed mb-6 font-[500]">
              Uervicoa tes tria sosiven a eosmct stive to ponit dote-tiovne oxrch cino is teenresest is tois neo meleeq bresses thenre lered peavisiee iudi-sueonni yileas.
            </p>
            <div className="flex items-center gap-6 mt-8">
              <a href="#" className="inline-block bg-[#F47B20] hover:bg-[#d96a10] text-white font-[800] text-[0.75rem] uppercase px-6 py-2.5 rounded-[50px] transition-colors shadow-md">
                LEARN MORE
              </a>
              <a href="#" className="text-[0.75rem] font-[800] uppercase text-[#1A1A1A] hover:text-[#F47B20] transition-colors">
                SEE LOCATIONS
              </a>
            </div>
          </div>

          {/* Center Grid of Icons */}
          <div className="grid grid-cols-3 gap-x-4 gap-y-6">
              {iconBoxes.map((box) => (
                <div key={box.label} className="flex flex-col items-center gap-2">
                  <div className="bg-[#F47B20] rounded-[10px] p-4 flex items-center justify-center shadow-lg w-16 h-16 hover:scale-105 transition-transform cursor-pointer">
                    <svg className="w-8 h-8 fill-white" viewBox="0 0 24 24">{box.svg}</svg>
                  </div>
                  <span className="text-[0.55rem] font-[800] text-[#1A1A1A] uppercase leading-tight text-center tracking-tight w-16">
                    {box.label}
                  </span>
                </div>
              ))}
            </div>

          {/* Right Polaroids */}
          <div className="relative h-64 md:h-72 mt-8 lg:mt-0 flex justify-end">
            <div className="absolute left-0 lg:-left-4 top-4 bg-white p-3 pb-12 shadow-[0_10px_25px_rgba(0,0,0,0.15)] rotate-[-6deg] z-10 w-40 md:w-48 transition-transform hover:z-30 hover:rotate-0">
              <div className="absolute top-[-10px] left-[-10px] w-14 h-4 bg-[#D1C2A5]/90 -rotate-45 shadow-sm" />
              <div className="absolute bottom-[-10px] right-[-10px] w-14 h-4 bg-[#D1C2A5]/90 -rotate-45 shadow-sm" />
              <div className="relative w-full aspect-square">
                <Image src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=300&q=80" alt="Chef" fill className="object-cover" />
              </div>
            </div>
            <div className="absolute left-24 lg:left-32 top-10 bg-white p-3 pb-12 shadow-[0_10px_25px_rgba(0,0,0,0.15)] rotate-[8deg] z-20 w-40 md:w-48 transition-transform hover:z-40 hover:rotate-0">
              <div className="absolute top-[-10px] left-[-10px] w-14 h-4 bg-[#D1C2A5]/90 -rotate-45 shadow-sm" />
              <div className="absolute bottom-[-10px] right-[-10px] w-14 h-4 bg-[#D1C2A5]/90 -rotate-45 shadow-sm" />
              <div className="relative w-full aspect-square">
                <Image src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=300&q=80" alt="Staff" fill className="object-cover" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
