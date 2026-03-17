import { Button } from "@/components/ui/button";

const PrecosOverview = () => {
  return (
    <section className="section-spacing">
      <div className="content-width">
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-8">
          Quanto custa um elevador de escadas em Portugal?
        </h2>
        <p className="font-body text-lg leading-relaxed text-foreground/85 mb-6">
          O preço médio dos elevadores de escada em Portugal varia entre{" "}
          <span className="font-bold text-primary">€2.500</span> e{" "}
          <span className="font-bold text-primary">€9.000</span>, dependendo da
          marca do equipamento, do modelo de cadeira escolhido e do tipo de
          escadas, sendo mais baratos os modelos para escadas retas em comparação
          com modelos para escadas com curvas e com patamares.
        </p>
        <p className="font-body text-base leading-relaxed text-muted-foreground mb-6">
          No entanto, pode-se obter um preço ainda mais reduzido se optar por
          contratar uma empresa profissional especializada que ofereça uma ampla
          gama de serviços adicionais no seu pacote de instalação. É importante
          ter em atenção que o preço final do elevador de escada depende da
          avaliação feita pela empresa contratada, devendo ser estabelecidos
          todos os detalhes e especificações técnicas para obter um custo final
          exato. Deste modo, a escolha de uma empresa experiente garante não só o
          preço mais reduzido, como também o melhor serviço.
        </p>
        <p className="font-body text-base leading-relaxed text-muted-foreground mb-8">
          No nosso site, pode solicitar até três orçamentos de elevadores de
          escadas, o que facilita a comparação de preços e a escolha da melhor
          opção para a sua casa ou estabelecimento.
        </p>

        {/* Price range cards */}
        <div className="grid grid-cols-3 gap-4 md:gap-6">
          {[
            { label: "Escadas retas", min: 2500, max: 5000, pct: 40 },
            { label: "Escadas curvas", min: 5000, max: 9000, pct: 70 },
            { label: "Segunda mão", min: 1500, max: 3000, pct: 25 },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-card rounded-xl p-5 md:p-6 flex flex-col items-center text-center shadow-sm border border-border"
            >
              <p className="font-heading font-bold text-sm md:text-base text-foreground mb-1">
                {item.label}
              </p>
              <div className="w-full h-28 md:h-36 bg-muted rounded-lg relative overflow-hidden my-4">
                <div
                  className="absolute bottom-0 left-0 right-0 bg-primary/15 border-t-2 border-primary rounded-b-lg transition-all"
                  style={{ height: `${item.pct}%` }}
                />
              </div>
              <p className="font-heading font-bold text-lg md:text-xl text-primary">
                €{item.min.toLocaleString("pt-PT")}
              </p>
              <p className="font-body text-xs text-muted-foreground">
                até €{item.max.toLocaleString("pt-PT")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrecosOverview;
