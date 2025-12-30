import { Link } from "react-router-dom";
import { ArrowRight, Camera } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery/gall-1.jpg";
import heroImage from "@/assets/hero-concert.jpg";

const galleryImages = [
  gallery1,
  gallery2,
  heroImage,
  gallery1,
  gallery2,
  heroImage,
];

export const GalleryPreview = () => {
  return (
    <section className="py-16 md:py-24 overflow-hidden bg-black">
      {/* Header - contained */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Camera className="w-5 h-5 text-accent" />
              <span className="font-cursive text-2xl text-accent">
                Sound Made Visible
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal heading-gradient mb-4">
              Gallery
            </h2>
            <p className="text-muted-foreground max-w-lg">
              Moments captured from our performances and journey
            </p>
          </div>
          <Link
            to="/gallery"
            onClick={() => window.scrollTo(0, 0)}
            className="inline-flex items-center gap-2 text-primary font-medium group mt-4 md:mt-0 link-underline"
          >
            <span>View full gallery</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>
      </div>

      {/* Auto-scrolling carousel - full width edge to edge */}
      <div className="relative overflow-hidden w-full">
        <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused]">
          {[...galleryImages, ...galleryImages].map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-72 h-48 md:w-96 md:h-64 rounded-2xl overflow-hidden shadow-card group cursor-pointer hover:shadow-glow transition-all duration-500"
            >
              <img
                src={image}
                alt={`Gallery image ${(index % galleryImages.length) + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
