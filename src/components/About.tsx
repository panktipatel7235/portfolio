import { GraduationCap, Languages, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6" data-aos="fade-right">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm a passionate designer combining creativity and technology to create 
              meaningful digital experiences. My design philosophy centers on creating 
              <span className="font-semibold text-foreground"> user-centric, clean, functional, 
              and aesthetically pleasing designs</span> that solve real problems.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Currently pursuing my Master of Computer Applications while working as a 
              Graphic Designer, I bring a unique blend of technical knowledge and creative 
              vision to every project.
            </p>
          </div>

          <div className="grid gap-4" data-aos="fade-left">
            <Card 
              className="hover-lift border-none shadow-md bg-card"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <CardContent className="flex items-start gap-4 p-6">
                <div className="bg-secondary/20 p-3 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Education</h3>
                  <p className="text-sm text-muted-foreground">
                    Bachelor of Computer Applications (2024)
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Master of Computer Applications (In Progress)
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Shree Swaminarayan College & Gyanmanjari Innovation University
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card 
              className="hover-lift border-none shadow-md bg-card"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <CardContent className="flex items-start gap-4 p-6">
                <div className="bg-accent/20 p-3 rounded-lg">
                  <Languages className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Languages</h3>
                  <p className="text-sm text-muted-foreground">
                    Gujarati, Hindi, English
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card 
              className="hover-lift border-none shadow-md bg-card"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <CardContent className="flex items-start gap-4 p-6">
                <div className="bg-secondary/20 p-3 rounded-lg">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Hobbies</h3>
                  <p className="text-sm text-muted-foreground">
                    Art & Drawing
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
