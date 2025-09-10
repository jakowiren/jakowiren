const AboutSection = () => {
  const technologies = [
    "TypeScript",
    "Python",
    "Supabase",
    "AWS",
    "C#",
    "Unity"
  ];

  return (
    <section id="about" className="py-20 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="mb-16">
          <h2 className="section-title">/ about me</h2>
        </div>

        {/* Main content */}
        <div className="space-y-8">
          <div className="space-y-6">
            <p className="text-lg text-foreground/90 leading-relaxed">
              I am currently a <strong>Software Developer</strong> at XER Technologies, working on 
              flight data strategies and mission critical software.
            </p>
            
            <p className="text-lg text-foreground/90 leading-relaxed">
              Here are some technologies I have been working with:
            </p>
            
            {/* Technologies list */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              {technologies.map((tech, index) => (
                <div key={index} className="flex items-center text-foreground">
                  <div className="w-0 h-0 border-l-[6px] border-l-[hsl(180,100%,60%)] border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent mr-3"></div>
                  {tech}
                </div>
              ))}
            </div>
            
            <p className="text-lg text-foreground/90 leading-relaxed">
              Outside of work, I am probably hiking, bouldering, drinking coffee and trying to change the world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;