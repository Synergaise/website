const QuoteSection = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-graphite/20 to-transparent" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <blockquote className="text-2xl md:text-3xl lg:text-[42px] font-heading font-bold leading-[1.2] tracking-tight">
            "We hear you, the noise around AI is loud but real progress comes quietly.
            <br />
            <br />
            We use systems that think, adapt and last, redefining how we create value."
          </blockquote>
          <div className="flex items-center justify-center gap-3 pt-2">
            <p className="text-lg md:text-xl text-muted-foreground">- Founders,</p>
            <p className="text-lg md:text-xl text-foreground uppercase">
              SYNER
              <span className="tracking-tight">
                G<span className="italic">AI</span>
                <span className="inline-block ml-0.5">S</span>
              </span>
              <span className="tracking-wider">E</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
