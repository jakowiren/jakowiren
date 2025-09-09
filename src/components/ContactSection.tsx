import { Mail, Phone, MapPin, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ContactSection = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "jakowiren@gmail.com",
      href: "mailto:jakowiren@gmail.com",
      description: "Best way to reach me"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+46 76 286 33 89",
      href: "tel:+46762863389",
      description: "Available during Swedish hours"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Sweden / South Africa",
      href: null,
      description: "Remote friendly"
    },
    {
      icon: Coffee,
      label: "Coffee Chat",
      value: "Always up for it",
      href: "mailto:jakowiren@gmail.com?subject=Coffee%20Chat",
      description: "Let's discuss tech & conservation"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 sm:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="section-title">/ get in touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you want to collaborate on conservation tech, discuss AI projects, 
            or just chat about solving problems with technology.
          </p>
        </div>

        {/* Contact grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <Card key={index} className="group hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <method.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-foreground mb-1">{method.label}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                    {method.href ? (
                      <Button variant="ghost" asChild className="p-0 h-auto text-left justify-start">
                        <a href={method.href} className="text-primary hover:text-primary/80">
                          {method.value}
                        </a>
                      </Button>
                    ) : (
                      <p className="text-primary">{method.value}</p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main CTA */}
        <div className="text-center">
          <Card className="bg-surface-elevated border-primary/20">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-medium mb-4">Let's build something amazing together</h3>
                  <p className="text-muted-foreground">
                    Interested in conservation technology? Have a problem that needs solving? 
                    Or just want to talk about the intersection of tech and making the world better?
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild className="shadow-glow">
                    <a href="mailto:jakowiren@gmail.com?subject=Let's%20collaborate">
                      <Mail className="h-5 w-5 mr-2" />
                      Start a conversation
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="tel:+46762863389">
                      <Phone className="h-5 w-5 mr-2" />
                      Give me a call
                    </a>
                  </Button>
                </div>

                <div className="pt-4">
                  <span className="percentage-badge">100% response rate (eventually)</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;