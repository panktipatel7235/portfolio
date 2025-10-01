import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <Card className="hover-lift border-none shadow-lg bg-card animate-fade-in-up">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="bg-secondary/20 p-4 rounded-lg h-fit">
                <Briefcase className="h-8 w-8 text-primary" />
              </div>

              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold">Graphic Designer</h3>
                  <p className="text-lg text-primary font-semibold">Codify Software Solutions</p>
                  <div className="flex items-center gap-2 text-muted-foreground mt-2">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">July 2024 - July 2025</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Key Responsibilities:</h4>
                  <ul className="space-y-2">
                    {[
                      "Designing compelling logos and brand identity materials",
                      "Creating eye-catching banners and promotional graphics",
                      "Developing engaging social media posts and campaigns",
                      "Producing comprehensive marketing materials",
                      "Collaborating with cross-functional teams to deliver creative solutions",
                      "Continuously improving design skills and staying updated with trends",
                    ].map((responsibility, index) => (
                      <li key={index} className="flex items-start gap-3 text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Experience;
