import straightImg from "@/assets/stairlift-straight.jpg";
import curvedImg from "@/assets/stairlift-curved.jpg";
import outdoorImg from "@/assets/stairlift-outdoor.jpg";
import { CheckCircle } from "lucide-react";

const models = [
  {
    image: straightImg,
    tag: "Cadeiras elevatórias",
    title: "Para escadas retas",
    description:
      "Para escadas sem curvas ou patamares, consistindo em apenas um lance reto. Este é o modelo mais acessível.",
    features: ["Instalação rápida", "Modelo compacto", "Preço competitivo"],
  },
  {
    image: curvedImg,
    tag: "Cadeiras elevatórias",
    title: "Para escadas curvas",
    description:
      "Adapta-se a escadas curvas, espirais ou com patamares, garantindo funcionalidade em diferentes configurações.",
    features: [
      "Modelo personalizado",
      "Controles intuitivos",
      "Percurso suave e seguro",
    ],
  },
  {
    image: outdoorImg,
    tag: "Cadeiras elevatórias",
    title: "Para escadas exteriores",
    description:
      "A solução ideal tanto para um lance de escadas externas quanto para apenas alguns degraus até ao jardim.",
    features: [
      "Segurança reforçada",
      "Robustez e resistência",
      "Chave de bloqueio",
    ],
  },
];

const StairliftModels = () => {
  return (
    <section className="section-spacing">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block border border-border text-muted-foreground font-heading font-semibold text-xs uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
            Modelos
          </span>
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-3">
            Quais são os diferentes tipos de elevadores de escada?
          </h2>
          <p className="font-body text-base text-muted-foreground max-w-2xl mx-auto">
            Para atender às diversas configurações de escadas, existem três
            tipos principais de cadeiras elevatórias.
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
                <button className="mt-5 font-heading font-bold text-sm text-primary hover:text-primary/80 transition-colors">
                  Saber preço →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StairliftModels;
