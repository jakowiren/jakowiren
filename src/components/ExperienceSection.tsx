import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ExperienceSection = () => {
  const experiences = [
    {
      id: "xer",
      company: "XER Technologies",
      role: "AI Systems Developer", 
      period: "2023 - PRESENT",
      description: "Leading development of AI-powered anti-poaching surveillance systems for South African wildlife reserves. Building computer vision models and IoT sensor networks for real-time threat detection and ranger coordination.",
      skills: ["Python", "TensorFlow", "Computer Vision", "IoT", "Machine Learning"]
    },
    {
      id: "volvo",
      company: "Volvo",
      role: "Software Engineer & Researcher",
      period: "2022 - 2023", 
      description: "Developed conservation data analytics platforms and mobile applications for wildlife protection. Focused on creating scalable solutions for ranger networks and wildlife monitoring systems.",
      skills: ["React", "Node.js", "Python", "Data Analytics", "Mobile Development"]
    },
    {
      id: "bosch",
      company: "Bosch",
      role: "Student Researcher",
      period: "2020 - 2022",
      description: "Worked on robotics and AI/ML projects with focus on real-world applications. Built experience in computer vision, sensor integration, and automated systems for environmental monitoring.",
      skills: ["Robotics", "Computer Vision", "Sensor Integration", "C++", "Python"]
    }
  ];

  const [activeTab, setActiveTab] = useState("xer");

  return (
    <section id="experience" className="py-20 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="section-title">/ experience</h2>
        </div>

        {/* Experience with sidebar */}
        <div className="max-w-5xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Sidebar */}
              <div className="lg:w-1/3">
                <TabsList className="flex lg:flex-col w-full h-auto bg-transparent p-0 gap-0">
                  {experiences.map((exp) => (
                    <TabsTrigger
                      key={exp.id}
                      value={exp.id}
                      className="w-full justify-start text-left p-4 bg-transparent data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:border-l-4 data-[state=active]:border-primary hover:text-primary/80 transition-all border-l-4 border-transparent"
                    >
                      {exp.company}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {/* Content */}
              <div className="lg:w-2/3">
                {experiences.map((exp) => (
                  <TabsContent key={exp.id} value={exp.id} className="mt-0">
                    <div className="space-y-6 p-0">
                      <div className="space-y-2">
                        <h3 className="text-2xl font-medium text-foreground">{exp.role}</h3>
                        <h4 className="text-xl text-primary font-medium">{exp.company}</h4>
                        <span className="text-sm text-primary font-medium">{exp.period}</span>
                      </div>
                      
                      <p className="text-foreground/90 leading-relaxed text-lg">
                        {exp.description}
                      </p>

                      <div className="space-y-3">
                        <h5 className="text-sm font-medium text-muted-foreground">Technologies & Skills</h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, index) => (
                            <span 
                              key={index} 
                              className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                ))}
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;