import { Button } from "@/components/ui/button";
import { Brain, Network, GraduationCap, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI Strategy Consulting",
    description:
      "Align automation with business models. We help you identify the right opportunities and build a roadmap to intelligent transformation.",
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
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="services" className="py-8 sm:py-12 lg:py-16">
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
              className="group p-6 sm:p-8 md:p-10 bg-gradient-to-br from-card/50 to-background border border-border/50 rounded-[18px] hover:border-primary/50 transition-all duration-[400ms] hover:scale-[1.03] hover:shadow-[0_6px_40px_rgba(41,121,255,0.25)] animate-fade-in"
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
              <p className="text-base text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 max-w-4xl mx-auto">
          <p className="text-base md:text-lg leading-relaxed text-foreground">
            At{" "}
            <span className="uppercase">
              SYNER
              <span className="tracking-tight">
                G<span className="italic">AI</span>
                <span className="inline-block ml-0.5">S</span>
              </span>
              <span className="tracking-wider">E</span>
            </span>
            , we build custom-tailored solutions designed around your exact workflows and challenges.
            <br />
            Every system starts with a deep dive into understanding your business so
            <br />
            we can work closely with you and your end users to map how your company truly operates.
            <br />
            Identifying bottlenecks and designing automation that feels natural,
            <br />
            our approach combines clarity, collaboration and precision to ensure each solution
            <br />
            is intuitive, scalable, and genuinely useful from day one.
          </p>

          {/* By the Numbers Section */}
          <div className="mt-16 pt-12 border-t border-border/50">
            <div className="grid grid-cols-2 gap-12 max-w-2xl mx-auto">
              
              {/* Client Satisfaction */}
              <div className="text-center space-y-2 group cursor-default">
                <div className="text-4xl md:text-5xl font-heading font-black text-primary group-hover:scale-110 transition-transform duration-300">
                  5/5
                </div>
                <div className="text-sm md:text-base text-muted-foreground">
                  Client Satisfaction
                </div>
              </div>

              {/* Industries Served */}
              <div className="text-center space-y-2 group cursor-default">
                <div className="text-4xl md:text-5xl font-heading font-black text-primary group-hover:scale-110 transition-transform duration-300">
                  6+
                </div>
                <div className="text-sm md:text-base text-muted-foreground">
                  Industries Served
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
