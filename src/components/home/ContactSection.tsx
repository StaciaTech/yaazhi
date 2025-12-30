import { Phone, Mail, Instagram, Youtube, Send, MapPin, Sparkles } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-background">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-accent/5 blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-radial from-accent/3 to-transparent" />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full border border-accent/30 bg-accent/5">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="font-cursive text-lg text-accent">Let's Create Magic</span>
          </div>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-normal heading-gradient mb-4">
            Get in Touch
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-lg">
            Ready to make your event unforgettable? Let's talk.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Left - Contact Info */}
          <div className="space-y-6">
            <div className="golden-glow-card rounded-2xl p-8 group hover:-translate-y-1 transition-all duration-500">
              <h3 className="font-serif text-2xl text-foreground mb-6 flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                Call Us
              </h3>
              <div className="space-y-4">
                <a
                  href="tel:+919840549760"
                  className="flex items-center gap-4 text-lg text-foreground/80 hover:text-accent transition-colors duration-300 group/link"
                >
                  <span className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover/link:bg-accent/20 transition-colors duration-300">
                    <Phone className="w-5 h-5 text-accent" />
                  </span>
                  <span className="font-medium">+91 98405 49760</span>
                </a>
                <a
                  href="tel:+918754518388"
                  className="flex items-center gap-4 text-lg text-foreground/80 hover:text-accent transition-colors duration-300 group/link"
                >
                  <span className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover/link:bg-accent/20 transition-colors duration-300">
                    <Phone className="w-5 h-5 text-accent" />
                  </span>
                  <span className="font-medium">+91 87545 18388</span>
                </a>
              </div>
            </div>

            <div className="golden-glow-card rounded-2xl p-8 group hover:-translate-y-1 transition-all duration-500">
              <h3 className="font-serif text-2xl text-foreground mb-6 flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                Email Us
              </h3>
              <a
                href="mailto:yaazhitheband@gmail.com"
                className="flex items-center gap-4 text-lg text-foreground/80 hover:text-accent transition-colors duration-300 group/link"
              >
                <span className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover/link:bg-accent/20 transition-colors duration-300">
                  <Mail className="w-5 h-5 text-accent" />
                </span>
                <span className="font-medium">yaazhitheband@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Right - Location & Socials */}
          <div className="space-y-6">
            <div className="golden-glow-card rounded-2xl p-8 group hover:-translate-y-1 transition-all duration-500">
              <h3 className="font-serif text-2xl text-foreground mb-6 flex items-center gap-3">
                <MapPin className="w-5 h-5 text-accent" />
                Based In
              </h3>
              <p className="text-foreground/80 text-lg">
                Chennai, Tamil Nadu, India
              </p>
              <p className="text-muted-foreground mt-2 font-cursive text-lg">
                Available for events worldwide
              </p>
            </div>

            <div className="golden-glow-card rounded-2xl p-8 group hover:-translate-y-1 transition-all duration-500">
              <h3 className="font-serif text-2xl text-foreground mb-6">Follow Us</h3>
              <div className="flex items-center gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center hover:bg-accent hover:text-background transition-all duration-500 hover:scale-110 hover:rotate-6 text-accent"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center hover:bg-accent hover:text-background transition-all duration-500 hover:scale-110 hover:-rotate-6 text-accent"
                >
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="font-cursive text-xl text-accent">
            Each experience is curated — not performed generically.
          </p>
        </div>
      </div>
    </section>
  );
};