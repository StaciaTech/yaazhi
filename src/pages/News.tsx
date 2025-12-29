import { Layout } from "@/components/layout/Layout";
import { Calendar, MapPin, ExternalLink, Newspaper } from "lucide-react";

const upcomingShows = [
  {
    date: "January 15, 2025",
    venue: "Music Academy",
    city: "Chennai",
  },
  {
    date: "February 8, 2025",
    venue: "Phoenix Marketcity",
    city: "Chennai",
  },
  {
    date: "March 22, 2025",
    venue: "Cultural Festival",
    city: "Bangalore",
  },
];

const pastHighlights = [
  "Chennai Music Season 2024 – Featured Artist",
  "SVCE Annual Day Performance",
  "Corporate Shows for Fortune 500 Companies",
  "Wedding Season Tour 2024",
];

const mediaMentions = [
  {
    outlet: "Indulge Express",
    title: "Six Sounds of Yaazhi – The Band",
    year: "2017",
  },
  {
    outlet: "The New Indian Express",
    title: "Rock of All Ages",
    year: "2017",
  },
  {
    outlet: "The New Indian Express",
    title: "Interview featuring Kiran Kashyap",
    year: "2017",
  },
  {
    outlet: "DT Next",
    title: "Live performance feature",
    year: "2018",
  },
  {
    outlet: "Indulge Express",
    title: "More Than Music: Yaazhi's Fusion with Purpose",
    year: "2025",
  },
];

const News = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding pt-32 text-center">
        <h1 className="font-serif text-5xl md:text-7xl font-semibold heading-gradient mb-4">
          News & Press
        </h1>
        <p className="font-accent italic text-xl md:text-2xl text-muted-foreground">
          The Journey Continues
        </p>
      </section>

      {/* Upcoming Shows */}
      <section className="section-padding pt-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold heading-gradient mb-8">
            Upcoming Shows
          </h2>
          <div className="space-y-4">
            {upcomingShows.map((show, index) => (
              <div
                key={index}
                className="card-yaazhi p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 opacity-0 animate-fade-up"
                style={{
                  animationDelay: `${(index + 1) * 100}ms`,
                  animationFillMode: "forwards",
                }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-serif text-lg font-medium text-foreground">
                      {show.date}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {show.venue}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>{show.city}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Highlights */}
      <section className="section-padding bg-secondary/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold heading-gradient mb-8">
            Past Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pastHighlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 rounded-xl bg-card shadow-soft"
              >
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-foreground">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Mentions */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold heading-gradient mb-8">
            Media Mentions
          </h2>
          <div className="space-y-4">
            {mediaMentions.map((mention, index) => (
              <div
                key={index}
                className="group card-yaazhi p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 cursor-pointer opacity-0 animate-fade-up"
                style={{
                  animationDelay: `${(index + 1) * 80}ms`,
                  animationFillMode: "forwards",
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Newspaper className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-serif text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                      {mention.title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {mention.outlet}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-muted-foreground">
                    {mention.year}
                  </span>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default News;
