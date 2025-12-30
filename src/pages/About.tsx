import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import heroImage from "@/assets/hero-concert.jpg";
const teamMembers = [{
  name: "Kiran Kashyap",
  role: "Founder | Artistic Director | Multi-Instrumentalist",
  image: team3
}, {
  name: "C. S. Lakshmi",
  role: "Co-Founder | Executive Producer | Lead Vocalist",
  image: team1
}, {
  name: "Harinee Muraleedharan",
  role: "Vocalist | Executive Management – COAR",
  image: team2
}, {
  name: "Balasubramaniyam",
  role: "Keyboardist | Supporting Vocalist | Creative Director",
  image: team3
}];
const services = ["Live Concert Performances", "Wedding Receptions & Muhurtham Concerts", "Corporate Shows & Workshops", "Festivals & Cultural Events", "Restaurant & Lounge Performances"];
const About = () => {
  return <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Yaazhi performing" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-background" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl font-semibold mb-4 text-stone">
            About Yaazhi
          </h1>
          <p className="font-accent italic text-xl md:text-2xl text-amber">
            Where culture finds a modern voice
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding">
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
      <section className="section-padding bg-black">
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
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold heading-gradient mb-8">
            Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map(service => <div key={service} className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-foreground">{service}</span>
              </div>)}
          </div>
          <p className="mt-6 text-muted-foreground font-accent italic">
            Each experience is curated—not performed generically.
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold heading-gradient mb-12 text-center">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => <div key={member.name} className="text-center opacity-0 animate-fade-up" style={{
            animationDelay: `${(index + 1) * 100}ms`,
            animationFillMode: "forwards"
          }}>
                <div className="relative mb-4 mx-auto w-40 h-40 rounded-2xl overflow-hidden shadow-card">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-serif text-lg font-medium text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-muted-foreground font-accent italic">
                  {member.role}
                </p>
              </div>)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
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
    </Layout>;
};
export default About;