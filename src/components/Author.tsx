import fotoAutor from "@/assets/Foto_Autor.jpg";

const Author = () => {
  return (
    <section id="author" className="py-20 px-4 bg-gradient-to-b from-card to-muted">
      <div className="container max-w-4xl">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-12 text-center">
          Sobre el autor
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="flex justify-center md:justify-start">
            <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg">
              <img 
                src={fotoAutor} 
                alt="Manuel Martín Sánchez"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
          
          <div className="md:col-span-2 space-y-4 font-body text-lg text-foreground/90 leading-relaxed">
            <h3 className="font-display text-3xl font-semibold text-primary mb-4">
              Manuel Martín Sánchez
            </h3>
            <p>
              Escritor extremeño comprometido con la memoria histórica y las historias de su tierra. 
              Su narrativa se caracteriza por la profundidad emocional y el retrato fiel de los 
              personajes que han vivido momentos cruciales de la historia reciente de España.
            </p>
            <p>
              Con "Cuando comenzamos a existir", Manuel nos invita a reflexionar sobre el pasado 
              para comprender mejor el presente, tejiendo una historia coral que entrelaza lo 
              personal con lo colectivo, lo íntimo con lo histórico.
            </p>
            <p className="text-base italic text-muted-foreground pt-4">
              Editorial Onuba
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Author;
