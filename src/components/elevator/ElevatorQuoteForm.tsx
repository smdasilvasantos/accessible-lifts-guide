import { Button } from "@/components/ui/button";

const ElevatorQuoteForm = () => {
  return (
    <section className="bg-secondary section-spacing">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4">
              O seu elevador residencial ao melhor preço
            </h2>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-6">
              Conte connosco para encontrar a melhor solução de acessibilidade
              para o seu espaço, com segurança, conforto e total independência.
            </p>
            <ul className="space-y-3">
              {[
                "Receba propostas personalizadas adaptadas ao seu espaço e necessidades",
                "Processo simples, rápido e sem compromisso",
                "Equipamentos de qualidade comprovada de marcas reconhecidas",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 font-body text-sm text-foreground"
                >
                  <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-sm">
            <h3 className="font-heading font-bold text-lg text-foreground mb-1">
              Receba até 3 orçamentos gratuitos
            </h3>
            <p className="font-body text-sm text-muted-foreground mb-6">
              Preencha o formulário e receba{" "}
              <span className="font-bold text-foreground">
                até 3 orçamentos de empresas instaladoras
              </span>{" "}
              líderes de mercado.
            </p>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="font-body text-sm text-foreground mb-1.5 block">Nome</label>
                <input
                  type="text"
                  className="w-full h-11 rounded-lg border border-input bg-background px-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="O seu nome"
                />
              </div>
              <div>
                <label className="font-body text-sm text-foreground mb-1.5 block">Email</label>
                <input
                  type="email"
                  className="w-full h-11 rounded-lg border border-input bg-background px-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="email@exemplo.com"
                />
              </div>
              <div>
                <label className="font-body text-sm text-foreground mb-1.5 block">Telefone</label>
                <input
                  type="tel"
                  className="w-full h-11 rounded-lg border border-input bg-background px-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="912 345 678"
                />
              </div>
              <div>
                <label className="font-body text-sm text-foreground mb-1.5 block">
                  Mensagem <span className="text-muted-foreground">(opcional)</span>
                </label>
                <textarea
                  className="w-full rounded-lg border border-input bg-background px-3 py-2.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  rows={3}
                  placeholder="Descreva brevemente as suas necessidades..."
                />
              </div>
              <div className="flex items-start gap-2">
                <input type="checkbox" id="privacy-elevator" className="mt-1" />
                <label htmlFor="privacy-elevator" className="font-body text-xs text-muted-foreground">
                  Li e aceito a Política de Privacidade
                </label>
              </div>
              <Button variant="cta" size="lg" className="w-full">
                Enviar
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElevatorQuoteForm;
