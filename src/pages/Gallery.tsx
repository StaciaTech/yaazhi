import { Layout } from "@/components/layout/Layout";
import { Play, Video } from "lucide-react";
import { useState } from "react";
import gallery1 from "@/assets/gallery/Karaikudi show .jpg";
import gallery2 from "@/assets/gallery/Karaikudi show (1).jpg";
import gallery3 from "@/assets/gallery/MLA wedding (6).jpg";
import gallery6 from "@/assets/gallery/Mla wedding (1).jpg";
import gallery5 from "@/assets/gallery/Mla wedding (2).jpg";
import gallery4 from "@/assets/gallery/Mla wedding (3).jpg";
import gallery7 from "@/assets/gallery/Mla wedding (4).jpg";
import gallery8 from "@/assets/gallery/Mla wedding (5).jpg";
import gallery9 from "@/assets/gallery/Mla wedding .jpg";
import gallery10 from "@/assets/gallery/Svce(1).jpg";
import gallery11 from "@/assets/gallery/Svce(1.1).jpg";
import gallery12 from "@/assets/gallery/Svce(2).jpg";
import gallery13 from "@/assets/gallery/Svce(2.1).jpg";
import gallery14 from "@/assets/gallery/Svce(3).jpg";
import gallery15 from "@/assets/gallery/Svce.jpg";
import gallery16 from "@/assets/gallery/Svce0.1.jpg";

import heroImage from "@/assets/hero-concert.jpg";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";

// YouTube Thumbnails
import ytThumb2 from "@/assets/Yt/IMG_3988.JPG";
import ytThumb3 from "@/assets/Yt/Rajini Medley Thumbnail Final.png";
import ytThumb1 from "@/assets/Yt/ChatGPT Image Dec 31, 2025 at 03_05_07 PM.png";

import studio1 from "@/assets/studioMoments/CBE wedding show team.jpg";
import studio2 from "@/assets/studioMoments/KaraiKudi Team.jpg";
import studio3 from "@/assets/studioMoments/Madurai Wedding show team.jpg";
import studio4 from "@/assets/studioMoments/Phoenix mall team.jpg";
import studio5 from "@/assets/studioMoments/Phoenix mall w_dancer.jpg";
import studio6 from "@/assets/studioMoments/Maduraicorporateshowteam.JPG";
import studio7 from "@/assets/studioMoments/Mla Wedding - Band + STR ens.JPG";
import studio8 from "@/assets/studioMoments/SVCEteamphoto.JPG";
import studio9 from "@/assets/studioMoments/Zeroisgoodcampagin.JPG";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import s3Videos from "@/data/s3-videos.json";

const categories = [
  {
    title: "Weddings",
    value: "weddings",
    images: [
      { src: gallery3, alt: "MLA Wedding 1", className: "row-span-2" }, // Portrait (Tall)
      { src: gallery6, alt: "MLA Wedding 2" },
      { src: gallery5, alt: "MLA Wedding 3" },
      { src: gallery4, alt: "MLA Wedding 4" }, // Landscape (Wide) example: className: "md:col-span-2"
      { src: gallery7, alt: "MLA Wedding 5", className: "row-span-2" }, // Portrait (Tall)
      { src: gallery8, alt: "MLA Wedding 6" },
      { src: gallery9, alt: "MLA Wedding 7" },
    ],
  },
  {
    title: "College Fests",
    value: "college-fests",
    images: [
      { src: gallery10, alt: "SVCE 1", className: "row-span-2" },
      { src: gallery11, alt: "SVCE 2" },
      { src: gallery12, alt: "SVCE 3" },
      { src: gallery13, alt: "SVCE 4" },
      { src: gallery14, alt: "SVCE 5", className: "row-span-2" },
      { src: gallery15, alt: "SVCE 6" },
      { src: gallery16, alt: "SVCE 7" },
    ],
  },
  {
    title: "Karaikudi Show",
    value: "pro-show",
    images: [
      { src: gallery1, alt: "Karaikudi Show 1", className: "aspect-square" },
      { src: gallery2, alt: "Karaikudi Show 2", className: "aspect-square" },
    ],
  },
];

const teamPhotos = [
  {
    src: studio1,
    alt: "Team member 1",
  },
  {
    src: studio2,
    alt: "Team member 2",
  },
  {
    src: studio3,
    alt: "Team member 3",
  },
  {
    src: studio4,
    alt: "Candid moment",
  },
  {
    src: studio5,
    alt: "Candid moment",
  },
  {
    src: studio6,
    alt: "Candid moment",
  },
  {
    src: studio7,
    alt: "Candid moment",
  },
  {
    src: studio8,
    alt: "Candid moment",
  },
  {
    src: studio9,
    alt: "Candid moment",
  },
];

