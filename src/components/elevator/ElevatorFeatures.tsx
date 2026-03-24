import { Ruler, Building, FileCheck, Wrench, Eye, DoorOpen } from "lucide-react";

const features = [
  {
    icon: Ruler,
    title: "Espaço suficiente",
    description:
      "Largura de porta mínima de 0,80m, altura da cabine de 2,00m e profundidade mínima de 1,10m.",
  },
  {
    icon: Building,
    title: "Condições estruturais",
    description:
      "A estrutura pode ser em caixa de alvenaria ou estrutura metálica autoportante, fixada ao chão e ao teto.",
  },
  {
    icon: FileCheck,
    title: "Licença de construção",
    description:
      "Na maioria dos casos não é necessária. Um consultor avaliará a sua situação específica.",
  },
  {
    icon: Eye,
    title: "Visita de avaliação",
    description:
      "Fornecedores de confiança organizam sempre uma visita presencial antes de apresentar uma proposta.",
  },
  {
    icon: DoorOpen,
    title: "Portas automáticas",
    description:
      "Opção de portas automáticas telescópicas ou de batente, adaptáveis ao espaço disponível.",
  },
  {
    icon: Wrench,
    title: "Manutenção simplificada",
    description:
      "Elevadores residenciais estão isentos da obrigatoriedade de contratos de manutenção, mas recomenda-se revisão periódica.",
  },
];

const ElevatorFeatures = () => {
  return (
    <section className="bg-secondary section-spacing">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-3">
            O que precisa de saber para instalar
          </h2>
          <p className="font-body text-base text-muted-foreground max-w-2xl mx-auto">
            Requisitos e considerações importantes para garantir que a
            instalação é viável e segura.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-card rounded-xl p-6 border border-border shadow-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-sm text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="font-body text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ElevatorFeatures;
