import { useState, useEffect } from "react";

const testimonials = [
  {
    quote:
      "Working with Synergaise Ltd has been a genuinely transformative experience for our business. They built a bespoke automation that now checks expiry dates automatically, sends renewal reminders, and even optimises technician travel routes. The results have been outstanding: reduced admin time, increased field efficiency, and improved profitability. I would highly recommend them to any business looking to enhance productivity, reduce overhead, and unlock the power of smart automation.",
    author: "Miles Leslie",
    role: "Managing Director",
    company: "ELC Sales & Lettings",
  },
  {
    quote:
      "Working with Synergaise was a genuinely strong experience — collaborative throughout and with a great final result. They helped streamline and automate several overlapping manual tasks, making our internal process more efficient and user-friendly. Communication was slick and responsive, and I'd absolutely recommend them — knowledgeable, easy to work with, and strong on delivery.",
    author: "Ryan Prentice",
    role: "Managing Director",
    company: "VanLeasing.com",
  },
  {
    quote:
      "Before Synergaise's automation, payments from Wix into our accounting software were grouped together, making reconciliation a slow, manual process. Now, every payment comes in clearly attributed to the right member or event, dramatically reducing admin time and eliminating the weekly reconciliation hassle.",
    author: "Jerry Gilpin",
    role: "President",
    company: "The British Association for Psychological Type (BAPT)",
  },
  {
    quote:
      "I cannot say enough good things about working with Synergaise. I needed complex automations done fast — and they didn't stop until every single detail was perfect. They're incredibly responsive, fully committed, and the level of dedication, talent, and professionalism is next-level. If you get the chance to work with them, do it — a rare find, ten stars if I could give them!",
    author: "Moe",
    role: "Founder",
    company: "Godly Windows",
  },
  {
    quote:
      "They implemented a whole new process that made everything feel next-gen, not like the 90s. Working with professionals at Synergaise has been a true privilege — top-notch quality yet again.",
    author: "Tushar Srivastava",
    role: "Founder",
    company: "Fetch N Buy",
  },
];

const ProjectsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6500);

    return () => clearInterval(interval);
  }, [isPaused]);

  const getCardStyle = (index: number) => {
    const total = testimonials.length;
    const diff = (index - activeIndex + total) % total;

    // Calculate position in a wheel
    const angle = (diff * 360) / total;
    const radius = 280;

    // Calculate x and y positions for circular arrangement
    const x = Math.sin((angle * Math.PI) / 180) * radius;
    const y = (-Math.cos((angle * Math.PI) / 180) * radius) / 2;

    // Scale and opacity based on position
    let scale = 1;
    let opacity = 1;
    let zIndex = 10;

    if (diff === 0) {
      // Active card - center front
      scale = 1.1;
      opacity = 1;
      zIndex = 30;
    } else if (diff === 1 || diff === total - 1) {
      // Adjacent cards
      scale = 0.85;
      opacity = 0.6;
      zIndex = 20;
    } else {
      // Background cards
      scale = 0.7;
      opacity = 0.3;
      zIndex = 10;
    }

    return {
      transform: `translate(${x}px, ${y}px) scale(${scale})`,
      opacity,
      zIndex,
    };
  };

  return (
    <section id="reviews" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-graphite/10 to-transparent" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-[42px] font-heading font-bold leading-[1.2] tracking-tight">
            What People Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by decision makers across industries
          </p>
        </div>

        <div
          className="relative h-[600px] md:h-[700px] w-full max-w-5xl mx-auto flex items-center justify-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="absolute transition-all duration-1000 ease-out w-full max-w-md"
              style={getCardStyle(index)}
            >
              <div className="p-8 bg-gradient-to-b from-[#B68A74] to-[#BBA99E] text-white rounded-[18px] shadow-lg transition-all duration-300 ease-in-out space-y-6 backdrop-blur-sm">
                <div className="text-4xl text-primary leading-none">"</div>
                <blockquote className="text-base text-foreground leading-relaxed line-clamp-6">
                  {testimonial.quote}
                </blockquote>
                <div className="space-y-1 pt-4">
                  <p className="text-sm font-accent font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation dots */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2 z-40">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "bg-primary w-8" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
