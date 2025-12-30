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
  <div className="flex-shrink-0 w-[380px] mx-3">
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
        <div className="relative mb-6">
          <div className="flex animate-marquee hover:[animation-play-state:paused]">
            {doubledFirst.map((testimonial, index) => (
              <TestimonialCard key={`row1-${index}`} {...testimonial} />
            ))}
          </div>
        </div>

        {/* Second row - moves right */}
        <div className="relative">
          <div className="flex animate-marquee-reverse hover:[animation-play-state:paused]">
            {doubledSecond.map((testimonial, index) => (
              <TestimonialCard key={`row2-${index}`} {...testimonial} />
            ))}
          </div>
        </div>
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
