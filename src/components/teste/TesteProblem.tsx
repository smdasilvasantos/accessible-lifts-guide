import { ArrowUpDown, AlertTriangle, DoorClosed } from "lucide-react";

const problems = [
  {
    icon: Stairs,
    title: "Dificuldade em subir escadas",
    description: "As articulações ou a falta de força tornam o esforço cada vez maior.",
  },
  {
    icon: AlertTriangle,
    title: "Risco de queda",
    description: "Escadas são um dos locais mais comuns de acidentes domésticos.",
  },
  {
    icon: DoorClosed,
    title: "Limitação dentro da própria casa",
    description: "Algumas divisões deixam de ser utilizadas.",
  },
];

const TesteProblem = () => {
  return (
    <section className="section-spacing">
      <div className="content-width">
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4">
          Quando subir escadas deixa de ser simples
        </h2>
        <p className="font-body text-base text-muted-foreground leading-relaxed mb-10">
          Para muitas pessoas, as escadas tornam-se um obstáculo dentro de casa. O receio de cair ou as dores ao subir degraus acabam por limitar o uso de certos pisos da habitação.
        </p>
        <div className="grid sm:grid-cols-3 gap-6">
          {problems.map((item) => (
            <div key={item.title} className="text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-base text-foreground mb-2">
                {item.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TesteProblem;
