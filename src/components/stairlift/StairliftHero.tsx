import heroImage from "@/assets/hero-stairlift.jpg";
import { Button } from "@/components/ui/button";

const StairliftHero = () => {
  return (
    <section className="relative bg-secondary overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center min-h-[560px] py-12">
          <div className="order-2 md:order-1">
            <span className="inline-block bg-primary/10 text-primary font-heading font-semibold text-xs uppercase tracking-wider px-4 py-1.5 rounded-full mb-6">
              Equipamentos
            </span>
            <h1 className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-5">
              Elevadores de escadas
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Subir e descer escadas pode ser um desafio para quem tem
              mobilidade reduzida. Um elevador de escadas oferece segurança,
              conforto e independência, permitindo circular entre pisos sem
              esforço.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="cta" size="lg">
                Ver modelos
              </Button>
              <Button variant="outline" size="lg" className="rounded-full">
                Orçamento
              </Button>
            </div>
          </div>

          <div className="order-1 md:order-2 relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
              <img
                src={heroImage}
                alt="Elevador de escadas moderno instalado numa escadaria de madeira"
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

export default StairliftHero;
