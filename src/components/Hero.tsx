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


  return <section className="relative min-h-screen flex items-center overflow-hidden pt-16 sm:pt-20 bg-background">
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
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
      </div>

      {/* Left Side: Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div 
          className={`max-w-2xl space-y-4 sm:space-y-8 transition-all duration-1000 transform ${
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
            className="font-heading font-black text-4xl sm:text-5xl lg:text-7xl xl:text-[72px] leading-[1.15] sm:leading-[1.2] lg:leading-[1.25] tracking-[-0.02em] text-foreground"
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

          {/* CTA Button */}
          <div 
            className="pt-2 sm:pt-4"
            style={{
              transitionDelay: '200ms'
            }}
          >
            <a href="https://cal.com/jude-hill-a6kiig/discovery" target="_blank" rel="noopener noreferrer">
              <Button 
                variant="default" 
                size="lg" 
                className="font-heading font-bold text-base tracking-wide px-8 transition-all duration-300 hover:shadow-glow-hover"
              >
                Schedule a Call
              </Button>
            </a>
          </div>
        </div>
      </div>

    </section>;
};
export default Hero;