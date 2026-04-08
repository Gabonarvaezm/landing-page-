import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MenuSection from "./components/MenuSection";
import ChicagoSection from "./components/ChicagoSection";
import WaysToEnjoy from "./components/WaysToEnjoy";
import WhyChooseUs from "./components/WhyChooseUs";
import CommunitySection from "./components/CommunitySection";
import FranchiseSection from "./components/FranchiseSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <MenuSection />
      <ChicagoSection />
      <WaysToEnjoy />
      <div className="max-w-[1100px] mx-auto px-4 md:px-10 w-full mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start">
          <CommunitySection />
          <WhyChooseUs />
        </div>
      </div>
      <FranchiseSection />
      <Footer />
    </>
  );
}
