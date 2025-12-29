import { Phone, Mail, Instagram, Youtube } from "lucide-react";

export const ContactSection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-semibold heading-gradient mb-4">
          Get in Touch
        </h2>
        <p className="text-muted-foreground mb-12 max-w-lg mx-auto">
          Ready to make your event unforgettable? Let's talk.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
          <a
            href="tel:+919840549760"
            className="flex items-center gap-3 text-lg hover:text-primary transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <span>98405 49760</span>
          </a>
          <a
            href="tel:+918754518388"
            className="flex items-center gap-3 text-lg hover:text-primary transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <span>87545 18388</span>
          </a>
        </div>

        <a
          href="mailto:yaazhitheband@gmail.com"
          className="inline-flex items-center gap-3 text-lg hover:text-primary transition-colors mb-12"
        >
          <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
            <Mail className="w-5 h-5 text-primary" />
          </div>
          <span>yaazhitheband@gmail.com</span>
        </a>

        <div className="flex items-center justify-center gap-6">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <Youtube className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};
