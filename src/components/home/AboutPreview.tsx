import { Link } from "react-router-dom";
import { ArrowRight, Music, Mic2, Sparkles } from "lucide-react";

export const AboutPreview = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-accent/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="flex items-center justify-center gap-4 mb-6">
          <Music className="w-6 h-6 text-accent animate-pulse" />
          <Mic2 className="w-6 h-6 text-primary animate-pulse delay-200" />
          <Sparkles className="w-6 h-6 text-accent animate-pulse delay-400" />
        </div>
        <span className="font-cursive text-2xl text-accent mb-2 block">Our Story</span>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal heading-gradient mb-8">
          About Yaazhi
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
          Yaazhi is a multi-genre Indian fusion collective that reimagines
          tradition through modern musical expression. Rooted in Carnatic music
          and enriched by jazz, rock, Western classical, folk, and film music,
          Yaazhi creates immersive performances that transcend language, genre,
          and expectation.
        </p>
        <Link
          to="/about"
          className="inline-flex items-center gap-2 text-primary font-medium group link-underline text-lg"
        >
          <span>Learn more about our journey</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
        </Link>
      </div>
    </section>
  );
};
