import straightImg from "@/assets/stairlift-straight.jpg";
import curvedImg from "@/assets/stairlift-curved.jpg";
import outdoorImg from "@/assets/stairlift-outdoor.jpg";

const models = [
  {
    image: straightImg,
    title: "Escadas retas",
    description: "Solução simples e económica para escadas sem curvas.",
  },
  {
    image: curvedImg,
    title: "Escadas curvas",
    description: "Carris personalizados adaptam-se a curvas, cantos e patamares.",
  },
  {
    image: outdoorImg,
    title: "Escadas exteriores",
    description: "Modelos preparados para resistir à chuva e às variações de temperatura.",
  },
];

const TesteModels = () => {
  return (
    <section className="section-spacing">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-3">
            Elevadores de escadas para diferentes tipos de escadas
          </h2>
          <p className="font-body text-base text-muted-foreground max-w-2xl mx-auto">
            A maioria das escadas permite a instalação de uma cadeira elevatória. O carril é fabricado à medida para se adaptar ao percurso da escada.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {models.map((model) => (
            <div
              key={model.title}
              className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={model.image}
                  alt={model.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                  {model.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {model.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TesteModels;