const videos = [
  {
    title: "Tumbivaa × Kadhal Rojave",
    subtitle: "Rock Fusion",
    thumbnail: ytThumb2,
    videoId: "5rUZFkDTP6Y",
  },
  {
    title: "The Super Star Medley",
    subtitle: "Rajinikanth Tribute",
    thumbnail: ytThumb3,
    videoId: "VR9dvSnwDMc",
  },
  {
    title: "Aval – SVCE",
    subtitle: "Live Performance",
    thumbnail: ytThumb1,
    videoId: "wuikaO1x09c",
  },
];

const Gallery = () => {
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  // Custom order and renaming configuration
  const categoryConfig = [
    { id: "Wedding", label: "Wedding" },
    { id: "ShowReelsVideos", label: "Show Reels" },
    { id: "HD video Fusion", label: "HD Fusion" },
    { id: "InStudioRehearsal", label: "In Studio" },
    { id: "CollegeShows", label: "College Show" },
    { id: "PubResturantshows", label: "Pub & Resturant" },
    { id: "PublicShows", label: "Public Show" },
  ];

  // Map S3 videos to the config order
  const sortedS3Videos = categoryConfig
    .map((config) => {
      const categoryData = s3Videos.find((v) => v.category === config.id);
      return categoryData ? { ...categoryData, label: config.label } : null;
    })
    .filter((item): item is NonNullable<typeof item> => item !== null);

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

          <Tabs defaultValue="featured" className="w-full">
            <div className="flex justify-center mb-8 flex-wrap">
              <TabsList className="bg-muted/20 p-1 h-auto flex-wrap justify-center">
                <TabsTrigger
                  value="featured"
                  className="px-6 py-2 text-lg data-[state=active]:bg-accent data-[state=active]:text-accent-foreground"
                >
                  Featured
                </TabsTrigger>
                {sortedS3Videos.map((cat) => (
                  <TabsTrigger
                    key={cat.category}
                    value={cat.category}
                    className="px-6 py-2 text-lg data-[state=active]:bg-accent data-[state=active]:text-accent-foreground"
                  >
                    {cat.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* Featured Tab */}
            <TabsContent value="featured" className="animate-fade-up">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {videos.map((video, index) => (
                  <div
                    key={video.title}
                    className="group relative aspect-video rounded-2xl overflow-hidden shadow-card cursor-pointer bg-black"
                    style={{
                      animationDelay: `${(index + 1) * 100}ms`,
                      animationFillMode: "forwards",
                    }}
                    onClick={() => setPlayingVideoId(video.videoId)}
                  >
                    {playingVideoId === video.videoId ? (
                      <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1`}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      ></iframe>
                    ) : (
                      <>
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                            <Play className="w-6 h-6 text-accent-foreground ml-1" />
                          </div>
                          <p className="font-serif text-[#f5f40cc] text-center px-4">
                            {video.title}
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* S3 Categories Tabs */}
            {sortedS3Videos.map((cat) => (
              <TabsContent
                key={cat.category}
                value={cat.category}
                className="animate-fade-up"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {cat.videos.map((video: any, index: number) => (
                    <div
                      key={video.title}
                      className="group relative aspect-video rounded-2xl overflow-hidden shadow-card cursor-pointer bg-black"
                      style={{
                        animationDelay: `${(index + 1) * 100}ms`,
                        animationFillMode: "forwards",
                      }}
                      onClick={() => setPlayingVideoId(video.videoUrl)}
                    >
                      {playingVideoId === video.videoUrl ? (
                        <video
                          src={video.videoUrl}
                          className="w-full h-full object-contain"
                          controls
                          autoPlay
                          playsInline
                        />
                      ) : (
                        <>
                          {video.thumbnail ? (
                            <img
                              src={video.thumbnail}
                              alt={video.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          ) : (
                            // Fallback thumbnail - use first frame trick or generic
                            <div className="w-full h-full bg-neutral-900 flex items-center justify-center">
                              <Video className="w-12 h-12 text-zinc-700" />
                            </div>
                          )}
                          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                          <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                              <Play className="w-6 h-6 text-accent-foreground ml-1" />
                            </div>
                            <p className="font-serif text-[#f5f40cc] text-center px-4">
                              {video.title}
                            </p>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Photo Gallery Tabs */}
      <section className="section-padding text-black bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold heading-gradient mb-8">
            Photo Gallery
          </h2>
          <Tabs defaultValue="weddings" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-muted/20 p-1">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.value}
                    value={category.value}
                    className="px-6 py-2 text-lg data-[state=active]:bg-accent data-[state=active]:text-accent-foreground"
                  >
                    {category.title}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {categories.map((category) => (
              <TabsContent key={category.value} value={category.value}>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 animate-fade-up">
                  {category.images.map((photo: any, index) => (
                    <div
                      key={index}
                      className={`group relative rounded-2xl overflow-hidden shadow-card cursor-pointer ${
                        photo.className || "col-span-1"
                      }`}
                    >
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        style={{
                          height: "100%",
                          minHeight: photo.className?.includes("row-span-2")
                            ? "400px"
                            : "200px",
                        }}
                      />
                      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/0 transition-colors" />
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
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
