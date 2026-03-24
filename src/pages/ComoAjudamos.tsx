import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import {
  Search,
  FileText,
  CheckCircle,
  ShieldCheck,
  Scale,
  HeartHandshake,
  ArrowRight,
  HelpCircle,
  BadgeCheck,
  Handshake,
} from "lucide-react";

const pillars = [
  {
    icon: Search,
    title: "Organizamos a informação",
    description:
      "Reunimos e simplificamos toda a informação sobre soluções de acessibilidade — elevadores de escadas, plataformas elevatórias e elevadores residenciais — para que possa tomar decisões informadas sem perder tempo.",
  },
  {
    icon: Handshake,
    title: "Ligamos a empresas especializadas",
    description:
      "Centralizamos o pedido de orçamento num único ponto. O seu pedido é encaminhado a instaladores certificados perto de si, sem que tenha de procurar empresa a empresa.",
  },
  {
    icon: Scale,
    title: "Facilitamos a comparação",
    description:
      "Receba até 3 propostas gratuitas e compare preços, modelos e condições lado a lado. Ganha controlo sobre a decisão e escolhe com mais segurança.",
  },
];

const concerns = [
  {
    icon: HelpCircle,
    question: "Não sei qual é o preço justo",
    answer:
      "Ao receber várias propostas, percebe rapidamente a faixa de preços praticada e identifica valores justos para a sua situação.",
  },
  {
    icon: BadgeCheck,
    question: "Não conheço as diferenças entre soluções",
    answer:
      "Os nossos guias e a comparação direta de propostas ajudam-no a entender as vantagens de cada opção — tipo de escada, modelo, marca e funcionalidades.",
  },
  {
    icon: ShieldCheck,
    question: "Tenho receio de escolher mal",
    answer:
      "Não fica dependente de uma única empresa. Pode avaliar múltiplas opções, esclarecer dúvidas e avançar apenas quando se sentir confiante.",
  },
];

const steps = [
  {
    number: "1",
    icon: Search,
    title: "Indique o que procura",
    description:
      "Diga que tipo de equipamento ou solução precisa, como um elevador de escadas, uma plataforma ou um elevador residencial.",
  },
  {
    number: "2",
    icon: FileText,
    title: "Receba até 3 propostas gratuitas",
    description:
      "O seu pedido é enviado a instaladores certificados perto de si. Recebe propostas ajustadas ao seu espaço, sem custos nem compromisso.",
  },
  {
    number: "3",
    icon: CheckCircle,
    title: "Compare e escolha com confiança",
    description:
      "Analise as opções, esclareça dúvidas e escolha a que melhor se adapta às suas necessidades e orçamento.",
  },
];

const ComoAjudamos = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="section-spacing bg-primary">
        <div className="content-width text-center">
          <span className="inline-block bg-primary-foreground/10 text-primary-foreground font-heading font-semibold text-xs uppercase tracking-wider px-4 py-1.5 rounded-full mb-5">
            Como Ajudamos
          </span>
          <h1 className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-5 max-w-3xl mx-auto leading-tight">
            Simplificamos a decisão, não apenas a informação
          </h1>
          <p className="font-body text-lg text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
            O Vida Acessível centraliza pedidos, facilita o contacto com
            empresas especializadas e dá-lhe uma base sólida para comparar antes
            de avançar.
          </p>
        </div>
      </section>

      {/* O nosso papel */}
      <section className="section-spacing">
        <div className="content-width">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-3">
              O nosso papel no processo
            </h2>
            <p className="font-body text-base text-muted-foreground max-w-xl mx-auto">
              Não vendemos nem instalamos. Tornamos o processo mais simples,
              ligando-o a quem o faz de forma profissional.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-card rounded-xl p-6 border border-border shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                  <pillar.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                  {pillar.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preocupações */}
      <section className="section-spacing bg-secondary">
        <div className="content-width">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-3">
              Respondemos às preocupações mais comuns
            </h2>
            <p className="font-body text-base text-muted-foreground max-w-xl mx-auto">
              Comparar orçamentos dá-lhe controlo. Não fica dependente de uma
              única empresa — pode avaliar opções com mais segurança.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {concerns.map((item) => (
              <div
                key={item.question}
                className="bg-card rounded-xl p-6 border border-border shadow-sm"
              >
                <div className="w-10 h-10 rounded-full bg-cta/10 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-cta" />
                </div>
                <h3 className="font-heading font-bold text-base text-foreground mb-2">
                  {item.question}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona — 3 passos */}
      <section className="section-spacing">
        <div className="content-width">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary font-heading font-semibold text-xs uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
              Orçamentos
            </span>
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-3">
              Como funciona?
            </h2>
            <p className="font-body text-base text-muted-foreground max-w-xl mx-auto">
              Encontre de forma rápida, fácil e segura soluções de
              acessibilidade e empresas instaladoras em Portugal.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mx-auto mb-5">
                  <span className="font-heading font-extrabold text-xl text-primary-foreground">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideia reforçada — faixa destaque */}
      <section className="bg-primary section-spacing">
        <div className="content-width">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <HeartHandshake className="w-10 h-10 text-primary-foreground/60 mb-4" />
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-primary-foreground mb-4">
                O Vida Acessível não simplifica apenas a informação
              </h2>
              <p className="font-body text-lg text-primary-foreground/80 leading-relaxed">
                Simplifica a decisão. Centraliza pedidos, facilita o contacto e
                dá ao utilizador uma base sólida para comparar antes de avançar.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {[
                "Receba propostas sem compromisso",
                "Compare preços e condições",
                "Escolha com confiança",
              ].map((text) => (
                <div
                  key={text}
                  className="flex items-center gap-3 bg-primary-foreground/10 rounded-lg px-5 py-4"
                >
                  <ArrowRight className="w-5 h-5 text-primary-foreground shrink-0" />
                  <span className="font-heading font-semibold text-base text-primary-foreground">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="section-spacing">
        <div className="content-width text-center">
          <span className="inline-block bg-cta/10 text-cta font-heading font-semibold text-xs uppercase tracking-wider px-4 py-1.5 rounded-full mb-5">
            100% Gratuito
          </span>
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-3">
            Pronto para comparar soluções?
          </h2>
          <p className="font-body text-base text-muted-foreground mb-8 max-w-md mx-auto">
            Peça orçamentos gratuitos e receba propostas de instaladores
            certificados, sem compromisso.
          </p>
          <Button variant="cta" size="lg" asChild>
            <a href="/pedir-orcamento">Pedir Orçamento Gratuito</a>
          </Button>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default ComoAjudamos;
