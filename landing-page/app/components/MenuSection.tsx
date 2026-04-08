import Image from "next/image";

const menuItems = [
  {
    imageSrc: "/menu_chicken_parm.png",
    title: "Chicken Parm",
    desc: "Tender chicken, rich marinara, melted mozzarella on our signature crust.",
    badge: "20",
    price: "$14.99",
  },
  {
    imageSrc: "/menu_alfredo.png",
    title: "Chicken Alfredo",
    desc: "Creamy alfredo sauce, grilled chicken, and fresh parmesan cheese blend.",
    badge: "18",
    price: "$15.99",
  },
  {
    imageSrc: "/menu_spaghetti.png",
    title: "Spaghetti & Meatballs",
    desc: "Classic comfort food with house-made meatballs and slow-cooked tomato sauce.",
    badge: "22",
    price: "$13.99",
  },
  {
    imageSrc: "/menu_chicken_parm.png",
    title: "Baked Mac & Cheese",
    desc: "Four-cheese blend, golden breadcrumb topping, baked until bubbly perfection.",
    badge: "16",
    price: "$12.99",
  },
];

export default function MenuSection() {
  return (
    <section id="menu" className="py-16 px-4 md:px-10">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-[1.1rem] font-bold uppercase tracking-widest mb-7">Our Menu</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {menuItems.map((item) => (
            <div key={item.title} className="bg-white rounded-lg overflow-hidden">
              <div className="relative aspect-square">
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <span className="absolute bottom-2 right-2 bg-[#F47B20] text-white text-[0.6rem] font-bold w-6 h-6 rounded-full flex items-center justify-center">
                  {item.badge}
                </span>
              </div>
              <div className="p-3">
                <h3 className="text-[0.75rem] font-bold uppercase mb-1.5">{item.title}</h3>
                <p className="text-[0.7rem] text-[#666] leading-relaxed">{item.desc}</p>
              </div>
              <div className="flex justify-end px-3 pb-3">
                <span className="bg-[#F47B20] text-white text-[0.65rem] font-bold px-3 py-1 rounded-full">
                  {item.price}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="#"
            className="inline-block border-2 border-[#F47B20] text-[#F47B20] hover:bg-[#F47B20] hover:text-white font-bold text-[0.8rem] uppercase tracking-wider px-8 py-2.5 rounded-full transition-colors"
          >
            View Our Complete Menu
          </a>
        </div>
      </div>
    </section>
  );
}
