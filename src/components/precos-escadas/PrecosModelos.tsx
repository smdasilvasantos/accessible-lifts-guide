import stairliftStraight from "@/assets/stairlift-straight.jpg";
import stairliftCurved from "@/assets/stairlift-curved.jpg";
import stairliftOutdoor from "@/assets/stairlift-outdoor.jpg";

const models = [
  {
    title: "Escadas retas",
    image: stairliftStraight,
    price: "€2.500 – €5.000",
    description:
      "Os modelos para escadas retas são menos caros porque os carris vêm preparados para ser adaptados a este tipo de escadas. O próprio elevador também é um aparelho menos complexo.",
  },
  {
    title: "Escadas curvas",
    image: stairliftCurved,
    price: "€5.000 – €9.000",
    description:
      "Os elevadores de escadas curvas são normalmente mais caros. Isto porque a sua instalação é mais complexa e requer carris personalizados que se adaptam a curvas e patamares.",
  },
  {
    title: "Escadas exteriores",
    image: stairliftOutdoor,
    price: "€3.500 – €8.000",
    description:
      "Modelos preparados para resistir à chuva e às variações de temperatura, com materiais e acabamentos específicos para utilização no exterior.",
  },
];

const PrecosModelos = () => {
  return (
    <section className="section-spacing">
      <div className="content-width">
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-3">
          Preços por tipo de escada
        </h2>
        <p className="font-body text-base text-muted-foreground mb-10">
          Convém distinguir entre as cadeiras para escadas retas e as cadeiras
          para escadas curvas porque o seu preço pode variar consideravelmente.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {models.map((model) => (
            <div
              key={model.title}
              className="bg-card rounded-xl overflow-hidden border border-border shadow-sm"
            >
              <img
                src={model.image}
                alt={model.title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="font-heading font-bold text-base text-foreground mb-1">
                  {model.title}
                </h3>
                <p className="font-heading font-bold text-primary text-lg mb-3">
                  {model.price}
                </p>
                <p className="font-body text-sm leading-relaxed text-muted-foreground">
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

export default PrecosModelos;
