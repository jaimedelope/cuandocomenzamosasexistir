import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import bookCover from "@/assets/book-cover.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted px-4 py-20">
      <div className="container max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-2 md:order-1">
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight">
              Cuando comenzamos a existir
            </h1>
            <p className="font-display text-2xl md:text-3xl text-muted-foreground italic">
              de Manuel Martín Sánchez
            </p>
            <p className="font-body text-lg text-foreground/80 leading-relaxed">
              Una novela que retrata un tiempo y unas circunstancias que nos harán reflexionar, 
              sonreír y emocionarnos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="font-body text-base"
                onClick={() => scrollToSection("synopsis")}
              >
                Descubre la historia
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="font-body text-base"
                onClick={() => scrollToSection("buy")}
              >
                Comprar libro
              </Button>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full"></div>
              <img 
                src={bookCover} 
                alt="Portada del libro Cuando comenzamos a existir"
                className="relative w-full max-w-md rounded-lg shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
