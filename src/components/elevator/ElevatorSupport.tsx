const ElevatorSupport = () => {
  const supports = [
    {
      title: "Financiamento: pague em prestações",
      description:
        "A maioria das empresas instaladoras oferece opções de financiamento flexíveis, permitindo distribuir o custo por prestações mensais acessíveis.",
    },
    {
      title: "IVA reduzido",
      description:
        "Os elevadores residenciais podem beneficiar de uma taxa de IVA reduzida para equipamentos de acessibilidade, tornando a aquisição mais acessível.",
    },
    {
      title: "Apoios e incentivos",
      description:
        "Existem programas de apoio público para adaptação de habitações, que podem cobrir parte do investimento em soluções de acessibilidade.",
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
      </div>
    </section>
  );
};

export default ElevatorSupport;
