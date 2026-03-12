import { ClipboardCheck, FileText, Wrench } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    step: "1",
    title: "Avaliação gratuita",
    description: "Um técnico visita a casa para analisar a escada e recomendar a solução mais adequada.",
  },
  {
    icon: FileText,
    step: "2",
    title: "Orçamento personalizado",
    description: "Recebe propostas com preço, modelo e prazo de instalação.",
  },
  {
    icon: Wrench,
    step: "3",
    title: "Instalação rápida",
    description: "Na maioria dos casos a instalação fica concluída num único dia.",
  },
];

const TesteProcess = () => {
  return (
    <section className="bg-secondary section-spacing">
      <div className="content-width">
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-10">
          Como comprar um elevador de escadas
        </h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {steps.map((item) => (
            <div key={item.step} className="bg-card rounded-xl p-6 border border-border shadow-sm">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mb-4">
                <span className="font-heading font-bold text-sm text-primary-foreground">
                  {item.step}
                </span>
              </div>
              <h3 className="font-heading font-bold text-base text-foreground mb-2">
                {item.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TesteProcess;
