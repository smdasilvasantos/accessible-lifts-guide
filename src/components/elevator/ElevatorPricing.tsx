import { Button } from "@/components/ui/button";
import { Building2, Award, Home, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const factors = [
  { icon: Building2, label: "Número de pisos" },
  { icon: Award, label: "Marca e modelo" },
  { icon: Home, label: "Tipo de habitação" },
  { icon: Settings, label: "Opções e acabamentos" },
];

const ElevatorPricing = () => {
  return (
    <section id="precos" className="section-spacing">
      <div className="content-width">
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-6">
          Elevadores residenciais: Preço
        </h2>
        <p className="font-body text-base leading-relaxed text-muted-foreground mb-6">
          O preço médio de um elevador residencial em Portugal varia entre{" "}
          <span className="font-bold text-primary">€9.000</span> e{" "}
          <span className="font-bold text-primary">€18.000</span> para modelos
          básicos de um andar. Para elevadores de dois, três ou mais pisos, com
          funcionalidades adicionais, os custos podem atingir entre{" "}
          <span className="font-bold text-primary">€18.000</span> e{" "}
          <span className="font-bold text-primary">€50.000</span>.
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
          O investimento num elevador residencial é mais atrativo comparado com
          modelos convencionais. Os custos são reduzidos não só na aquisição, mas
          também na instalação. A instalação está geralmente incluída no preço
          orçamentado.
        </p>

        <div className="bg-primary/10 rounded-2xl p-6 md:p-8 text-center border border-primary/20">
          <h3 className="font-heading font-bold text-xl text-foreground mb-2">
            Receba orçamentos gratuitos e compare
          </h3>
          <p className="font-body text-sm text-muted-foreground mb-5">
            Aceda a uma avaliação técnica no local, conselhos especializados e
            estimativas detalhadas.
          </p>
          <Button variant="cta" size="lg" asChild>
            <Link to="/pedir-orcamento">Pedir orçamento</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ElevatorPricing;
