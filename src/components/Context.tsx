import { MapPin, Calendar, Users, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useRef, useState, useEffect } from "react";
import foto1 from "@/assets/Foto_Historico1.jpg";
import foto2 from "@/assets/Foto_Historico2.jpg";
import foto3 from "@/assets/Foto_Historico3.jpg";
import foto4 from "@/assets/Foto_Historico4.jpg";
import foto5 from "@/assets/Foto_Historico5.jpg";

const Context = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const contextItems = [
    {
      icon: MapPin,
      title: "Belén, Extremadura",
      description: "Una pequeña localidad extremeña que representa el despertar de los pueblos marginados durante la Transición española.",
    },
    {
      icon: Calendar,
      title: "La Transición",
      description: "Los años tras la muerte de Franco, un momento histórico de profundos cambios sociales y políticos en España.",
    },
    {
      icon: Users,
      title: "Trama Común",
      description: "Múltiples voces que se entrelazan para narrar una historia de compañerismo, lucha y dignidad.",
    },
  ];

  const images = [foto1, foto2, foto3, foto4, foto5];
  // Duplicate images for seamless infinite loop
  const infiniteImages = [...images, ...images, ...images];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      
      scrollTimeout = setTimeout(() => {
        const scrollLeft = carousel.scrollLeft;
        const scrollWidth = carousel.scrollWidth;
        const oneThird = scrollWidth / 3;
        const twoThirds = scrollWidth * 2 / 3;
        
        // When reaching the end, jump to middle (seamlessly)
        if (scrollLeft >= twoThirds) {
          carousel.style.scrollBehavior = 'auto';
          carousel.scrollLeft = oneThird + (scrollLeft - twoThirds);
          requestAnimationFrame(() => {
            carousel.style.scrollBehavior = 'smooth';
          });
        }
        // When reaching the beginning, jump to middle (seamlessly)
        else if (scrollLeft <= 0) {
          carousel.style.scrollBehavior = 'auto';
          carousel.scrollLeft = oneThird + scrollLeft;
          requestAnimationFrame(() => {
            carousel.style.scrollBehavior = 'smooth';
          });
        }
      }, 50);
    };

    carousel.addEventListener('scroll', handleScroll, { passive: true });
    
    // Start in the middle section
    carousel.scrollLeft = carousel.scrollWidth / 3;

    return () => {
      carousel.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 px-4 bg-card">
      <div className="container max-w-6xl">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4 text-center">
          Contexto histórico
        </h2>
        <p className="font-body text-lg text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
          Una novela que captura la esencia de un momento crucial en la historia de España
        </p>
        
        {/* Historical Images Carousel */}
        <div className="relative mb-16">
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg"
            onClick={scrollLeft}
            aria-label="Imagen anterior"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto overflow-y-hidden scrollbar-hide pb-4 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {infiniteImages.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[300px] md:w-[400px] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image}
                  alt={`Fotografía histórica ${(index % images.length) + 1}`}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg"
            onClick={scrollRight}
            aria-label="Siguiente imagen"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        {/* Full-size Image Modal */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-7xl w-[95vw] h-[95vh] p-0 bg-transparent border-0">
            <div className="relative w-full h-full flex items-center justify-center">
              {selectedImage && (
                <img
                  src={selectedImage}
                  alt="Fotografía histórica ampliada"
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
              )}
              <Button
                variant="outline"
                size="icon"
                className="absolute top-4 right-4 bg-white/90 hover:bg-white z-20"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        <div className="grid md:grid-cols-3 gap-8">
          {contextItems.map((item, index) => (
            <Card key={index} className="border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="pt-8 pb-6 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-primary">
                  {item.title}
                </h3>
                <p className="font-body text-foreground/80 leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Context;
