import clayLogo from "@/assets/clay-logo-white.png";
import makeLogo from "@/assets/make-logo.webp";
import n8nLogo from "@/assets/n8n-logo.png";
import claudeLogo from "@/assets/claude-logo.png";
import cursorLogo from "@/assets/cursor-logo.png";
import lovableLogo from "@/assets/lovable-logo.png";
import openaiLogo from "@/assets/openai-logo.png";
import supabaseLogo from "@/assets/supabase-logo.png";
import vapiLogo from "@/assets/vapi-logo.png";
import elevenlabsLogo from "@/assets/elevenlabs-logo.png";

const platformLogos: Record<string, { src: string; height: string }> = {
  Make: { src: makeLogo, height: "h-8" },
  Clay: { src: clayLogo, height: "h-12" },
  n8n: { src: n8nLogo, height: "h-10" },
  Claude: { src: claudeLogo, height: "h-16" },
  Cursor: { src: cursorLogo, height: "h-8" },
  Lovable: { src: lovableLogo, height: "h-16" },
  OpenAI: { src: openaiLogo, height: "h-8" },
  Supabase: { src: supabaseLogo, height: "h-8" },
  Vapi: { src: vapiLogo, height: "h-10" },
  ElevenLabs: { src: elevenlabsLogo, height: "h-8" },
};

const platforms = ["Make", "Clay", "Claude", "n8n", "Cursor", "Lovable", "OpenAI", "Supabase", "Vapi", "ElevenLabs"];

const PlatformFlywheel = () => {
  return (
    <section
      id="powered-by"
      className="relative py-20 px-6 flex flex-col items-center justify-center text-center rounded-[36px] mx-auto max-w-7xl my-20 shadow-sm"
      style={{
        background: "linear-gradient(180deg, #E9E6DF 0%, #E5E2DA 100%)", // coastal sand tone
        border: "1px solid rgba(0,0,0,0.05)",
        backdropFilter: "blur(8px)",
        overflow: "hidden",
      }}
    >
      {/* Soft light vignette for premium look */}
      <div
        className="absolute inset-0 rounded-[36px] pointer-events-none"
        style={{
          boxShadow: "inset 0 0 80px rgba(255,255,255,0.25)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <p className="text-center font-heading font-bold text-base uppercase tracking-[0.12em] text-[#1E1E1E] mb-12">
          Powered by Leading Platforms
        </p>

        {/* Scrolling Platform Carousel */}
        <div className="relative overflow-hidden">
          {/* Edge fades */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#E9E6DF] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#E9E6DF] to-transparent z-10 pointer-events-none" />

          <div className="flex gap-12 animate-scroll hover:pause-animation will-change-transform">
            {platforms.map((platform, index) => (
              <div key={index} className="flex-shrink-0 flex items-center justify-center min-w-[120px]">
                <img
                  src={platformLogos[platform].src}
                  alt={platform}
                  className={`${platformLogos[platform].height} w-auto object-contain opacity-90 hover:opacity-100 transition-all duration-300`}
                />
              </div>
            ))}
            {/* Duplicate for infinite loop */}
            {platforms.map((platform, index) => (
              <div key={`duplicate-${index}`} className="flex-shrink-0 flex items-center justify-center min-w-[120px]">
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

      {/* Soft bottom fade for natural transition */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(233,230,223,0) 0%, rgba(233,230,223,1) 100%)",
        }}
      />
    </section>
  );
};

export default PlatformFlywheel;
