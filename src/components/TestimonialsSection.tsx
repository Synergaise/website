const testimonials = [
  {
    quote: "Saved 120+ hours per month",
    author: "Operations Director",
    company: "Intelligent Repairs",
  },
  {
    quote: "95% campaign delivery rate",
    author: "Marketing Lead",
    company: "B2B SaaS Client",
  },
  {
    quote: "Scaled outreach efficiency by 3×",
    author: "Sales Manager",
    company: "Enterprise Services",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-[42px] font-heading font-bold leading-[1.2] tracking-tight">
            Real Results
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Measurable impact for forward-thinking organizations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 bg-gradient-card backdrop-blur-sm border border-border rounded-lg space-y-6"
            >
              <div className="text-3xl text-primary">"</div>
              <blockquote className="text-xl md:text-2xl font-heading font-bold leading-[1.3]">
                {testimonial.quote}
              </blockquote>
              <div className="space-y-1">
                <p className="text-sm font-accent text-foreground">
                  {testimonial.author}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
