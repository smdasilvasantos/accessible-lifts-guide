const supports = [
  {
    title: "Sistema de Atribuição de Produtos de Apoio",
    description: "Programa público que pode apoiar a aquisição de equipamentos de mobilidade.",
  },
  {
    title: "IVA reduzido",
    description: "Elevadores de escadas beneficiam de taxa de IVA reduzida de 6 por cento.",
  },
  {
    title: "Financiamento",
    description: "Muitas empresas disponibilizam pagamento em prestações.",
  },
];

const TesteSupport = () => {
  return (
    <section className="section-spacing">
      <div className="content-width">
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-8">
          Apoios disponíveis para a compra
        </h2>
        <div className="grid sm:grid-cols-3 gap-5">
          {supports.map((support, index) => (
            <div
              key={support.title}
              className="bg-card rounded-xl p-6 border border-border shadow-sm"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="font-heading font-bold text-sm text-primary">
                  {index + 1}
                </span>
              </div>
              <h3 className="font-heading font-bold text-base text-foreground mb-2">
                {support.title}
              </h3>
              <p className="font-body text-sm leading-relaxed text-muted-foreground">
                {support.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TesteSupport;
