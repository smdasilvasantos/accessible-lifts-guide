import sensorImg from "@/assets/teste/feature-sensor.jpg";
import swivelImg from "@/assets/teste/feature-swivel.jpg";
import railImg from "@/assets/teste/feature-rail.jpg";
import remoteImg from "@/assets/teste/feature-remote.jpg";

const features = [
  {
    image: sensorImg,
    title: "Sensor de segurança",
    description: "Interrompe automaticamente o movimento caso exista um obstáculo.",
  },
  {
    image: swivelImg,
    title: "Assento giratório",
    description: "Facilita a entrada e saída da cadeira no topo da escada.",
  },
  {
    image: railImg,
    title: "Carril retrátil",
    description: "Evita que o carril fique projetado sobre zonas de passagem.",
  },
  {
    image: remoteImg,
    title: "Telecomando",
    description: "Permite chamar ou enviar a cadeira entre pisos.",
  },
];

const TesteFeatures = () => {
  return (
    <section className="bg-secondary section-spacing">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-3">
            Características e opções de segurança
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm"
            >
              <div className="h-44 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="font-heading font-bold text-sm text-foreground mb-1.5">
                  {feature.title}
                </h3>
                <p className="font-body text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TesteFeatures;
