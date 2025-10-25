const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-card border-t border-border">
      <div className="container max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p className="font-body">
            © {new Date().getFullYear()} Manuel Martín Sánchez. Todos los derechos reservados.
          </p>
          <p className="font-body">
            Editorial Onuba
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
