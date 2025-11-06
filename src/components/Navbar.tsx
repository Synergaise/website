import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import logoCircle from "@/assets/logo-circle.png";

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  // Scroll-driven fades
  const textOpacity = useTransform(scrollY, [0, 160], [1, 0]);
  const logoOpacity = useTransform(scrollY, [40, 160], [0, 1]);

  // Subtle motion on the logo
  const logoScale = useTransform(scrollY, [0, 160], [0.9, 1.15]);
  const logoRotate = useTransform(scrollY, [0, 160], [0, 10]);

  // Because Motion overwrites CSS transform, use numeric y for vertical centering
  const logoY = -18; // half of h-9 (36px)

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${sectionId}`;
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand stack (text fades out, logo fades in) */}
        <Link to="/" className="relative flex items-center group">
          {/* Reserve space so the stack doesn't collapse while swapping */}
          <div className="relative h-9" style={{ width: 170 }}>
            {/* Brand text */}
            <motion.span
              style={{ opacity: textOpacity }}
              className="absolute left-0 top-1/2 -translate-y-1/2 text-xl font-heading font-bold text-foreground leading-none transition-colors group-hover:text-[#90B5C9]"
            >
              SYNERG<span className="italic pr-[3px]">AI</span>SE
            </motion.span>

            {/* Circle logo (same anchor point, fades in) */}
            <motion.img
              src={logoCircle}
              alt="Synergaise Logo"
              className="absolute left-0 h-9 w-9 z-20 transition-all duration-300 group-hover:brightness-0 group-hover:invert-[0.3] group-hover:sepia group-hover:hue-rotate-[170deg] group-hover:saturate-[3] group-hover:contrast-[1.2]"
              style={{
                top: "50%",
                y: logoY,          // ✅ true vertical centering
                opacity: logoOpacity,
                scale: logoScale,
                rotate: logoRotate,
                transformOrigin: "center center",
              }}
            />
          </div>
        </Link>

        {/* Desktop nav */}
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
          <Link
            to="/mission"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Mission & Values
          </Link>
          <Link to="/contact">
            <Button
              size="sm"
              className="rounded-full font-heading font-bold uppercase text-xs tracking-[0.04em] px-6"
            >
              Contact Us
            </Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-foreground"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
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
