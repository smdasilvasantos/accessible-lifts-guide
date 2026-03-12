import { Button } from "@/components/ui/button";
import ctaImage from "@/assets/teste/cta-final.jpg";

const TesteFinalCTA = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={ctaImage}
          alt="Pessoa a utilizar um elevador de escadas com segurança"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/70" />
      </div>
      <div className="relative content-width section-spacing text-center">
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-primary-foreground mb-4">
          Volte a utilizar todos os pisos da sua casa com segurança
        </h2>
        <p className="font-body text-base text-primary-foreground/80 mb-8 max-w-xl mx-auto">
          Receba até três orçamentos gratuitos de empresas especializadas em elevadores de escadas em Portugal.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button variant="cta" size="lg">
            Pedir orçamentos gratuitos
          </Button>
          <Button variant="outline" size="lg" className="rounded-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
            Receber catálogo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TesteFinalCTA;
