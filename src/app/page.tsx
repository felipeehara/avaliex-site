
import Header from "@/app/Components/Header/Header";
import HeroSection from "./Components/HeroSection/HeroSection";
import ServicesSection from "./Components/ServicesSection/ServicesSection";
import ParceirosSection from "./Components/ParceirosSection/ParceirosSection";
import QuemSomosSection from "./Components/QuemsomosSection/QuemSomosSection";

export default function Home() {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <ServicesSection/>
      <QuemSomosSection/>
      <ParceirosSection/>
      
    </div>
  );
}
