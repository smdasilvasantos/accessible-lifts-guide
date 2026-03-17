import { Button } from "@/components/ui/button";

const PrecosOrcamento = () => {
  return (
    <section className="section-spacing">
      <div className="content-width">
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-6">
          Para descobrir o valor total e definir um orçamento
        </h2>
        <p className="font-body text-base leading-relaxed text-muted-foreground mb-6">
          Para descobrir o valor total e definir um orçamento para a instalação
          de um elevador de escadas, é essencial a visita de um especialista ao
          local. Este profissional avaliará as características específicas das
          suas escadas e discutirá consigo as opções de modelos e
          funcionalidades disponíveis. Com base nesta avaliação, ele poderá
          fornecer um orçamento detalhado e preciso, ajustado às suas
          necessidades e preferências.
        </p>
        <p className="font-body text-base leading-relaxed text-muted-foreground mb-8">
          Apenas com uma inspeção direta das suas escadas é possível determinar o
          custo exato do projeto. Esta abordagem personalizada garante que o
          orçamento proposto reflita as soluções mais adequadas para as suas
          necessidades, oferecendo uma estimativa clara e confiável do valor
          total necessário para a instalação do seu novo elevador de escadas.
        </p>

        <div className="bg-primary/10 rounded-2xl p-6 md:p-8 text-center border border-primary/20">
          <h3 className="font-heading font-bold text-xl text-foreground mb-2">
            Receba orçamentos gratuitos e compare
          </h3>
          <p className="font-body text-sm text-muted-foreground mb-5">
            Compare propostas de diferentes empresas instaladoras.
          </p>
          <Button variant="cta" size="lg">
            Pedir orçamentos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PrecosOrcamento;
