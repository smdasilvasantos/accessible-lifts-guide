import { Armchair, ShieldCheck, Home, Gamepad2, Volume2, Zap } from "lucide-react";

const advantages = [
  { icon: Armchair, text: "Suba escadas com conforto e independência" },
  { icon: ShieldCheck, text: "Reduza o risco de quedas nas escadas" },
  { icon: Home, text: "Solução adaptada às características da sua casa" },
  { icon: Gamepad2, text: "Comandos simples e intuitivos" },
  { icon: Volume2, text: "Equipamentos silenciosos e de baixo consumo" },
  { icon: Zap, text: "Instalação rápida, normalmente em menos de um dia" },
];

const TesteAdvantages = () => {
  return (
    <section className="bg-secondary section-spacing">
      <div className="content-width">
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-8">
          Vantagens de instalar uma cadeira elevatória de escadas
        </h2>
        <ul className="grid sm:grid-cols-2 gap-4 mb-6">
          {advantages.map((item) => (
            <li
              key={item.text}
              className="flex items-center gap-3 bg-card rounded-lg px-4 py-3 border border-border"
            >
              <item.icon className="w-5 h-5 text-cta shrink-0" />
              <span className="font-body text-sm text-foreground">{item.text}</span>
            </li>
          ))}
        </ul>
        <p className="font-body text-sm text-muted-foreground leading-relaxed">
          A instalação é feita diretamente nos degraus e não exige obras estruturais na casa.
        </p>
      </div>
    </section>
  );
};

export default TesteAdvantages;
