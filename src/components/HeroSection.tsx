import { Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/jakob-hero.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 sm:px-8 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-subtle opacity-50" />
      
      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center space-y-8 animate-fade-up">
          {/* Greeting */}
          <div className="space-y-4">
            <h1 className="hero-text">
              hi, <span className="text-primary">jakob</span> here.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              I solve problems sometimes.
            </p>
          </div>

          {/* Description */}
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
              Problem-solver and tech enthusiast. Love learning about new tools that can be 
              used for cool things - like React for this website!
            </p>
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
              Passionate about the intersection of <span className="text-primary">tech and conservation</span>, 
              robotics and AI.
            </p>
          </div>


          {/* CTA */}
          <div className="space-y-4">
            <p className="text-lg font-medium text-primary">Let's talk!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="default" asChild className="shadow-glow">
                <a href="mailto:jakowiren@gmail.com">
                  <Mail className="h-5 w-5 mr-2" />
                  jakowiren@gmail.com
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://wa.me/46762863389">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  +46 76 286 33 89
                </a>
              </Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;