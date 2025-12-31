import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Camera } from "lucide-react";
import gallery1 from "@/assets/gallery/Karaikudi show .jpg";
import gallery2 from "@/assets/gallery/Karaikudi show (1).jpg";
import gallery3 from "@/assets/gallery/MLA wedding (6).jpg";
import gallery4 from "@/assets/gallery/Mla wedding (1).jpg";
import gallery5 from "@/assets/gallery/Mla wedding (2).jpg";
import gallery6 from "@/assets/gallery/Mla wedding (3).jpg";
import gallery7 from "@/assets/gallery/Mla wedding (4).jpg";
import gallery8 from "@/assets/gallery/Mla wedding (5).jpg";
import gallery9 from "@/assets/gallery/Mla wedding .jpg";
import gallery10 from "@/assets/gallery/Svce(1).jpg";
import gallery11 from "@/assets/gallery/Svce(1.1).jpg";
import gallery12 from "@/assets/gallery/Svce(2).jpg";
import gallery13 from "@/assets/gallery/Svce(2.1).jpg";
import gallery14 from "@/assets/gallery/Svce(3).jpg";
import gallery15 from "@/assets/gallery/Svce.jpg";
import gallery16 from "@/assets/gallery/Svce0.1.jpg";
import heroImage from "@/assets/hero-concert.jpg";

const galleryImages = [
  gallery1,
  gallery2,
  gallery3,
  // gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
  gallery10,
  gallery11,
  gallery12,
  gallery13,
  gallery14,
  gallery15,
  gallery16,
];

export const GalleryPreview = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;

    const scroll = () => {
      if (!isPaused && !isDragging.current && container) {
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        } else {
          container.scrollLeft += 1; // Adjust speed here
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    // Initialize animation
    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    setIsPaused(true);
    startX.current = e.pageX - (containerRef.current?.offsetLeft || 0);
    scrollLeftStart.current = containerRef.current?.scrollLeft || 0;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - (containerRef.current.offsetLeft || 0);
    const walk = (x - startX.current) * 2; // Drag speed multiplier
    containerRef.current.scrollLeft = scrollLeftStart.current - walk;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    // Keep paused if hovering, otherwise MouseLeave will handle resume?
    // User requirement: "on hover this carousel should pause"
    // So if mouse is up but still inside, it should be paused.
    // If mouse is up and OUTSIDE (handled by leave), resume.
    // But Drag release inside: still paused.
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
    setIsPaused(false);
  };

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
      <div
        className="relative w-full overflow-x-hidden cursor-grab active:cursor-grabbing"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        ref={containerRef}
      >
        <div className="flex gap-6 w-max pr-6">
          {[...galleryImages, ...galleryImages].map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-72 h-48 md:w-96 md:h-64 rounded-2xl overflow-hidden shadow-card group hover:shadow-glow transition-all duration-500 select-none"
            >
              <img
                src={image}
                alt={`Gallery image ${(index % galleryImages.length) + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 pointer-events-none"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
