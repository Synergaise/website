import clayLogo from "@/assets/clay-logo-black.png";
import makeLogo from "@/assets/make-logo-black.webp";
import n8nLogo from "@/assets/n8n-logo-black.png";
import claudeLogo from "@/assets/claude-logo-black.png";
import cursorLogo from "@/assets/cursor-logo-black.png";
import lovableLogo from "@/assets/lovable-logo-black.png";
import openaiLogo from "@/assets/openai-logo-black.png";
import supabaseLogo from "@/assets/supabase-logo-black.png";
import vapiLogo from "@/assets/vapi-logo-new.png";
import elevenlabsLogo from "@/assets/elevenlabs-logo.png";
import { useState } from "react";

const platformLogos: Record<string, { src: string; height: string }> = {
  Make: { src: makeLogo, height: "h-7 sm:h-8 md:h-10" },
  Clay: { src: clayLogo, height: "h-8 sm:h-10 md:h-12" },
  n8n: { src: n8nLogo, height: "h-7 sm:h-8 md:h-10" },
  Claude: { src: claudeLogo, height: "h-7 sm:h-8 md:h-10" },
  Cursor: { src: cursorLogo, height: "h-7 sm:h-8 md:h-10" },
  Lovable: { src: lovableLogo, height: "h-6 sm:h-7 md:h-9" },
  OpenAI: { src: openaiLogo, height: "h-7 sm:h-8 md:h-10" },
  Supabase: { src: supabaseLogo, height: "h-7 sm:h-8 md:h-10" },
  Vapi: { src: vapiLogo, height: "h-7 sm:h-8 md:h-10" },
  ElevenLabs: { src: elevenlabsLogo, height: "h-7 sm:h-8 md:h-10" },
};

const platforms = ["Make", "Clay", "Claude", "n8n", "Cursor", "Lovable", "OpenAI", "Supabase", "Vapi", "ElevenLabs"];

const PlatformFlywheel = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    const touchEnd = e.touches[0].clientX;
    const diff = Math.abs(touchStart - touchEnd);
    
    // If user swiped more than 50px, pause the animation
    if (diff > 50) {
      setIsPaused(true);
    }
  };
  
  const handleTouchEnd = () => {
    // Resume animation after 2 seconds
    setTimeout(() => setIsPaused(false), 2000);
  };

  return (
    <section
      id="powered-by"
      className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 flex flex-col items-center justify-center text-center rounded-[24px] sm:rounded-[36px] mx-auto max-w-7xl shadow-sm"
      style={{
        background: "linear-gradient(180deg, #E9E6DF 0%, #E5E2DA 100%)",
        border: "1px solid rgba(0,0,0,0.05)",
        backdropFilter: "blur(8px)",
        overflow: "hidden",
      }}
    >
      {/* Soft light vignette */}
      <div
        className="absolute inset-0 rounded-[36px] pointer-events-none"
        style={{
          boxShadow: "inset 0 0 80px rgba(255,255,255,0.25)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <p className="text-center font-heading font-bold text-sm sm:text-base uppercase tracking-[0.12em] text-[#1E1E1E] mb-8 sm:mb-10 md:mb-12">
          Powered by Leading Platforms
        </p>

        {/* Infinite scrolling carousel */}
        <div 
          className="relative overflow-hidden h-16 sm:h-20 md:h-24 flex items-center"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Edge fades */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 md:w-32 bg-gradient-to-r from-[#E9E6DF] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 md:w-32 bg-gradient-to-l from-[#E9E6DF] to-transparent z-10 pointer-events-none" />

          <div className={`flex gap-8 sm:gap-10 md:gap-12 animate-marquee will-change-transform items-center ${isPaused ? 'paused' : ''}`}>
            {[...platforms, ...platforms].map((platform, index) => (
              <div key={index} className="flex-shrink-0 flex items-center justify-center min-w-[80px] sm:min-w-[100px] md:min-w-[120px]">
                <img
                  src={platformLogos[platform].src}
                  alt={platform}
                  className={`${platformLogos[platform].height} w-auto object-contain opacity-90 hover:opacity-100 transition-all duration-300`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Soft bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(233,230,223,0) 0%, rgba(233,230,223,1) 100%)",
        }}
      />

      {/* Inline animation style */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: flex;
          width: 200%;
          animation: marquee 25s linear infinite;
        }
        .animate-marquee.paused {
          animation-play-state: paused;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        @media (min-width: 640px) {
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
        }
        @media (min-width: 1024px) {
          .animate-marquee {
            animation: marquee 35s linear infinite;
          }
        }
      `}</style>
    </section>
  );
};

export default PlatformFlywheel;
