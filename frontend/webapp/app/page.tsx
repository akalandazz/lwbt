import HeroSection from "@/components/home/HeroSection";
import TrustBar from "@/components/home/TrustBar";
import PracticeAreasGrid from "@/components/home/PracticeAreasGrid";
import AboutPreview from "@/components/home/AboutPreview";
import ResultsSection from "@/components/home/ResultsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CtaBanner from "@/components/home/CtaBanner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <PracticeAreasGrid />
      <AboutPreview />
      <ResultsSection />
      <TestimonialsSection />
      <CtaBanner />
    </>
  );
}
