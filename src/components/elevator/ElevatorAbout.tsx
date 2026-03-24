import { Building2, ShieldCheck, Home, Accessibility, Zap, TrendingUp, UserRound, HeartHandshake } from "lucide-react";

const ElevatorAbout = () => {
  return (
    <section className="section-spacing">
      <div className="content-width">
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-6">
          Elevadores residenciais: conforto e acessibilidade em sua casa
        </h2>
        <p className="font-body text-base leading-relaxed text-muted-foreground mb-6">
          Equipar a sua casa com um elevador residencial pode transformar a
          acessibilidade do espaço, tornando-o mais confortável e prático para
          todos. Seja para facilitar o dia a dia de pessoas com mobilidade
          reduzida, prevenir dificuldades associadas ao envelhecimento ou até
          simplificar o transporte de objetos pesados entre andares, esta
          solução é sinónimo de conveniência.
        </p>
        <p className="font-body text-base leading-relaxed text-muted-foreground mb-10">
          Os elevadores residenciais disponíveis no mercado oferecem uma ampla
          variedade de opções em termos de capacidade, design e custo. Para
          garantir que faz a escolha certa, é essencial conhecer os modelos
          existentes e compreender os critérios mais importantes.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-secondary rounded-2xl p-6">
            <h3 className="font-heading font-bold text-lg text-foreground mb-3">
              O que é um elevador residencial?
            </h3>
            <p className="font-body text-sm leading-relaxed text-muted-foreground">
              Um equipamento compacto projetado para casas ou apartamentos, que
              permite o transporte vertical entre diferentes andares de forma
              prática e segura. Dispensa a necessidade de um poço, graças à sua
              construção autoportante, facilitando a instalação em espaços
              reduzidos.
            </p>
          </div>

          <div className="bg-secondary rounded-2xl p-6">
            <h3 className="font-heading font-bold text-lg text-foreground mb-3">
              Vantagens e benefícios
            </h3>
            <ul className="space-y-2">
              {[
                { icon: Building2, text: "Valoriza o imóvel e acrescenta conforto" },
                { icon: ShieldCheck, text: "Segurança reforçada para toda a família" },
                { icon: Home, text: "Adaptável a diferentes tipos de habitação" },
                { icon: Accessibility, text: "Acessível para cadeiras de rodas" },
                { icon: Zap, text: "Consumo energético reduzido" },
              ].map((item) => (
                <li
                  key={item.text}
                  className="flex items-center gap-2 font-body text-sm text-muted-foreground"
                >
                  <item.icon className="w-4 h-4 text-cta shrink-0" />
                  {item.text}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-secondary rounded-2xl p-6">
            <h3 className="font-heading font-bold text-lg text-foreground mb-3">
              Para quem é útil?
            </h3>
            <ul className="space-y-2">
              {[
                { icon: UserRound, text: "Pessoas com dificuldades de mobilidade ou cadeira de rodas" },
                { icon: HeartHandshake, text: "Idosos que desejam manter a independência em casa" },
                { icon: TrendingUp, text: "Famílias que procuram maior conforto e valorização do imóvel" },
              ].map((item) => (
                <li
                  key={item.text}
                  className="flex items-center gap-2 font-body text-sm text-muted-foreground"
                >
                  <item.icon className="w-4 h-4 text-primary shrink-0" />
                  {item.text}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-secondary rounded-2xl p-6">
            <h3 className="font-heading font-bold text-lg text-foreground mb-3">
              Principais tipos de elevadores
            </h3>
            <div className="space-y-3">
              {[
                { title: "Elevador hidráulico", desc: "O clássico confiável — funcionamento suave e silencioso." },
                { title: "Elevador pneumático", desc: "Solução sustentável — económico e amigo do ambiente." },
                { title: "Elevador de tração", desc: "Potência e versatilidade — maior capacidade de carga." },
              ].map((item) => (
                <div key={item.title}>
                  <p className="font-heading font-bold text-sm text-foreground">{item.title}</p>
                  <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElevatorAbout;
