import Image from "next/image";

export default function FranchiseSection() {
  return (
    <section className="max-w-[1100px] mx-auto px-4 md:px-10 py-10 mb-10 border-t border-black/5 mt-8 pt-16">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr_1fr] gap-8 lg:gap-14 items-center">
        {/* Left */}
        <div>
          <h2 className="text-[#1A1A1A] font-[900] uppercase text-[1.4rem] leading-[1.1] mb-3 tracking-[-0.5px]">
            WANT TO OWN YOUR OWN<br />CRUST PIZZA CO.?
          </h2>
          <p className="text-[#666666] text-[0.6rem] mb-6 font-[500] leading-relaxed">
            Nunc ia rbi sneale iene inecei accets tasastie pmpaenvretet oooesan tiasat.
          </p>
          <button className="bg-[#F47B20] hover:bg-[#e06a14] text-white font-[800] text-[0.7rem] uppercase px-6 py-2.5 rounded-[50px] transition-colors inline-block shadow-md tracking-wide">
            SUBMIT A REQUEST
          </button>
        </div>

        {/* Center */}
        <div className="relative w-full aspect-[16/9] md:h-[220px]">
          <Image
            src="/franchise_building.png"
            alt="Restaurant Exterior"
            fill
            className="object-cover rounded-[16px] shadow-lg"
          />
        </div>

        {/* Right */}
        <div className="flex flex-col gap-4 items-start pl-0 lg:pl-6">
          <h3 className="text-[#1A1A1A] font-[900] uppercase text-[1.1rem] mb-2 tracking-[-0.5px]">
            SUBMIT A REQUEST
          </h3>
          <div className="grid grid-cols-3 gap-3 w-full">
            <button className="bg-[#F47B20] hover:bg-[#e06a14] text-white font-[800] text-[0.55rem] uppercase p-3 rounded-[12px] shadow-sm transition-colors aspect-square flex items-center justify-center text-center leading-tight">
              LOCATIONS
            </button>
            <button className="bg-[#F47B20] hover:bg-[#e06a14] text-white font-[800] text-[0.55rem] uppercase p-3 rounded-[12px] shadow-sm transition-colors aspect-square flex items-center justify-center text-center leading-tight">
              GIFT<br />CARDS
            </button>
            <button className="bg-[#F47B20] hover:bg-[#e06a14] text-white font-[800] text-[0.55rem] uppercase p-3 rounded-[12px] shadow-sm transition-colors aspect-square flex items-center justify-center text-center leading-tight">
              FOLLOW<br />US
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
