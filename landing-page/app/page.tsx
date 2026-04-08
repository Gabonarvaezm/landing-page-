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
      <WhyChooseUs />
      <CommunitySection />
      <FranchiseSection />
      <Footer />
    </>
  );
}
