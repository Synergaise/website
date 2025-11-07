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
    <div className="min-h-screen bg-[#F4F2EC]">
      {/* Off-white overlay without black fade */}
      <motion.div
        initial={{ opacity: 1, backgroundColor: "#F4F2EC" }}
        animate={{ opacity: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
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
