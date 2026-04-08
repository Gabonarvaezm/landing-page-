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
    <section className="py-16 px-4 md:px-10 bg-white">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-10 items-start">

          {/* Left */}
          <div>
            <h2 className="text-[1.75rem] font-extrabold uppercase leading-tight mb-4">
              Home of the<br />Chicago-Style<br />Thin Crust Pizza
            </h2>
            <p className="text-[0.875rem] text-[#666] leading-relaxed mb-6">
              We&apos;ve been crafting authentic Chicago-style thin crust pizzas for over two decades.
              Every pie is made from scratch using locally sourced ingredients, hand-stretched dough,
              and our signature sauce recipe passed down through generations. Come taste the difference
              that real passion makes.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="inline-block bg-[#F47B20] hover:bg-[#d96a10] text-white font-bold text-[0.8rem] uppercase tracking-wide px-6 py-2.5 rounded-full transition-colors">
                Learn More
              </a>
              <a href="#" className="text-[0.75rem] font-bold uppercase tracking-wide text-[#1A1A1A] hover:text-[#F47B20] transition-colors">
                See Locations
              </a>
            </div>
          </div>

          {/* Right */}
          <div>
            <div className="grid grid-cols-3 gap-2.5">
              {iconBoxes.map((box) => (
                <div key={box.label} className="bg-[#F5F2EE] rounded-lg p-3 flex flex-col items-center gap-1.5 text-center">
                  <svg className="w-7 h-7 fill-[#F47B20]" viewBox="0 0 24 24">{box.svg}</svg>
                  <span className="text-[0.6rem] font-bold uppercase leading-tight">{box.label}</span>
                </div>
              ))}
            </div>

            {/* Polaroids */}
            <div className="relative h-40 mt-5">
              <div className="absolute left-4 top-0 bg-white p-2 pb-7 shadow-lg rotate-[-4deg] z-10 w-28">
                <div className="absolute top-[-7px] left-1/2 -translate-x-1/2 w-9 h-3 bg-yellow-200/80 rounded-sm" />
                <div className="relative w-full h-20">
                  <Image src="https://picsum.photos/seed/staff1/200/200" alt="Restaurant staff" fill className="object-cover" />
                </div>
              </div>
              <div className="absolute left-24 top-5 bg-white p-2 pb-7 shadow-lg rotate-[3deg] z-20 w-28">
                <div className="absolute top-[-7px] left-1/2 -translate-x-1/2 w-9 h-3 bg-yellow-200/80 rounded-sm" />
                <div className="relative w-full h-20">
                  <Image src="https://picsum.photos/seed/staff2/200/200" alt="Restaurant team" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
