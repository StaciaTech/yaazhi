import { Link } from "react-router-dom";
import { Instagram, Youtube, Phone, Mail, Heart } from "lucide-react";
export const Footer = () => {
  return <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 rounded-full bg-background blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 relative z-10 border-amber">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-3xl font-normal mb-4">
              <span className="text-accent">Y</span>aazhi
            </h3>
            <p className="font-cursive text-xl opacity-90 mb-4">
              The Indian Fusion Collective
            </p>
            <p className="text-sm opacity-70 leading-relaxed">
              Chennai-based ensemble blending classical roots with contemporary
              global soundscapes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl font-normal mb-6">Explore</h4>
            <div className="flex flex-col gap-4">
              {["About Us", "Gallery", "News & Press", "Testimonials"].map(link => <Link key={link} to={`/${link.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`} className="text-sm opacity-70 hover:opacity-100 hover:translate-x-2 transition-all duration-300 inline-block">
                  {link}
                </Link>)}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-xl font-normal mb-6">Contact</h4>
            <div className="flex flex-col gap-4">
              <a href="tel:+919840549760" className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-all duration-300 group">
                <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                <span>98405 49760 | 87545 18388</span>
              </a>
              <a href="mailto:yaazhitheband@gmail.com" className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-all duration-300 group">
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                <span>yaazhitheband@gmail.com</span>
              </a>
              <div className="flex items-center gap-4 mt-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/25 hover:scale-110 transition-all duration-300">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/25 hover:scale-110 transition-all duration-300">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-sm opacity-60 flex items-center justify-center gap-1">
            © {new Date().getFullYear()} Yaazhi – The Indian Fusion Collective. Made with 
            <Heart className="w-4 h-4 text-accent fill-accent animate-pulse" /> 
            in Chennai.
          </p>
        </div>
      </div>
    </footer>;
};