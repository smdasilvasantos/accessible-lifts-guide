import { Handshake, Clock, Wrench } from "lucide-react";

const sections = [
  {
    icon: Handshake,
    title: "Como negociar o preço",
    paragraphs: [
      "Defina o tipo de elevador que melhor se adapta às suas necessidades e obtenha e compare propostas de pelo menos três empresas diferentes.",
      "O orçamento é altamente personalizado. As margens de custo variam significativamente, tornando a comparação uma etapa crucial.",
    ],
  },
  {
    icon: Clock,
    title: "Tempo de instalação",
    paragraphs: [
      "A produção inicia-se somente após a encomenda. O tempo de entrega e instalação varia entre 3 a 5 meses. Equipamentos mais complexos podem necessitar de 4 a 8 meses.",
    ],
  },
  {
    icon: Wrench,
    title: "Manutenção após instalação",
    paragraphs: [
      "Apesar de não serem sujeitos a inspeções obrigatórias em Portugal, é aconselhável manter um plano de manutenção trimestral.",
      "Normalmente, a empresa fornecedora disponibiliza o serviço de manutenção, que pode ser incluído na garantia.",
    ],
  },
];

const AdditionalInfo = () => {
  return (
    <section className="bg-secondary section-spacing">
      <div className="content-width">
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-3">
          O que precisa de saber antes de instalar
        </h2>
        <p className="font-body text-base text-muted-foreground mb-10">
          Informações essenciais para tomar a melhor decisão sobre o seu elevador residencial.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <div key={section.title} className="bg-card rounded-xl p-6 border border-border shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-base text-foreground">
                    {section.title}
                  </h3>
                </div>
                {section.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="font-body text-sm leading-relaxed text-muted-foreground mb-3 last:mb-0"
                  >
                    {p}
                  </p>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AdditionalInfo;
