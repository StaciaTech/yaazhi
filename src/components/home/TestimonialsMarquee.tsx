import { Quote } from "lucide-react";
const testimonials = [{
  text: "Yaazhi transformed the event into an experience rather than a performance. Their energy was infectious and the fusion of classical and modern was seamless.",
  author: "Priya Sundaram",
  role: "Corporate Event Manager",
  avatar: "PS"
}, {
  text: "A rare balance of tradition and modern energy. The way they reinterpreted our favorite songs was breathtaking.",
  author: "Karthik Rajan",
  role: "Wedding Client",
  avatar: "KR"
}, {
  text: "The most memorable musical experience we've had at our festival. Yaazhi truly understands how to connect with diverse audiences.",
  author: "Chennai Arts Foundation",
  role: "Festival Organizer",
  avatar: "CA"
}, {
  text: "Absolutely mesmerizing performance! The band's ability to blend genres while maintaining authenticity is remarkable.",
  author: "Deepa Krishnan",
  role: "Restaurant Owner",
  avatar: "DK"
}, {
  text: "Their music tells stories that touch your soul. Every note carries emotion and cultural depth.",
  author: "Ramesh Venkataraman",
  role: "Music Enthusiast",
  avatar: "RV"
}, {
  text: "From classical ragas to contemporary beats, Yaazhi delivers a spellbinding experience every single time.",
  author: "Meera Subramanian",
  role: "Event Coordinator",
  avatar: "MS"
}];
const TestimonialCard = ({
  text,
  author,
  role,
  avatar
}: {
  text: string;
  author: string;
  role: string;
  avatar: string;
}) => <div className="flex-shrink-0 w-[380px] mx-3 group">
    <div className="golden-glow-card rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 h-full animate-golden-pulse">
      <div className="flex items-start gap-3 mb-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-gold flex items-center justify-center text-background font-semibold text-sm flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
          {avatar}
        </div>
        <div>
          <h4 className="font-serif text-lg font-medium text-accent">{author}</h4>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
      <div className="relative">
        <Quote className="w-5 h-5 text-accent/60 absolute -top-1 -left-1" />
        <p className="text-foreground/80 leading-relaxed pl-5 text-sm line-clamp-4">
          {text}
        </p>
      </div>
    </div>
  </div>;
export const TestimonialsMarquee = () => {
  // Double the testimonials for seamless loop
  const doubledTestimonials = [...testimonials, ...testimonials];
  return <section className="py-20 overflow-hidden bg-black">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <div className="text-center">
          <span className="font-cursive text-2xl text-accent mb-2 block">Voices That Vouch</span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold heading-gradient mb-4">
            What People Say
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Stories from our journey across stages, festivals, and celebrations
          </p>
        </div>
      </div>

      {/* First row - moves left */}
      <div className="relative mb-6">
        <div className="flex animate-marquee hover:[animation-play-state:paused]">
          {doubledTestimonials.map((testimonial, index) => <TestimonialCard key={`row1-${index}`} {...testimonial} />)}
        </div>
      </div>

      {/* Second row - moves right */}
      <div className="relative">
        <div className="flex animate-marquee-reverse hover:[animation-play-state:paused]">
          {doubledTestimonials.reverse().map((testimonial, index) => <TestimonialCard key={`row2-${index}`} {...testimonial} />)}
        </div>
      </div>
    </section>;
};