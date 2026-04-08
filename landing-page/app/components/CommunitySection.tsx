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
    <section className="py-16 px-4 md:px-10">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Left text */}
          <div>
            <p className="text-[#F47B20] text-[0.8rem] font-semibold mb-3">@crustpizzaco</p>
            <h2 className="text-[1.4rem] font-extrabold uppercase leading-tight mb-4">
              Let&apos;s Work Together<br />For Our Community
            </h2>
            <p className="text-[0.8rem] text-[#666] leading-relaxed">
              We believe in giving back to the neighborhoods that have supported us.
              From local sponsorships to charity events, Crust Pizza Co. is proud to
              be a pillar of the community. Join us in making a difference, one slice at a time.
            </p>
          </div>

          {/* Right illustration */}
          <div className="flex justify-center bg-gradient-to-br from-[#fff8f0] to-[#ffe8cc] rounded-xl p-6">
            <StaffIllustration />
          </div>

        </div>
      </div>
    </section>
  );
}
