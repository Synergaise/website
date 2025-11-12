import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PlatformFlywheel from "@/components/PlatformFlywheel";
import QuoteSection from "@/components/QuoteSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#F4F2EC]">
      <Navbar />
      <Hero />
      <QuoteSection />
      <ServicesSection />
      <ProjectsSection />
      <div className="w-full my-8 sm:my-12 px-4 sm:px-6">
        <div className="container mx-auto">
          <PlatformFlywheel />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
