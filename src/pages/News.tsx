import { Layout } from "@/components/layout/Layout";
import { Calendar, MapPin, ExternalLink, Newspaper, Clock, Ticket, X } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const upcomingShows = [
  {
    date: "January 15, 2025",
    time: "7:00 PM",
    venue: "Music Academy",
    city: "Chennai",
    description: "An evening of fusion classics featuring Yaazhi's signature blend of Carnatic and contemporary rock.",
    ticketLink: "#"
  },
  {
    date: "February 8, 2025",
    time: "6:30 PM",
    venue: "Phoenix Marketcity",
    city: "Chennai",
    description: "A special acoustic set celebrating love songs from across genres and generations.",
    ticketLink: "#"
  },
  {
    date: "March 22, 2025",
    time: "8:00 PM",
    venue: "Cultural Festival",
    city: "Bangalore",
    description: "Yaazhi headlines the main stage at Bangalore's premier cultural festival.",
    ticketLink: "#"
  }
];

const pastHighlights = [
  "Chennai Music Season 2024 – Featured Artist",
  "SVCE Annual Day Performance",
  "Corporate Shows for Fortune 500 Companies",
  "Wedding Season Tour 2024"
];

const mediaMentions = [
  {
    outlet: "Indulge Express",
    title: "Six Sounds of Yaazhi – The Band",
    year: "2017",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=300&fit=crop"
  },
  {
    outlet: "The New Indian Express",
    title: "Rock of All Ages",
    year: "2017",
    image: "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=400&h=300&fit=crop"
  },
  {
    outlet: "The New Indian Express",
    title: "Interview featuring Kiran Kashyap",
    year: "2017",
    image: "https://images.unsplash.com/photo-1559526324-c1f275fbfa32?w=400&h=300&fit=crop"
  },
  {
    outlet: "DT Next",
    title: "Live performance feature",
    year: "2018",
    image: "https://images.unsplash.com/photo-1478147427282-58a87a120781?w=400&h=300&fit=crop"
  },
  {
    outlet: "Indulge Express",
    title: "More Than Music: Yaazhi's Fusion with Purpose",
    year: "2025",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=300&fit=crop"
  }
];

interface ShowModalProps {
  show: typeof upcomingShows[0] | null;
  isOpen: boolean;
  onClose: () => void;
}

const ShowModal = ({ show, isOpen, onClose }: ShowModalProps) => {
  if (!show) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-card border-border max-w-md">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl heading-gradient">{show.venue}</DialogTitle>
          <DialogDescription className="text-muted-foreground">{show.city}</DialogDescription>
        </DialogHeader>
        <div className="space-y-4 mt-4">
          <div className="flex items-center gap-3 text-foreground">
            <Calendar className="w-5 h-5 text-accent" />
            <span>{show.date}</span>
          </div>
          <div className="flex items-center gap-3 text-foreground">
            <Clock className="w-5 h-5 text-accent" />
            <span>{show.time}</span>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            {show.description}
          </p>
          <a
            href={show.ticketLink}
            className="btn-accent-yaazhi w-full justify-center mt-4"
          >
            <Ticket className="w-4 h-4" />
            Get Tickets
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const News = () => {
  const [selectedShow, setSelectedShow] = useState<typeof upcomingShows[0] | null>(null);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding pt-32 text-center bg-background">
        <h1 className="font-serif text-5xl md:text-7xl font-semibold heading-gradient mb-4">
          News & Press
        </h1>
        <p className="font-cursive text-xl md:text-2xl text-accent">
          The Journey Continues
        </p>
      </section>

      {/* Upcoming Shows */}
      <section className="section-padding pt-8 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-cursive text-xl text-accent mb-2 block">Mark Your Calendar</span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold heading-gradient">
              Upcoming Shows
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingShows.map((show, index) => (
              <div
                key={index}
                onClick={() => setSelectedShow(show)}
                className="golden-glow-card rounded-2xl p-6 cursor-pointer group opacity-0 animate-fade-up hover:-translate-y-2 transition-all duration-500"
                style={{
                  animationDelay: `${(index + 1) * 100}ms`,
                  animationFillMode: "forwards"
                }}
              >
                {/* Date Badge */}
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium">
                    <Calendar className="w-4 h-4" />
                    {show.date}
                  </div>
                </div>
                
                {/* Venue Info */}
                <h3 className="font-serif text-xl text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                  {show.venue}
                </h3>
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <MapPin className="w-4 h-4" />
                  <span>{show.city}</span>
                </div>
                
                {/* Time */}
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Clock className="w-4 h-4" />
                  <span>{show.time}</span>
                </div>
                
                {/* Hover indicator */}
                <div className="mt-4 pt-4 border-t border-border/30">
                  <span className="text-accent text-sm font-medium group-hover:underline">
                    View Details →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Highlights */}
      <section className="section-padding bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold heading-gradient mb-8 text-center">
            Past Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pastHighlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 rounded-xl bg-background/50 border border-border/30 hover:border-accent/30 transition-colors duration-300"
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
            <span className="font-cursive text-xl text-accent mb-2 block">In The Spotlight</span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold heading-gradient">
              Media Mentions
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediaMentions.map((mention, index) => (
              <div
                key={index}
                className="group rounded-2xl overflow-hidden border border-border/30 hover:border-accent/30 transition-all duration-500 cursor-pointer opacity-0 animate-fade-up bg-card"
                style={{
                  animationDelay: `${(index + 1) * 80}ms`,
                  animationFillMode: "forwards"
                }}
              >
                {/* Image */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={mention.image}
                    alt={mention.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="inline-block px-3 py-1 rounded-full bg-accent/90 text-background text-xs font-medium">
                      {mention.outlet}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-5">
                  <h3 className="font-serif text-lg text-foreground mb-2 group-hover:text-accent transition-colors duration-300 line-clamp-2">
                    {mention.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{mention.year}</span>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Show Modal */}
      <ShowModal
        show={selectedShow}
        isOpen={!!selectedShow}
        onClose={() => setSelectedShow(null)}
      />
    </Layout>
  );
};

export default News;