import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Gallery", path: "/gallery" },
  { name: "News", path: "/news" },
  { name: "Testimonials", path: "/testimonials" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? "bg-background/98 backdrop-blur-md shadow-soft border-b border-border" 
        : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <span className={`font-serif text-3xl font-normal transition-all duration-300 ${
              isScrolled ? "heading-gradient" : "text-background"
            }`}>
              <span className="group-hover:text-accent transition-colors duration-300">Y</span>aazhi
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-all duration-300 link-underline ${
                  location.pathname === link.path
                    ? isScrolled ? "text-primary" : "text-accent"
                    : isScrolled ? "text-muted-foreground hover:text-primary" : "text-background/80 hover:text-background"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:+919840549760"
              className={`flex items-center gap-2 text-sm transition-all duration-300 hover:scale-105 ${
                isScrolled ? "text-muted-foreground hover:text-primary" : "text-background/80 hover:text-background"
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>98405 49760</span>
            </a>
            <Link to="/testimonials" className="btn-accent-yaazhi text-sm">
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 transition-colors duration-300 ${
              isScrolled ? "text-foreground" : "text-background"
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-border/50 animate-fade-in bg-background/98 backdrop-blur-md rounded-b-2xl">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-medium transition-colors duration-300 ${
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-border flex flex-col gap-3">
                <a
                  href="tel:+919840549760"
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <Phone className="w-4 h-4" />
                  <span>98405 49760</span>
                </a>
                <a
                  href="mailto:yaazhitheband@gmail.com"
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <Mail className="w-4 h-4" />
                  <span>yaazhitheband@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
