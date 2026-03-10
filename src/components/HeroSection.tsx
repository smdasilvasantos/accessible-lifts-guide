import heroImage from "@/assets/hero-elevator.jpg";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative bg-secondary overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center min-h-[600px] py-12">
          {/* Text side */}
          <div className="order-2 md:order-1">
            <span className="inline-block bg-primary/10 text-primary font-heading font-semibold text-xs uppercase tracking-wider px-4 py-1.5 rounded-full mb-6">
              Preços
            </span>
            <h1 className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-5">
              Elevadores Residenciais:{" "}
              <span className="text-primary">Preços</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Saiba quanto custa instalar um elevador residencial em Portugal e
              descubra os fatores que influenciam o preço, o processo e a escolha
              do modelo ideal.
            </p>
            <Button variant="cta" size="lg">
              Pedir Orçamento Gratuito
            </Button>
          </div>

          {/* Image side */}
          <div className="order-1 md:order-2 relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
              <img
                src={heroImage}
                alt="Detalhe de mecanismo de elevador residencial"
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

export default HeroSection;
