import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, FileText, ExternalLink } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "pankti7235@gmail.com",
      href: "mailto:pankti7235@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8487034230",
      href: "tel:+918487034230",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Diwdi Chwok, Rupani Circle, Bhavnagar",
      href: null,
    },
  ];

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground text-lg">
            Let's collaborate on your next project
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <Card key={index} className="hover-lift border-none shadow-md bg-card animate-fade-in-up text-center">
              <CardContent className="p-6">
                <div className="bg-secondary/20 p-4 rounded-lg w-fit mx-auto mb-4">
                  <info.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{info.label}</h3>
                {info.href ? (
                  <a
                    href={info.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-sm text-muted-foreground">{info.value}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-none shadow-lg bg-card animate-fade-in-up">
          <CardContent className="p-8 text-center space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Download My Resume</h3>
              <p className="text-muted-foreground">
                View my complete professional background and experience
              </p>
            </div>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8"
              asChild
            >
              <a
                href="https://www.canva.com/design/DAF9j8e8Wg4/qbfCJn8MrfpgWHzgv08L5g/view?utm_content=DA[%E2%80%A6]m_campaign=designshare&utm_medium=link&utm_source=editor"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText className="mr-2 h-5 w-5" />
                View Resume
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
