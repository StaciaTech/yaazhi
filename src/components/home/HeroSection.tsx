import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-concert.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Yaazhi performing live on stage"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-semibold text-background mb-6 opacity-0 animate-fade-up"
          style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
        >
          Yaazhi
        </h1>
        <p
          className="font-accent italic text-xl md:text-2xl lg:text-3xl text-background/90 mb-4 opacity-0 animate-fade-up"
          style={{ animationDelay: "400ms", animationFillMode: "forwards" }}
        >
          The Indian Fusion Collective
        </p>
        <p
          className="font-accent text-lg md:text-xl text-background/70 mb-8 opacity-0 animate-fade-up"
          style={{ animationDelay: "500ms", animationFillMode: "forwards" }}
        >
          When Culture Takes a Modern Voice
        </p>
        <p
          className="text-background/80 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-up"
          style={{ animationDelay: "600ms", animationFillMode: "forwards" }}
        >
          Chennai-based Indian fusion collective blending classical roots with
          contemporary global soundscapes.
        </p>
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up"
          style={{ animationDelay: "700ms", animationFillMode: "forwards" }}
        >
          <Link to="/testimonials" className="btn-accent-yaazhi">
            Enquire Here
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-background/30 text-background text-sm font-medium hover:bg-background/10 transition-all duration-300"
          >
            About Us
          </Link>
        </div>
      </div>
    </section>
  );
};
