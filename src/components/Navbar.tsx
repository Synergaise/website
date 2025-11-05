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
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-auto">
      <div className="backdrop-blur-md bg-graphite/30 border border-border/50 rounded-full px-6 py-3 shadow-lg">
        <div className="flex items-center justify-between md:justify-start gap-4">

          {/* Centered Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center gap-8 mx-8">
            <Link
              to="/"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Projects
            </button>
            <Link
              to="/mission"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Mission & Values
            </Link>
          </div>

          {/* Contact Button */}
          <div className="hidden md:block shrink-0">
            <a href="https://cal.com/jude-hill-a6kiig/discovery" target="_blank" rel="noopener noreferrer">
              <Button
                size="sm"
                className="rounded-full font-heading font-bold uppercase text-xs tracking-[0.04em] px-6"
              >
                Schedule a Call
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-foreground ml-auto"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-border/50">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Home
              </Link>
              <button
                onClick={() => scrollToSection("services")}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors text-left"
              >
                Projects
              </button>
              <Link
                to="/mission"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Mission & Values
              </Link>
              <a href="https://cal.com/jude-hill-a6kiig/discovery" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>
                <Button
                  size="sm"
                  className="w-full rounded-full font-heading font-bold uppercase text-xs tracking-[0.04em]"
                >
                  Schedule a Call
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
