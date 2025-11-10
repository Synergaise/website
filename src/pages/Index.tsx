import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PlatformFlywheel from "@/components/PlatformFlywheel";
import QuoteSection from "@/components/QuoteSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import MeetTheFoundersSection from "@/components/MeetTheFoundersSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#F4F2EC]">
      <Navbar />
      <Hero />
      <div className="container mx-auto px-4 sm:px-6">
        <PlatformFlywheel />
      </div>
      <QuoteSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <MeetTheFoundersSection />
      <Footer />
    </div>
  );
};

export default Index;
