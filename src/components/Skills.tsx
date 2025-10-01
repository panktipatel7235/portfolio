import { Card, CardContent } from "@/components/ui/card";
import { Palette, Lightbulb, Users, MessageSquare, Clock, Target, Layers, Code2 } from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    {
      category: "UI/UX Design",
      skills: ["Wireframing", "Prototyping", "Interaction Design", "User Research"],
      icon: Layers,
    },
    {
      category: "Graphic Design",
      skills: ["Logo Design", "Banners", "Social Media Graphics", "Marketing Materials"],
      icon: Palette,
    },
    {
      category: "Tools",
      skills: ["Canva", "Adobe Illustrator", "Figma", "Design Systems"],
      icon: Code2,
    },
  ];

  const softSkills = [
    { name: "Creativity", icon: Lightbulb },
    { name: "Teamwork", icon: Users },
    { name: "Communication", icon: MessageSquare },
    { name: "Time Management", icon: Clock },
    { name: "Attention to Detail", icon: Target },
    { name: "Problem Solving", icon: Target },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Technical Skills</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {technicalSkills.map((skill, index) => (
              <Card key={index} className="hover-lift border-none shadow-md bg-card animate-fade-in-up">
                <CardContent className="p-6">
                  <div className="bg-secondary/20 p-3 rounded-lg w-fit mb-4">
                    <skill.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-lg mb-3">{skill.category}</h4>
                  <ul className="space-y-2">
                    {skill.skills.map((item, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">Soft Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {softSkills.map((skill, index) => (
              <Card key={index} className="hover-lift border-none shadow-md bg-card animate-fade-in-up text-center">
                <CardContent className="p-6">
                  <div className="bg-accent/20 p-3 rounded-lg w-fit mx-auto mb-3">
                    <skill.icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-sm font-medium">{skill.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
