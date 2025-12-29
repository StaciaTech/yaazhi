import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

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
];

export const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-4">
            What People Say
          </h2>
          <p className="opacity-70">Voices from our journey</p>
        </div>

        <div className="relative">
          <div className="text-center px-8 md:px-16">
            <Quote className="w-12 h-12 mx-auto mb-8 opacity-30" />
            <p className="font-accent text-xl md:text-2xl lg:text-3xl italic leading-relaxed mb-8 min-h-[150px] transition-opacity duration-500">
              "{testimonials[currentIndex].text}"
            </p>
            <div>
              <p className="font-serif text-lg font-medium">
                {testimonials[currentIndex].author}
              </p>
              <p className="text-sm opacity-70">
                {testimonials[currentIndex].role}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={goToPrevious}
              className="p-3 rounded-full border border-primary-foreground/30 hover:bg-primary-foreground/10 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-primary-foreground"
                      : "bg-primary-foreground/30"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={goToNext}
              className="p-3 rounded-full border border-primary-foreground/30 hover:bg-primary-foreground/10 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
