const AboutSection = () => {
  const technologies = [
    "TypeScript",
    "React",
    "Python", 
    "AI/ML",
    "TensorFlow",
    "Computer Vision",
    "IoT",
    "Robotics"
  ];

  return (
    <section id="about" className="py-20 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="section-title">/ about me</h2>
        </div>

        {/* Main content */}
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-6">
            <p className="text-lg text-foreground/90 leading-relaxed">
              I am currently a <strong>Software Engineer</strong> focused on conservation technology, 
              working on AI solutions for wildlife protection in South Africa. Currently developing 
              anti-poaching systems using computer vision and machine learning.
            </p>
            
            <p className="text-lg text-foreground/90 leading-relaxed">
              Here are some technologies I have been working with:
            </p>
            
            {/* Technologies list */}
            <div className="space-y-3">
              {technologies.map((tech, index) => (
                <div key={index} className="flex items-center text-foreground">
                  <span className="text-primary mr-3">→</span>
                  {tech}
                </div>
              ))}
            </div>
            
            <p className="text-lg text-foreground/90 leading-relaxed">
              When I'm not coding or building things, you'll find me exploring new technologies, 
              enjoying the African outdoors, or thinking about the next big challenge to tackle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;