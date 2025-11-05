import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-gradient-to-br from-[#0E0E0E] to-black">
      {/* Right Side: Animated Background */}
      <div className="absolute right-0 top-0 bottom-0 w-[60%] overflow-hidden">
        {/* Orbital Glow Animations */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[120px] animate-orbital-glow" />
        <div className="absolute bottom-1/3 right-1/3 w-[350px] h-[350px] bg-primary/20 rounded-full blur-[100px] animate-orbital-glow" 
          style={{ animationDelay: "2s" }} 
        />
        <div className="absolute top-1/2 right-1/2 w-[300px] h-[300px] bg-primary/15 rounded-full blur-[90px] animate-orbital-glow" 
          style={{ animationDelay: "4s" }} 
        />
        
        {/* Gradient Overlay for Depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E0E0E] via-[#0E0E0E]/90 to-transparent" />
      </div>

      {/* Left Side: Content */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-2xl space-y-8 animate-fade-in-up">
          {/* Headline */}
          <h1 className="font-heading font-black text-6xl lg:text-7xl xl:text-[72px] leading-[1.05] tracking-[-0.02em] text-white">
            It's time to move from{" "}
            <span className="text-primary">AI-Curious</span>
            {" "}to{" "}
            <span className="text-primary">AI-Integrated.</span>
          </h1>

          {/* Subline */}
          <p className="text-xl font-medium text-[#B1B1B1] leading-relaxed">
            Tailored automations and strategy built for modern companies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              onClick={scrollToProjects} 
              variant="outline" 
              size="lg" 
              className="font-heading font-bold text-base tracking-wide px-8 border-2 border-primary text-white hover:bg-primary hover:text-white transition-all duration-300"
            >
              See Our Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Link to="/contact">
              <Button 
                variant="outline" 
                size="lg" 
                className="font-heading font-bold text-base tracking-wide px-8 border-2 border-primary text-white hover:bg-primary hover:text-white transition-all duration-300"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Gradient fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;