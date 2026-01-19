import { ContactSection } from "@/components/home/ContactSection";
import { Layout } from "@/components/layout/Layout";
import {
  Quote,
  Phone,
  Mail,
  Instagram,
  Youtube,
  ArrowRight,
  Send,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    text: "Yaazhi transformed the event into an experience rather than a performance. Their energy was infectious and the fusion of classical and modern was seamless.",
    author: "Priya Sundaram",
    role: "Corporate Event Manager",
  },
  {
    text: "A rare balance of tradition and modern energy. The way they reinterpreted our favorite songs was breathtaking.",
    author: "Karthik Rajan",
    role: "Wedding Client",
  },
  {
    text: "The most memorable musical experience we've had at our festival. Yaazhi truly understands how to connect with diverse audiences.",
    author: "Chennai Arts Foundation",
    role: "Festival Organizer",
  },
  {
    text: "Absolutely mesmerizing performance! The band's ability to blend genres while maintaining authenticity is remarkable.",
    author: "Deepa Krishnan",
    role: "Restaurant Owner",
  },
  {
    text: "From traditional Carnatic pieces to rock adaptations, Yaazhi delivered a show that had everyone on their feet.",
    author: "Suresh Menon",
    role: "Private Event Host",
  },
  {
    text: "Professional, talented, and truly passionate about their craft. Highly recommended for any premium event.",
    author: "Lakshmi Venkatesh",
    role: "Wedding Planner",
  },
  {
    text: "Their music tells stories that touch your soul. Every note carries emotion and cultural depth.",
    author: "Ramesh Venkataraman",
    role: "Music Enthusiast",
  },
  {
    text: "From classical ragas to contemporary beats, Yaazhi delivers a spellbinding experience every single time.",
    author: "Meera Subramanian",
    role: "Event Coordinator",
  },
];

const firstRow = testimonials.slice(0, 4);
const secondRow = testimonials.slice(4);

const TestimonialCard = ({
  text,
  author,
  role,
}: {
  text: string;
  author: string;
  role: string;
}) => (
  <div className="flex-shrink-0 w-[380px] mx-3 select-none">
    <div className="rounded-2xl p-6 h-full bg-gradient-to-br from-amber/20 via-accent/15 to-gold/20 border border-accent/30 shadow-[0_0_30px_hsl(42_90%_50%/0.15)] hover:shadow-[0_0_50px_hsl(42_90%_50%/0.3)] transition-all duration-500">
      <Quote className="w-8 h-8 text-accent/50 mb-4" />
      <p className="text-foreground/80 leading-relaxed mb-6 font-accent italic">
        "{text}"
      </p>
      <div>
        <p className="font-serif font-medium text-accent">{author}</p>
        <p className="text-sm text-foreground/60">{role}</p>
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

const Testimonials = () => {
  const doubledFirst = [...firstRow, ...firstRow];
  const doubledSecond = [...secondRow, ...secondRow];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding pt-32 text-center bg-background">
        <h1 className="font-serif text-5xl md:text-7xl font-semibold heading-gradient mb-4">
          Testimonials
        </h1>
        <p className="font-accent italic text-xl md:text-2xl text-muted-foreground">
          Voices That Vouch
        </p>
      </section>

      {/* Animated Testimonials */}
      <section className="py-16 overflow-hidden bg-background">
        <div className="max-w-6xl mx-auto px-6 mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold heading-gradient mb-4 text-center">
            Client Testimonials
          </h2>
          <p className="text-center text-muted-foreground max-w-lg mx-auto">
            From corporates, festivals, weddings, and cultural platforms
          </p>
        </div>

        {/* First row - moves left */}
        <DraggableMarqueeRow direction="left" className="mb-6">
          {doubledFirst.map((testimonial, index) => (
            <TestimonialCard key={`row1-${index}`} {...testimonial} />
          ))}
        </DraggableMarqueeRow>

        {/* Second row - moves right */}
        <DraggableMarqueeRow direction="right">
          {doubledSecond.map((testimonial, index) => (
            <TestimonialCard key={`row2-${index}`} {...testimonial} />
          ))}
        </DraggableMarqueeRow>
      </section>

      {/* CTA Section */}
      {/* <section className="section-padding bg-gradient-to-br from-accent/10 via-card to-primary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-5xl font-semibold heading-gradient mb-4">
            Let Yaazhi Soundtrack Your Next Event
          </h2>
          <p className="text-lg text-foreground/60 mb-12 max-w-2xl mx-auto">
            From intimate gatherings to grand celebrations, we curate musical
            experiences that resonate.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
            <a
              href="tel:+919840549760"
              className="flex items-center gap-3 text-lg group"
            >
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <Phone className="w-5 h-5 text-accent group-hover:text-background" />
              </div>
              <span className="text-foreground group-hover:text-accent transition-colors">
                98405 49760
              </span>
            </a>
            <a
              href="tel:+918754518388"
              className="flex items-center gap-3 text-lg group"
            >
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <Phone className="w-5 h-5 text-accent group-hover:text-background" />
              </div>
              <span className="text-foreground group-hover:text-accent transition-colors">
                87545 18388
              </span>
            </a>
          </div>

          <a
            href="mailto:yaazhitheband@gmail.com"
            className="inline-flex items-center gap-3 text-lg mb-12 group"
          >
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
              <Mail className="w-5 h-5 text-accent group-hover:text-background" />
            </div>
            <span className="text-foreground group-hover:text-accent transition-colors">
              yaazhitheband@gmail.com
            </span>
          </a>

          <div className="flex items-center justify-center gap-6 mb-12">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center hover:bg-accent text-foreground hover:text-background transition-all duration-300 hover:scale-110"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center hover:bg-accent text-foreground hover:text-background transition-all duration-300 hover:scale-110"
            >
              <Youtube className="w-6 h-6" />
            </a>
          </div>

          <a
            href="mailto:yaazhitheband@gmail.com"
            className="btn-accent-yaazhi"
          >
            Send Enquiry
            <Send className="w-4 h-4" />
          </a>
        </div>
      </section> */}
      <ContactSection />
    </Layout>
  );
};

export default Testimonials;
