import { TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const HomeProfessionals = () => {
  return (
    <section className="section-spacing">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-primary/5 border border-primary/15 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-10">
            <span className="inline-block bg-primary/10 text-primary font-heading font-semibold text-xs uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
              Profissionais
            </span>
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-3">
              Tem um produto ou serviço para divulgar?
            </h2>
            <p className="font-body text-base text-muted-foreground max-w-xl mx-auto">
              Se tem uma empresa ou presta serviços na área de acessibilidade e
              mobilidade, pode juntar-se à rede Vida Acessível.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-base text-foreground mb-1">
                  Aumente a visibilidade da sua empresa
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  Destaque-se num mercado específico e chegue a um público que
                  valoriza qualidade e confiança.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-base text-foreground mb-1">
                  Divulgue e conecte-se com clientes
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  Apresente os seus serviços e estabeleça contacto direto com
                  quem realmente precisa das suas soluções.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-3">
            <Button variant="cta" size="lg">
              Contactar
            </Button>
            <Button variant="outline" size="lg" className="rounded-full">
              Saber mais
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeProfessionals;
