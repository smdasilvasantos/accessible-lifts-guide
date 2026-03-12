import { Train, BatteryCharging, Joystick } from "lucide-react";

const steps = [
  {
    icon: Train,
    step: "1",
    text: "Uma cadeira desliza ao longo de um carril fixado na escada.",
  },
  {
    icon: BatteryCharging,
    step: "2",
    text: "O sistema funciona com baterias recarregáveis que garantem funcionamento mesmo durante falhas de energia.",
  },
  {
    icon: Joystick,
    step: "3",
    text: "O movimento é controlado através de comandos no apoio de braço ou por telecomando.",
  },
];

const TesteHowItWorks = () => {
  return (
    <section className="section-spacing">
      <div className="content-width">
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-10">
          Como funciona um elevador de escadas
        </h2>
        <div className="grid sm:grid-cols-3 gap-8">
          {steps.map((item) => (
            <div key={item.step} className="text-center">
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
                <span className="font-heading font-bold text-lg text-primary-foreground">
                  {item.step}
                </span>
              </div>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-8 font-body text-sm text-muted-foreground text-center leading-relaxed bg-secondary rounded-xl p-4">
          Quando não está em uso, o assento e os apoios podem recolher-se para deixar espaço livre na escada.
        </p>
      </div>
    </section>
  );
};

export default TesteHowItWorks;
