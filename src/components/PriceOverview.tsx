const PriceOverview = () => {
  return (
    <section className="section-spacing">
      <div className="content-width">
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-8">
          Quanto custa um elevador residencial em Portugal?
        </h2>
        <p className="font-body text-lg leading-relaxed text-foreground/85 mb-6">
          O preço médio de um elevador residencial para moradias pode oscilar entre{" "}
          <span className="font-bold text-primary">€9.000</span> e{" "}
          <span className="font-bold text-primary">€18.000</span> para modelos
          básicos de um andar, adaptáveis a pequenos espaços e que não requerem a
          construção de uma caixa de elevador.
        </p>
        <p className="font-body text-base leading-relaxed text-muted-foreground mb-6">
          Para elevadores destinados a dois, três ou mais pisos, assim como para
          modelos com funcionalidades adicionais — portas automáticas, maior
          capacidade de carga, ou acabamentos de gama alta — os custos variam
          significativamente conforme as necessidades de cada casa.
        </p>
        <p className="font-body text-base leading-relaxed text-muted-foreground">
          Cada projeto é único e requer uma abordagem personalizada. Encorajamos
          a solicitar mais informações e a pedir um orçamento personalizado
          através do nosso serviço.
        </p>
      </div>
    </section>
  );
};

export default PriceOverview;
