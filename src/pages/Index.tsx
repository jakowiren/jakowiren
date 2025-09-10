import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import OtherThingsSection from "@/components/ProjectsSection";

import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
      <ExperienceSection />
      <AboutSection />
        <OtherThingsSection />
        
      </main>
      <Footer />
    </div>
  );
};

export default Index;