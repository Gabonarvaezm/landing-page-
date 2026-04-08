// Flat SVG illustration of two staff members
const StaffIllustration = () => (
  <svg viewBox="0 0 300 260" className="w-full max-w-[280px]" aria-label="Staff illustration">
    {/* Background circle */}
    <circle cx="150" cy="130" r="120" fill="#fff8f0" />

    {/* Left person (man) */}
    <circle cx="100" cy="80" r="28" fill="#F47B20" />
    <circle cx="100" cy="75" r="18" fill="#FDDBB4" />
    {/* hair */}
    <ellipse cx="100" cy="60" rx="18" ry="10" fill="#1A1A1A" />
    {/* body */}
    <rect x="72" y="105" width="56" height="70" rx="8" fill="#1A1A1A" />
    {/* collar */}
    <polygon points="100,105 88,120 100,115 112,120" fill="#F47B20" />
    {/* arms */}
    <rect x="52" y="108" width="20" height="10" rx="5" fill="#1A1A1A" />
    <rect x="128" y="108" width="20" height="10" rx="5" fill="#1A1A1A" />
    {/* hands */}
    <circle cx="50" cy="113" r="8" fill="#FDDBB4" />
    <circle cx="150" cy="113" r="8" fill="#FDDBB4" />
    {/* legs */}
    <rect x="78" y="172" width="18" height="40" rx="6" fill="#333" />
    <rect x="104" y="172" width="18" height="40" rx="6" fill="#333" />

    {/* Right person (woman) */}
    <circle cx="200" cy="80" r="28" fill="#F47B20" />
    <circle cx="200" cy="75" r="18" fill="#FDDBB4" />
    {/* hair */}
    <ellipse cx="200" cy="58" rx="20" ry="12" fill="#1A1A1A" />
    <ellipse cx="185" cy="72" rx="6" ry="14" fill="#1A1A1A" />
    <ellipse cx="215" cy="72" rx="6" ry="14" fill="#1A1A1A" />
    {/* body */}
    <rect x="172" y="105" width="56" height="70" rx="8" fill="#F47B20" />
    {/* apron */}
    <rect x="184" y="110" width="32" height="60" rx="4" fill="#fff" opacity="0.4" />
    {/* arms */}
    <rect x="152" y="108" width="20" height="10" rx="5" fill="#F47B20" />
    <rect x="228" y="108" width="20" height="10" rx="5" fill="#F47B20" />
    {/* hands */}
    <circle cx="150" cy="113" r="8" fill="#FDDBB4" />
    <circle cx="250" cy="113" r="8" fill="#FDDBB4" />
    {/* legs */}
    <rect x="178" y="172" width="18" height="40" rx="6" fill="#1A1A1A" />
    <rect x="204" y="172" width="18" height="40" rx="6" fill="#1A1A1A" />

    {/* Banner between them */}
    <rect x="60" y="100" width="180" height="36" rx="6" fill="#F47B20" />
    <text x="150" y="123" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold" fontFamily="Poppins, sans-serif">CRUST PIZZA CO.</text>
  </svg>
);

export default function CommunitySection() {
  return (
    <section className="bg-transparent flex flex-wrap items-center gap-6 mt-4">
      {/* Left text */}
      <div className="flex-1 min-w-[200px]">
        <h3 className="text-[#1A1A1A] text-[0.8rem] font-[800] mb-2 tracking-wide">
          @yourbrandhandle
        </h3>
        <h2 className="text-[1.1rem] font-[900] uppercase leading-[1.1] mb-2 tracking-[-0.5px]">
          LET'S WORK TOGETHER<br />FOR OUR COMMUNITY
        </h2>
        <p className="text-[0.6rem] text-[#666] leading-relaxed font-[500] pr-4">
          Us aacis orm nmos ineadtua iarv ant aoerican tasastie pmpaenvretet.
        </p>
      </div>

      {/* Right illustration */}
      <div className="flex justify-center w-[120px] md:w-[150px]">
        <StaffIllustration />
      </div>
    </section>
  );
}
