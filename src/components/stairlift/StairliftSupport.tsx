const StairliftSupport = () => {
  const supports = [
    {
      title: "Sistema de Atribuição de Produtos de Apoio (SAPA)",
      description:
        "Iniciativa pública para apoiar pessoas com limitações de mobilidade, ajudando a adaptar casas com equipamentos que promovam maior acessibilidade.",
    },
    {
      title: "IVA reduzido",
      description:
        "Os elevadores de escadas beneficiam de uma taxa de IVA reduzida de 6%, em vez da taxa normal de 23%, tornando a aquisição mais acessível.",
    },
    {
      title: "Financiamento: pague em prestações",
      description:
        "A maioria das empresas instaladoras oferece opções de financiamento flexíveis, permitindo distribuir o custo por prestações mensais acessíveis.",
    },
  ];

  return (
    <section className="bg-secondary section-spacing">
      <div className="content-width">
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-10">
          Que apoios existem à compra?
        </h2>
        <div className="space-y-5">
          {supports.map((support, index) => (
            <div
              key={support.title}
              className="bg-card rounded-xl p-6 border border-border shadow-sm flex gap-5"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <span className="font-heading font-bold text-sm text-primary">
                  {index + 1}
                </span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-base text-foreground mb-2">
                  {support.title}
                </h3>
                <p className="font-body text-sm leading-relaxed text-muted-foreground">
                  {support.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 font-heading font-bold text-sm text-primary hover:text-primary/80 transition-colors cursor-pointer">
          Saber mais sobre apoios à compra de equipamentos →
        </p>
      </div>
    </section>
  );
};

export default StairliftSupport;
