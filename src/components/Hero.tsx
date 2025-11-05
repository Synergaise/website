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
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-background to-black">
      {/* Orbital Glow Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/25 rounded-full blur-[120px] animate-orbital-glow opacity-25" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] animate-orbital-glow" style={{
        animationDelay: "2s"
      }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-12 animate-fade-in-up">

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-h1 font-heading font-black leading-[1.05] tracking-[-0.03em] text-foreground">It's time to move from AI-Curious to AI-integrated.{" "}
            <span className="text-primary font-semibold">effortlessly</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium">
            Tailored automations and strategy built for modern companies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button onClick={scrollToProjects} variant="outline" size="lg" className="font-heading font-bold uppercase text-button tracking-[0.04em] px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              See Our Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="font-heading font-bold uppercase text-button tracking-[0.04em] px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Gradient fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>;
};
export default Hero;