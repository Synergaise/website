import clayLogo from "@/assets/clay-logo.png";
import { Cursor } from '@lobehub/icons';

const platforms = ["Make", "Clay", "Instantly", "Zapmail", "Apollo", "Pipedrive", "Monday.com", "n8n", "Replit", "Cursor"];
const PlatformFlywheel = () => {
  return <section className="my-24">
      <div className="container mx-auto px-6">
        <p className="text-center font-heading font-bold text-base uppercase tracking-[0.12em] text-cool-gray mb-12">POWERED BY LEADING PLATFORMS</p>
        
        {/* Scrolling Platform Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex gap-4 animate-scroll hover:pause-animation">
            {platforms.map((platform, index) => 
              platform === "Clay" ? (
                <div key={index} className="flex-shrink-0 flex items-center">
                  <img src={clayLogo} alt="Clay" className="h-16 w-auto" />
                </div>
              ) : platform === "Cursor" ? (
                <div key={index} className="flex-shrink-0 flex items-center">
                  <Cursor.Combine size={56} />
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
              platform === "Clay" ? (
                <div key={`duplicate-${index}`} className="flex-shrink-0 flex items-center">
                  <img src={clayLogo} alt="Clay" className="h-16 w-auto" />
                </div>
              ) : platform === "Cursor" ? (
                <div key={`duplicate-${index}`} className="flex-shrink-0 flex items-center">
                  <Cursor.Combine size={56} />
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