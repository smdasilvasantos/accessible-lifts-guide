const AdditionalInfo = () => {
  const sections = [
    {
      title: "Como negociar o preço",
      paragraphs: [
        "Negociar o preço de um elevador doméstico requer paciência e pesquisa. Defina o tipo de elevador que melhor se adapta às suas necessidades e obtenha e compare propostas de pelo menos três empresas diferentes.",
        "O orçamento para um elevador é altamente personalizado, baseado nas especificidades do seu projeto. As margens de custo podem variar significativamente, tornando a comparação de orçamentos uma etapa crucial.",
      ],
    },
    {
      title: "Tempo de instalação",
      paragraphs: [
        "Os elevadores residenciais não são artigos disponíveis para entrega imediata; a sua produção inicia-se somente após a encomenda. O tempo necessário para a entrega e instalação varia entre 3 a 5 meses. Equipamentos mais complexos podem necessitar de 4 a 8 meses.",
      ],
    },
    {
      title: "Manutenção após instalação",
      paragraphs: [
        "Apesar de os elevadores domésticos não serem sujeitos a contratos de manutenção periódica ou inspeções obrigatórias em Portugal, é aconselhável manter um plano de manutenção trimestral, assegurando o bom funcionamento e a segurança do equipamento.",
        "Normalmente, a empresa fornecedora do elevador disponibiliza o serviço de manutenção, que pode ser incluído na garantia do equipamento.",
      ],
    },
  ];

  return (
    <section className="bg-warm section-spacing">
      <div className="content-width space-y-16">
        {sections.map((section) => (
          <div key={section.title}>
            <h2 className="font-heading font-semibold text-2xl md:text-3xl mb-6">
              {section.title}
            </h2>
            {section.paragraphs.map((p, i) => (
              <p
                key={i}
                className="font-body text-base leading-relaxed text-muted-foreground mb-4 last:mb-0"
              >
                {p}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdditionalInfo;
