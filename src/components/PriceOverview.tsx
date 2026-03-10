const PriceOverview = () => {
  return (
    <section className="section-spacing">
      <div className="content-width">
        <h2 className="font-heading font-semibold text-2xl md:text-3xl mb-8">
          Quanto custa um elevador residencial em Portugal?
        </h2>
        <p className="font-body text-lg leading-relaxed mb-6">
          O preço médio de um elevador residencial para moradias pode oscilar entre{" "}
          <span className="text-highlight font-bold">€9.000</span> e{" "}
          <span className="text-highlight font-bold">€18.000</span> para modelos
          básicos de um andar, adaptáveis a pequenos espaços e que não requerem a
          construção de uma caixa de elevador.
        </p>
        <p className="font-body text-base leading-relaxed text-muted-foreground mb-6">
          Para elevadores residenciais destinados a dois, três ou mais pisos,
          assim como para modelos que incluem funcionalidades adicionais — tais
          como portas automáticas, maior capacidade de carga, ou acabamentos de
          gama alta — os custos podem variar significativamente de acordo com as
          necessidades individuais de cada casa.
        </p>
        <p className="font-body text-base leading-relaxed text-muted-foreground">
          Cada projeto de elevador doméstico é único e requer uma abordagem
          personalizada. Encorajamos vivamente a solicitar mais informações e a
          pedir um orçamento personalizado através do nosso serviço.
        </p>
      </div>
    </section>
  );
};

export default PriceOverview;
