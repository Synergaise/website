const testimonials = [
  {
    quote: "Saved 120+ hours per month",
    author: "Operations Director",
    company: "Intelligent Repairs",
  },
  {
    quote: "98% campaign delivery rate",
    author: "Founder",
    company: "Social Media Marketing Agency",
  },
  {
    quote: "Automated 400+ deal assessments across systems",
    author: "Managing Director",
    company: "Automotive Finance",
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
              className="p-8 rounded-lg space-y-6 shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.12)] transition-all duration-300"
              style={{ backgroundColor: "#90B5C9" }}
            >
              <div className="text-3xl text-white">"</div>
              <blockquote className="text-xl md:text-2xl font-heading font-bold leading-[1.3] text-white">
                {testimonial.quote}
              </blockquote>
              <div className="space-y-1">
                <p className="text-sm font-accent text-white">{testimonial.author}</p>
                <p className="text-sm text-white/80">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
