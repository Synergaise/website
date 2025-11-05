const QuoteSection = () => {
  return (
    <section className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-graphite/20 to-transparent" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <blockquote className="text-2xl md:text-3xl lg:text-[42px] font-heading font-bold leading-[1.2] tracking-tight">
            "The noise around AI has been loud, full of hype, fear, and false promises. But progress doesn't come from noise. It comes from systems that think, adapt, and last. We believe AI isn't here to replace people, but to redefine how they create value, building the foundations for intelligent, enduring growth."
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
