const QuoteSection = () => {
  return (
    <section className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-graphite/20 to-transparent" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <blockquote className="text-2xl md:text-3xl lg:text-[42px] font-heading font-bold leading-[1.2] tracking-tight">
            "We build systems that think for you — so you can focus on growth."
          </blockquote>
          <p className="text-lg text-muted-foreground font-accent">
            — Founders, Synergaise
          </p>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
