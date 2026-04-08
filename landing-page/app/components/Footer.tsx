export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white px-10 py-5 flex flex-col md:flex-row justify-between items-center gap-5">
      <div className="flex items-center gap-4">
        <div className="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center text-[#1A1A1A] font-[800] text-[0.6rem] leading-[1] text-center shrink-0">
          CRUST<br />PIZZA CO.
        </div>
        <span className="text-[0.8125rem] font-[600] uppercase">
          WANT TO PLACE AN ORDER NOW?
        </span>
      </div>
      
      <ul className="flex flex-wrap justify-center items-center gap-3 list-none">
        <li><a href="#" className="text-white hover:text-[#F47B20] text-[0.6875rem] tracking-[1px] uppercase transition-colors">MENU</a></li>
        <li className="text-white text-[0.6875rem]">|</li>
        <li><a href="#" className="text-white hover:text-[#F47B20] text-[0.6875rem] tracking-[1px] uppercase transition-colors">CATERING</a></li>
        <li className="text-white text-[0.6875rem]">|</li>
        <li><a href="#" className="text-white hover:text-[#F47B20] text-[0.6875rem] tracking-[1px] uppercase transition-colors">COMMISSIONS</a></li>
        <li className="text-white text-[0.6875rem]">|</li>
        <li><a href="#" className="text-white hover:text-[#F47B20] text-[0.6875rem] tracking-[1px] uppercase transition-colors">PRIVACY</a></li>
        <li className="text-white text-[0.6875rem]">|</li>
        <li><a href="#" className="text-white hover:text-[#F47B20] text-[0.6875rem] tracking-[1px] uppercase transition-colors">TERMS</a></li>
      </ul>
    </footer>
  );
}
