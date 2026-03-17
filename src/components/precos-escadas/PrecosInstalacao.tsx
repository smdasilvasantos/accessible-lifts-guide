import { CheckCircle, AlertCircle } from "lucide-react";

const PrecosInstalacao = () => {
  return (
    <section className="bg-secondary section-spacing">
      <div className="content-width">
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-6">
          Quanto custa a instalação?
        </h2>
        <p className="font-body text-base leading-relaxed text-muted-foreground mb-8">
          Outro aspecto crucial que impacta o custo total é a instalação. Optar
          por uma empresa profissional para instalar o seu elevador de escadas
          geralmente significa que os custos de instalação estão incluídos no
          preço final.
        </p>

        <div className="bg-card rounded-xl p-6 border border-border shadow-sm mb-6">
          <div className="flex items-start gap-3 mb-4">
            <AlertCircle className="w-5 h-5 text-cta shrink-0 mt-0.5" />
            <p className="font-body text-sm leading-relaxed text-foreground">
              No momento em que estiver a discutir o preço final do equipamento
              escolhido, verifique se o preço fornecido inclui a instalação do
              elevador de escadas assim como a deslocação do(s) técnico(s) até à
              sua morada.
            </p>
          </div>
          <p className="font-body text-sm leading-relaxed text-muted-foreground pl-8">
            Certificar-se deste detalhe desde o início ajuda a evitar surpresas
            ou custos adicionais não previstos na estimativa inicial.
          </p>
        </div>

        <ul className="space-y-2">
          {[
            "Instalação geralmente incluída no preço",
            "Confirme a deslocação dos técnicos",
            "Solicite um orçamento detalhado por escrito",
          ].map((item) => (
            <li key={item} className="flex items-center gap-3">
              <CheckCircle className="w-4 h-4 text-primary shrink-0" />
              <span className="font-body text-sm text-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PrecosInstalacao;
