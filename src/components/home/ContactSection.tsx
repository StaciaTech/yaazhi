import { Phone, Mail, Instagram, Youtube, Send } from "lucide-react";

export const ContactSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Send className="w-5 h-5 text-accent" />
          <span className="font-cursive text-2xl text-accent">Let's Create Magic</span>
        </div>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal heading-gradient mb-4">
          Get in Touch
        </h2>
        <p className="text-muted-foreground mb-12 max-w-lg mx-auto">
          Ready to make your event unforgettable? Let's talk.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
          <a
            href="tel:+919840549760"
            className="flex items-center gap-3 text-lg hover:text-primary transition-all duration-300 group"
          >
            <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300 shadow-soft">
              <Phone className="w-5 h-5 text-primary group-hover:text-accent-foreground transition-colors duration-300" />
            </div>
            <span className="font-medium">98405 49760</span>
          </a>
          <a
            href="tel:+918754518388"
            className="flex items-center gap-3 text-lg hover:text-primary transition-all duration-300 group"
          >
            <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300 shadow-soft">
              <Phone className="w-5 h-5 text-primary group-hover:text-accent-foreground transition-colors duration-300" />
            </div>
            <span className="font-medium">87545 18388</span>
          </a>
        </div>

        <a
          href="mailto:yaazhitheband@gmail.com"
          className="inline-flex items-center gap-3 text-lg hover:text-primary transition-all duration-300 mb-12 group"
        >
          <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300 shadow-soft">
            <Mail className="w-5 h-5 text-primary group-hover:text-accent-foreground transition-colors duration-300" />
          </div>
          <span className="font-medium">yaazhitheband@gmail.com</span>
        </a>

        <div className="flex items-center justify-center gap-6">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center hover:bg-gradient-to-br hover:from-primary hover:to-accent hover:text-primary-foreground transition-all duration-500 hover:scale-110 hover:rotate-6 shadow-soft hover:shadow-glow"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center hover:bg-gradient-to-br hover:from-primary hover:to-accent hover:text-primary-foreground transition-all duration-500 hover:scale-110 hover:-rotate-6 shadow-soft hover:shadow-glow"
          >
            <Youtube className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};
