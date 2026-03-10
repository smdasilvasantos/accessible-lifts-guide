const PriceShafts = () => {
  const shafts = [
    { label: "1 Andar", min: 9000, max: 18000, height: "50%" },
    { label: "2–3 Andares", min: 18000, max: 30000, height: "75%" },
    { label: "Personalizado", min: 30000, max: 50000, height: "100%" },
  ];

  return (
    <section className="bg-warm section-spacing">
      <div className="content-width">
        <h2 className="font-heading font-semibold text-2xl md:text-3xl mb-4">
          Faixas de preço por tipo
        </h2>
        <p className="font-body text-base text-muted-foreground mb-12">
          Representação visual das gamas de preço conforme o número de pisos e
          complexidade da instalação.
        </p>

        <div className="flex items-end justify-center gap-8 md:gap-16 h-[320px]">
          {shafts.map((shaft) => (
            <div key={shaft.label} className="flex flex-col items-center gap-3 h-full justify-end">
              <span className="font-heading font-semibold text-sm text-highlight">
                €{shaft.max.toLocaleString("pt-PT")}
              </span>
              <div
                className="w-16 md:w-20 bg-foreground/10 border-l-2 border-r-2 border-border relative transition-all duration-500"
                style={{ height: shaft.height }}
              >
                <div className="absolute inset-0 bg-primary/10" />
              </div>
              <span className="font-heading font-semibold text-sm text-highlight">
                €{shaft.min.toLocaleString("pt-PT")}
              </span>
              <span className="font-body text-xs text-muted-foreground mt-1 text-center">
                {shaft.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PriceShafts;
