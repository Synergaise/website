import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import logoCircle from "@/assets/logo-circle.png"; // ✅ your logo path

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  // Fade out text and fade in logo on scroll
  const textOpacity = useTransform(scrollY, [0, 120], [1, 0]);
  const logoOpacity = useTransform(scrollY, [0, 120], [0, 1]);
  const logoScale = useTransform(scrollY, [0, 120], [0.8, 1.25]); // slightly larger

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left: Logo animation */}
        <Link to="/" className="flex items-center gap-3">
          {/* Brand name fades out */}
          <motion.span
            style={{ opacity: textOpacity }}
            className="text-xl font-heading font-bold text-foreground transition-all"
          >
            SYNERG<span className="italic pr-[2.5px]">AI</span>SE
          </motion.span>

          {/* Logo fades in and enlarges slightly */}
          <motion.img
            src={logoCircle}
            alt="Synergaise Logo"
            className="h-8 w-8"
            style={{
              opacity: logoOpacity,
              scale: logoScale,
              transformOrigin: "left center",
            }}
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("services")}
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("reviews")}
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Reviews
          </button>
          <Link to="/mission" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Mission & Values
          </Link>
          <Link to="/contact">
            <Button size="sm" className="rounded-full font-heading font-bold uppercase text-xs tracking-[0.04em] px-6">
              Contact Us
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-foreground">
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
              onClick={() => scrollToSection("reviews")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors text-left"
            >
              Reviews
            </button>
            <Link
              to="/mission"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Mission & Values
            </Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
              <Button
                size="sm"
                className="w-full rounded-full font-heading font-bold uppercase text-xs tracking-[0.04em]"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
