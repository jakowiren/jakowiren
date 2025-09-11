import { Mail, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/jakob-hero.jpg";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [animatedLetters, setAnimatedLetters] = useState<Array<{
    char: string;
    id: number;
    delay: number;
    isAnimating: boolean;
  }>>([]);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const text = "hi, jakob here.";
  
  useEffect(() => {
    // Create letter objects with random delays
    const letters = text.split('').map((char, index) => ({
      char,
      id: index,
      delay: Math.random() * 2000 + 500, // Random delay between 500ms and 2.5s
      isAnimating: false
    }));
    
    setAnimatedLetters(letters);

    // Start animations with staggered delays
    letters.forEach((letter, index) => {
      setTimeout(() => {
        setAnimatedLetters(prev => 
          prev.map(l => l.id === index ? { ...l, isAnimating: true } : l)
        );
      }, letter.delay);
    });

    // Show content sections with proper delays after all animations are complete
    const maxDelay = Math.max(...letters.map(l => l.delay));
    const baseDelay = maxDelay + 1000; // Animation duration is 1000ms
    
    setTimeout(() => {
      setShowSubtitle(true);
    }, baseDelay + 500);
    
    setTimeout(() => {
      setShowDescription(true);
    }, baseDelay + 1500);
    
    setTimeout(() => {
      setShowContact(true);
    }, baseDelay + 2500);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 sm:px-8">
      {/* Main content */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-8">
          {/* Greeting */}
          <div className="space-y-4">
            <h1 className="hero-text relative" style={{ overflow: 'visible' }}>
              <style dangerouslySetInnerHTML={{
                __html: `
                  .falling-letter {
                    display: inline-block;
                    opacity: 0;
                    transform: translateY(-100vh);
                    animation-fill-mode: forwards;
                  }
                  
                  .falling-letter.animate {
                    animation: fallDown 1.0s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
                  }
                  
                  @keyframes fallDown {
                    0% {
                      opacity: 1;
                      transform: translateY(-100vh);
                    }
                    85% {
                      transform: translateY(0);
                    }
                    92% {
                      transform: translateY(-4px);
                    }
                    100% {
                      opacity: 1;
                      transform: translateY(0);
                    }
                  }
                `
              }} />
              {animatedLetters.map((letter, index) => (
                <span
                  key={letter.id}
                  className={`falling-letter ${letter.isAnimating ? 'animate' : ''} ${
                    letter.char === 'j' || letter.char === 'a' || letter.char === 'k' || 
                    letter.char === 'o' || letter.char === 'b' ? 'text-primary' : ''
                  }`}
                  style={{
                    animationDelay: letter.isAnimating ? '0ms' : '999999ms'
                  }}
                >
                  {letter.char === ' ' ? '\u00A0' : letter.char}
                </span>
              ))}
            </h1>
            <p 
              className={`text-xl md:text-2xl text-muted-foreground font-light transition-opacity duration-500 ${
                showSubtitle ? 'opacity-100 animate-fade-up' : 'opacity-0'
              }`}
            >
              I solve problems sometimes.
            </p>
          </div>

          {/* Description */}
          <div 
            className={`max-w-3xl mx-auto space-y-6 transition-opacity duration-500 ${
              showDescription ? 'opacity-100 animate-fade-up' : 'opacity-0'
            }`}
          >
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
              Software developer based in Zurich, Switzerland.
              <br />
              Masters in Engineering Physics.
              <br />
              Passionate about solving problems, being creative, and always learning.
            </p>
          </div>

          {/* CTA */}
          <div 
            className={`space-y-4 transition-opacity duration-500 ${
              showContact ? 'opacity-100 animate-fade-up' : 'opacity-0'
            }`}
          >
            <p className="text-lg font-medium text-primary">Let's talk!</p>
            <div className="flex flex-col gap-4 justify-center max-w-sm mx-auto">
              <Button size="lg" variant="outline" asChild>
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