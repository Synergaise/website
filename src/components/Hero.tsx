import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Orbital Glow Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-electric-blue/20 rounded-full blur-[120px] animate-orbital-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-electric-blue/10 rounded-full blur-[100px] animate-orbital-glow" style={{ animationDelay: "2s" }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in-up">
          {/* Logo Mark */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 rounded-full bg-gradient-orbital border-2 border-primary flex items-center justify-center shadow-glow-orbital">
              <div className="w-12 h-12 rounded-full border-4 border-primary animate-orbital-glow" />
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-[72px] font-heading font-bold leading-[1.1] tracking-tight">
            AI systems that scale your business —{" "}
            <span className="text-primary">effortlessly</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Tailored automations and strategy built for modern companies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="font-heading font-bold uppercase text-sm tracking-wider px-8"
            >
              See Our Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Link to="/contact">
              <Button
                variant="outline"
                size="lg"
                className="font-heading font-bold uppercase text-sm tracking-wider px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
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
