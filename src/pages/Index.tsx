import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { TeamPreview } from "@/components/home/TeamPreview";
import { AboutPreview } from "@/components/home/AboutPreview";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { FeaturedVideos } from "@/components/home/FeaturedVideos";
import { TestimonialsCarousel } from "@/components/home/TestimonialsCarousel";
import { ContactSection } from "@/components/home/ContactSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <TeamPreview />
      <AboutPreview />
      <GalleryPreview />
      <FeaturedVideos />
      <TestimonialsCarousel />
      <ContactSection />
    </Layout>
  );
};

export default Index;
