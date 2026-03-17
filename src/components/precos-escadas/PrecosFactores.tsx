import { useEffect, useRef, useState } from "react";
import { Tag, Stairs, SlidersHorizontal } from "lucide-react";

interface FactorSection {
  id: string;
  title: string;
  icon: React.ElementType;
  content: string[];
}

const factors: FactorSection[] = [
  {
    id: "marca",
    title: "A Marca",
    icon: Tag,
    content: [
      "A escolha da marca é um elemento crucial que afeta o custo de uma cadeira elevadora de escadas. Em Portugal, marcas renomadas como Stannah (anteriormente conhecida como Egiro), TK (ThyssenKrupp), Handicare e Acorn estão entre as mais populares.",
      "Reitera-se a importância de solicitar orçamentos de várias marcas, uma vez que os preços podem variar significativamente, permitindo uma avaliação mais abrangente e informada.",
    ],
  },
  {
    id: "escadas",
    title: "O Tipo de Escadas",
    icon: Stairs,
    content: [
      "As características específicas das escadas, sejam elas curvas ou retas, juntamente com a largura e comprimento, influenciam diretamente no preço.",
      "Escadas mais largas necessitam de um carril mais extenso, o que pode aumentar o custo do projeto.",
    ],
  },
  {
    id: "modelo",
    title: "O Modelo Escolhido",
    icon: SlidersHorizontal,
    content: [
      "A variedade de modelos oferecidos pelas empresas de elevadores de escadas permite a inclusão de diversas opções e extras. Funcionalidades como assentos giratórios ou dimensões adaptadas para pessoas com excesso de peso são exemplos de customizações que podem alterar o preço final.",
      "A escolha do material do tecido do assento também é um aspecto relevante a considerar, influenciando tanto no conforto quanto no custo.",
    ],
  },
];

const PrecosFactores = () => {
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
          Outros fatores que influenciam o preço
        </h2>

        <div ref={sectionRef} className="relative pl-8 md:pl-12">
          <div className="absolute left-0 top-0 bottom-0 w-[2px]">
            <div className="plumb-line" style={{ height: `${lineHeight}%` }} />
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

export default PrecosFactores;
