import { Shield, Minimize2, Footprints, RotateCcw, Smartphone, SlidersHorizontal } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Sensor de segurança",
    description:
      "Quando um objeto é identificado, o elevador interrompe automaticamente o movimento para evitar colisões.",
  },
  {
    icon: Minimize2,
    title: "Carril retrátil",
    description:
      "Quando não está em uso, o carril recolhe-se, garantindo que as escadas continuem totalmente acessíveis.",
  },
  {
    icon: Footprints,
    title: "Apoio para os pés",
    description:
      "Fabricados com materiais antiderrapantes, ajustáveis para uma posição ergonómica e confortável.",
  },
  {
    icon: RotateCcw,
    title: "Assento giratório",
    description:
      "O assento gira para posicionar o utilizador na direção de uma superfície plana, com total segurança.",
  },
  {
    icon: Smartphone,
    title: "Telecomando",
    description:
      "Controle o elevador à distância e chame a cadeira ao patamar desejado com conveniência.",
  },
  {
    icon: SlidersHorizontal,
    title: "Comando manual",
    description:
      "Comandos no apoio de braço permitem controlo simples e intuitivo com paragem automática.",
  },
];

const StairliftFeatures = () => {
  return (
    <section className="bg-secondary section-spacing">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-3">
            Características e opções
          </h2>
          <p className="font-body text-base text-muted-foreground max-w-2xl mx-auto">
            Os modelos apresentam variações nas suas características, permitindo
            responder a diferentes necessidades.
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

export default StairliftFeatures;
