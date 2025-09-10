import { Mail, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/jakob-hero.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 sm:px-8">
      {/* Main content */}
      <div className="max-w-6xl mx-auto">
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
              Software developer based in Zurich, Switzerland.
              <br />
              Masters in Engineering Physics and a need to always keep learning.
              <br />
              Passionate about solving problems, being creative, and learning.
            </p>
          </div>


          {/* CTA */}
          <div className="space-y-4">
            <p className="text-lg font-medium text-primary">Let's talk!</p>
            <div className="flex flex-col gap-4 justify-center max-w-sm mx-auto">
              <Button size="lg" variant="default" asChild className="shadow-glow">
                <a href="mailto:jakowiren@gmail.com">
                  <Mail className="h-5 w-5 mr-2" />
                  jakowiren@gmail.com
                </a>
              </Button>
              <Button size="lg" variant="outline">
                <MessageSquare className="h-5 w-5 mr-2" />
                WhatsApp: +46 76 286 33 89
              </Button>
              <Button size="lg" variant="outline">
                <Phone className="h-5 w-5 mr-2" />
                +41 76 287 02 61
              </Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;