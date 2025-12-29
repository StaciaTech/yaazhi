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
    <section className="section-padding bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold heading-gradient mb-4">
            Core Team
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            The creative minds behind Yaazhi's unique sound
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="group text-center opacity-0 animate-fade-up"
              style={{
                animationDelay: `${(index + 1) * 150}ms`,
                animationFillMode: "forwards",
              }}
            >
              <div className="relative mb-6 mx-auto w-48 h-48 rounded-2xl overflow-hidden shadow-card">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="font-serif text-xl font-medium text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-muted-foreground font-accent italic">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
