import { Play } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import heroImage from "@/assets/hero-concert.jpg";

const videos = [
  {
    title: "Tumbivaa × Kadhal Rojave",
    subtitle: "Rock Fusion",
    thumbnail: gallery1,
    videoId: "dQw4w9WgXcQ", // Replace with actual video ID
  },
  {
    title: "The Super Star Medley",
    subtitle: "Rajinikanth Tribute",
    thumbnail: gallery2,
    videoId: "dQw4w9WgXcQ",
  },
  {
    title: "Aval – SVCE",
    subtitle: "Live Performance",
    thumbnail: heroImage,
    videoId: "dQw4w9WgXcQ",
  },
];

export const FeaturedVideos = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold heading-gradient mb-4">
            Featured Videos
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Experience Yaazhi's signature fusion sound
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div
              key={video.title}
              className="group card-yaazhi overflow-hidden opacity-0 animate-fade-up"
              style={{
                animationDelay: `${(index + 1) * 150}ms`,
                animationFillMode: "forwards",
              }}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                
                {/* Play Button */}
                <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-accent flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-elevated">
                  <Play className="w-6 h-6 text-accent-foreground ml-1" />
                </button>

                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-serif text-xl font-medium text-background mb-1">
                    {video.title}
                  </h3>
                  <p className="text-sm text-background/70 font-accent italic">
                    {video.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
