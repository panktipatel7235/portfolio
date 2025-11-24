import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBanner}
          alt="Hero background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-accent/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-padding text-center max-w-4xl mx-auto">
        <div className="space-y-6">
          <h1 
            className="text-5xl md:text-7xl font-bold tracking-tight"
            data-aos="fade-up"
          >
            <span className="block text-foreground">Patel Pankti</span>
            <span 
              className="block mt-2 gradient-text"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Graphic & UI/UX Designer
            </span>
          </h1>
          
          <p 
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Creative designer crafting user-friendly and visually appealing digital experiences.
          </p>

          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8"
              onClick={scrollToAbout}
            >
              View My Work
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-8"
              asChild
            >
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-primary" />
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
