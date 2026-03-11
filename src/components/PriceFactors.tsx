import { useEffect, useRef, useState } from "react";
import { Tag, Home, SlidersHorizontal, Users } from "lucide-react";

interface FactorSection {
  id: string;
  title: string;
  icon: React.ElementType;
  content: string[];
}

const factors: FactorSection[] = [
  {
    id: "marca",
    title: "A marca",
    icon: Tag,
    content: [
      "A seleção da marca é um fator determinante no custo. Em Portugal, existem várias marcas de renome especializadas em elevadores para moradias, incluindo TK (ThyssenKrupp), Aritco e Pollock.",
      "É crucial solicitar orçamentos de diferentes marcas para uma comparação abrangente.",
    ],
  },
  {
    id: "habitacao",
    title: "As especificações da habitação",
    icon: Home,
    content: [
      "São as especificações da habitação que mais influenciam o custo. O número de pisos, a necessidade de construção de caixa de elevador e as adaptações estruturais são elementos cruciais.",
      "Moradias com requisitos mais complexos resultam naturalmente em custos mais elevados.",
    ],
  },
  {
    id: "modelo",
    title: "O modelo escolhido",
    icon: SlidersHorizontal,
    content: [
      "Portas automáticas, dimensões para cadeiras de rodas ou acabamentos de luxo são exemplos de como a personalização afeta o preço final.",
      "A escolha dos materiais e especificações técnicas influencia diretamente a funcionalidade e o custo.",
    ],
  },
  {
    id: "fornecedor",
    title: "A seleção do fornecedor",
    icon: Users,
    content: [
      "O mercado é diversificado, desde multinacionais como a Schindler até empresas locais como a Levita Elevadores.",
      "Uma pesquisa detalhada pode levar a economias significativas e minimizar riscos de qualidade.",
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
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-14">
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

          <div className="space-y-16">
            {factors.map((factor, index) => {
              const Icon = factor.icon;
              return (
                <div key={factor.id} className="relative">
                  <div
                    className={`plumb-dot ${visibleDots.has(index) ? "visible" : ""}`}
                    style={{ top: "6px" }}
                  />
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className="w-5 h-5 text-primary shrink-0" />
                    <h3
                      data-factor-index={index}
                      className={`font-heading font-bold text-lg transition-colors duration-300 ${
                        visibleDots.has(index) ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {factor.title}
                    </h3>
                  </div>
                  {factor.content.map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className="font-body text-base leading-relaxed text-muted-foreground mb-3 last:mb-0"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceFactors;
