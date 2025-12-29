import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const AboutPreview = () => {
  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-semibold heading-gradient mb-8">
          About Yaazhi
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
          Yaazhi is a multi-genre Indian fusion collective that reimagines
          tradition through modern musical expression. Rooted in Carnatic music
          and enriched by jazz, rock, Western classical, folk, and film music,
          Yaazhi creates immersive performances that transcend language, genre,
          and expectation.
        </p>
        <Link
          to="/about"
          className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all duration-300"
        >
          Learn more about our journey
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};
