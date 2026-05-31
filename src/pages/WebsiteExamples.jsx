import WebsiteExamplesBenefitsSection from "../components/WebsiteExamplesBenefitsSection.jsx";
import WebsiteExamplesCtaSection from "../components/WebsiteExamplesCtaSection.jsx";
import WebsiteExamplesGridSection from "../components/WebsiteExamplesGridSection.jsx";
import WebsiteExamplesHeroSection from "../components/WebsiteExamplesHeroSection.jsx";
import { useScrollReveal } from "../utils/useScrollReveal";

export default function WebsiteExamples() {
  useScrollReveal();

  return (
    <main className="bg-white text-slate-900 overflow-x-hidden pt-20">
      <WebsiteExamplesHeroSection />
      <WebsiteExamplesGridSection />
      <WebsiteExamplesBenefitsSection />
      <WebsiteExamplesCtaSection />
    </main>
  );
}
