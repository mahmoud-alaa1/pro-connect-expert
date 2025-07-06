import HeroSection from "@/components/home-page-sections/hero-section/HeroSection";
import FeaturesSection from "@/components/home-page-sections/FeaturesSection";
import HowItWorks from "@/components/home-page-sections/HowItWorks";
import CTASection from "@/components/home-page-sections/CTASection";

export default function page() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <CTASection />
    </div>
  );
}
