import heroImage from "@/assets/stairlift-curved.jpg";

const TesteSolution = () => {
  return (
    <section className="bg-secondary section-spacing">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-5">
              O que são elevadores de escadas
            </h2>
            <div className="space-y-4 font-body text-base text-muted-foreground leading-relaxed">
              <p>
                Os elevadores de escadas são equipamentos concebidos para ajudar pessoas com mobilidade reduzida a subir e descer escadas de forma segura e confortável.
              </p>
              <p>
                Funcionam através de uma cadeira motorizada que desliza sobre um carril fixado na escada. O utilizador desloca-se sentado entre pisos de forma suave e segura.
              </p>
              <p>
                Podem ser instalados em escadas interiores ou exteriores e adaptam-se às características de cada casa.
              </p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={heroImage}
              alt="Elevador de escadas instalado numa escada curva"
              className="w-full h-[320px] md:h-[400px] object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TesteSolution;
