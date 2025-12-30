import { Layout } from "@/components/layout/Layout";
import { Calendar, MapPin, ExternalLink, Newspaper, Clock, Ticket, X } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";

const upcomingShows = [
  {
    date: "January 15, 2025",
    time: "7:00 PM",
    venue: "Music Academy",
    city: "Chennai",
    description: "An evening of classical fusion featuring Yaazhi's signature sound. Experience the magic of traditional ragas reimagined with contemporary arrangements.",
    ticketLink: "#",
  },
  {
    date: "February 8, 2025",
    time: "6:30 PM",
    venue: "Phoenix Marketcity",
    city: "Chennai",
    description: "A high-energy performance blending rock, jazz, and Carnatic elements. Perfect for those seeking musical adventure.",
    ticketLink: "#",
  },
  {
    date: "March 22, 2025",
    time: "8:00 PM",
    venue: "Cultural Festival",
    city: "Bangalore",
    description: "Yaazhi takes the stage at Bangalore's premier cultural festival, bringing Chennai's fusion sound to the garden city.",
    ticketLink: "#",
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
    image: gallery1,
    description: "An in-depth look at how Yaazhi is redefining fusion music in Chennai.",
  },
  {
    outlet: "The New Indian Express",
    title: "Rock of All Ages",
    year: "2017",
    image: gallery2,
    description: "How a young band is bridging generations through innovative musical fusion.",
  },
  {
    outlet: "The New Indian Express",
    title: "Interview featuring Kiran Kashyap",
    year: "2017",
    image: gallery1,
    description: "The founder speaks about Yaazhi's journey and vision for Indian fusion music.",
  },
  {
    outlet: "DT Next",
    title: "Live performance feature",
    year: "2018",
    image: gallery2,
    description: "Coverage of Yaazhi's electrifying live performance at the Chennai cultural fest.",
  },
  {
    outlet: "Indulge Express",
    title: "More Than Music: Yaazhi's Fusion with Purpose",
    year: "2025",
    image: gallery1,
    description: "Exploring how Yaazhi's music carries cultural significance beyond entertainment.",
  },
];

const News = () => {
  const [selectedShow, setSelectedShow] = useState<typeof upcomingShows[0] | null>(null);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding pt-32 text-center bg-background">
        <h1 className="font-serif text-5xl md:text-7xl font-semibold heading-gradient mb-4">
          News & Press
        </h1>
        <p className="font-accent italic text-xl md:text-2xl text-muted-foreground">
          The Journey Continues
        </p>
      </section>

      {/* Upcoming Shows */}
      <section className="section-padding pt-8 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-cursive text-2xl text-accent mb-2 block">Mark Your Calendar</span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold heading-gradient">
              Upcoming Shows
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingShows.map((show, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <div
                    className="group relative rounded-2xl overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm cursor-pointer opacity-0 animate-fade-up hover:border-accent/50 transition-all duration-500 hover:shadow-glow"
                    style={{
                      animationDelay: `${(index + 1) * 100}ms`,
                      animationFillMode: "forwards",
                    }}
                  >
                    {/* Date Badge */}
                    <div className="absolute top-4 right-4 bg-accent text-background px-3 py-1 rounded-full text-xs font-semibold z-10">
                      {show.date.split(",")[0]}
                    </div>

                    <div className="p-6">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Calendar className="w-7 h-7 text-accent" />
                      </div>
                      
                      <h3 className="font-serif text-xl font-medium text-foreground mb-2 group-hover:text-accent transition-colors">
                        {show.venue}
                      </h3>
                      
                      <div className="flex items-center gap-2 text-foreground/60 mb-3">
                        <MapPin className="w-4 h-4 text-accent" />
                        <span className="text-sm">{show.city}</span>
                      </div>

                      <div className="flex items-center gap-2 text-foreground/60">
                        <Clock className="w-4 h-4 text-accent" />
                        <span className="text-sm">{show.time}</span>
                      </div>

                      <div className="mt-4 pt-4 border-t border-border/50 flex items-center justify-between">
                        <span className="text-xs text-foreground/50">Click for details</span>
                        <Ticket className="w-4 h-4 text-accent group-hover:scale-110 transition-transform" />
                      </div>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="bg-card border-border max-w-md">
                  <DialogHeader>
                    <DialogTitle className="font-serif text-2xl text-accent">{show.venue}</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-foreground/70">
                      <Calendar className="w-5 h-5 text-accent" />
                      <span>{show.date}</span>
                    </div>
                    <div className="flex items-center gap-4 text-foreground/70">
                      <Clock className="w-5 h-5 text-accent" />
                      <span>{show.time}</span>
                    </div>
                    <div className="flex items-center gap-4 text-foreground/70">
                      <MapPin className="w-5 h-5 text-accent" />
                      <span>{show.city}</span>
                    </div>
                    <p className="text-foreground/60 leading-relaxed border-t border-border pt-4">
                      {show.description}
                    </p>
                    <a
                      href={show.ticketLink}
                      className="btn-accent-yaazhi w-full justify-center mt-4"
                    >
                      Get Tickets
                      <Ticket className="w-4 h-4" />
                    </a>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* Past Highlights */}
      <section className="section-padding bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold heading-gradient mb-8">
            Past Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pastHighlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 rounded-xl bg-background/50 border border-border/30 hover:border-accent/30 transition-all duration-300"
              >
                <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
                <span className="text-foreground">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Mentions */}
      <section className="section-padding bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-cursive text-2xl text-accent mb-2 block">In the Press</span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold heading-gradient">
              Media Mentions
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediaMentions.map((mention, index) => (
              <div
                key={index}
                className="group rounded-2xl overflow-hidden border border-border/50 bg-card/50 hover:border-accent/50 transition-all duration-500 cursor-pointer opacity-0 animate-fade-up hover:shadow-glow"
                style={{
                  animationDelay: `${(index + 1) * 80}ms`,
                  animationFillMode: "forwards",
                }}
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={mention.image}
                    alt={mention.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  <div className="absolute bottom-3 left-3 bg-accent text-background px-2 py-1 rounded text-xs font-semibold">
                    {mention.year}
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs text-accent mb-2 font-medium">{mention.outlet}</p>
                  <h3 className="font-serif text-lg font-medium text-foreground mb-2 group-hover:text-accent transition-colors">
                    {mention.title}
                  </h3>
                  <p className="text-sm text-foreground/60 line-clamp-2">{mention.description}</p>
                  <div className="mt-4 flex items-center gap-2 text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-medium">Read Article</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
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
