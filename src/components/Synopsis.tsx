const Synopsis = () => {
  return (
    <section id="synopsis" className="py-20 px-4 bg-card">
      <div className="container max-w-4xl">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
          La historia
        </h2>
        
        <div className="space-y-6 font-body text-lg text-foreground/90 leading-relaxed">
          <p className="first-letter:text-6xl first-letter:font-display first-letter:font-bold first-letter:text-primary first-letter:mr-2 first-letter:float-left">
            Una novela que retrata un tiempo y unas circunstancias que nos harán reflexionar, 
            sonreír y emocionarnos. Un relato coral enmarcado en un momento histórico singular, 
            la Transición, donde sus protagonistas intentan dejar atrás una dura época para 
            engancharse a un futuro mejor, aunque ello suponga pagar un alto peaje para algunos 
            de ellos.
          </p>

          <p>
            Una trama donde convergen, indisolublemente unidas, tres transiciones que condicionan 
            la vida de los personajes:
          </p>

          <div className="pl-6 border-l-4 border-accent space-y-4 my-8">
            <p className="font-semibold text-primary">
              El despertar de un pueblo largamente marginado.
            </p>
            <p className="font-semibold text-primary">
              Los profundos cambios que se producen en el país después de la muerte de Franco.
            </p>
            <p className="font-semibold text-primary">
              La repentina madurez de un niño forzada por una pérdida familiar.
            </p>
          </div>

          <p>
            Todas tienen lugar en Belén, una pequeña localidad extremeña, donde se desarrolla 
            este emocionante relato de compañerismo y lucha por la dignidad ante la resistencia 
            de las fuerzas que desean perpetuar sus privilegios.
          </p>

          <p className="text-xl font-display italic text-primary text-center pt-6">
            No permitas que su historia se quede en el olvido.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Synopsis;
