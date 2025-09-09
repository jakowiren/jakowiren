import { Code, Heart, Zap, Globe } from "lucide-react";
import savannaImage from "@/assets/savanna-bg.jpg";

const AboutSection = () => {
  const skills = [
    {
      icon: Code,
      title: "Tech Stack",
      items: ["React", "TypeScript", "Python", "AI/ML", "Robotics"]
    },
    {
      icon: Heart,
      title: "Passionate About",
      items: ["Conservation Tech", "Anti-poaching AI", "Wildlife Protection", "Sustainable Solutions"]
    },
    {
      icon: Zap,
      title: "Currently",
      items: ["Building AI systems", "Learning new tools", "Working in South Africa", "Problem solving"]
    },
    {
      icon: Globe,
      title: "Impact",
      items: ["Real-world applications", "Conservation efforts", "Tech for good", "Making a difference"]
    }
  ];

  return (
    <section id="about" className="py-20 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="section-title">/ about me</h2>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-lg text-foreground/90 leading-relaxed">
                I'm a <span className="text-primary font-medium">problem solver and tech enthusiast</span> who 
                believes technology can make the world a better place. Currently working on AI solutions 
                for conservation efforts, particularly anti-poaching systems in South Africa.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                When I'm not coding or building things, you'll find me exploring new technologies, 
                enjoying the African outdoors, or thinking about the next big challenge to tackle.
              </p>
            </div>

            {/* Skills grid */}
            <div className="grid sm:grid-cols-2 gap-6 mt-12">
              {skills.map((skill, index) => (
                <div key={index} className="bg-card p-6 rounded-lg border border-border hover:shadow-glow transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <skill.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-medium text-foreground">{skill.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {skill.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-sm text-muted-foreground">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/60 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <img
                src={savannaImage}
                alt="African savanna conservation work"
                className="relative rounded-2xl w-full h-auto shadow-elevated"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="percentage-badge">
                  100% me building AI for conservation in South Africa
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;