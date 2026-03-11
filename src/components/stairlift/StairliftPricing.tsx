import { Button } from "@/components/ui/button";
import { ArrowUpDown, Award, Building, Settings } from "lucide-react";

const factors = [
  { icon: Stairs, label: "Formato das escadas" },
  { icon: Award, label: "Marca e modelos" },
  { icon: Home, label: "Número de andares" },
  { icon: Settings, label: "Opções e funcionalidades extra" },
];

const StairliftPricing = () => {
  return (
    <section className="section-spacing">
      <div className="content-width">
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-6">
          Elevador de escadas: Preço
        </h2>
        <p className="font-body text-base leading-relaxed text-muted-foreground mb-6">
          O preço dos elevadores de escadas em Portugal varia entre{" "}
          <span className="font-bold text-primary">€2.500</span> e{" "}
          <span className="font-bold text-primary">€9.000</span>, dependendo de
          vários fatores que influenciam o custo final:
        </p>
        <ul className="grid sm:grid-cols-2 gap-3 mb-8">
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
        <p className="font-body text-sm text-muted-foreground mb-6">
          Há uma grande variação de preços entre marcas e empresas instaladoras.
          Faz sentido pedir orçamentos a várias empresas para comparar ofertas.
          No Vida Acessível, facilitamos esse processo por si.
        </p>

        <div className="bg-primary/10 rounded-2xl p-6 md:p-8 text-center border border-primary/20">
          <h3 className="font-heading font-bold text-xl text-foreground mb-2">
            Receba orçamentos gratuitos e compare
          </h3>
          <p className="font-body text-sm text-muted-foreground mb-5">
            A instalação está geralmente incluída no custo total.
          </p>
          <Button variant="cta" size="lg">
            Pedir orçamento
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StairliftPricing;
