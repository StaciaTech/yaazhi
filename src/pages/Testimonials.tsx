import { Layout } from "@/components/layout/Layout";
import { Quote, Phone, Mail, Instagram, Youtube, ArrowRight } from "lucide-react";
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
];

const Testimonials = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding pt-32 text-center">
        <h1 className="font-serif text-5xl md:text-7xl font-semibold heading-gradient mb-4">
          Testimonials
        </h1>
        <p className="font-accent italic text-xl md:text-2xl text-muted-foreground">
          Voices That Vouch
        </p>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding pt-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold heading-gradient mb-12 text-center">
            Client Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="card-yaazhi p-8 opacity-0 animate-fade-up"
                style={{
                  animationDelay: `${(index + 1) * 80}ms`,
                  animationFillMode: "forwards",
                }}
              >
                <Quote className="w-8 h-8 text-accent/50 mb-4" />
                <p className="text-foreground leading-relaxed mb-6 font-accent italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-serif font-medium text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-5xl font-semibold mb-4">
            Let Yaazhi Soundtrack Your Next Event
          </h2>
          <p className="text-lg opacity-80 mb-12 max-w-2xl mx-auto">
            From intimate gatherings to grand celebrations, we curate musical
            experiences that resonate.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
            <a
              href="tel:+919840549760"
              className="flex items-center gap-3 text-lg hover:opacity-80 transition-opacity"
            >
              <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <span>98405 49760</span>
            </a>
            <a
              href="tel:+918754518388"
              className="flex items-center gap-3 text-lg hover:opacity-80 transition-opacity"
            >
              <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <span>87545 18388</span>
            </a>
          </div>

          <a
            href="mailto:yaazhitheband@gmail.com"
            className="inline-flex items-center gap-3 text-lg hover:opacity-80 transition-opacity mb-12"
          >
            <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>
            <span>yaazhitheband@gmail.com</span>
          </a>

          <div className="flex items-center justify-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
            >
              <Youtube className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;
