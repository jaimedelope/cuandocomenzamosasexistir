import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen } from "lucide-react";
import bookCover from "@/assets/book-cover.jpg";
const BuySection = () => {
  return <section id="buy" className="py-20 px-4 bg-gradient-to-b from-muted to-background">
      <div className="container max-w-5xl">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-12 text-center">
          Consigue tu ejemplar
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img src={bookCover} alt="Cuando comenzamos a existir" className="w-full max-w-sm mx-auto rounded-lg shadow-2xl" />
          </div>
          
          <div className="order-1 md:order-2 space-y-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <BookOpen className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-display text-xl font-semibold text-primary mb-1">
                    Editorial Onuba
                  </h3>
                  <p className="font-body text-foreground/80">
                    Disponible en formato físico y digital
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-3">
              <p className="font-body text-lg font-semibold text-primary">Dónde comprar:</p>
              
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-between font-body text-base" asChild>
                  <a
                    href="https://www.editorialonuba.es/cat%C3%A1logo-novedades/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-between"
                  >
                    Comprar en Editorial Onuba
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default BuySection;