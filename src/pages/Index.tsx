import { motion } from "framer-motion";
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
    <div className="min-h-screen bg-background">
      {/* Smooth off-white fade-in overlay */}
      <motion.div
        initial={{ opacity: 1, backgroundColor: "#F4F2EC" }}
        animate={{ opacity: 0 }}
        transition={{
          duration: 1.6,
          ease: [0.25, 0.1, 0.25, 1], // smooth ease curve (easeInOut)
        }}
        className="fixed inset-0 z-[999] pointer-events-none"
      />

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
