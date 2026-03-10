const AdditionalInfo = () => {
  const sections = [
    {
      title: "Como negociar o preço",
      paragraphs: [
        "Defina o tipo de elevador que melhor se adapta às suas necessidades e obtenha e compare propostas de pelo menos três empresas diferentes.",
        "O orçamento é altamente personalizado. As margens de custo variam significativamente, tornando a comparação uma etapa crucial.",
      ],
    },
    {
      title: "Tempo de instalação",
      paragraphs: [
        "A produção inicia-se somente após a encomenda. O tempo de entrega e instalação varia entre 3 a 5 meses. Equipamentos mais complexos podem necessitar de 4 a 8 meses.",
      ],
    },
    {
      title: "Manutenção após instalação",
      paragraphs: [
        "Apesar de não serem sujeitos a inspeções obrigatórias em Portugal, é aconselhável manter um plano de manutenção trimestral.",
        "Normalmente, a empresa fornecedora disponibiliza o serviço de manutenção, que pode ser incluído na garantia.",
      ],
    },
  ];

  return (
    <section className="bg-secondary section-spacing">
      <div className="content-width">
        <div className="grid md:grid-cols-3 gap-6">
          {sections.map((section) => (
            <div key={section.title} className="bg-card rounded-xl p-6 border border-border shadow-sm">
              <h3 className="font-heading font-bold text-base text-foreground mb-4">
                {section.title}
              </h3>
              {section.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="font-body text-sm leading-relaxed text-muted-foreground mb-3 last:mb-0"
                >
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalInfo;
