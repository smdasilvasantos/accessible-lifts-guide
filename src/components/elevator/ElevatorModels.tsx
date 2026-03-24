import img1andar from "@/assets/elevator-1andar.jpg";
import imgCompacto from "@/assets/elevator-compacto.jpg";
import imgSemPoco from "@/assets/elevator-sem-poco.jpg";
import { CheckCircle } from "lucide-react";

const models = [
  {
    image: img1andar,
    tag: "Elevadores para moradias",
    title: "Elevador residencial: 1 andar",
    description:
      "Modelos inovadores e compactos que se adaptam facilmente a pequenos espaços em ambiente doméstico.",
    features: [
      "Instalação rápida, sem mudanças",
      "Compactos e eficientes em espaço",
      "Mobilidade confortável entre pisos",
    ],
  },
  {
    image: imgCompacto,
    tag: "Ideal para casas particulares",
    title: "Elevador compacto para pequenos espaços",
    description:
      "Modelos de dimensões reduzidas que se adaptam perfeitamente a qualquer espaço da sua casa.",
    features: [
      "Várias dimensões",
      "Design elegante e funcional",
      "Ideal para casas particulares pequenas",
    ],
  },
  {
    image: imgSemPoco,
    tag: "Para edifícios sem elevador",
    title: "Elevadores sem poço",
    description:
      "Instalação rápida que não exige a construção de um fosso, facilitando a instalação em prédios sem elevador.",
    features: [
      "Instalação rápida e simplificada",
      "Sem necessidade de obras complexas",
      "Perfeito para qualquer tipo de casa",
    ],
  },
];

const ElevatorModels = () => {
  return (
    <section id="modelos" className="section-spacing">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block border border-border text-muted-foreground font-heading font-semibold text-xs uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
            Modelos
          </span>
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-3">
            Conforto e segurança no seu lar com um elevador doméstico
          </h2>
          <p className="font-body text-base text-muted-foreground max-w-2xl mx-auto">
            Quer conhecer as várias opções e encontrar a solução ideal para si?
            Estamos aqui para orientar cada passo do seu caminho.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {models.map((model) => (
            <div
              key={model.title}
              className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={model.image}
                  alt={model.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-primary text-primary-foreground font-heading font-semibold text-xs px-3 py-1 rounded-full">
                  {model.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                  {model.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                  {model.description}
                </p>
                <ul className="space-y-2">
                  {model.features.map((feature) => (
                    <li
                      key={feature}
                      className="font-body text-sm text-foreground flex items-center gap-2"
                    >
                      <CheckCircle className="w-4 h-4 text-cta shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href="#precos" className="mt-5 inline-block font-heading font-bold text-sm text-primary hover:text-primary/80 transition-colors">
                  Saber preço →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ElevatorModels;
