import clayLogo from "@/assets/clay-logo-white.png";
import makeLogo from "@/assets/make-logo.webp";
import n8nLogo from "@/assets/n8n-logo.png";
import claudeLogo from "@/assets/claude-logo.png";
import cursorLogo from "@/assets/cursor-logo.png";
import lovableLogo from "@/assets/lovable-logo.png";
import openaiLogo from "@/assets/openai-logo.png";
import supabaseLogo from "@/assets/supabase-logo.png";

const platformLogos: Record<string, { src: string; height: string }> = {
  "Make": { src: makeLogo, height: "h-8" },
  "Clay": { src: clayLogo, height: "h-12" },
  "n8n": { src: n8nLogo, height: "h-10" },
  "Claude": { src: claudeLogo, height: "h-14" },
  "Cursor": { src: cursorLogo, height: "h-8" },
  "Lovable": { src: lovableLogo, height: "h-10" },
  "OpenAI": { src: openaiLogo, height: "h-8" },
  "Supabase": { src: supabaseLogo, height: "h-8" },
};

const platforms = ["Make", "Clay", "Claude", "n8n", "Cursor", "Lovable", "OpenAI", "Supabase", "Instantly", "Zapmail", "Apollo", "Monday.com", "Replit"];
const PlatformFlywheel = () => {
  return <section className="my-24">
      <div className="container mx-auto px-6">
        <p className="text-center font-heading font-bold text-base uppercase tracking-[0.12em] text-cool-gray mb-12">POWERED BY LEADING PLATFORMS</p>
        
        {/* Scrolling Platform Carousel */}
        <div className="relative overflow-hidden">
          {/* Fade effects on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          <div className="flex gap-4 animate-scroll hover:pause-animation">
            {platforms.map((platform, index) => 
              platformLogos[platform] ? (
                <div key={index} className="flex-shrink-0 flex items-center">
                  <img src={platformLogos[platform].src} alt={platform} className={`${platformLogos[platform].height} w-auto`} />
                </div>
              ) : (
                <div key={index} className="flex-shrink-0 px-6 py-3 bg-graphite/30 backdrop-blur-md border border-white/8 rounded-full">
                  <span className="text-base font-heading font-medium text-off-white whitespace-nowrap">
                    {platform}
                  </span>
                </div>
              )
            )}
            {/* Duplicate for seamless infinite loop */}
            {platforms.map((platform, index) => 
              platformLogos[platform] ? (
                <div key={`duplicate-${index}`} className="flex-shrink-0 flex items-center">
                  <img src={platformLogos[platform].src} alt={platform} className={`${platformLogos[platform].height} w-auto`} />
                </div>
              ) : (
                <div key={`duplicate-${index}`} className="flex-shrink-0 px-6 py-3 bg-graphite/30 backdrop-blur-md border border-white/8 rounded-full">
                  <span className="text-base font-heading font-medium text-off-white whitespace-nowrap">
                    {platform}
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>;
};
export default PlatformFlywheel;