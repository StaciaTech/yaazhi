import { Phone, Mail, Instagram, Youtube, Send, MapPin } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact-section" className="section-padding relative overflow-hidden bg-background">
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Send className="w-5 h-5 text-accent animate-pulse" />
            <span className="font-cursive text-2xl text-accent">Let's Create Magic</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal heading-gradient mb-4">
            Get in Touch
          </h2>
          <p className="text-muted-foreground mb-4 max-w-lg mx-auto">
            Ready to make your event unforgettable? Let's talk.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="p-8 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm hover:border-accent/30 transition-all duration-500">
              <h3 className="font-serif text-2xl text-accent mb-6">Contact Details</h3>
              <div className="space-y-6">
                <a
                  href="tel:+919840549760"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <Phone className="w-5 h-5 text-accent group-hover:text-background transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-foreground/60 text-sm">Phone</p>
                    <span className="text-foreground font-medium group-hover:text-accent transition-colors">98405 49760</span>
                  </div>
                </a>

                <a
                  href="tel:+918754518388"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <Phone className="w-5 h-5 text-accent group-hover:text-background transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-foreground/60 text-sm">Alternate</p>
                    <span className="text-foreground font-medium group-hover:text-accent transition-colors">87545 18388</span>
                  </div>
                </a>

                <a
                  href="mailto:yaazhitheband@gmail.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <Mail className="w-5 h-5 text-accent group-hover:text-background transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-foreground/60 text-sm">Email</p>
                    <span className="text-foreground font-medium group-hover:text-accent transition-colors">yaazhitheband@gmail.com</span>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-foreground/60 text-sm">Location</p>
                    <span className="text-foreground font-medium">Chennai, India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social & CTA */}
          <div className="space-y-8">
            <div className="p-8 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm hover:border-accent/30 transition-all duration-500">
              <h3 className="font-serif text-2xl text-accent mb-6">Follow Us</h3>
              <p className="text-foreground/60 mb-6">Stay connected for updates, behind-the-scenes, and more.</p>
              
              <div className="flex items-center gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center hover:from-accent hover:to-primary text-foreground hover:text-background transition-all duration-500 hover:scale-110 hover:rotate-6 shadow-lg hover:shadow-glow"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center hover:from-accent hover:to-primary text-foreground hover:text-background transition-all duration-500 hover:scale-110 hover:-rotate-6 shadow-lg hover:shadow-glow"
                >
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-accent/10 via-card/50 to-primary/10 border border-accent/20 backdrop-blur-sm hover:shadow-glow transition-all duration-500">
              <h3 className="font-serif text-2xl text-accent mb-4">Book Your Event</h3>
              <p className="text-foreground/60 mb-6">
                From intimate gatherings to grand celebrations, we curate musical experiences that resonate.
              </p>
              <a
                href="mailto:yaazhitheband@gmail.com"
                className="btn-accent-yaazhi w-full justify-center"
              >
                Send Enquiry
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
