import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Star, Trophy, Heart } from "lucide-react";
import logo from "@/assets/scoreazy-logo.png";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Courses", href: "#courses" },
  { name: "Contact", href: "#contact" }
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-header shadow-soft border-b border-card-border' 
            : 'bg-white/20 backdrop-blur-header'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex items-center gap-3 scale-hover cursor-pointer" onClick={() => scrollToSection('#home')}>
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-lg p-2 shadow-soft">
                <img src={logo} alt="Scoreazy Logo" className="w-full h-full object-contain" />
              </div>
              <div className="font-display font-bold text-xl md:text-2xl text-foreground">
                Score<span className="text-confidence-blue">azy</span>
              </div>
              <div className="hidden md:flex">
                <Star className="w-5 h-5 text-success-orange animate-sparkle" />
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`font-medium transition-colors hover:text-confidence-blue relative group ${
                    isScrolled ? 'text-foreground' : 'text-white'
                  } scroll-reveal stagger-${index + 1}`}
                >
                  {item.name}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-confidence-blue transition-all duration-300 group-hover:w-full"></div>
                </button>
              ))}
            </nav>

            {/* Get Started Button */}
            <div className="hidden md:block">
              <Button 
                variant="hero" 
                size="lg"
                className="group pulse-glow"
                onClick={() => scrollToSection('#enrollment')}
              >
                <Trophy className="w-4 h-4 group-hover:animate-bounce-gentle" />
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className={`md:hidden ${isScrolled ? 'text-foreground' : 'text-white'} hover:bg-white/20`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-header border-t border-card-border animate-slide-up">
            <nav className="container mx-auto px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left font-medium text-foreground hover:text-confidence-blue transition-colors scroll-reveal stagger-${index + 1}`}
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 border-t border-card-border">
                <Button 
                  variant="hero" 
                  size="lg"
                  className="w-full group"
                  onClick={() => scrollToSection('#enrollment')}
                >
                  <Trophy className="w-4 h-4 group-hover:animate-bounce-gentle" />
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Floating decorative elements */}
      <div className="fixed top-20 left-4 z-40 pointer-events-none">
        <div className="w-8 h-8 bg-success-orange/20 rounded-full float-slow"></div>
      </div>
      <div className="fixed top-32 right-8 z-40 pointer-events-none">
        <div className="w-6 h-6 bg-confidence-blue/20 rounded-full float-fast"></div>
      </div>
      <div className="fixed top-40 left-1/4 z-40 pointer-events-none">
        <div className="w-4 h-4 bg-growth-green/20 rounded-full float-animation"></div>
      </div>
    </>
  );
};