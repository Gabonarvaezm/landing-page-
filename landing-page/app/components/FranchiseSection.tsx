import Image from "next/image";

export default function FranchiseSection() {
  return (
    <section className="max-w-[1100px] mx-auto px-5 py-[60px]">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr_1fr] gap-[30px] items-center bg-white p-10 rounded-[12px] shadow-sm">
        {/* Left */}
        <div>
          <h2 className="text-[#1A1A1A] font-[800] uppercase text-[1.5rem] leading-[1.2] mb-3">
            WANT TO OWN YOUR OWN CRUST PIZZA CO.?
          </h2>
          <p className="text-[#666666] text-[0.875rem] mb-6">
            Join our growing family and bring the taste of Chicago to your neighborhood. We offer comprehensive training, ongoing support, and a proven business model.
          </p>
          <button className="bg-[#F47B20] hover:bg-[#e06a14] text-white font-[700] text-[0.875rem] uppercase px-6 py-3 rounded-[50px] transition-colors inline-flex justify-center w-auto">
            SUBMIT A REQUEST
          </button>
        </div>

        {/* Center */}
        <div className="relative w-full h-[250px] md:h-[300px]">
          <Image
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80"
            alt="Restaurant Exterior"
            fill
            className="object-cover rounded-[12px]"
          />
        </div>

        {/* Right */}
        <div className="flex flex-col gap-3">
          <h3 className="text-[#1A1A1A] font-[800] uppercase text-[1.1rem] text-center md:text-left mb-2">
            SUBMIT A REQUEST
          </h3>
          <button className="bg-[#F47B20] hover:bg-[#e06a14] text-white font-[700] text-[0.875rem] uppercase px-6 py-3 rounded-[50px] transition-colors w-full">
            LOCATIONS
          </button>
          <button className="bg-[#F47B20] hover:bg-[#e06a14] text-white font-[700] text-[0.875rem] uppercase px-6 py-3 rounded-[50px] transition-colors w-full">
            GIFT CARDS
          </button>
          <button className="bg-[#F47B20] hover:bg-[#e06a14] text-white font-[700] text-[0.875rem] uppercase px-6 py-3 rounded-[50px] transition-colors w-full">
            FOLLOW US
          </button>
        </div>
      </div>
    </section>
  );
}
