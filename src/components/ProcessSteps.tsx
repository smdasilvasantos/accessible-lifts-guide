const ProcessSteps = () => {
  const steps = [
    {
      number: "1",
      title: "Avaliação personalizada",
      description:
        "Solicite uma visita de avaliação gratuita à sua casa, realizada por parceiros especializados, para entender as suas necessidades e as características da habitação.",
    },
    {
      number: "2",
      title: "Orçamento detalhado",
      description:
        "Receberá um orçamento detalhado e personalizado que considera todos os aspectos da instalação do elevador residencial.",
    },
    {
      number: "3",
      title: "Instalação",
      description:
        "Agende a instalação do seu novo elevador por técnicos especializados. Garantimos uma instalação rápida e sem transtornos.",
    },
  ];

  return (
    <section className="bg-secondary section-spacing">
      <div className="content-width">
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-12">
          Processo de compra em três passos
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-card rounded-xl p-6 border border-border shadow-sm"
            >
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mb-5">
                <span className="font-heading font-bold text-sm text-primary-foreground">
                  {step.number}
                </span>
              </div>
              <h3 className="font-heading font-bold text-base mb-3 text-foreground">
                {step.title}
              </h3>
              <p className="font-body text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
