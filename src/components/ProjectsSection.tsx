import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const testimonials = [
  {
    quote: "I cannot say enough good things about working with Synergaise. I needed complex automations done fast — and they didn't stop until every single detail was perfect. They're incredibly responsive, fully committed, and the level of dedication, talent, and professionalism is next-level. If you get the chance to work with them, do it — a rare find, ten stars if I could give them!",
    author: "Moe",
    role: "Founder",
    company: "Godly Windows"
  },
  {
    quote: "They implemented a whole new process that made everything feel next-gen, not like the 90s. Working with professionals at Synergaise has been a true privilege — top-notch quality yet again.",
    author: "Tushar Srivastava",
    role: "Founder",
    company: "Fetch N Buy"
  },
  {
    quote: "Working with Synergaise was a genuinely strong experience — collaborative throughout and with a great final result. They helped streamline and automate several overlapping manual tasks, making our internal process more efficient and user-friendly. Communication was slick and responsive, and I'd absolutely recommend them — knowledgeable, easy to work with, and strong on delivery.",
    author: "Ryan Prentice",
    role: "Managing Director",
    company: "VanLeasing.com"
  },
  {
    quote: "Before Synergaise's automation, payments from Wix into our accounting software were grouped together, making reconciliation a slow, manual process. Now, every payment comes in clearly attributed to the right member or event, dramatically reducing admin time and eliminating the weekly reconciliation hassle.",
    author: "Jerry Gilpin",
    role: "President",
    company: "The British Association for Psychological Type (BAPT)"
  },
  {
    quote: "Working with Synergaise Ltd has been a genuinely transformative experience for our business. They built a bespoke automation that now checks expiry dates automatically, sends renewal reminders, and even optimises technician travel routes. The results have been outstanding: reduced admin time, increased field efficiency, and improved profitability. I would highly recommend them to any business looking to enhance productivity, reduce overhead, and unlock the power of smart automation.",
    author: "Miles Leslie",
    role: "Managing Director",
    company: "ELC Sales & Lettings"
  }
];

const ProjectsSection = () => {
  const plugin = useRef(
    Autoplay({ delay: 6500, stopOnInteraction: true })
  );

  return (
    <section id="reviews" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-graphite/10 to-transparent" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-[42px] font-heading font-bold leading-[1.2] tracking-tight">
            What People Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by innovators across industries
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="-ml-6">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-6 md:basis-1/2 lg:basis-1/3">
                <div className="p-8 bg-gradient-to-b from-[#111111] to-[#0E0E0E] border border-border rounded-[18px] shadow-lg hover:scale-[1.03] hover:shadow-glow-card transition-all duration-[350ms] ease-out space-y-6 h-full">
                  <div className="text-4xl text-primary leading-none">"</div>
                  <blockquote className="text-base text-foreground leading-relaxed">
                    {testimonial.quote}
                  </blockquote>
                  <div className="space-y-1 pt-4">
                    <p className="text-sm font-accent font-semibold text-foreground">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12" />
          <CarouselNext className="hidden md:flex -right-12" />
        </Carousel>
      </div>
    </section>
  );
};

export default ProjectsSection;
