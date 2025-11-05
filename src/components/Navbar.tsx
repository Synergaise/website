import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-orbital border border-primary flex items-center justify-center">
              <div className="w-6 h-6 rounded-full border-2 border-primary animate-orbital-glow" />
            </div>
            <span className="text-xl font-heading font-bold tracking-tight">Synergaise</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-accent text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm font-accent text-muted-foreground hover:text-foreground transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-sm font-accent text-muted-foreground hover:text-foreground transition-colors"
            >
              Projects
            </button>
            <Link
              to="/mission"
              className="text-sm font-accent text-muted-foreground hover:text-foreground transition-colors"
            >
              Mission & Values
            </Link>
            <Link to="/contact">
              <Button variant="default" size="sm" className="font-heading font-bold uppercase text-xs tracking-wider">
                Contact
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-foreground"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in-up">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-accent text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </Link>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left text-sm font-accent text-muted-foreground hover:text-foreground transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="block w-full text-left text-sm font-accent text-muted-foreground hover:text-foreground transition-colors"
            >
              Projects
            </button>
            <Link
              to="/mission"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-accent text-muted-foreground hover:text-foreground transition-colors"
            >
              Mission & Values
            </Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="default" size="sm" className="w-full font-heading font-bold uppercase text-xs tracking-wider">
                Contact
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
