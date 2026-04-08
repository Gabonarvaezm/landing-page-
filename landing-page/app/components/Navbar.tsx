"use client";
import { useState } from "react";

const Logo = ({ size = 52 }: { size?: number }) => (
  <div
    style={{ width: size, height: size }}
    className="rounded-full bg-[#1A1A1A] border-2 border-[#F47B20] flex flex-col items-center justify-center flex-shrink-0"
  >
    <span className="text-white font-extrabold uppercase text-center leading-tight"
      style={{ fontSize: size * 0.13 + "px", letterSpacing: "1px" }}>
      CRUST<br />PIZZA<br />CO.
    </span>
    <div className="w-1.5 h-1.5 rounded-full bg-[#F47B20] mt-0.5" />
  </div>
);

const UserIcon = () => (
  <div className="w-7 h-7 rounded-full bg-[#F47B20] flex items-center justify-center flex-shrink-0">
    <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
    </svg>
  </div>
);

const TwitterIcon = () => (
  <div className="w-7 h-7 rounded-full bg-[#1DA1F2] flex items-center justify-center flex-shrink-0">
    <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.43.36a9 9 0 01-2.88 1.1A4.52 4.52 0 0016.11 0c-2.5 0-4.52 2.02-4.52 4.52 0 .35.04.7.11 1.03C7.69 5.37 4.07 3.58 1.64.9a4.52 4.52 0 00-.61 2.27c0 1.57.8 2.95 2.01 3.76a4.5 4.5 0 01-2.05-.57v.06c0 2.19 1.56 4.02 3.63 4.43a4.54 4.54 0 01-2.04.08c.57 1.79 2.24 3.09 4.21 3.13A9.06 9.06 0 010 19.54a12.8 12.8 0 006.92 2.03c8.3 0 12.85-6.88 12.85-12.85 0-.2 0-.39-.01-.58A9.17 9.17 0 0023 3z" />
    </svg>
  </div>
);

const navLinkClass = "text-[11px] font-semibold uppercase tracking-widest text-[#1A1A1A] hover:text-[#F47B20] transition-colors whitespace-nowrap";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white shadow-sm h-[60px] flex items-center justify-between px-6 md:px-10">
        {/* Left links */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#" className="text-[11px] font-semibold uppercase tracking-widest bg-[#F47B20] text-white px-3 py-1.5 rounded-full">Home</a>
          <a href="#menu" className={navLinkClass}>Menu</a>
          <a href="#" className={navLinkClass}>Locations</a>
          <a href="#" className={navLinkClass}>Order Online</a>
        </div>

        {/* Center logo */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <Logo size={52} />
        </div>

        {/* Right links */}
        <div className="hidden md:flex items-center gap-5 ml-auto">
          <a href="#" className={navLinkClass}>About</a>
          <a href="#" className={navLinkClass}>Contact</a>
          <UserIcon />
          <TwitterIcon />
          <a href="tel:+1234567890" className="text-[11px] font-semibold uppercase tracking-widest text-[#F47B20]">Call Now</a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden ml-auto flex flex-col gap-1.5 p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-[#1A1A1A] transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#1A1A1A] transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#1A1A1A] transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden fixed top-[60px] left-0 right-0 bg-white z-40 shadow-lg flex flex-col gap-4 px-6 py-5">
          <a href="#" className="text-[12px] font-semibold uppercase tracking-widest text-[#F47B20]">Home</a>
          <a href="#menu" className="text-[12px] font-semibold uppercase tracking-widest text-[#1A1A1A]" onClick={() => setOpen(false)}>Menu</a>
          <a href="#" className="text-[12px] font-semibold uppercase tracking-widest text-[#1A1A1A]">Locations</a>
          <a href="#" className="text-[12px] font-semibold uppercase tracking-widest text-[#1A1A1A]">Order Online</a>
          <a href="#" className="text-[12px] font-semibold uppercase tracking-widest text-[#1A1A1A]">About</a>
          <a href="#" className="text-[12px] font-semibold uppercase tracking-widest text-[#1A1A1A]">Contact</a>
          <a href="tel:+1234567890" className="text-[12px] font-semibold uppercase tracking-widest text-[#F47B20]">Call Now</a>
        </div>
      )}
    </>
  );
}
