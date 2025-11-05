import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-32 relative border-t border-border">
      <div className="absolute inset-0 bg-gradient-to-t from-graphite/20 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* CTA Section */}
        <div className="text-center mb-20 space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-[42px] font-heading font-bold leading-[1.2] tracking-tight max-w-3xl mx-auto">
            Let AI do the work so you can scale faster.
          </h2>
          <Link to="/contact">
            <Button
              size="lg"
              className="font-heading font-bold uppercase text-sm tracking-wider px-8"
            >
              Let's Partner Up
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Company Name */}
        <div className="text-center mb-12">
          <h3 className="text-5xl md:text-6xl font-heading font-bold tracking-tight">
            Synergaise LTD.
          </h3>
        </div>

        {/* Footer Links */}
        <div className="text-center text-sm text-muted-foreground space-y-2">
          <p>© Synergaise Ltd 2025</p>
          <div className="flex items-center justify-center gap-4">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <span>·</span>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
