import productStairlift from "@/assets/home/product-stairlift.jpg";
import productHomelift from "@/assets/home/product-homelift.jpg";
import productPlatform from "@/assets/home/product-platform.jpg";
import { ArrowRight } from "lucide-react";

const solutions = [
  {
    image: productStairlift,
    tag: "Para todos os tipos de escadas",
    title: "Elevadores para escadas",
    description:
      "Suba e desça com conforto e segurança, sem obras complicadas.",
    href: "/elevadores-de-escadas",
  },
  {
    image: productHomelift,
    tag: "Mais conforto e comodidade",
    title: "Elevadores residenciais",
    description:
      "Um elevador para a sua casa, discreto e adaptado ao seu espaço.",
    href: "/",
  },
  {
    image: productPlatform,
    tag: "Para espaços residenciais ou públicos",
    title: "Plataformas elevatórias",
    description:
      "Uma forma segura de subir escadas em cadeira de rodas.",
    href: "#",
  },
];

const HomeSolutions = () => {
  return (
    <section className="section-spacing">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-3">
            Soluções de acessibilidade adaptadas às suas necessidades
          </h2>
          <p className="font-body text-base text-muted-foreground max-w-2xl mx-auto">
            Cada casa é diferente, e cada pessoa também. Descubra as opções
            disponíveis e encontre a solução que melhor se adapta a si.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {solutions.map((s) => (
            <a
              key={s.title}
              href={s.href}
              className="group bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <span className="font-body text-xs text-primary font-semibold uppercase tracking-wide">
                  {s.tag}
                </span>
                <h3 className="font-heading font-bold text-lg text-foreground mt-1 mb-2">
                  {s.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground mb-4">
                  {s.description}
                </p>
                <span className="inline-flex items-center gap-1 font-heading font-semibold text-sm text-primary group-hover:gap-2 transition-all">
                  Saber mais <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeSolutions;
