import { ShieldCheck, AlertTriangle } from "lucide-react";

const PrecosUsados = () => {
  return (
    <section className="section-spacing">
      <div className="content-width">
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-6">
          Quanto custa uma cadeira elevatória em segunda mão
        </h2>
        <p className="font-body text-base leading-relaxed text-muted-foreground mb-6">
          A aquisição de um equipamento usado é uma opção viável para poupar
          dinheiro. Pode encontrar cadeiras elevatórias usadas para venda online,
          em anúncios classificados ou mesmo em algumas lojas físicas.
        </p>
        <p className="font-body text-base leading-relaxed text-muted-foreground mb-6">
          Algumas empresas especializadas em equipamentos de acessibilidade e
          mobilidade também poderão oferecer elevadores de escadas usados. Os
          preços destes dispositivos dependerão do seu estado, idade, e modelo,
          entre outros fatores.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <ShieldCheck className="w-4 h-4 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-base text-foreground">
                Compre com garantia
              </h3>
            </div>
            <p className="font-body text-sm leading-relaxed text-muted-foreground">
              Recomendamos que compre uma cadeira elevatória usada apenas se esta
              vier com uma garantia do vendedor. Desta forma, pode ter a certeza
              de que está em boas condições de funcionamento.
            </p>
          </div>

          <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-cta/10 flex items-center justify-center">
                <AlertTriangle className="w-4 h-4 text-cta" />
              </div>
              <h3 className="font-heading font-bold text-base text-foreground">
                Verifique a segurança
              </h3>
            </div>
            <p className="font-body text-sm leading-relaxed text-muted-foreground">
              Verifique se todos os dispositivos de segurança estão a funcionar:
              cinto de segurança, botão de paragem de emergência e sensores de
              obstáculos.
            </p>
          </div>
        </div>

        <div className="bg-primary/5 border border-primary/15 rounded-xl p-6 text-center">
          <p className="font-body text-sm text-muted-foreground mb-1">
            Preços de cadeiras elevatórias usadas
          </p>
          <p className="font-heading font-bold text-2xl text-primary">
            €1.500 – €3.000
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrecosUsados;
