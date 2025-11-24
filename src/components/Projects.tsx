import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Figma } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const Projects = () => {
  const projects = [
    // {
    //   title: "Trendify - E-Commerce Fashion App",
    //   role: "UI/UX Designer",
    //   description: "Modern fashion e-commerce mobile app with intuitive navigation, clean product displays, and seamless checkout experience.",
    //   tools: ["Figma", "UI Design", "Prototyping"],
    //   image: project1,
    //   link: "https://www.figma.com/design/IKcXxiTlHIU1GY6LsS8nFr/trendify?node-id=0-1&t=h0gZGPkCdjhkz3qn-1",
    // },
    // {
    //   title: "Brand Identity Design",
    //   role: "Graphic Designer",
    //   description: "Complete brand identity package including logo design, business cards, letterheads, and social media templates.",
    //   tools: ["Illustrator", "Canva", "Brand Design"],
    //   image: project2,
    // },
    {
      title: "Portfolio Website Design",
      role: "UI/UX Designer",
      description: "Clean and professional portfolio website design with focus on showcasing creative work effectively.",
      tools: ["Figma", "Web Design", "Responsive Design"],
      image: project3,
    },
    {
      title: "Social Media Campaign",
      role: "Graphic Designer",
      description: "Cohesive social media design templates and marketing materials for brand consistency across platforms.",
      tools: ["Canva", "Social Media Design", "Marketing"],
      image: project4,
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my design work spanning UI/UX and graphic design projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="hover-lift border-none shadow-lg overflow-hidden bg-card group"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                  <p className="text-sm text-primary font-medium">{project.role}</p>
                </div>
                <p className="text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-secondary/20 text-primary text-xs rounded-full font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                {/* {project.link && (
                  <Button
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Figma className="mr-2 h-4 w-4" />
                      View in Figma
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                )} */}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card 
            className="border-none shadow-lg bg-card inline-block"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <CardContent className="p-6">
              <p className="text-muted-foreground mb-4">View more work samples</p>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                asChild
              >
                <a
                  href="https://drive.google.com/drive/folders/1qSASFDrCqJr0ClAEo6Mzh0qNzn4z00Lf?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See Full Portfolio
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
