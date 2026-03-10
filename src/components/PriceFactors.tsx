import { useEffect, useRef, useState } from "react";

interface FactorSection {
  id: string;
  title: string;
  content: string[];
}

const factors: FactorSection[] = [
  {
    id: "marca",
    title: "A marca",
    content: [
      "A seleção da marca é um fator determinante no custo de um elevador residencial. Em Portugal, existem várias marcas de renome que se especializam em elevadores para moradias, incluindo TK (ThyssenKrupp), Aritco e Pollock.",
      "É crucial solicitar orçamentos de diferentes marcas para realizar uma comparação abrangente, permitindo-lhe fazer uma escolha informada e adaptada às suas preferências e exigências financeiras.",
    ],
  },
  {
    id: "habitacao",
    title: "As especificações da habitação",
    content: [
      "São as especificações da habitação que mais influenciam o custo. Fatores como o número de pisos a serem servidos, se a instalação requer ou não a construção de uma caixa de elevador, e as adaptações estruturais necessárias são elementos cruciais.",
      "Moradias com requisitos mais complexos de instalação, como a necessidade de obras significativas, naturalmente resultam em custos mais elevados.",
    ],
  },
  {
    id: "modelo",
    title: "O modelo escolhido",
    content: [
      "Características personalizadas, como portas automáticas, dimensões específicas para acomodar cadeiras de rodas, ou acabamentos de luxo, são exemplos de como a personalização pode afetar o preço final.",
      "A escolha dos materiais e das especificações técnicas do elevador também são fatores importantes, pois influenciam diretamente tanto a funcionalidade quanto o custo do equipamento.",
    ],
  },
  {
    id: "fornecedor",
    title: "A seleção do fornecedor",
    content: [
      "O mercado de elevadores em Portugal é diversificado, com várias opções disponíveis, desde multinacionais reconhecidas como a Schindler, até empresas locais como a Levita Elevadores.",
      "Uma pesquisa detalhada sobre os fabricantes e fornecedores disponíveis pode levar a economias significativas, além de minimizar riscos associados à qualidade e à entrega do projeto.",
    ],
  },
];

const PriceFactors = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState(0);
  const [visibleDots, setVisibleDots] = useState<Set<number>>(new Set());

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const viewportHeight = window.innerHeight;

      if (sectionTop < viewportHeight && sectionTop + sectionHeight > 0) {
        const progress = Math.min(
          1,
          Math.max(0, (viewportHeight - sectionTop) / (sectionHeight + viewportHeight))
        );
        setLineHeight(progress * 100);

        const headings = sectionRef.current.querySelectorAll("[data-factor-index]");
        const newVisible = new Set<number>();
        headings.forEach((heading) => {
          const headingRect = heading.getBoundingClientRect();
          if (headingRect.top < viewportHeight * 0.7) {
            newVisible.add(Number(heading.getAttribute("data-factor-index")));
          }
        });
        setVisibleDots(newVisible);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="section-spacing">
      <div className="content-width">
        <h2 className="font-heading font-semibold text-2xl md:text-3xl mb-16">
          Fatores que influenciam o preço
        </h2>

        <div ref={sectionRef} className="relative pl-8 md:pl-12">
          {/* Plumb line */}
          <div className="absolute left-0 top-0 bottom-0 w-[2px]">
            <div
              className="plumb-line"
              style={{ height: `${lineHeight}%` }}
            />
          </div>

          <div className="space-y-20">
            {factors.map((factor, index) => (
              <div key={factor.id} className="relative">
                {/* Dot on the plumb line */}
                <div
                  className={`plumb-dot ${visibleDots.has(index) ? "visible" : ""}`}
                  style={{ top: "8px" }}
                />
                <h3
                  data-factor-index={index}
                  className={`font-heading font-semibold text-xl mb-4 transition-colors duration-300 ${
                    visibleDots.has(index) ? "text-highlight" : ""
                  }`}
                >
                  {factor.title}
                </h3>
                {factor.content.map((paragraph, pIndex) => (
                  <p
                    key={pIndex}
                    className="font-body text-base leading-relaxed text-muted-foreground mb-4 last:mb-0"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceFactors;
