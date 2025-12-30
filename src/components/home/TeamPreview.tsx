import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";

const teamMembers = [
  {
    name: "C. S. Lakshmi",
    role: "Co-Founder | Executive Producer",
    image: team1,
  },
  {
    name: "Harinee Muraleedharan",
    role: "Management | COAR",
    image: team2,
  },
  {
    name: "Balasubramaniyam",
    role: "Creative Director",
    image: team3,
  },
];

export const TeamPreview = () => {
  return (
    <section id="core-team-section" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-cursive text-2xl text-accent mb-2 block">
            The Creative Force
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal heading-gradient mb-4">
            Core Team
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            The creative minds behind Yaazhi's unique sound
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="group text-center opacity-0 animate-fade-up"
              style={{
                animationDelay: `${(index + 1) * 150}ms`,
                animationFillMode: "forwards",
              }}
            >
              <div className="relative mb-6 mx-auto w-52 h-52 rounded-2xl overflow-hidden shadow-card group-hover:shadow-glow transition-all duration-500">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h3 className="font-serif text-2xl font-normal text-accent mb-2 group-hover:text-primary transition-colors duration-300">
                {member.name}
              </h3>
              <p className="text-sm text-foreground/70 font-cursive text-lg">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
