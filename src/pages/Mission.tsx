import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import MeetTheFoundersSection from "@/components/MeetTheFoundersSection";

const coreValues = [
  {
    number: "01",
    title: "Simplicity by Design",
    text: "We build systems that feel effortless — the simplest path that works is the smartest one.",
  },
  {
    number: "02",
    title: "Empowerment through Learning",
    text: "We upskill teams to become system builders, not system dependents.",
  },
  {
    number: "03",
    title: "Integrity in Delivery",
    text: "We build trust through transparency and execution. Every deliverable reflects care and precision.",
  },
  {
    number: "04",
    title: "Innovation through Curiosity",
    text: "We explore relentlessly — mastering emerging tools to unlock new creative and operational potential.",
  },
  {
    number: "05",
    title: "Scalability in Everything",
    text: "From code to culture, everything we build grows intelligently with your business.",
  },
];

const Mission = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      },
    );

    document.querySelectorAll(".fade-in-scroll").forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center space-y-8 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-black leading-[1.25] tracking-tight text-foreground">
              Building intelligent systems
              <br />
              that think, adapt and last.
            </h1>
            <p className="text-xl md:text-2xl text-foreground-secondary max-w-3xl mx-auto leading-relaxed">
              Synergaise builds AI systems that redefine how people create value — reliable, interpretable and built to
              scale.
            </p>
            <div className="pt-4">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="px-8 py-6 text-base font-heading font-bold hover:shadow-glow-orbital transition-all duration-300"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto max-w-7xl px-6">
        <div className="h-px bg-border" />
      </div>

      {/* Meet the Founders Section */}
      <MeetTheFoundersSection />

      {/* Divider */}
      <div className="container mx-auto max-w-7xl px-6">
        <div className="h-px bg-border" />
      </div>

      {/* Purpose Section - Two Column */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Left Column - Section Title */}
            <div className="lg:col-span-3 fade-in-scroll opacity-0 translate-y-8 transition-all duration-700">
              <h2 className="text-2xl md:text-3xl font-heading font-bold sticky top-32">Our Purpose</h2>
            </div>

            {/* Right Column - Content */}
            <div className="lg:col-span-9 space-y-16">
              {/* Main Statement */}
              <div className="space-y-8 fade-in-scroll opacity-0 translate-y-8 transition-all duration-700">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-[1.2]">
                  We believe AI should empower, not replace.
                </h3>
                <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
                  <p>
                    At Synergaise, we see AI as the foundation for a new level of business performance. Used
                    thoughtfully, it doesn't replace people, it amplifies their ability to think, decide and execute
                    intelligently.
                  </p>
                  <p>
                    Our mission is to guide forward-thinking companies through this transformation — designing systems
                    that simplify work, sharpen decisions and scale sustainably.
                  </p>
                </div>
              </div>

              {/* Three Core Beliefs */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4 fade-in-scroll opacity-0 translate-y-8 transition-all duration-700">
                  <h4 className="text-xl md:text-2xl font-heading font-bold">We Build Thoughtful Systems</h4>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We don't automate for the sake of automation. Every system we design is intentional — built to serve
                    people, processes and progress.
                  </p>
                </div>

                <div className="space-y-4 fade-in-scroll opacity-0 translate-y-8 transition-all duration-700">
                  <h4 className="text-xl md:text-2xl font-heading font-bold">AI as a Craft</h4>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We treat automation as craftsmanship. The art lies not in the tools but in how we connect them —
                    precisely, elegantly and sustainably.
                  </p>
                </div>

                <div className="space-y-4 md:col-span-2 fade-in-scroll opacity-0 translate-y-8 transition-all duration-700">
                  <h4 className="text-xl md:text-2xl font-heading font-bold">Learning as Leverage</h4>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We teach as we build. Our systems are built to empower teams, not replace them — creating long-term
                    capability, not dependency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto max-w-7xl px-6">
        <div className="h-px bg-border" />
      </div>

      {/* Core Values Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="space-y-12">
            {/* Title and Intro */}
            <div className="max-w-3xl fade-in-scroll opacity-0 translate-y-8 transition-all duration-700">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">Our Core Values</h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Our values guide how we think, build and collaborate — defining not just what we deliver but how we
                deliver it.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
              {coreValues.map((value, index) => (
                <div
                  key={index}
                  className="space-y-4 fade-in-scroll opacity-0 translate-y-8 transition-all duration-700 group"
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="flex items-baseline gap-4">
                    <span className="text-4xl md:text-5xl font-heading font-black text-primary/30 group-hover:text-primary transition-colors duration-300">
                      {value.number}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-heading font-bold">{value.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">{value.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing Quote */}
      <section className="py-24 px-6 bg-gradient-to-b from-transparent via-graphite/5 to-transparent">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-8 fade-in-scroll opacity-0 translate-y-8 transition-all duration-700">
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold leading-[1.3] text-foreground/90">
              "The noise around AI is loud — full of hype, fear and false promises. But progress doesn't come from
              noise. It comes from systems that think, adapt and last."
            </blockquote>
            <p className="text-lg md:text-xl text-muted-foreground">— Founders, Synergaise</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mission;
