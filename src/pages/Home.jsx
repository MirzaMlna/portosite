import CtaSection from "../components/CtaSection.jsx";
import HeroSection from "../components/HeroSection.jsx";
import PackagesSection from "../components/PackagesSection.jsx";
import ProcessSection from "../components/ProcessSection.jsx";
import SamplesSection from "../components/SamplesSection.jsx";
import ServicesSection from "../components/ServicesSection.jsx";
import { useScrollReveal } from "../utils/useScrollReveal";

export default function Home() {
  useScrollReveal();

  return (
    <main className="pt-20">
      <HeroSection />
      <ServicesSection />
      <SamplesSection />
      <PackagesSection />
      <ProcessSection />
      <CtaSection />
    </main>
  );
}
