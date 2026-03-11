import { Sofa, ShieldCheck, Accessibility, Gamepad2, Zap, HeartHandshake, Wheelchair, TrendingDown, Cog } from "lucide-react";

const StairliftAbout = () => {
  return (
    <section className="section-spacing">
      <div className="content-width">
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-6">
          O elevador de escada, uma solução que muda a vida
        </h2>
        <p className="font-body text-base leading-relaxed text-muted-foreground mb-6">
          Subir e descer escadas é um verdadeiro obstáculo para muitos idosos,
          levando-os a considerar mudanças drásticas quando já não conseguem
          ultrapassar estas barreiras sem ajuda e sem segurança. O receio de
          cair ou as dores nos joelhos limitam progressivamente o espaço
          utilizado na casa.
        </p>
        <p className="font-body text-base leading-relaxed text-muted-foreground mb-10">
          A solução é segura, confortável e simples: a cadeira elevatória
          elétrica. Este equipamento permite deslocar-se entre pisos de forma
          segura e sem esforço, eliminando o risco de quedas.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* What are stairlifts */}
          <div className="bg-secondary rounded-2xl p-6">
            <h3 className="font-heading font-bold text-lg text-foreground mb-3">
              O que são elevadores de escadas?
            </h3>
            <p className="font-body text-sm leading-relaxed text-muted-foreground">
              São equipamentos concebidos para ajudar pessoas com mobilidade
              reduzida a subir e descer escadas de forma segura e confortável.
              Podem ser instalados em escadas interiores ou exteriores.
            </p>
          </div>

          {/* Benefits */}
          <div className="bg-secondary rounded-2xl p-6">
            <h3 className="font-heading font-bold text-lg text-foreground mb-3">
              Vantagens e benefícios
            </h3>
            <ul className="space-y-2">
              {[
                "Suba escadas com conforto e independência",
                "Evite quedas nas escadas",
                "Adaptados às especificidades de cada casa",
                "Fácil de operar, com comandos acessíveis",
                "Instalação rápida, em menos de um dia",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 font-body text-sm text-muted-foreground"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cta shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Who is it for */}
          <div className="bg-secondary rounded-2xl p-6">
            <h3 className="font-heading font-bold text-lg text-foreground mb-3">
              Para quem é adequado?
            </h3>
            <p className="font-body text-sm text-muted-foreground mb-3">
              Um elevador de escadas é ideal para quem:
            </p>
            <ul className="space-y-2">
              {[
                "Tem mobilidade reduzida ou movimentos limitados",
                "Utiliza cadeira de rodas ou auxílio para caminhar",
                "Sente dificuldade ao subir escadas",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 font-body text-sm text-muted-foreground"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* How they work */}
          <div className="bg-secondary rounded-2xl p-6">
            <h3 className="font-heading font-bold text-lg text-foreground mb-3">
              Como funcionam?
            </h3>
            <p className="font-body text-sm leading-relaxed text-muted-foreground">
              Uma poltrona com motor elétrico desliza sobre um trilho fixado nos
              degraus ou parede. Funciona com baterias recarregáveis e pode ser
              controlada por joystick ou telecomando. As escadas não ficam
              obstruídas e o assento recolhe-se quando não está em uso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StairliftAbout;
