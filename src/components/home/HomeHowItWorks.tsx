import { Search, FileText, CheckCircle } from "lucide-react";

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

const HomeHowItWorks = () => {
  return (
    <section className="bg-secondary section-spacing">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block bg-primary/10 text-primary font-heading font-semibold text-xs uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
            Orçamentos
          </span>
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-3">
            Como funciona?
          </h2>
          <p className="font-body text-base text-muted-foreground max-w-xl mx-auto">
            Encontre de forma rápida, fácil e segura, soluções de
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
  );
};

export default HomeHowItWorks;
