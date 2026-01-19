import { Play, Video } from "lucide-react";
import { useState } from "react";
import gallery1 from "@/assets/Yt/ChatGPT Image Dec 31, 2025 at 03_05_07 PM.png";
import gallery2 from "@/assets/Yt/IMG_3988.JPG";
import heroImage from "@/assets/Yt/Rajini Medley Thumbnail Final.png";
const videos = [
  {
    title: "Tumbivaa × Kadhal Rojave",
    subtitle: "Rock Fusion",
    thumbnail: gallery2,
    videoId: "5rUZFkDTP6Y",
  },
  {
    title: "The Super Star Medley",
    subtitle: "Rajinikanth Tribute",
    thumbnail: heroImage,
    videoId: "VR9dvSnwDMc",
  },
  {
    title: "Aval – SVCE",
    subtitle: "Live Performance",
    thumbnail: gallery1,
    videoId: "wuikaO1x09c",
  },
];
export const FeaturedVideos = () => {
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  return (
    <section className="section-padding relative">
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-40 h-40 rounded-full bg-accent/5 blur-3xl" />
      <div className="absolute bottom-20 right-0 w-60 h-60 rounded-full bg-primary/5 blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Video className="w-5 h-5 text-accent" />
            <span className="font-cursive text-2xl text-accent">
              Watch Us Play
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal heading-gradient mb-4">
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
              className="group card-yaazhi overflow-hidden opacity-0 animate-fade-up cursor-pointer block"
              style={{
                animationDelay: `${(index + 1) * 150}ms`,
                animationFillMode: "forwards",
              }}
              onClick={() => setPlayingVideoId(video.videoId)}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-black">
                {playingVideoId === video.videoId ? (
                  <div className="w-full h-full flex items-center justify-center">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full aspect-video"
                    ></iframe>
                  </div>
                ) : (
                  <>
                    {/* Blurred Background */}
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="absolute inset-0 w-full h-full object-cover blur-2xl scale-125 opacity-50"
                    />

                    {/* Main Thumbnail */}
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="relative z-10 w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-20" />

                    {/* Play Button */}
                    <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-accent flex items-center justify-center transition-all duration-500 group-hover:scale-125 shadow-elevated pulse-glow z-30">
                      <Play className="w-6 h-6 text-accent-foreground ml-1" />
                    </button>

                    {/* Title */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500 z-30">
                      <h3 className="font-serif text-2xl font-normal mb-1 text-[#f5f40cc]">
                        {video.title}
                      </h3>
                      <p className="text-sm font-cursive text-lg text-gold">
                        {video.subtitle}
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
