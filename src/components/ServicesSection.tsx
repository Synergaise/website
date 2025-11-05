import { Button } from "@/components/ui/button";
import { Brain, Network, GraduationCap, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI Strategy Consulting",
    description: "Align automation with business models. We help you identify the right opportunities and build a roadmap to intelligent transformation.",
  },
  {
    icon: Network,
    title: "Tailored AI Workflows",
    description: "Design, deploy, and integrate scalable systems — automation built precisely around your operations.",
  },
  {
    icon: GraduationCap,
    title: "Education & Enablement",
    description: "Upskill teams to leverage AI confidently. Hands-on training that empowers your people to innovate.",
  },
];

const ServicesSection = () => {
  const scrollToReviews = () => {
    const element = document.getElementById("reviews");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-[42px] font-heading font-bold leading-[1.2] tracking-tight">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            End-to-end AI solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-10 bg-gradient-to-br from-card/50 to-background border border-border/50 rounded-[18px] hover:border-primary/50 transition-all duration-[400ms] hover:scale-[1.03] hover:shadow-[0_6px_40px_rgba(41,121,255,0.25)] animate-fade-in"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              <div className="mb-6">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <service.icon className="w-7 h-7 text-primary transition-transform duration-300 group-hover:scale-110" />
                </div>
              </div>
              <h3 className="text-xl md:text-2xl lg:text-[28px] font-heading font-bold mb-4 leading-[1.3]">
                {service.title}
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            onClick={scrollToReviews}
            variant="outline"
            size="lg"
            className="font-heading font-bold text-sm tracking-wider px-8 py-6 rounded-[10px] border-2 border-primary text-primary hover:bg-primary hover:text-background transition-all duration-300"
          >
            See Client Reviews
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
