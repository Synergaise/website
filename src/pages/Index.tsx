import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PlatformFlywheel from "@/components/PlatformFlywheel";
import QuoteSection from "@/components/QuoteSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#F4F2EC]">
      <Navbar />
      <Hero />
      <PlatformFlywheel />
      <QuoteSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
