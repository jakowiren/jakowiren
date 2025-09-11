import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const ExperienceSection = () => {
  const experiences = [
    {
      id: "xer",
      company: "XER Technologies",
      role: "Software Developer", 
      period: "March 2025 - PRESENT",
      description: "Built data management software and pipelines from the ground up. Replaced DroneLogBook as operations tracking tool. Built data visualisation tools and an automated maintenance tracking tool. Improved flight critical pilot-facing software in Unity and consolidated several sources of flight data into one, leading to organisational ownership of entire data pipeline.",
      skills: ["TypeScript", "Python", "Supabase", "AWS", "C#", "Unity", "Docker"]
    },
    {
      id: "volvo",
      company: "Volvo",
      role: "Software Intern: Testing",
      period: "Summer 2024", 
      description: "Developed unit tests in C++ and Robot tests. Manually flashed and tested new release software on test vehicles. Worked within the Connectivity Team.",
      skills: ["C++", "Robot", "CI/CD", "Hardware Integration"]
    },
    {
      id: "bosch",
      company: "Bosch",
      role: "Software Intern: Testing",
      period: "Summer 2022",
      description: "Created an automated testing platform for Bluetooth in Android-based In-Vehicle-Infotainment systems.",
      skills: ["Python", "Robot", "Appium", "BLE", "CI/CD"]
    }
  ];

  const [activeTab, setActiveTab] = useState("xer");

  return (
    <section id="experience" className="py-20 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="mb-16 flex items-center justify-between">
          <h2 className="section-title">/ experience</h2>
          <Button 
            variant="ghost" 
            size="sm" 
            className="hover:text-primary transition-colors"
            asChild
          >
            <a href="/CV Jakob Wiren.pdf" target="_blank" rel="noopener noreferrer">
              <FileText className="h-5 w-5" />
            </a>
          </Button>
        </div>

        {/* Experience with sidebar */}
        <div className="w-full">
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
                  <TabsContent key={exp.id} value={exp.id} className="mt-0 animate-fade-in">
                    <div className="space-y-6 p-0 transition-all duration-300 ease-in-out">
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