const ProcessSteps = () => {
  const steps = [
    {
      number: "01",
      title: "Avaliação personalizada",
      description:
        "Solicite uma visita de avaliação gratuita à sua casa, realizada por um dos nossos parceiros especializados. Esta etapa é crucial para entender as suas necessidades específicas e as características da sua habitação.",
    },
    {
      number: "02",
      title: "Orçamento detalhado",
      description:
        "Após a avaliação, receberá um orçamento detalhado e personalizado, que considera todos os aspectos da instalação do elevador residencial.",
    },
    {
      number: "03",
      title: "Instalação",
      description:
        "Uma vez aceite o orçamento, pode agendar a instalação do seu novo elevador por técnicos especializados. Garantimos uma instalação rápida e sem transtornos.",
    },
  ];

  return (
    <section className="bg-warm section-spacing">
      <div className="content-width">
        <h2 className="font-heading font-semibold text-2xl md:text-3xl mb-12">
          Processo de compra em três passos
        </h2>
        <div className="space-y-12">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-6">
              <span className="font-heading font-semibold text-3xl text-highlight shrink-0 leading-none pt-1">
                {step.number}
              </span>
              <div>
                <h3 className="font-heading font-semibold text-lg mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-base leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
