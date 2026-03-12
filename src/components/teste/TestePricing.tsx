import { Button } from "@/components/ui/button";
import { ArrowUpDown, Building, Award, Settings } from "lucide-react";

const factors = [
  { icon: ArrowUpDown, label: "Tipo de escada" },
  { icon: Building, label: "Número de pisos" },
  { icon: Award, label: "Marca e modelo" },
  { icon: Settings, label: "Opções adicionais de conforto ou segurança" },
];

const TestePricing = () => {
  return (
    <section className="section-spacing">
      <div className="content-width">
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-6">
          Elevadores de escadas preços em Portugal
        </h2>
        <p className="font-body text-base leading-relaxed text-muted-foreground mb-6">
          O preço de um elevador de escadas em Portugal varia normalmente entre{" "}
          <span className="font-bold text-primary">2.500 €</span> e{" "}
          <span className="font-bold text-primary">9.000 €</span>. O valor depende de vários fatores.
        </p>
        <ul className="grid sm:grid-cols-2 gap-3 mb-6">
          {factors.map((item) => (
            <li
              key={item.label}
              className="flex items-center gap-3 bg-secondary rounded-lg px-4 py-3"
            >
              <item.icon className="w-4 h-4 text-primary shrink-0" />
              <span className="font-body text-sm text-foreground">{item.label}</span>
            </li>
          ))}
        </ul>
        <p className="font-body text-sm text-muted-foreground mb-8 leading-relaxed">
          Escadas retas são geralmente mais económicas. Escadas curvas exigem carris personalizados e têm um custo superior.
        </p>

        <div className="bg-primary/5 rounded-2xl p-6 md:p-8 text-center border border-primary/10">
          <Button variant="cta" size="lg">
            Comparar preços e pedir orçamentos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestePricing;
