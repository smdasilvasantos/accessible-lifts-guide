const PriceShafts = () => {
  const shafts = [
    { label: "1 Andar", subtitle: "Modelo básico", min: 9000, max: 18000, pct: 36 },
    { label: "2–3 Andares", subtitle: "Mais comum", min: 18000, max: 30000, pct: 60 },
    { label: "Personalizado", subtitle: "Premium", min: 30000, max: 50000, pct: 100 },
  ];

  return (
    <section className="bg-secondary section-spacing">
      <div className="content-width">
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-3">
          Faixas de preço por tipo
        </h2>
        <p className="font-body text-base text-muted-foreground mb-12">
          Gamas de preço conforme o número de pisos e complexidade da instalação.
        </p>

        <div className="grid grid-cols-3 gap-4 md:gap-8">
          {shafts.map((shaft) => (
            <div
              key={shaft.label}
              className="bg-card rounded-xl p-5 md:p-6 flex flex-col items-center text-center shadow-sm border border-border"
            >
              <p className="font-heading font-bold text-sm md:text-base text-foreground mb-1">
                {shaft.label}
              </p>
              <p className="font-body text-xs text-muted-foreground mb-6">
                {shaft.subtitle}
              </p>

              {/* Visual bar */}
              <div className="w-full h-32 md:h-44 bg-muted rounded-lg relative overflow-hidden mb-6">
                <div
                  className="absolute bottom-0 left-0 right-0 bg-primary/15 border-t-2 border-primary rounded-b-lg transition-all"
                  style={{ height: `${shaft.pct}%` }}
                />
              </div>

              <p className="font-heading font-bold text-lg md:text-xl text-primary">
                €{shaft.min.toLocaleString("pt-PT")}
              </p>
              <p className="font-body text-xs text-muted-foreground">
                até €{shaft.max.toLocaleString("pt-PT")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PriceShafts;
