import heroImage from "@/assets/hero-elevator-residencial.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ElevatorHero = () => {
  return (
    <section className="relative bg-secondary overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center min-h-[560px] py-12">
          <div className="order-2 md:order-1">
            <span className="inline-block bg-primary/10 text-primary font-heading font-semibold text-xs uppercase tracking-wider px-4 py-1.5 rounded-full mb-6">
              Equipamentos
            </span>
            <h1 className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-5">
              Elevadores Residenciais
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Um elevador residencial facilita a circulação entre pisos e
              acrescenta valor à sua casa, oferecendo mais conforto, segurança e
              autonomia. É uma solução versátil, adaptável a diferentes espaços
              e necessidades.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="cta" size="lg" asChild>
                <a href="#modelos">Ver modelos</a>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full" asChild>
                <a href="#precos">Saber preços</a>
              </Button>
            </div>
          </div>

          <div className="order-1 md:order-2 relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
              <img
                src={heroImage}
                alt="Elevador residencial moderno instalado numa casa contemporânea"
                className="w-full h-[320px] md:h-[420px] object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElevatorHero;
