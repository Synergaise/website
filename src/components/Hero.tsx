import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import NetworkEffect from "./NetworkEffect";

const Hero = () => {
  const [showContent, setShowContent] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  
  useEffect(() => {
    // Start fade out of black screen after 300ms
    const fadeTimer = setTimeout(() => setFadeOut(true), 300);
    // Show content after network animation (1.5s)
    const contentTimer = setTimeout(() => setShowContent(true), 1500);
    
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  const scrollToReviews = () => {
    const element = document.getElementById("reviews");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  return <section className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-gradient-to-br from-[#0E0E0E] to-black">
      {/* Black intro fade */}
      <div 
        className={`fixed inset-0 bg-black z-50 pointer-events-none transition-opacity duration-1000 ${
          fadeOut ? 'opacity-0' : 'opacity-100'
        }`}
      />
      {/* Right Side: Animated Network Background */}
      <NetworkEffect startAnimation={fadeOut} />
      
      {/* Additional ambient glow */}
      <div className="absolute right-0 top-0 bottom-0 w-[60%] overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-orbital-glow" />
        <div className="absolute bottom-1/3 right-1/3 w-[350px] h-[350px] bg-primary/15 rounded-full blur-[100px] animate-orbital-glow" style={{
        animationDelay: "2s"
      }} />
        
        {/* Gradient Overlay for Depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E0E0E] via-[#0E0E0E]/50 to-transparent" />
      </div>

      {/* Left Side: Content */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div 
          className={`max-w-2xl space-y-8 transition-all duration-1000 transform ${
            showContent 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
          style={{
            transform: showContent ? 'translateY(0)' : 'translateY(32px)',
          }}
        >
          {/* Headline */}
          <h1 
            className="font-heading font-black text-6xl lg:text-7xl xl:text-[72px] leading-[1.05] tracking-[-0.02em] text-white"
            style={{
              transition: 'transform 0.3s ease-out',
              transform: 'translateZ(0)',
            }}
            onMouseMove={(e) => {
              if (!showContent) return;
              const rect = e.currentTarget.getBoundingClientRect();
              const x = (e.clientX - rect.left) / rect.width - 0.5;
              const y = (e.clientY - rect.top) / rect.height - 0.5;
              e.currentTarget.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translate(0, 0)';
            }}
          >
            It's time to move from AI-Curious to <span className="text-primary">AI-Integrated</span>.
          </h1>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4 pt-4"
            style={{
              transitionDelay: '200ms'
            }}
          >
            <Button 
              onClick={scrollToReviews} 
              variant="outline" 
              size="lg" 
              className="font-heading font-bold text-base tracking-wide px-8 border-2 border-primary text-white hover:bg-primary hover:text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(41,121,255,0.5)]"
            >
              Reviews
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <a href="https://cal.com/jude-hill-a6kiig/discovery" target="_blank" rel="noopener noreferrer">
              <Button 
                variant="default" 
                size="lg" 
                className="font-heading font-bold text-base tracking-wide px-8 transition-all duration-300 hover:shadow-[0_0_20px_rgba(41,121,255,0.6)]"
              >
                Schedule a Call
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Gradient fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>;
};
export default Hero;