import heroImage from "@/assets/precos-escadas/hero-stairlift-price.jpg";
import { Button } from "@/components/ui/button";
import { Calendar, User } from "lucide-react";

const PrecosHero = () => {
  return (
    <section className="relative bg-secondary overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center min-h-[600px] py-12">
          <div className="order-2 md:order-1">
            <span className="inline-block bg-primary/10 text-primary font-heading font-semibold text-xs uppercase tracking-wider px-4 py-1.5 rounded-full mb-6">
              Guia de Preços
            </span>
            <h1 className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-5">
              Quanto custa uma cadeira elevatória{" "}
              <span className="text-primary">em Portugal</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6 max-w-lg">
              Descubra quanto custa uma cadeira elevador de escadas em Portugal e
              conheça os fatores que influenciam o preço, instalação e escolha do
              modelo ideal.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
              <span className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5" />
                Sérgio Santos
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                26 de Janeiro, 2026
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button variant="cta" size="lg">
                Pedir Orçamento Gratuito
              </Button>
              <Button variant="outline" size="lg">
                Receber Catálogo
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
              <img
                src={heroImage}
                alt="Cadeira elevatória de escadas instalada numa escada de madeira"
                className="w-full h-[350px] md:h-[450px] object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrecosHero;
