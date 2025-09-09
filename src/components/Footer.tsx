import { Heart, Code } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 sm:px-8 border-t border-border bg-surface-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Left side */}
          <div className="flex items-center space-x-2 text-muted-foreground">
            <span>Built with</span>
            <Heart className="h-4 w-4 text-primary" />
            <span>and</span>
            <Code className="h-4 w-4 text-primary" />
            <span>by Jakob Wirén</span>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <span>© 2024 Jakob Wirén</span>
            <span className="hidden md:inline">•</span>
            <span>Problem solver & tech enthusiast</span>
          </div>
        </div>

        {/* Additional info */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Passionate about using technology for conservation and making the world a better place. 
            Currently working on AI solutions for wildlife protection in South Africa.
          </p>
          <div className="mt-4">
            <span className="percentage-badge text-xs">
              Made with React & lots of curiosity
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;