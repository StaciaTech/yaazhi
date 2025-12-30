import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-concert.jpg";
export const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Yaazhi performing live on stage" className="w-full h-full object-cover scale-105 animate-[scale-in_1.5s_ease-out_forwards]" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/85" />
      </div>

      {/* Animated decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-accent/10 blur-3xl animate-pulse" />
      <div className="absolute bottom-32 right-10 w-40 h-40 rounded-full bg-primary/10 blur-3xl animate-pulse delay-500" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <span className="font-cursive text-3xl md:text-4xl text-accent inline-block mb-4 opacity-0 animate-fade-up" style={{
        animationDelay: "100ms",
        animationFillMode: "forwards"
      }}>
          When Culture Takes a Modern Voice
        </span>
        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-normal tracking-wide mb-6 opacity-0 animate-fade-up" style={{
        animationDelay: "250ms",
        animationFillMode: "forwards"
      }}>
          <span className="text-stone">Y</span>
          <span className="text-accent">aa</span>
          <span className="text-stone">zhi</span>
        </h1>
        <p style={{
        animationDelay: "400ms",
        animationFillMode: "forwards"
      }} className="font-accent italic text-xl md:text-2xl lg:text-3xl mb-4 opacity-0 animate-fade-up text-stone">
          The Indian Fusion Collective
        </p>
        <p style={{
        animationDelay: "550ms",
        animationFillMode: "forwards"
      }} className="text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed opacity-0 animate-fade-up text-stone">
          Chennai-based Indian fusion collective blending classical roots with
          contemporary global soundscapes.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up" style={{
        animationDelay: "700ms",
        animationFillMode: "forwards"
      }}>
          <Link to="/testimonials" className="btn-accent-yaazhi group">
            Enquire Here
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          <Link to="/about" className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 text-sm font-medium hover:bg-background/15 transition-all duration-300 hover:scale-105 text-stone border-amber">
            About Us
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-up" style={{
      animationDelay: "1000ms",
      animationFillMode: "forwards"
    }}>
        <ChevronDown className="w-8 h-8 text-background/60 animate-bounce-subtle" />
      </div>
    </section>;
};