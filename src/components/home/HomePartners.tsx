import portugalMap from "@/assets/home/portugal-map.jpg";
import { Button } from "@/components/ui/button";

const HomePartners = () => {
  return (
    <section className="section-spacing">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-primary/10 text-primary font-heading font-semibold text-xs uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
              Instalações
            </span>
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4">
              Parceiros de confiança em todo o país
            </h2>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-6">
              No Vida Acessível, trabalhamos com parceiros experientes que
              realizam instalações em qualquer região de Portugal. Onde quer que
              esteja, garantimos profissionais qualificados e de confiança para
              tornar o seu lar mais acessível.
            </p>
            <Button variant="outline" size="lg" className="rounded-full">
              Saber mais
            </Button>
          </div>
          <div className="flex justify-center">
            <img
              src={portugalMap}
              alt="Mapa de Portugal com localizações de parceiros"
              className="w-64 md:w-80 rounded-2xl shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePartners;
