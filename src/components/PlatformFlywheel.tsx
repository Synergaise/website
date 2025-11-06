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

const platformLogos: Record<string, { src: string; height: string }> = {
  Make: { src: makeLogo, height: "h-10" },
  Clay: { src: clayLogo, height: "h-12" },
  n8n: { src: n8nLogo, height: "h-10" },
  Claude: { src: claudeLogo, height: "h-10" },
  Cursor: { src: cursorLogo, height: "h-10" },
  Lovable: { src: lovableLogo, height: "h-9" },
  OpenAI: { src: openaiLogo, height: "h-10" },
  Supabase: { src: supabaseLogo, height: "h-10" },
  Vapi: { src: vapiLogo, height: "h-10" },
  ElevenLabs: { src: elevenlabsLogo, height: "h-10" },
};

const platforms = ["Make", "Clay", "Claude", "n8n", "Cursor", "Lovable", "OpenAI", "Supabase", "Vapi", "ElevenLabs"];

const PlatformFlywheel = () => {
  return (
    <section
      id="powered-by"
      className="relative py-20 px-6 flex flex-col items-center justify-center text-center rounded-[36px] mx-auto max-w-7xl shadow-sm"
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
        <p className="text-center font-heading font-bold text-base uppercase tracking-[0.12em] text-[#1E1E1E] mb-12">
          Powered by Leading Platforms
        </p>

        {/* Infinite scrolling carousel */}
        <div className="relative overflow-hidden">
          {/* Edge fades */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#E9E6DF] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#E9E6DF] to-transparent z-10 pointer-events-none" />

          <div className="flex gap-12 animate-marquee will-change-transform">
            {[...platforms, ...platforms].map((platform, index) => (
              <div key={index} className="flex-shrink-0 flex items-center justify-center min-w-[120px]">
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
          animation: marquee 35s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default PlatformFlywheel;
