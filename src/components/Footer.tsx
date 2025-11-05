import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-32 relative border-t border-border">
      <div className="absolute inset-0 bg-gradient-to-t from-graphite/20 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Company Name */}
        <div className="mb-12">
          <h3 className="text-6xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight">
            Synergaise LTD.
          </h3>
        </div>

        {/* Footer Links */}
        <div className="text-left text-sm text-muted-foreground space-y-2">
          <p>© Synergaise Ltd 2025</p>
          <div className="flex items-center gap-4">
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
