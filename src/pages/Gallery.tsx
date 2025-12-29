import { Layout } from "@/components/layout/Layout";
import { Play } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import heroImage from "@/assets/hero-concert.jpg";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";

const performancePhotos = [
  { src: gallery1, alt: "Live concert performance" },
  { src: gallery2, alt: "Traditional instruments" },
  { src: heroImage, alt: "Stage performance" },
  { src: gallery1, alt: "Festival performance" },
  { src: gallery2, alt: "Intimate gig" },
  { src: heroImage, alt: "Concert crowd" },
];

const teamPhotos = [
  { src: team1, alt: "Team member 1" },
  { src: team2, alt: "Team member 2" },
  { src: team3, alt: "Team member 3" },
  { src: team1, alt: "Candid moment" },
];

const videos = [
  {
    title: "Tumbivaa × Kadhal Rojave (Rock)",
    thumbnail: gallery1,
  },
  {
    title: "The Super Star Medley",
    thumbnail: gallery2,
  },
  {
    title: "Aval – SVCE Performance",
    thumbnail: heroImage,
  },
];

const Gallery = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding pt-32 text-center">
        <h1 className="font-serif text-5xl md:text-7xl font-semibold heading-gradient mb-4">
          Gallery
        </h1>
        <p className="font-accent italic text-xl md:text-2xl text-muted-foreground">
          Sound Made Visible
        </p>
      </section>

      {/* Performance Videos */}
      <section className="section-padding pt-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold heading-gradient mb-8">
            Performance Videos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <div
                key={video.title}
                className="group relative aspect-video rounded-2xl overflow-hidden shadow-card cursor-pointer opacity-0 animate-fade-up"
                style={{
                  animationDelay: `${(index + 1) * 100}ms`,
                  animationFillMode: "forwards",
                }}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/40 group-hover:bg-foreground/50 transition-colors" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                    <Play className="w-6 h-6 text-accent-foreground ml-1" />
                  </div>
                  <p className="font-serif text-background text-center px-4">
                    {video.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="section-padding bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold heading-gradient mb-8">
            Photo Gallery
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {performancePhotos.map((photo, index) => (
              <div
                key={index}
                className={`group relative rounded-2xl overflow-hidden shadow-card cursor-pointer opacity-0 animate-fade-up ${
                  index === 0 || index === 4 ? "row-span-2" : ""
                }`}
                style={{
                  animationDelay: `${(index + 1) * 80}ms`,
                  animationFillMode: "forwards",
                }}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ minHeight: index === 0 || index === 4 ? "400px" : "200px" }}
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Moments */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold heading-gradient mb-8">
            Studio Moments
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {teamPhotos.map((photo, index) => (
              <div
                key={index}
                className="group relative aspect-square rounded-2xl overflow-hidden shadow-card opacity-0 animate-fade-up"
                style={{
                  animationDelay: `${(index + 1) * 100}ms`,
                  animationFillMode: "forwards",
                }}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
