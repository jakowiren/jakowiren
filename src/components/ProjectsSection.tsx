import { ExternalLink, Github, Zap, Shield, Brain, ChevronLeft, ChevronRight, FileText, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const OtherThingsSection = () => {
  const projects = [
    {
      title: "Machine Learning for Antipoaching",
      subtitle: "Worked in South Africa and developed decision trees for antipoaching. From data collection to hyperparameter tuning. Three different subproblems and solutions. Authored a thesis.",
      backgroundImage: "/RSA.png",
      isSpecial: true,
      tags: ["Python", "Machine Learning", "Decision Trees", "Research"],
      status: "Completed",
      highlight: true
    },
    {
      title: "Engineering an autonomous vehicle",
      subtitle: "Manager for a team of five software engineering and physics students working to build an autonomous formula student car in one year. Failed a lot. Learned a lot.",
      backgroundImage: "/LFS2.png",
      isSpecial: true,
      tags: ["Leadership", "Autonomous Systems", "Team Management", "Formula Student"],
      status: "Completed",
      highlight: false
    },
    {
      title: "Startup Ideas",
      subtitle: "constantly spinning ideas about ways to do start ups and changing the world.",
      backgroundImage: "/goodhub.png",
      isSpecial: true,
      tags: ["Entrepreneurship", "Innovation", "Ideas", "Startups"],
      status: "Ongoing",
      highlight: false
    }
  ];

  return (
    <section id="other-things" className="py-20 px-6 sm:px-8 pb-32">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="mb-16">
          <h2 className="section-title">/ other things</h2>
        </div>

        {/* Projects carousel */}
        <div className="w-full">
          <Carousel className="w-full">
            <CarouselContent className="-ml-4">
              {projects.map((project, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card
                    className={`group hover:shadow-glow transition-all duration-300 h-full ${
                      project.highlight ? 'border-primary/50 bg-surface-elevated' : ''
                    }`}
                  >
                    {project.isSpecial ? (
                      // Special card with background image
                      <div 
                        className="relative h-96 rounded-lg overflow-hidden flex items-center justify-center"
                        style={{ 
                          backgroundImage: `url(${project.backgroundImage})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat'
                        }}
                      >
                        <div className="absolute inset-0 bg-black/60"></div>
                        <div className="relative z-10 text-center text-white px-6">
                          <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                          <p className="text-sm opacity-90 leading-relaxed mb-4">{project.subtitle}</p>
                          {index === 0 && (
                            <div className="flex gap-2 justify-center">
                              <Button 
                                variant="ghost" 
                                size="sm" 
                                className="text-white border-white/30 hover:bg-white/10 p-2"
                                asChild
                              >
                                <a href="https://lup.lub.lu.se/student-papers/search/publication/9186769" target="_blank" rel="noopener noreferrer">
                                  <FileText className="h-4 w-4" />
                                </a>
                              </Button>
                              <Button 
                                variant="ghost" 
                                size="sm" 
                                className="text-white border-white/30 hover:bg-white/10 p-2"
                                asChild
                              >
                                <a href="/2025-KristianSoltesz.pdf" target="_blank" rel="noopener noreferrer">
                                  <MessageCircle className="h-4 w-4" />
                                </a>
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>
                    ) : (
                      // Regular card
                      <>
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
                      </>
                    )}
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