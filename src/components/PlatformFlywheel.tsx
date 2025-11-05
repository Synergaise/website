const platforms = [
  "Make",
  "Clay",
  "Instantly",
  "Zapmail",
  "Apollo",
  "Pipedrive",
  "Monday.com",
  "n8n",
  "Replit",
  "Cursor",
];

const PlatformFlywheel = () => {
  return (
    <section className="py-20 border-y border-border">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm font-accent text-muted-foreground mb-8 uppercase tracking-wider">
          Powered by leading automation platforms
        </p>
        
        {/* Scrolling Platform Logos */}
        <div className="relative overflow-hidden">
          <div className="flex gap-12 animate-slide-in">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-6 py-3 bg-gradient-card backdrop-blur-sm border border-border rounded-lg"
              >
                <span className="text-base font-accent text-foreground whitespace-nowrap">
                  {platform}
                </span>
              </div>
            ))}
            {/* Duplicate for seamless loop effect */}
            {platforms.map((platform, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex-shrink-0 px-6 py-3 bg-gradient-card backdrop-blur-sm border border-border rounded-lg"
              >
                <span className="text-base font-accent text-foreground whitespace-nowrap">
                  {platform}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformFlywheel;
