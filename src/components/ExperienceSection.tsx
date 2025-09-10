const ExperienceSection = () => {
  const experiences = [
    {
      company: "Conservation Tech Initiative",
      role: "AI Systems Developer", 
      period: "2023 - PRESENT",
      description: "Leading development of AI-powered anti-poaching surveillance systems for South African wildlife reserves. Building computer vision models and IoT sensor networks for real-time threat detection and ranger coordination."
    },
    {
      company: "Independent Projects",
      role: "Software Engineer & Researcher",
      period: "2022 - 2023", 
      description: "Developed conservation data analytics platforms and mobile applications for wildlife protection. Focused on creating scalable solutions for ranger networks and wildlife monitoring systems."
    },
    {
      company: "University Projects",
      role: "Student Researcher",
      period: "2020 - 2022",
      description: "Worked on robotics and AI/ML projects with focus on real-world applications. Built experience in computer vision, sensor integration, and automated systems for environmental monitoring."
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="section-title">/ experience</h2>
        </div>

        {/* Experience list */}
        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-2 border-primary/20 pl-8 relative">
              <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-2"></div>
              
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <h3 className="text-xl font-medium text-foreground">{exp.role}</h3>
                  <span className="text-sm text-primary font-medium">{exp.period}</span>
                </div>
                
                <h4 className="text-lg text-primary font-medium">{exp.company}</h4>
                
                <p className="text-foreground/90 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;