import { ExternalLink, Github, Zap, Shield, Brain, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const OtherThingsSection = () => {
  const projects = [
    {
      title: "Anti-Poaching AI System",
      description: "AI-powered surveillance system for wildlife protection in South African reserves. Uses computer vision and machine learning to detect and alert rangers about potential poaching activities.",
      icon: Shield,
      tags: ["Python", "TensorFlow", "Computer Vision", "IoT"],
      status: "In Development",
      highlight: true
    },
    {
      title: "Conservation Data Analytics",
      description: "Real-time analytics platform for tracking wildlife populations and conservation metrics. Helps rangers make data-driven decisions for wildlife protection.",
      icon: Brain,
      tags: ["React", "TypeScript", "Python", "Data Analytics"],
      status: "Live",
      highlight: false
    },
    {
      title: "Smart Ranger Network",
      description: "Mobile application connecting rangers across conservation areas. Features real-time communication, incident reporting, and coordinated response systems.",
      icon: Zap,
      tags: ["React Native", "Node.js", "WebSockets", "Mobile"],
      status: "Planning",
      highlight: false
    }
  ];

  return (
    <section id="other-things" className="py-20 px-6 sm:px-8 pb-32">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="mb-16">
          <h2 className="section-title">/ other things</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mt-4">
            Building technology that makes a difference in conservation and wildlife protection.
          </p>
        </div>

        {/* Projects carousel */}
        <div className="w-full">
          <Carousel className="w-full">
            <CarouselContent className="-ml-4">
              {projects.map((project, index) => (
                <CarouselItem key={index} className="pl-4">
                  <Card
                    className={`group hover:shadow-glow transition-all duration-300 h-full ${
                      project.highlight ? 'border-primary/50 bg-surface-elevated' : ''
                    }`}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="p-3 bg-primary/10 rounded-lg mb-4">
                          <project.icon className="h-6 w-6 text-primary" />
                        </div>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          project.status === 'Live' ? 'bg-green-500/10 text-green-400' :
                          project.status === 'In Development' ? 'bg-primary/10 text-primary' :
                          'bg-muted text-muted-foreground'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, tagIndex) => (
                            <span 
                              key={tagIndex} 
                              className="text-xs px-2 py-1 bg-muted rounded-md text-muted-foreground"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Action buttons */}
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm" className="flex-1">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            View Project
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Github className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-12 h-12 w-12" />
            <CarouselNext className="-right-12 h-12 w-12" />
          </Carousel>
        </div>

      </div>
    </section>
  );
};

export default OtherThingsSection;