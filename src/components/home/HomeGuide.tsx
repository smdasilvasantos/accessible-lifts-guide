import { MapPin, GitCompareArrows, FileCheck } from "lucide-react";

const points = [
  { icon: MapPin, text: "Cobertura em todo o país" },
  { icon: GitCompareArrows, text: "Comparação de várias opções e marcas" },
  { icon: FileCheck, text: "Orçamentos rápidos e gratuitos" },
];

const HomeGuide = () => {
  return (
    <section className="bg-primary section-spacing">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block font-heading font-semibold text-xs uppercase tracking-wider text-primary-foreground/60 mb-3">
              Como ajudamos?
            </span>
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-primary-foreground mb-4">
              O seu guia de acessibilidade em Portugal
            </h2>
          </div>
          <div>
            <p className="font-body text-base text-primary-foreground/80 leading-relaxed mb-6">
              Somos um guia independente que liga particulares, empresas e
              instituições a instaladores certificados. Ajudamos a comparar
              soluções, escolher o equipamento certo e adaptar espaços para que
              todos possam viver e circular com segurança e conforto.
            </p>
            <ul className="space-y-3">
              {points.map((p) => (
                <li key={p.text} className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center shrink-0">
                    <p.icon className="w-4 h-4 text-primary-foreground" />
                  </span>
                  <span className="font-body text-sm text-primary-foreground">
                    {p.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeGuide;
