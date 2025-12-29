import { Link } from "react-router-dom";
import { Instagram, Youtube, Phone, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-semibold mb-4">Yaazhi</h3>
            <p className="font-accent italic text-lg opacity-80 mb-4">
              The Indian Fusion Collective
            </p>
            <p className="text-sm opacity-70 leading-relaxed">
              Chennai-based ensemble blending classical roots with contemporary
              global soundscapes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-4">Explore</h4>
            <div className="flex flex-col gap-3">
              <Link
                to="/about"
                className="text-sm opacity-70 hover:opacity-100 transition-opacity"
              >
                About Us
              </Link>
              <Link
                to="/gallery"
                className="text-sm opacity-70 hover:opacity-100 transition-opacity"
              >
                Gallery
              </Link>
              <Link
                to="/news"
                className="text-sm opacity-70 hover:opacity-100 transition-opacity"
              >
                News & Press
              </Link>
              <Link
                to="/testimonials"
                className="text-sm opacity-70 hover:opacity-100 transition-opacity"
              >
                Testimonials
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-4">Contact</h4>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+919840549760"
                className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity"
              >
                <Phone className="w-4 h-4" />
                <span>98405 49760 | 87545 18388</span>
              </a>
              <a
                href="mailto:yaazhitheband@gmail.com"
                className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity"
              >
                <Mail className="w-4 h-4" />
                <span>yaazhitheband@gmail.com</span>
              </a>
              <div className="flex items-center gap-4 mt-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-sm opacity-60">
            © {new Date().getFullYear()} Yaazhi – The Indian Fusion Collective.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
