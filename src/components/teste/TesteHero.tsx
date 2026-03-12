import heroImage from "@/assets/hero-stairlift.jpg";
import { Button } from "@/components/ui/button";
import { ShieldCheck } from "lucide-react";

const TesteHero = () => {
  return (
    <section className="relative bg-secondary overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center min-h-[560px] py-12">
          <div className="order-2 md:order-1">
            <h1 className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-5">
              Elevadores de escadas para recuperar mobilidade em casa
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Subir e descer escadas pode tornar-se difícil quando surgem problemas de mobilidade, dores nas articulações ou receio de cair. Um elevador de escadas, também conhecido como cadeira elevatória de escadas, permite voltar a utilizar todos os pisos da casa com segurança e conforto.
            </p>
            <div className="flex flex-wrap gap-3 mb-4">
              <Button variant="cta" size="lg">
                Pedir orçamentos gratuitos
              </Button>
              <Button variant="outline" size="lg" className="rounded-full">
                Receber catálogo gratuito
              </Button>
            </div>
            <p className="flex items-center gap-2 font-body text-sm text-muted-foreground">
              <ShieldCheck className="w-4 h-4 text-primary" />
              Avaliação gratuita. Sem compromisso.
            </p>
          </div>

          <div className="order-1 md:order-2 relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
              <img
                src={heroImage}
                alt="Pessoa a utilizar uma cadeira elevatória numa escada doméstica"
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

export default TesteHero;
