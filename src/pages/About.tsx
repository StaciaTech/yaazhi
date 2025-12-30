import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import heroImage from "@/assets/hero-concert.jpg";
import serviceLiveConcert from "@/assets/service-live-concert.jpg";
import serviceWedding from "@/assets/service-wedding.jpg";
import serviceCorporate from "@/assets/service-corporate.jpg";
import serviceFestival from "@/assets/service-festival.jpg";
import serviceLounge from "@/assets/service-lounge.jpg";

const teamMembers = [
  {
    name: "Kiran Kashyap",
    role: "Founder | Artistic Director | Multi-Instrumentalist",
    image: team3
  },
  {
    name: "C. S. Lakshmi",
    role: "Co-Founder | Executive Producer | Lead Vocalist",
    image: team1
  },
  {
    name: "Harinee Muraleedharan",
    role: "Vocalist | Executive Management – COAR",
    image: team2
  },
  {
    name: "Balasubramaniyam",
    role: "Keyboardist | Supporting Vocalist | Creative Director",
    image: team3
  }
];

const services = [
  {
    title: "Live Concert Performances",
    image: serviceLiveConcert
  },
  {
    title: "Wedding Receptions & Muhurtham",
    image: serviceWedding
  },
  {
    title: "Corporate Shows & Workshops",
    image: serviceCorporate
  },
  {
    title: "Festivals & Cultural Events",
    image: serviceFestival
  },
  {
    title: "Restaurant & Lounge",
    image: serviceLounge
  }
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Yaazhi performing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl font-semibold mb-4 heading-gradient">
            About Yaazhi
          </h1>
          <p className="font-cursive text-xl md:text-2xl text-accent">
            Where culture finds a modern voice
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold heading-gradient mb-8">
            About the Band
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Yaazhi is a Chennai-based, multi-genre, multilingual ensemble that
              blends Indian classical traditions with global contemporary music
              forms. Drawing from Carnatic music, Western classical, jazz, rock,
              Indian film music, and folk influences, Yaazhi creates a sound
              that is rooted, fluid, and progressive.
            </p>
            <p>
              Conceived as a collective rather than a conventional band, Yaazhi
              thrives on collaboration, narrative-driven compositions, and
              immersive live performances. Their music focuses on emotional
              resonance, musical integrity, and cultural dialogue.
            </p>
          </div>
        </div>
      </section>

      {/* Origin */}
      <section className="section-padding bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold heading-gradient mb-8">
            Origin
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Born from a shared desire to explore beyond musical boundaries,
            Yaazhi emerged as a space where tradition could evolve without
            losing its soul. The collective's journey has been shaped by
            experimentation, storytelling, and a deep respect for both heritage
            and innovation.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-cursive text-2xl text-accent mb-2 block">
              What We Offer
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold heading-gradient mb-4">
              Our Services
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group relative aspect-[3/4] rounded-2xl overflow-hidden border border-border/30 cursor-pointer opacity-0 animate-fade-up"
                style={{
                  animationDelay: `${(index + 1) * 100}ms`,
                  animationFillMode: "forwards"
                }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                {/* Default gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                
                {/* Hover overlay that slides up */}
                <div className="absolute inset-0 bg-background/90 backdrop-blur-sm translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out flex items-center justify-center p-4">
                  <p className="text-foreground font-serif text-center text-lg">
                    {service.title}
                  </p>
                </div>
                
                {/* Title at bottom (visible by default) */}
                <div className="absolute bottom-0 left-0 right-0 p-4 group-hover:opacity-0 transition-opacity duration-300">
                  <p className="text-foreground font-serif text-center text-sm md:text-base">
                    {service.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-muted-foreground font-cursive text-xl">
            Each experience is curated—not performed generically.
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-cursive text-2xl text-accent mb-2 block">
              The Creative Force
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold heading-gradient">
              Meet the Team
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className="group text-center opacity-0 animate-fade-up"
                style={{
                  animationDelay: `${(index + 1) * 150}ms`,
                  animationFillMode: "forwards"
                }}
              >
                <div className="relative mb-6 mx-auto w-40 h-40 rounded-2xl overflow-hidden shadow-card group-hover:shadow-glow transition-all duration-500">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <h3 className="font-serif text-lg font-medium text-foreground mb-1 group-hover:text-accent transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-muted-foreground font-cursive text-base">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold heading-gradient mb-6">
            Ready to Collaborate?
          </h2>
          <p className="text-muted-foreground mb-8">
            Direct booking and collaboration enquiries welcomed.
          </p>
          <Link to="/testimonials" className="btn-accent-yaazhi">
            Book Now
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default About;