import { Quote } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    text: "Yaazhi transformed the event into an experience rather than a performance. Their energy was infectious and the fusion of classical and modern was seamless.",
    author: "Priya Sundaram",
    role: "Corporate Event Manager",
    avatar: "PS",
  },
  {
    text: "A rare balance of tradition and modern energy. The way they reinterpreted our favorite songs was breathtaking.",
    author: "Karthik Rajan",
    role: "Wedding Client",
    avatar: "KR",
  },
  {
    text: "The most memorable musical experience we've had at our festival. Yaazhi truly understands how to connect with diverse audiences.",
    author: "Chennai Arts Foundation",
    role: "Festival Organizer",
    avatar: "CA",
  },
  {
    text: "Absolutely mesmerizing performance! The band's ability to blend genres while maintaining authenticity is remarkable.",
    author: "Deepa Krishnan",
    role: "Restaurant Owner",
    avatar: "DK",
  },
  {
    text: "Their music tells stories that touch your soul. Every note carries emotion and cultural depth.",
    author: "Ramesh Venkataraman",
    role: "Music Enthusiast",
    avatar: "RV",
  },
  {
    text: "From classical ragas to contemporary beats, Yaazhi delivers a spellbinding experience every single time.",
    author: "Meera Subramanian",
    role: "Event Coordinator",
    avatar: "MS",
  },
];

const TestimonialCard = ({
  text,
  author,
  role,
  avatar,
}: {
  text: string;
  author: string;
  role: string;
  avatar: string;
}) => (
  <div className="flex-shrink-0 w-[380px] mx-3 group select-none">
    <div className="rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 h-full bg-gradient-to-br from-amber/20 via-accent/15 to-gold/20 border border-accent/30 shadow-[0_0_30px_hsl(42_90%_50%/0.15)] hover:shadow-[0_0_50px_hsl(42_90%_50%/0.3)]">
      <div className="flex items-start gap-3 mb-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-amber flex items-center justify-center text-background font-semibold text-sm flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-glow">
          {avatar}
        </div>
        <div>
          <h4 className="font-serif text-lg font-medium text-accent">
            {author}
          </h4>
          <p className="text-sm text-foreground/60">{role}</p>
        </div>
      </div>
      <div className="relative">
        <Quote className="w-5 h-5 text-accent/50 absolute -top-1 -left-1" />
        <p className="text-foreground/80 leading-relaxed pl-5 text-sm line-clamp-4">
          {text}
        </p>
      </div>
    </div>
  </div>
);

const DraggableMarqueeRow = ({
  children,
  direction = "left",
  speed = 1,
  className = "",
}: {
  children: React.ReactNode;
  direction?: "left" | "right";
  speed?: number;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (direction === "right" && container.scrollLeft === 0) {
      container.scrollLeft = container.scrollWidth / 2;
    }

    let animationFrameId: number;

    const scroll = () => {
      if (!isPaused && !isDragging.current && container) {
        if (direction === "left") {
          if (container.scrollLeft >= container.scrollWidth / 2) {
            container.scrollLeft = 0;
          } else {
            container.scrollLeft += speed;
          }
        } else {
          // Right direction logic: scrollLeft decreases
          if (container.scrollLeft <= 0) {
            container.scrollLeft = container.scrollWidth / 2;
          } else {
            container.scrollLeft -= speed;
          }
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [direction, speed, isPaused]);

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
    const walk = (x - startX.current) * 2;
    containerRef.current.scrollLeft = scrollLeftStart.current - walk;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
    setIsPaused(false);
  };

  return (
    <div
      className={`relative w-full overflow-x-hidden cursor-grab active:cursor-grabbing ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      ref={containerRef}
    >
      <div className="flex w-max">{children}</div>
    </div>
  );
};

export const TestimonialsMarquee = () => {
  const doubledTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-20 overflow-hidden bg-background">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <div className="text-center">
          <span className="font-cursive text-2xl text-accent mb-2 block">
            Voices That Vouch
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold heading-gradient mb-4">
            What People Say
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Stories from our journey across stages, festivals, and celebrations
          </p>
        </div>
      </div>

      {/* First row - moves left */}
      <DraggableMarqueeRow direction="left" className="mb-6">
        {doubledTestimonials.map((testimonial, index) => (
          <TestimonialCard key={`row1-${index}`} {...testimonial} />
        ))}
      </DraggableMarqueeRow>

      {/* Second row - moves right */}
      <DraggableMarqueeRow direction="right">
        {[...doubledTestimonials].reverse().map((testimonial, index) => (
          <TestimonialCard key={`row2-${index}`} {...testimonial} />
        ))}
      </DraggableMarqueeRow>
    </section>
  );
};
