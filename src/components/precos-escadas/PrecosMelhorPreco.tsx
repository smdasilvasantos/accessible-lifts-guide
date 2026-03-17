import { CheckCircle } from "lucide-react";

const tips = [
  "Solicite vários orçamentos para comparar preços e serviços",
  "Compare modelos de diferentes marcas líderes de mercado",
  "Verifique se a instalação está incluída no preço",
  "Confirme as condições de garantia e manutenção",
];

const PrecosMelhorPreco = () => {
  return (
    <section className="bg-secondary section-spacing">
      <div className="content-width">
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-6">
          Como conseguir o melhor preço
        </h2>
        <p className="font-body text-base leading-relaxed text-muted-foreground mb-6">
          Para garantir que obtém o melhor preço na instalação de um elevador de
          escadas, é aconselhável solicitar vários orçamentos. Esta abordagem
          permite-lhe comparar preços, modelos e serviços oferecidos por
          diferentes empresas instaladoras e marcas líderes de mercado.
        </p>
        <p className="font-body text-base leading-relaxed text-muted-foreground mb-6">
          O nosso site, Vida Acessível, facilita este processo para si.
          Trabalhamos em parceria com as principais empresas instaladoras e as
          marcas mais reconhecidas no mercado de elevadores de escadas. Ao pedir
          um orçamento através do nosso site, você tem acesso a uma forma fácil e
          conveniente de obter estimativas personalizadas para a instalação de
          uma cadeira elevador de escadas.
        </p>
        <p className="font-body text-base leading-relaxed text-muted-foreground mb-8">
          Esta metodologia não só poupa tempo e esforço na procura de diferentes
          fornecedores, mas também lhe dá a confiança de que está a receber
          propostas competitivas de empresas de renome. Assim, pode fazer uma
          escolha informada, garantindo a melhor relação qualidade-preço para as
          suas necessidades específicas.
        </p>

        <ul className="space-y-3">
          {tips.map((tip) => (
            <li key={tip} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span className="font-body text-sm text-foreground">{tip}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PrecosMelhorPreco;
