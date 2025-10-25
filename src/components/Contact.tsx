import { Button } from "@/components/ui/button";
import { Mail, Instagram, Facebook } from "lucide-react";

const Contact = () => {
  return (
    <section id="social" className="py-20 px-4 bg-primary text-primary-foreground">
      <div className="container max-w-3xl text-center space-y-8">
        <h2 className="font-display text-4xl md:text-5xl font-bold">
          Síguenos en nuestras redes
        </h2>
        
        <p className="font-body text-lg text-primary-foreground/90 max-w-xl mx-auto">
          Mantente al día con las últimas noticias sobre el autor, eventos literarios y nuevas publicaciones.
        </p>
        
        <div className="flex justify-center gap-6 pt-4 flex-wrap">
          <Button
            variant="secondary"
            size="lg"
            className="font-body min-w-[160px]"
            asChild
          >
            <a href="mailto:cuandocomenzamosaexistir@gmail.com" target="_blank" rel="noopener noreferrer">
              <Mail className="w-6 h-6 mr-2" />
              Email
            </a>
          </Button>
          
          <Button
            variant="secondary"
            size="lg"
            className="font-body"
            asChild
          >
            <a href="https://www.facebook.com/profile.php?id=61582685737219" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-6 h-6 mr-2" />
              Facebook
            </a>
          </Button>
          
          <Button
            variant="secondary"
            size="lg"
            className="font-body"
            asChild
          >
            <a href="https://www.instagram.com/cuandocomenzamosaexistir/" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-6 h-6 mr-2" />
              Instagram
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
